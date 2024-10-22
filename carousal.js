const images = document.querySelectorAll('.carousel-images img');

let i=0;
document.querySelector('.next').addEventListener('click',function(){
     i++;
     if(i>=images.length){ i=0;}
     for(let j=0;j<images.length;j++){
        images[j].style.display = 'none';
     }
     images[i].style.display = 'block';
     
});

// using arrow func : document.querySelector('.prev').addEventListener('click', () => {
document.querySelector('.prev').addEventListener('click',function(){
    i--;
    if(i<0){ i=images.length-1;}
    images.forEach(img => img.style.display = 'none');
    //using normal function : images.forEach( function(img){ img.....});
    images[i].style.display = 'block';

})


//https://api.github.com/repos/15Dkatz/official_joke_api/contents/jokes/index.json

