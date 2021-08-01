 
   let movie_div=document.getElementById('show')
   let person_detail=document.getElementById("detail");
   let cont=document.getElementById('main');
   var timeid;

    async function showMovie(){
        let q = document.getElementById('q').value;
        if (q.length == 0) {
            return false
        }
        let res=await fetch(`https://swapi.dev/api/people/?search=${q}`)
        let data=await res.json();
        
        
        return data.results;
        
      
    }
   
    

    async function movieSearch(){
        if(timeid){
            return false;
        }

        timeid=setTimeout(()=>{
            main();
            timeid=undefined

        },100)


        
        

    } 

    function appendnames(d){
        movie_div.innerText=null
        d.forEach(({name}) => {
            let p=document.createElement('p')
            p.innerText=name;
            p.setAttribute('class','hover');
            p.addEventListener('click',function(){
                check(p)
            })

            movie_div.append(p);

            
        });
    }
    async function main(){
        let movies = await showMovie();
        appendnames(movies)

    }
    function check(p){
        person_detail.innerHTML=null
        if(p.innerText=="Luke Skywalker"){
            answer=1;
        }
        if (p.innerText == "C-3PO") {
            
            answer = 2;
        }
        if (p.innerText == "R2-D2") {
            answer = 3;
        }
        if (p.innerText == "Darth Vader") {
            answer = 4;
        }
        if (p.innerText == "Leia Organa") {
            answer = 5;
        }
        if (p.innerText == "Owen Lars") {
            answer = 6;
        }
        if (p.innerText == "Beru Whitesun lars") {
            answer = 7;
        }
        if (p.innerText == "R5-D4") {
            answer = 8;
        }
        if (p.innerText == "Biggs Darklighter") {
            answer = 9;
        }
       cont.style.display='none';
        person_detail.style.display='grid'

        
         async function showMovie1() {
            let q = document.getElementById('q').value;
            if (q.length == 0) {
                return false
            }
            let res = await fetch(`https://swapi.dev/api/people/${answer}/`)
            let data = await res.json();
          console.log(data.height);
             let div=document.createElement('div')
             h1 = document.createElement('h1');
             h1.innerHTML =data.name;
             p_g=document.createElement('p')
             p_g.innerHTML=`Gender:${data.gender}`

             p_h=document.createElement('p');
             p_h.innerHTML=`Height:${data.height}`

             p_b = document.createElement('p');
             p_b.innerHTML = `Birth Year:${data.birth_year}`

             btn=document.createElement('button')
             btn.innerHTML="GO TO HOME"

             btn.addEventListener('click',function(){
                 cont.style.display = 'flex';
                 person_detail.style.display = 'none'

             })





             div.append(h1, p_g, p_b, p_h,btn);
             div.setAttribute('class','char')
             
             person_detail.append(div);


         




    }
    showMovie1();
}
    