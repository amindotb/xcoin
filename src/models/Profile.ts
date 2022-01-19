import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // nickname: {
    //   type: String,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    // },
    // capital: {
    //   type: Number,
    //   required: true,
    // },
    // divisa: {
    //   type: String,
    //   required: true,

    // },
    // preferred_cryptocurrency: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

export const Profile = mongoose.model("Profile", schema);
