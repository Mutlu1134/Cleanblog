const getAboutPage = (req, res) => {
    res.render('../view/about.ejs');
};

const getAddPostPage = (req, res) => {
	res.render('../view/add_post.ejs'); 
}

export default {
    getAboutPage,
    getAddPostPage
}