var blog_1 = "nini-manolo-agustin"
var blog_2 = "primera-semana"
var blog_3 = "bienvenidos"

if (window.location.href.startsWith("https:")) {    
    var url = "https://reciclaplus.com/blog-posts/all-blogs.json"
}
else {
    var url = "http://reciclaplus.com/blog-posts/all-blogs.json"
}

fetch(url)
.then(response => response.json())
.then(data => {
    for (post of data.blogs) {
        if (post.filename == blog_1) {
            var blog_1_title = document.getElementById("blog-1-title");
            blog_1_title.innerHTML = post.title

            var blog_1_summary = document.getElementById("blog-1-summary");
            blog_1_summary.innerHTML = post.summary

            var blog_1_img = document.getElementById("blog-1-img")
            blog_1_img.src = post.img

            blog_1_link = document.getElementById("blog-1-link")
            blog_1_link.href = "blog-posts/" + post.year + "/" + post.month + "/" + post.filename + "/" + post.filename + ".html"
        }
        if (post.filename == blog_2) {
            var blog_2_title = document.getElementById("blog-2-title");
            blog_2_title.innerHTML = post.title

            var blog_2_date = document.getElementById("blog-2-date");
            blog_2_date.innerHTML = post.date

            var blog_2_summary = document.getElementById("blog-2-summary");
            blog_2_summary.innerHTML = post.summary

            var blog_2_img = document.getElementById("blog-2-img")
            blog_2_img.src = post.img

            blog_2_link = document.getElementById("blog-2-link")
            blog_2_link.href = "blog-posts/" + post.year + "/" + post.month + "/" + post.filename + "/" + post.filename + ".html"

        }
        if (post.filename == blog_3) {
            var blog_3_title = document.getElementById("blog-3-title");
            blog_3_title.innerHTML = post.title

            var blog_3_date = document.getElementById("blog-3-date");
            blog_3_date.innerHTML = post.date

            var blog_3_summary = document.getElementById("blog-3-summary");
            blog_3_summary.innerHTML = post.summary

            var blog_3_img = document.getElementById("blog-3-img")
            blog_3_img.src = post.img

            blog_3_link = document.getElementById("blog-3-link")
            blog_3_link.href = "blog-posts/" + post.year + "/" + post.month + "/" + post.filename + "/" + post.filename + ".html"
        }
    }
})