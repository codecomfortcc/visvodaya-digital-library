import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import AuthRoutes from "./routes/auth.routes.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import db from "./config/db.js";
import BookRoutes from "./routes/book.routes.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
// load static files
app.use(express.static(path.join(__dirname, "..", "..", "client")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "pages", "index.html")
  );
});
app.get("/dashboard", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "pages", "dashboard.html")
  );
});
app.get("/auth", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "pages", "auth.html")
  );
});
app.get("/books", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "pages", "books.html")
  );
});
app.get("/books/:id", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "pages", "books.html")
  );
});
app.get("/library", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "pages", "library.html")
  );
});
app.get("/contact", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "pages", "contact.html")
  );
});
app.use("/api/auth", AuthRoutes);
app.use('/api/books', BookRoutes);
app.listen(process.env.PORT || 3000, async () => {
  await db();
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
