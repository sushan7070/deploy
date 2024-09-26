import {
    addProduct,
    deleteProduct,
    getProduct,
    getProductDetail,
    updateProduct,
} from "../controllers/productControllers.js";
import express from "express";

const router = express.Router();

router.route("/").get(getProduct);
router.route("/add").post(addProduct);
router.route("/update").put(updateProduct);
router.route("/:id").delete(deleteProduct).get(getProductDetail);

export default router;
