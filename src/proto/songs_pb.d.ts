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
  }
}

export class GetSongRequest extends jspb.Message {
  getSongId(): string;
  setSongId(value: string): GetSongRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongRequest): GetSongRequest.AsObject;
  static serializeBinaryToWriter(message: GetSongRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongRequest;
  static deserializeBinaryFromReader(message: GetSongRequest, reader: jspb.BinaryReader): GetSongRequest;
}

export namespace GetSongRequest {
  export type AsObject = {
    songId: string,
  }
}

export class GetSongResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): GetSongResponse;

  getArtist(): string;
  setArtist(value: string): GetSongResponse;

  getAlbum(): string;
  setAlbum(value: string): GetSongResponse;

  getDescription(): string;
  setDescription(value: string): GetSongResponse;

  getUploadedBy(): string;
  setUploadedBy(value: string): GetSongResponse;

  getSongFileId(): string;
  setSongFileId(value: string): GetSongResponse;

  getAlbumCoverId(): string;
  setAlbumCoverId(value: string): GetSongResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongResponse): GetSongResponse.AsObject;
  static serializeBinaryToWriter(message: GetSongResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongResponse;
  static deserializeBinaryFromReader(message: GetSongResponse, reader: jspb.BinaryReader): GetSongResponse;
}

export namespace GetSongResponse {
  export type AsObject = {
    title: string,
    artist: string,
    album: string,
    description: string,
    uploadedBy: string,
    songFileId: string,
    albumCoverId: string,
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

