import React, { useState, useEffect } from "react";
import { StreamAlbumCoverRequest } from "../proto/songs_pb.js";
import { SongServiceClient } from "../proto/SongsServiceClientPb.ts";

const client = new SongServiceClient("http://localhost:8083", null, null);

const AlbumCover = ({ albumCoverId }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchAlbumCover = async () => {
      const request = new StreamAlbumCoverRequest();
      request.setAlbumCoverId(albumCoverId);

      const reader = client.streamAlbumCover(request);

      let chunks = [];
      reader.on("data", (response) => {
        chunks.push(response.getChunk());
      });

      reader.on("end", () => {
        const blob = new Blob(chunks, { type: "image/jpeg" });
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      });

      reader.on("error", (err) => {
        console.error("Error fetching album cover:", err);
      });
    };

    fetchAlbumCover();
  }, [albumCoverId]);

  return (
    <div>
      {imageSrc ? <img src={imageSrc} alt="Album Cover" /> : <p>Loading...</p>}
    </div>
  );
};

export default AlbumCover;
