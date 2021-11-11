var gallery =[
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
  },
  {
    image: 'sunset.jpg',
    owner: 'JohnDoe',
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
  `<div class='col-md-1'>
  <img class="img-fluid" src="${anImage.image}" alt="" />
  </div>`
  
document.getElementsByClassName('preview')[0].innerHTML += item;
});