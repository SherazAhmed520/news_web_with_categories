const general_page = document.querySelector("#general_page");
const card = document.querySelector("#card");
const btn_c = document.querySelectorAll("#categoryAll");
let category = "general";

btn_c.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        category = e.target.id;
        general_page.innerHTML= '';
        getData();
    })
})


const getData= ()=>{

    
    let pageSize=50
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2ab6410289d742f6a2f0f97dc2bafc4c&pageSize=${pageSize}`;
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
        console.log(data);

       data.articles.forEach(news => {
   
    let change_img = news.urlToImage ? news.urlToImage : "extraimg.jpeg";
    general_page.innerHTML += `
        <div id="card">
            <div id="img_div"><img src=${change_img} alt="not found"></div>
            <h2>${news.author}</h2>
            <p>${news.description}</p>
        </div>`;
});
    })
}

getData();

