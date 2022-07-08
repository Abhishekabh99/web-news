// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
// MJEZAQ9fZ2J2bP65oXoGnqbW16l43Zfl
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MJEZAQ9fZ2J2bP65oXoGnqbW16l43Zfl

let key = "MJEZAQ9fZ2J2bP65oXoGnqbW16l43Zfl";

let url = 
"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MJEZAQ9fZ2J2bP65oXoGnqbW16l43Zfl";
 let url2 = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=metaverse&api-key=${key}`;
 let img_link ="https://static01.nyt.com/";

let headlines = document.getElementById("headlines");

fetch(url2).then(response => response.json()
.then(data => {console.log(data);

data.response.docs.map(article => {
    console.log(article.headline.main);
    let a= document.createElement('a');
    a.setAttribute('href',article.web_url);        // Add a href attribute to an <a> element:
    a.innerHTML = article.headline.main;

   let p = document.createElement("p");
   p.innerHTML = article.abstract;

   let img = document.createElement("img");
   img.setAttribute('src',`${img_link}${article.multimedia[0].url}`);
   img.setAttribute('alt',article.multimedia[0].url);



   headlines.append(img);
    headlines.appendChild(a);
   headlines.appendChild(p);
})
    
}))

