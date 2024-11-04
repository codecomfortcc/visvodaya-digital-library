import {Router} from 'express';
import {getBooks, getBook, createBook, deleteBook} from '../controllers/library.controller.js';
import {verifyToken} from '../middlewares/verify-token.js';
const router = Router();
router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', verifyToken, createBook);
router.delete('/:id', verifyToken, deleteBook);

export default router;
