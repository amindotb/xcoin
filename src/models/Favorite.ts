import mongoose from "../connections/mongodb";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    favorites: [{
      type: String,
      required: true,
    }],
  },
  {
    timestamps: true,
  }
);

export const Favorite = mongoose.model("Favorite", schema);
