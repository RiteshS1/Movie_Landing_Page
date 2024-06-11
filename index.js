let right_btn = document.getElementsByClassName('arrowR')[0];
let left_btn = document.getElementsByClassName('arrowL')[0];

let cards = document.getElementsByClassName('cards')[0];
let search_suggestions = document.getElementsByClassName('search_suggestions')[0];

let search_input= document.getElementById('search_input');



left_btn.addEventListener('click',()=>{
    cards.scrollLeft -=160;
})

right_btn.addEventListener('click',()=>{
    cards.scrollLeft +=160;
})

let json_url = 'movie.json';

fetch(json_url).then(Response => Response.json())
    .then((data)=>{
        data.forEach((ele,i)=>{
            let {name, imdb,date,sposter,bposter,genre,url}= ele;
            let card= document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML= `
            <img src="${sposter}" class="poster" alt="${name}">
                    <div class="rest_cards">
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub"><p>${genre},${date}</div>
                            <h3><span>IMDB</span>⭐ ${imdb}</h3>
                        </div>
                    </div>
                    `
            cards.appendChild(card);
            
        });

        document.getElementById('title').innerText=data[0].name;
        document.getElementById('gen').innerText=data[0].genre;
        document.getElementById('date').innerText=data[0].date;
        document.getElementById('rate').innerHTML=`<span>IMDB</span>⭐ ${data[0].imdb}`;

        
        data.forEach(element=>{
            let {name, imdb,date,sposter,genre,url}= element;
            let card= document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML= `
            <img src="${sposter}" alt="${name}">
                         <div class="cont">
                             <h3>${name}</h3>
                             <p>${genre},${date},<span>IMDB</span>⭐${imdb}</p>
                         </div>
                    `

            search_suggestions.appendChild(card);
        

        });
        
     
        //filtering the suggestions
        search_input.addEventListener('keyup',()=>{
            let filter= search_input.value.toUpperCase();
            let a= search_suggestions.getElementsByTagName('a');
            
            for(let index=0; index<a.length; index++){
                let b= a[index].getElementsByClassName('cont')[0];

                let Textvalue= b.textContent||b.innerText;
                if(Textvalue.toUpperCase().indexOf(filter)>-1){
                    a[index].style.display= "flex";
                    search_suggestions.style.visibility = "visible";
                    search_suggestions.style.opacity= 1;
                }
                else{
                    a[index].style.display="none";
                }
                if(search_input.value == 0){
                    search_suggestions.style.visibility="hidden";
                    search_suggestions.style.opacity= 0;
                }
            }
        })


        let video= document.getElementsByTagName('video')[0];
        let play= document.getElementById('play');

       play.addEventListener('click',()=>{
        if(video.paused){
            video.play();
            play.innerHTML= `Watch ▶️`;
        }
        else{
            video.pause();
            play.innerHTML=`Pause ||`
        }

       })














        let series= document.getElementById('series');
        
        series.addEventListener('click',()=>{
            cards.innerHTML='';

            let series_array= data.filter(ele=>{
                return ele.type==="series";

            });
            series_array.forEach((ele,i)=>{
                let {name, imdb,date,sposter,bposter,genre,url}= ele;
                let card= document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML= `
                <img src="${sposter}" class="poster" alt="${name}">
                        <div class="rest_cards">
                            <img src="${bposter}" alt="">
                            <div class="cont">
                                <h4>${name}</h4>
                                <div class="sub"><p>${genre},${date}</div>
                                <h3><span>IMDB</span>⭐ ${imdb}</h3>
                            </div>
                        </div>
                        `
                cards.appendChild(card);
                
            });
        });

            let movies= document.getElementById('movies');
        
        movies.addEventListener('click',()=>{
            cards.innerHTML='';

            let movies_array= data.filter(ele=>{
                return ele.type==="movie";

            });
            movies_array.forEach((ele,i)=>{
                let {name, imdb,date,sposter,bposter,genre,url}= ele;
                let card= document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML= `
                <img src="${sposter}" class="poster" alt="${name}">
                        <div class="rest_cards">
                            <img src="${bposter}" alt="">
                            <div class="cont">
                                <h4>${name}</h4>
                                <div class="sub"><p>${genre},${date}</div>
                                <h3><span>IMDB</span>⭐ ${imdb}</h3>
                            </div>
                        </div>
                        `
                cards.appendChild(card);
                
           
            });


        });
    

  
    });