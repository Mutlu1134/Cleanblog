import express from "express";
import mongoose from "mongoose";
import Post from "./models/Post.js";
import methodOverride from "method-override";
import pageController from "./controllers/pageController.js";
import postController from "./controllers/postController.js";

const app = express();
const port = 8000;

// SERVER RES/REQ DİNLEMESİ İÇİN
app.listen(port, () => {
	console.log(`Server has been started on ${port} port`);
});

// DATABASE BAĞLANTISI
mongoose.connect("mongodb://localhost/clean-blog-db")

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods : [ 'POST', 'GET']}));

//ROUTING
app.get('/', postController.getAllPosts); 
app.get('/index', postController.getAllPosts);
app.put("/post/update/:id", postController.updatePost); 
app.delete("/post/delete/:id", postController.deletePost); 
app.get('/post/:id', postController.getClickedPost);
app.post('/Post', postController.createPost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
