import mongoose from "../connections/mongodb";


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
    preferred_cryptocurrency: string;
}

export interface ISimulator {
    profile: mongoose.Types.ObjectId;
    dateRecorded: Date;
    cryptocurrency: string;
    euros: number;
    price: number;
    quantity: number;
}