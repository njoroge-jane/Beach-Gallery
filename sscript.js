var gallery =[
  {
    image: 'image 1.jpg',
    owner: 'Bella G',
  },
  {
    image: 'image 2.jpg',
    owner: 'Ali Taran',
  },
  {
    image: 'image 3.jpg',
    owner: 'Lucy Johns',
  },
  {
    image: 'image 4.jpg',
    owner: 'Carly Brat',
  },
  {
    image: 'image 5.png',
    owner: 'Sue',
  },
  {
    image: 'image 6.jpg',
    owner: 'Anonymous',
  },
  {
    image: 'image 7.jpg',
    owner: 'Prexta',
  },
  {
    image: 'image 8.jpg',
    owner: 'John Davis',
  },
  {
    image: 'image 9.jpg',
    owner: 'Miss Art',
  },
  {
    image: 'image 10.jpg',
    owner: 'My style',
  },
  {
    image: 'image 11.jpg',
    owner: 'Anonymous',
  },
  {
    image: 'image 12.jpg',
    owner: 'Darly Evans',
  }
]

gallery.forEach(function(anImage){
  var item =  `<div class="col-md-4 p-5">
  <img class="img-fluid " src="${anImage.image}" alt="" />
  <p class="text-end">${anImage.owner}</p>
</div>`
document.getElementsByClassName('row')[0].innerHTML += item;
});

gallery.forEach(function(anImage){
  var item =  
  `<div class='col-md-1 hover-zoom"'>
  <a href="${anImage.image}"><img class="img-fluid" src="${anImage.image}" alt="" /></a> 
  </div>`
  
document.getElementsByClassName('preview')[0].innerHTML += item;
});