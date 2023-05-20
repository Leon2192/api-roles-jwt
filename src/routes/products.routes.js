import * as productController from '../controllers/products.controller';

import { Router } from "express";
import { authJwt } from '../middlewares';
import { verifyToken } from '../middlewares/authJwt';

const router = Router();

router.get('/', productController.getProducts);

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productController.createProduct);

router.get('/:productId', productController.getProductById);

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productController.updateProductById);

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productController.deleteProductById);

export default router;