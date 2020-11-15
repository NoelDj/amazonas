window.addEventListener("DOMContentLoaded", function (e) {
    fetch("http://aguacate.dk/pension_data/wp-json/wp/v2/categories")
        .then(res => res.json())
        .then(showCategory)
})

function showCategory(cat) {

    cat.forEach(showPost)



}

function showPost(post) {

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    const card = copy.querySelector("article");



    copy.querySelector("h3").textContent = post.name;
    const asidebar = document.querySelector('aside');



    card.addEventListener("click", function (e) {
        asidebar.classList.add("show");

        /*document.querySelector("#aside-name").textContent = post.name;*/

        /*populating the template with items*/

        const cat_id = post.id;
        document.querySelector("h5").textContent = post.name;


        fetch("http://aguacate.dk/pension_data/wp-json/wp/v2/pension?_embed")
            .then(res => res.json())
            .then(handleData)

        function handleData(a) {
            a.forEach(showItem)


        }

        function showItem(e) {

            const templateAside = document.querySelector("#aside-template").content;
            const clone = templateAside.cloneNode(true);


            clone.querySelector("h3").textContent = e.title.rendered;

            const a = clone.querySelector("a");
            a.href += e.id;

            if (cat_id == e.categories[0]) {
                document.querySelector("aside").appendChild(clone);
            }
        }
    })

    document.querySelector(".categories").appendChild(copy);

    document.querySelector(".close").addEventListener("click", e => {
        asidebar.addEventListener("transitionend", remove);
        asidebar.classList.remove("show");
    })

    function remove(){
        asidebar.removeEventListener("transitionend", remove);
        document.querySelectorAll("#read-more").forEach(rm => {
            rm.remove();
        })
    }
}
