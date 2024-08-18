import React, { useState, useEffect } from "react";
import { SongServiceClient } from "../proto/SongsServiceClientPb.ts";
import { StreamSongFileRequest } from "../proto/songs_pb.js";

const client = new SongServiceClient("http://localhost:8083", null, null);

const StreamSong = ({ songFileId }) => {
  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    const streamSong = async () => {
      const request = new StreamSongFileRequest();
      request.setSongFileId(songFileId);

      const audioChunks = [];
      const stream = client.streamSongFile(request, {});

      stream.on("data", (response) => {
        // Store the incoming chunks of the song in an array.
        audioChunks.push(response.getChunk());
      });

      stream.on("end", () => {
        // Once all chunks are received, combine them into a Blob.
        const blob = new Blob(audioChunks, { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        console.log(audioUrl);
      });

      stream.on("error", (err) => {
        console.error("Error streaming song:", err);
      });
    };

    if (songFileId) {
      streamSong();
    }
  }, [songFileId]);

  return (
    <div>
      {audioUrl ? (
        <audio controls src={audioUrl}>
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Loading song...</p>
      )}
    </div>
  );
};

export default StreamSong;
