import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { APP_URL } from "../config";
const productSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        size: { type: String, required: true },
        image: {
            type: String,
            required: true,
            get: (image) => {
                return `${APP_URL}/${image}`;
            },
        },
    },
    { timestamps: true, toJSON: { getters: true }, _id: false }
);

export default mongoose.model("Product", productSchema, "products");
