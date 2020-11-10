window.addEventListener("DOMContentLoaded", function(e){
     fetch("http://aguacate.dk/pension_data/wp-json/wp/v2/categories")
    .then(res => res.json())
    .then(showCategory)
})

function showCategory(cat) {
    /*document.querySelector(".category").textContent = cat.name;*/

  cat.forEach(showPost)



}

function showPost(post){
    console.log(post.name)

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent = post.name;

    document.querySelector(".categories").appendChild(copy);

    const x = document.querySelector(".toggle").addEventListener("click", function(e){
        console.log("hi")
    })
    console.log(x);


}

