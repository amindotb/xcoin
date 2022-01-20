import mongoose from "../connections/mongodb";

declare module 'joi' {
  export interface Root {
    objectId?: any;
  }
}

declare module "express-serve-static-core" {
  export interface Response {
    onSuccess(data?: any, message?:string): this;
    onBadRequest(data?: any, message?:string): this;
    onNotFound(data?: any, message?:string): this;
    onServerError(data?: any, message?:string): this;
  }
}


export interface IFavorite {
  profile: mongoose.Types.ObjectId;
  name: string;
  favorites: string[];
}

export interface IProfile {
  name: string;
  nickname: string;
  email: string;
  capital: number;
  divisa: string;
  preferredCryptocurrency: string;
}

export interface ISimulator {
  profile: mongoose.Types.ObjectId;
  dateRecorded: Date;
  cryptocurrency: string;
  euros: number;
  price: number;
  quantity: number;
}