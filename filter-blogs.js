function create_element() {
    console.log(window.location.href)
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

        var main = document.getElementById("main");
        var row = document.createElement("div");
        main.appendChild(row).className = "row m-1 my-3 border rounded shadow-sm blog-post-item " + post.tags.join(" ") + " " + post.month + "-" + post.year;
        var textCol = document.createElement("div");
        row.appendChild(textCol).className = "col-lg-7 m-3";

        var heading = document.createElement("h2");
        textCol.appendChild(heading);
        heading.innerHTML = post.title;

        var tagElement = document.createElement("p");
        textCol.appendChild(tagElement).className = "d-inline-block mb-2 text-success";
        tagElement.innerHTML = post.tagsLabels.join(" | ");

        var text = document.createElement("p");
        textCol.appendChild(text);
        text.innerHTML = post.summary;

        var link = document.createElement("a");
        textCol.appendChild(link).className = "stretched-link";
        link.href = "blog-posts/" + post.year + "/" + post.month + "/" + post.filename + "/" + post.filename + ".html"
        link.innerHTML = "Continua leyendo"

        var imgCol = document.createElement("div");
        row.appendChild(imgCol).className = "col-lg-4 my-auto";

        var img = document.createElement("img");
        img.src = post.img;
        img.style.maxWidth = "100%";
        imgCol.appendChild(img);
        }
    })   
    .then(element => make_selection())
    
}



function set_title(title){

    var title_element = document.getElementById("page-title")
    
    if (title != null) {
        title_element.innerHTML = title
    }
}

function filter_blog_posts (selection) {

    var all_posts = document.getElementsByClassName("blog-post-item");

    for (post of all_posts) {
        if (selection != "all"){
            if (post.classList.contains(selection)){
                
            }
            else{
                post.style.display = "none"
            }
        }
        else{
            post.style.display = ""
        }
    }
}

function make_selection() {

    let url_str = window.location.href

    let url = new URL(url_str);
    let search_params = url.searchParams; 
    
    var title_text = search_params.get('title');
    
    var selection_tag = search_params.get('selection');

    set_title(title_text)
    filter_blog_posts(selection_tag)

}

create_element();
