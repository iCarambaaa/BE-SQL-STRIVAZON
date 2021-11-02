import express from "express";
import products from "./products.js";
import reviews from "./reviews.js";
import uploadProductImageToCloud from "../lib/imageHandler.js";


const router = express.Router();

router.get("/", products.getAllProducts);
router.post("/", products.createNewProduct);

router.route("/:id")
.get(products.getProductById)
.put(products.updateProductById)
.delete(products.deleteProductById)

router.route("/:id/cover")
.post(uploadProductImageToCloud, products.updateProductImageURL)

router.route("/:id/reviews")
.get(reviews.getReviews)
.post(reviews.postNewReview);

router.route("/:id/reviews/:reviewId")
.put(reviews.updateReviewById)
.delete(reviews.deleteReviewById)

export default router;