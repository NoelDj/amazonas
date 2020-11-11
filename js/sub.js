window.addEventListener("DOMContentLoaded", getData)
/*http://aguacate.dk/pension_data/wp-json/wp/v2/categories*/
const datalink = "http://aguacate.dk/pension_data/wp-json/wp/v2/pension?_embed";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    const house_id = urlParams.get("house_id");
    console.log(house_id)

    if (house_id) {
        fetch("http://aguacate.dk/pension_data/wp-json/wp/v2/pension/" + house_id + "?_embed")
            .then(res => res.json())
            .then(showPost)
    } /*else if (!house_id && window.location.pathname == "/subpage.html") {
        window.location.replace("index.html");
    }*/

}

function showPost(post) {
    console.log(post)

    /*const template = document.querySelector("template").content;
    const copy = template.cloneNode(true)*/;

    document.querySelector("h2").textContent = post.title.rendered;

    /*const a = copy.querySelector("a");
    a.href += post.id;*/


   /* document.querySelector("main").appendChild(copy);*/




}


