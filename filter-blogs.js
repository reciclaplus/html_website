function create_element() {

    var url = "https://reciclaplus.github.io/blog-posts/all-blogs.json"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for (post of data.blogs) {

        var main = document.getElementById("main");
        var row = document.createElement("div");
        main.appendChild(row).className = "row m-1 my-3 border rounded shadow-sm blog-post-item " + post.tags.join(" ");
        var textCol = document.createElement("div");
        row.appendChild(textCol).className = "col-lg-7 m-3";

        var heading = document.createElement("h2");
        textCol.appendChild(heading);
        heading.innerHTML = post.title;

        for (tag of post.tagsLabels){
            var tagElement = document.createElement("button");
            textCol.appendChild(tagElement).className = "btn btn-outline-secondary my-2 mr-1";
            tagElement.innerHTML = tag;
        }
        console.log(textCol.appendChild(tagElement).className)
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
                console.log(post)
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
