import * as jspb from 'google-protobuf'



export class UploadSongRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): UploadSongRequest;

  getArtist(): string;
  setArtist(value: string): UploadSongRequest;

  getAlbum(): string;
  setAlbum(value: string): UploadSongRequest;

  getDescription(): string;
  setDescription(value: string): UploadSongRequest;

  getUploadedBy(): string;
  setUploadedBy(value: string): UploadSongRequest;

  getSongFile(): Uint8Array | string;
  getSongFile_asU8(): Uint8Array;
  getSongFile_asB64(): string;
  setSongFile(value: Uint8Array | string): UploadSongRequest;

  getAlbumCover(): Uint8Array | string;
  getAlbumCover_asU8(): Uint8Array;
  getAlbumCover_asB64(): string;
  setAlbumCover(value: Uint8Array | string): UploadSongRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadSongRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadSongRequest): UploadSongRequest.AsObject;
  static serializeBinaryToWriter(message: UploadSongRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadSongRequest;
  static deserializeBinaryFromReader(message: UploadSongRequest, reader: jspb.BinaryReader): UploadSongRequest;
}

export namespace UploadSongRequest {
  export type AsObject = {
    title: string,
    artist: string,
    album: string,
    description: string,
    uploadedBy: string,
    songFile: Uint8Array | string,
    albumCover: Uint8Array | string,
  }
}

export class UploadSongResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UploadSongResponse;

  getStatus(): string;
  setStatus(value: string): UploadSongResponse;

  getSongId(): string;
  setSongId(value: string): UploadSongResponse;

  getCoverId(): string;
  setCoverId(value: string): UploadSongResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadSongResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadSongResponse): UploadSongResponse.AsObject;
  static serializeBinaryToWriter(message: UploadSongResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadSongResponse;
  static deserializeBinaryFromReader(message: UploadSongResponse, reader: jspb.BinaryReader): UploadSongResponse;
}

export namespace UploadSongResponse {
  export type AsObject = {
    message: string,
    status: string,
    songId: string,
    coverId: string,
  }
}

export class StreamSongFileRequest extends jspb.Message {
  getSongFileId(): string;
  setSongFileId(value: string): StreamSongFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSongFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSongFileRequest): StreamSongFileRequest.AsObject;
  static serializeBinaryToWriter(message: StreamSongFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSongFileRequest;
  static deserializeBinaryFromReader(message: StreamSongFileRequest, reader: jspb.BinaryReader): StreamSongFileRequest;
}

export namespace StreamSongFileRequest {
  export type AsObject = {
    songFileId: string,
  }
}

export class StreamSongFileResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): StreamSongFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSongFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSongFileResponse): StreamSongFileResponse.AsObject;
  static serializeBinaryToWriter(message: StreamSongFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSongFileResponse;
  static deserializeBinaryFromReader(message: StreamSongFileResponse, reader: jspb.BinaryReader): StreamSongFileResponse;
}

export namespace StreamSongFileResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class StreamAlbumCoverRequest extends jspb.Message {
  getAlbumCoverId(): string;
  setAlbumCoverId(value: string): StreamAlbumCoverRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAlbumCoverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAlbumCoverRequest): StreamAlbumCoverRequest.AsObject;
  static serializeBinaryToWriter(message: StreamAlbumCoverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAlbumCoverRequest;
  static deserializeBinaryFromReader(message: StreamAlbumCoverRequest, reader: jspb.BinaryReader): StreamAlbumCoverRequest;
}

export namespace StreamAlbumCoverRequest {
  export type AsObject = {
    albumCoverId: string,
  }
}

export class StreamAlbumCoverResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): StreamAlbumCoverResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAlbumCoverResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAlbumCoverResponse): StreamAlbumCoverResponse.AsObject;
  static serializeBinaryToWriter(message: StreamAlbumCoverResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAlbumCoverResponse;
  static deserializeBinaryFromReader(message: StreamAlbumCoverResponse, reader: jspb.BinaryReader): StreamAlbumCoverResponse;
}

export namespace StreamAlbumCoverResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class SongMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): SongMetadata;

  getTitle(): string;
  setTitle(value: string): SongMetadata;

  getArtist(): string;
  setArtist(value: string): SongMetadata;

  getAlbum(): string;
  setAlbum(value: string): SongMetadata;

  getDescription(): string;
  setDescription(value: string): SongMetadata;

  getUploadedby(): string;
  setUploadedby(value: string): SongMetadata;

  getSongfileid(): string;
  setSongfileid(value: string): SongMetadata;

  getAlbumcoverid(): string;
  setAlbumcoverid(value: string): SongMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SongMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SongMetadata): SongMetadata.AsObject;
  static serializeBinaryToWriter(message: SongMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SongMetadata;
  static deserializeBinaryFromReader(message: SongMetadata, reader: jspb.BinaryReader): SongMetadata;
}

export namespace SongMetadata {
  export type AsObject = {
    id: string,
    title: string,
    artist: string,
    album: string,
    description: string,
    uploadedby: string,
    songfileid: string,
    albumcoverid: string,
  }
}

export class GetUserSongsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetUserSongsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSongsRequest): GetUserSongsRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSongsRequest;
  static deserializeBinaryFromReader(message: GetUserSongsRequest, reader: jspb.BinaryReader): GetUserSongsRequest;
}

export namespace GetUserSongsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserSongsResponse extends jspb.Message {
  getSongsList(): Array<SongMetadata>;
  setSongsList(value: Array<SongMetadata>): GetUserSongsResponse;
  clearSongsList(): GetUserSongsResponse;
  addSongs(value?: SongMetadata, index?: number): SongMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSongsResponse): GetUserSongsResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSongsResponse;
  static deserializeBinaryFromReader(message: GetUserSongsResponse, reader: jspb.BinaryReader): GetUserSongsResponse;
}

export namespace GetUserSongsResponse {
  export type AsObject = {
    songsList: Array<SongMetadata.AsObject>,
  }
}

export class GetAllSongsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSongsRequest): GetAllSongsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSongsRequest;
  static deserializeBinaryFromReader(message: GetAllSongsRequest, reader: jspb.BinaryReader): GetAllSongsRequest;
}

export namespace GetAllSongsRequest {
  export type AsObject = {
  }
}

export class GetAllSongsResponse extends jspb.Message {
  getSongsList(): Array<SongMetadata>;
  setSongsList(value: Array<SongMetadata>): GetAllSongsResponse;
  clearSongsList(): GetAllSongsResponse;
  addSongs(value?: SongMetadata, index?: number): SongMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSongsResponse): GetAllSongsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSongsResponse;
  static deserializeBinaryFromReader(message: GetAllSongsResponse, reader: jspb.BinaryReader): GetAllSongsResponse;
}

export namespace GetAllSongsResponse {
  export type AsObject = {
    songsList: Array<SongMetadata.AsObject>,
  }
}

export class UpdateSongMetadataRequest extends jspb.Message {
  getSongId(): string;
  setSongId(value: string): UpdateSongMetadataRequest;

  getTitle(): string;
  setTitle(value: string): UpdateSongMetadataRequest;

  getArtist(): string;
  setArtist(value: string): UpdateSongMetadataRequest;

  getAlbum(): string;
  setAlbum(value: string): UpdateSongMetadataRequest;

  getDescription(): string;
  setDescription(value: string): UpdateSongMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSongMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSongMetadataRequest): UpdateSongMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSongMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSongMetadataRequest;
  static deserializeBinaryFromReader(message: UpdateSongMetadataRequest, reader: jspb.BinaryReader): UpdateSongMetadataRequest;
}

export namespace UpdateSongMetadataRequest {
  export type AsObject = {
    songId: string,
    title: string,
    artist: string,
    album: string,
    description: string,
  }
}

export class UpdateSongMetadataResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UpdateSongMetadataResponse;

  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateSongMetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSongMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSongMetadataResponse): UpdateSongMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSongMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSongMetadataResponse;
  static deserializeBinaryFromReader(message: UpdateSongMetadataResponse, reader: jspb.BinaryReader): UpdateSongMetadataResponse;
}

export namespace UpdateSongMetadataResponse {
  export type AsObject = {
    message: string,
    success: boolean,
  }
}

export class DeleteSongRequest extends jspb.Message {
  getSongId(): string;
  setSongId(value: string): DeleteSongRequest;

  getSongFileId(): string;
  setSongFileId(value: string): DeleteSongRequest;

  getAlbumCoverId(): string;
  setAlbumCoverId(value: string): DeleteSongRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSongRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSongRequest): DeleteSongRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSongRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSongRequest;
  static deserializeBinaryFromReader(message: DeleteSongRequest, reader: jspb.BinaryReader): DeleteSongRequest;
}

export namespace DeleteSongRequest {
  export type AsObject = {
    songId: string,
    songFileId: string,
    albumCoverId: string,
  }
}

export class DeleteSongResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): DeleteSongResponse;

  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteSongResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSongResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSongResponse): DeleteSongResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSongResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSongResponse;
  static deserializeBinaryFromReader(message: DeleteSongResponse, reader: jspb.BinaryReader): DeleteSongResponse;
}

export namespace DeleteSongResponse {
  export type AsObject = {
    message: string,
    success: boolean,
  }
}

