import "./App.css";

import UploadSong from "./UploadSong/UploadSong";
import { useEffect, useState } from "react";
import { SongServiceClient } from "./proto/SongsServiceClientPb.ts";
import { GetAllSongsRequest, GetUserSongsRequest } from "./proto/songs_pb.js";
import UpdateSong from "./UpdateSong/UpdateSong";
import DeleteSong from "./DeleteSong/DeleteSong";

const client = new SongServiceClient("http://localhost:8083", null, null);

function App() {
  const [songs, setSongs] = useState([]);
  const getUserSongs = () => {
    const request = new GetUserSongsRequest();
    request.setUserId("1");

    client.getUserSongs(request, {}, (err, response) => {
      if (err) {
        console.error("Failed to get user songs:", err);
        alert("Failed to retrieve songs");
        return;
      }

      const fetchedSongs = response.getSongsList();

      const songsData = fetchedSongs.map((song) => {
        const songData = song.u;
        return {
          _id: songData[0],
          title: songData[1],
          artist: songData[2],
          album: songData[3],
          description: songData[4],
          uploadedBy: songData[5],
          songFileID: songData[6],
          albumCoverID: songData[7],
        };
      });

      setSongs(songsData);
    });
  };

  const getAllSongs = () => {
    const request = new GetAllSongsRequest();

    client.getAllSongs(request, {}, (err, response) => {
      if (err) {
        console.error("Failed to get all songs:", err);
        alert("Failed to retrieve songs");
        return;
      }
      const fetchedSongs = response.getSongsList();

      const songsData = fetchedSongs.map((song) => {
        const songData = song.u;
        return {
          _id: songData[0],
          title: songData[1],
          artist: songData[2],
          album: songData[3],
          description: songData[4],
          uploadedBy: songData[5],
          songFileID: songData[6],
          albumCoverID: songData[7],
        };
      });

      console.log("Fetched songs:", songsData);
    });
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  return (
    <div className="App">
      <UploadSong />
      <button onClick={getUserSongs}>GetUser Songs</button>
      <button onClick={getAllSongs}>Get All Songs</button>
      <UpdateSong />
      <DeleteSong
        songId={"66c1e8cdaa3fb4b00ac348f1"}
        songFileId={"66c1e8cd32291f5722d997ed"}
        albumCoverId={"66c1e8cd32291f5722d997ee"}
      />
    </div>
  );
}

export default App;
