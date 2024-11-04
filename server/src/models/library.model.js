import mongoose from "mongoose";

const librarySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    books: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    }]
  },
  { timestamps: true }
);

export const Library = mongoose.model("Library", librarySchema);
