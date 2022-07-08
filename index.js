// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
// MJEZAQ9fZ2J2bP65oXoGnqbW16l43Zfl
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MJEZAQ9fZ2J2bP65oXoGnqbW16l43Zfl

let url = 
"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MJEZAQ9fZ2J2bP65oXoGnqbW16l43Zfl";
 let url2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey";

let headlines = document.getElementById("headlines");

fetch(url).then(response => response.json()
.then(data => {console.log(data);

data.results.map(article => {
    console.log(article.title);
    let a= document.createElement('a');
    a.setAttribute('href',article.url); // Add a href attribute to an <a> element:
    a.innerHTML = article.title;

   let p = document.createElement("p");
   p.innerHTML = article.abstract;

   let img = document.createElement("img");
   img.setAttribute('src',article.multimedia[0].url);



    headlines.append(img);
    headlines.appendChild(a);
    headlines.appendChild(p);
})
    
}))

