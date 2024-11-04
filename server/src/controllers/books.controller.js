import { uploadRouter } from "../config/uploadthing.js";

import Book from "../models/book.model.js";
export const getBooks = async (req, res) => {
  try {
    const { title, author,  page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 20;

    const query = {};
    if (title) query.title = { $regex: title, $options: "i" };
    if (author) query.author = { $regex: author, $options: "i" };

    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({ success: true, books });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}
export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById({ _id: id });
    if (!book) {
      return res.status(404).json({ success: false, message: "Book not found" });
    }
    res.status(200).json({ success: true, book });
  }
  catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}
export const getBooksCount = async (req, res) => {
  try {
    const count = await Book.countDocuments();
    res.status(200).json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}
export const getBooksByBranch = async (req, res) => {
  try {
    const { branch } = req.query;
    const books = await Book.find({ branch });
    res.status(200).json({ success: true, books });
  }
  catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}
export const createBook = async (req, res) => {
try {

  const { title, author, publishedDate, branch, pages,summary } = req.body;
  console.log(req.files,uploadRouter.pdfUploader)
  const pdfUpload = await uploadRouter.pdfUploader(req.files.pdf);
  const coverImageUpload = await uploadRouter.imageUploader(req.files.coverImage);
  const book = await Book.create({
    title,
    author,
    publishedDate: publishedDate || Date.now(),
    branch: Array.isArray(branch) ? branch : [branch],
    pages: parseInt(pages),
    summary,
    pdfURL: pdfUpload.url,
    coverImageURL: coverImageUpload.url,
    uploadedBy: req.userId
  });
  await book.save();
  res.status(201).json({
    success: true,
    data: book
  });
}catch(e){
  console.log(e)
  res.status(500).json({ success: false, message: "Server error" });
}
}
export const updateBook = async (req, res) => {
try {
  const bookId = req.params.id;
  const updateData = { ...req.body };


  if (req.files?.pdf) {
    const pdfUpload = await uploadRouter.pdfUploader.upload(req.files.pdf);
    updateData.pdfURL = pdfUpload.url;
  }

  if (req.files?.coverImage) {
    const coverImageUpload = await uploadRouter.imageUploader.upload(req.files.coverImage);
    updateData.coverImageURL = coverImageUpload.url;
  }

  const book = await Book.findByIdAndUpdate(
    bookId,
    updateData,
    { new: true }
  );

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

   return res.status(200).json({
    success: true,
    data: book
  });
}
 catch (error) {
  console.error("Error in updateBook:", error);
  res.status(500).json({
    success: false,
    message: "Error updating book"
  });
}
}
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully"
    });
  } catch (error) {
    console.error("Error in deleteBook:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting book"
    });
  }
};



