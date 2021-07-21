const mongoose = require("mongoose");
const slugify = require("slugify");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title."],
      unique: true,
      trim: true,
      maxlength: [50, "Book title cannot exceed 50 characters."],
    },
    slug: String,
    published: { type: Boolean, default: false },
    subtitle: {
      type: String,
      required: [true, "Please add a subtitle."],
      trim: true,
      maxlength: [50, "Book subtitle cannot exceed 50 characters."],
    },
    author: {
      type: String,
      required: [true, "Please add author."],
      trim: true,
    },
    isbn: {
      type: String,
      required: [true, "Please add isbn."],
      trim: true,
      maxlength: [13, "ISBN cannot exceed 13 characters."],
    },
  },
  {
    timestamps: true,
  }
);

BookSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("Book", BookSchema);
