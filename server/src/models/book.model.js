import {Schema,model} from 'mongoose';

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  publishedDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  branch: {
    type: [String],
    enum: ['Computer Science', 'Electronics', 'Electrical', 'Mechanical', 'Civil', 'Chemical', 'Bio-Technology', 'Others'],
    required: true,
  },
  pages: {
    type: Number,
    required: true,
    min: 1
  },
  summary: {
    type: String,
    trim: true
  },
  pdfURL: {
    type: String,
    required: true
  },
  coverImageURL: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Book = model('Book', bookSchema);

export default Book;
