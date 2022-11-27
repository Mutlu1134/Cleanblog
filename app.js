import express from "express";
import mongoose from "mongoose";
import Post from "./models/Post.js";
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

//ROUTING
app.get('/', async (req, res) => {
	console.log(Post.find({}));
	const posts = await Post.find({});
	res.render('../view/index.ejs', {
		posts,
	}); // index.ejs dosyasına posts collection'ı de göndermek
}); 
app.get('/index', async (req, res) => {
	const posts = await Post.find({});
	res.render('../view/index.ejs', {
		posts,
	}); // index.ejs dosyasına posts collection'ı de göndermek
});
app.get('/about', (req, res) => {
	res.render('../view/about.ejs'); 
});
app.get('/add_post', (req, res) => {
	res.render('../view/add_post.ejs'); 
});


app.post('/Post', async (req, res) => {
	// asenkron yapmak için async await yapmamız lazım
	// console.log(req.body); // yalnızca konsolda görüp deneme yapmak için kullanılabilir.
	await Post.create(req.body); // post edilen formdaki title ve description ve diğer img vs. veritabanına ekleniyor.
	res.redirect('/'); // req-res döngüsünü sonlandırmak için anasayfaya redirect ettik.
});