import React, { useCallback, useState } from "react";
import "./styles.css";
import { SongServiceClient } from "../proto/SongsServiceClientPb.ts";
import { UploadSongRequest } from "../proto/songs_pb.js";
import StreamSong from "../StreamSong/StreamSong";
import AlbumCover from "../AlbumCover/AlbumCover";

const client = new SongServiceClient("http://localhost:8083", null, null);

const UploadSong = () => {
  const [songFile, setFile] = useState(null);
  const [albumCover, setAlbumCover] = useState(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [description, setDescription] = useState("");
  const [songId, setSongId] = useState("");
  const [albumCoverId, setAlbumCoverId] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAlbumCoverChange = (e) => {
    setAlbumCover(e.target.files[0]);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log(client);
      const songFileBuffer = await fileToUint8Array(songFile);
      const albumCoverBase64 = albumCover
        ? await readFileAsBase64(albumCover)
        : "";

      const request = new UploadSongRequest();

      request.setTitle(title);
      request.setArtist(artist);
      request.setAlbum(album);
      request.setDescription(description);
      request.setUploadedBy("1");
      request.setSongFile(songFileBuffer);
      request.setAlbumCover(albumCoverBase64);
      client.uploadSong(request, {}, (err, response) => {
        console.log(response);
        if (err) {
          console.error("Upload failed:", err);
          alert("Upload failed");
          return;
        }
        alert("Upload successful");
        setSongId(response.getSongId());
        console.log(songId);
        setAlbumCoverId(response.getCoverId());
        console.log(albumCoverId);
      });
    },
    [songFile, albumCover, title, artist, album, description]
  );

  const fileToUint8Array = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(new Uint8Array(reader.result));
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="reg-container">
      <h1 className="reg-title">Upload Song</h1>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="reg-form"
      >
        {/* Form fields */}
        <div className="input-control">
          <label className="reg-label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="reg-input"
            placeholder="Song Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-control">
          <label className="reg-label" htmlFor="artist">
            Artist
          </label>
          <input
            type="text"
            name="artist"
            value={artist}
            className="reg-input"
            placeholder="Artist Name"
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div className="input-control">
          <label className="reg-label" htmlFor="album">
            Album
          </label>
          <input
            type="text"
            name="album"
            value={album}
            className="reg-input"
            placeholder="Album"
            onChange={(e) => setAlbum(e.target.value)}
            required
          />
        </div>
        <div className="input-control">
          <label className="reg-label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={description}
            className="reg-input"
            placeholder="This song is about..."
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="input-control">
          <label htmlFor="audioFile" className="reg-label">
            Audio File
          </label>
          <input
            className="reg-input"
            onChange={handleFileChange}
            type="file"
            name="file"
            accept="audio/*"
            required
          />
        </div>
        <div className="input-control">
          <label htmlFor="albumCover" className="reg-label">
            Album Cover
          </label>
          <input
            className="reg-input"
            onChange={handleAlbumCoverChange}
            type="file"
            name="albumCover"
            accept="image/*"
            required
          />
        </div>
        <div className="upload-songs__btn">
          <button className="reg-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <StreamSong songFileId={songId} />
      {songId && <AlbumCover albumCoverId={albumCoverId} />}
    </div>
  );
};

export default UploadSong;
