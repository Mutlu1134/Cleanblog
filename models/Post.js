import mongoose from "mongoose";

// Schema Ekleme
const PostSchema = new mongoose.Schema({
	title: String,
	detail: String,
    dateCreated: {
		// Veritabanına girilen zamanı default olarak tutar
		type: Date,
		default: Date.now,
	},
});

// Schemayı baz alarak model oluşturuyoruz.
const Post = mongoose.model("Post", PostSchema)

// Export ediyoruz.
export default Post