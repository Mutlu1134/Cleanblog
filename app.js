import express from "express";
const app = express();
const port = 8000;

app.listen(port, () => {
	console.log(`Server has been started on ${port} port`);
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));

//ROUTING
app.get('/', (req, res) => {
	res.render('../view/index.ejs'); 
});
app.get('/index', (req, res) => {
	res.render('../view/index.ejs'); 
});
app.get('/about', (req, res) => {
	res.render('../view/about.ejs'); 
});
app.get('/post', (req, res) => {
	res.render('../view/post.ejs'); 
});
app.get('/add_post', (req, res) => {
	res.render('../view/add_post.ejs'); 
});