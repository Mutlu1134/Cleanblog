import Post from "../models/Post.js";
const getAllPosts = async (req, res) => {
	// console.log(Post.find({}));
	const posts = await Post.find({});
	res.render('../view/index.ejs', {
		posts,
	}); // index.ejs dosyasına posts collection'ı de göndermek
} 

const updatePost = async (req, res) => {
	let post = await Post.findById(req.params.id)
	post.title = req.body.title;
	post.detail = req.body.detail;
	post.save()
		.then(
			()=> {console.log("Saved!");} // kaydedilirse ekrana bilgi ver
		)
		.catch(
			(err)=>{
				console.log(err); // kaydedilmezse hatayı yazdır.
			}
		)
	res.redirect("/")
}

const deletePost = async (req, res) => {
	await Post.findByIdAndRemove(req.params.id)
	res.redirect("/")
}

const getClickedPost = async (req, res) => {
	//console.log(req.params.id); // tıklanan id'yi console'da görme denemesi
	const clickedpost = await Post.findById(req.params.id)
	res.render('../view/post.ejs', {
		clickedpost,
	}); // post.ejs dosyasına tıklanan id'i ile ilişkili bilgileri göndermek
}

const createPost = async (req, res) => {
	// asenkron yapmak için async await yapmamız lazım
	// console.log(req.body); // yalnızca konsolda görüp deneme yapmak için kullanılabilir.
	await Post.create(req.body); // post edilen formdaki title ve description ve diğer img vs. veritabanına ekleniyor.
	res.redirect('/'); // req-res döngüsünü sonlandırmak için anasayfaya redirect ettik.
}

export default {
    getAllPosts,
    updatePost,
    deletePost,
    getClickedPost,
    createPost
}