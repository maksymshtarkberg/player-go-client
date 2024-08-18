import React, { useState } from "react";
import { SongServiceClient } from "../proto/SongsServiceClientPb.ts";
import { UpdateSongMetadataRequest } from "../proto/songs_pb.js";

const client = new SongServiceClient("http://localhost:8083", null, null);

const UpdateSong = () => {
  const [songId, setSongId] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [description, setDescription] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleUpdateMetadata = () => {
    const request = new UpdateSongMetadataRequest();
    request.setSongId(songId);
    request.setTitle(title);
    request.setArtist(artist);
    request.setAlbum(album);
    request.setDescription(description);

    client.updateSongMetadata(request, {}, (err, response) => {
      if (err) {
        console.error("Failed to update song metadata:", err);
        setResponseMessage("Failed to update song metadata");
        return;
      }

      setResponseMessage(response.getMessage());
    });
    console.log(responseMessage);
    console.log(title);
  };

  return (
    <div>
      <h2>Update Song Metadata</h2>
      <div>
        <label>
          Song ID:
          <input
            type="text"
            value={songId}
            onChange={(e) => setSongId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Artist:
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Album:
          <input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdateMetadata}>Update Metadata</button>
    </div>
  );
};

export default UpdateSong;
