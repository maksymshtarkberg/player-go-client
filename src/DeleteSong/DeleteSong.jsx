import { SongServiceClient } from "../proto/SongsServiceClientPb.ts";
import { DeleteSongRequest } from "../proto/songs_pb";

const client = new SongServiceClient("http://localhost:8083", null, null);

const DeleteSong = ({ songId, songFileId, albumCoverId }) => {
  const handleDeleteSong = () => {
    const request = new DeleteSongRequest();
    request.setSongId(songId);
    request.setSongFileId(songFileId);
    request.setAlbumCoverId(albumCoverId);

    client.deleteSong(request, {}, (err, response) => {
      if (err) {
        console.error("Error deleting song:", err);
        return;
      }

      const succsses = response.getSuccess();
      if (succsses) {
        const mess = response.getMessage();
        console.log(mess);
      } else {
        const mess = response.getMessage();
        console.error("Failed to delete song:", mess);
      }
    });
  };
  return (
    <>
      <button onClick={handleDeleteSong}>Delete song</button>
    </>
  );
};

export default DeleteSong;
