let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

window.addEventListener('scroll',() => {
  header.classList.toggle('shadow',window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
 
  window.onscroll = () =>
  {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3a2e6a7e06msh649f7b2587bd7cep1071efjsn203216409089',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20', options)
    .then(response => response.json())
    .then(data => {
      const list = data.d;

      list.map((item) => {
        console.log(data);
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.allmovies').innerHTML += movie;
      })
    })
    .catch(err => console.error(err));

    function getmovies(url)
    {
      fetch(url).then(res => res.json()).then(data => {
       console.log(data).results;
        
      })
    }



    form.addEventListener('submit',(e) =>
    {
      e.preventDefault();
      const searchTerm = search.value;

      if(searchTerm)
      {
        
      }
    })
