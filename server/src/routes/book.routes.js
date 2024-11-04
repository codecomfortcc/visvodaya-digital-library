import { Router } from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getBooksByBranch,
} from "../controllers/books.controller.js";
import { verifyToken } from "../middlewares/verify-token.js";
import { verifyAdmin } from "../middlewares/verify-admin.js";
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const router = Router();
router.get("/", getBooks);
router.get("/:id", getBook);
router.get("/branch", getBooksByBranch);
router.post(
  "/",
  verifyToken,
  verifyAdmin,
  upload.fields([
    { name: "pdf", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  createBook
);
router.put(
  "/:id",
  verifyToken,
  verifyAdmin,
  upload.fields([
    { name: "pdf", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  updateBook
);
router.delete("/:id", verifyToken, verifyAdmin, deleteBook);

export default router;
