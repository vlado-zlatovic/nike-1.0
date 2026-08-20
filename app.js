"use strict";

const mobileNav = document.getElementById('mobileNav');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileList = document.querySelectorAll('.mobile-list a');


hamburgerBtn.addEventListener('click', ()=>{
  mobileNav.classList.toggle('open');
  hamburgerBtn.classList.toggle('toggle');
})



mobileList.forEach(link => {
  link.addEventListener('click', ()=>{
    mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('toggle');
  })
});









// LOCATIONS


const locations = [
  {
    id: 1,
    cityStateZip: "Corpus Christi, Texas(TX), 78418",
    address: "15202 Reales Dr",
    phone: "(636) 379-1958",
    imgSrc: "Assets/Locations/location-1.jpeg",
    imgAlt: "nike store location 1",
    link: "#"
  },
  {
    id: 2,
    cityStateZip: "Alief, Texas(TX), 77411",
    address: "Po Box 2382",
    phone: "(661) 833-2272",
    imgSrc: "Assets/Locations/location-2.jpg",
    imgAlt: "nike store location 2",
    link: "#"
  },
  {
    id: 3,
    cityStateZip: "Granbury, Texas(TX), 76049",
    address: "3904 Monterrey Dr",
    phone: "(682) 205-1078",
    imgSrc: "Assets/Locations/location-3.jpg",
    imgAlt: "nike store location 3",
    link: "#"
  }
];

function renderLocations(data) {
  const container = document.querySelector('.locations-container');
  
  const htmlMarkup = data.map((location, index) => {
    // Check if item is even to swap image and text order (matches location 2 layout)
    const isEven = index % 2 !== 0;

    const imgHTML = `
      <div class="location-img-container">
        <a href="${location.link}"><img src="${location.imgSrc}" alt="${location.imgAlt}"></a>
      </div>
    `;

    const infoHTML = `
      <div class="location-info">
        <div class="location-pin">
          <img src="Assets/Icons/location-dot-solid-full.svg" alt="location pin">
          <p>Location ${location.id}:</p>
        </div>
        <h3>${location.cityStateZip}</h3>
        <p>${location.address}</p>
        <p>Number: ${location.phone}</p>
      </div>
    `;

    return `
      <div class="single-location fade-in-section">
        ${isEven ? infoHTML + imgHTML : imgHTML + infoHTML}
      </div>
    `;
  }).join('');

  container.innerHTML = htmlMarkup;
}

// Call function to populate the container
renderLocations(locations);










// Postavljanje IntersectionObserver-a
const observerOptions = {
  root: null, // koristi viewport ekrana
  threshold: 0.05 // sekcija se aktivira kada je 15% vidljiva na ekranu
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Ako želiš da se animacija desi samo prvi put kada korisnik skroluje, ukloni sledeći komentar:
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Pronalaženje svih sekcija i dodavanje u observer
const sectionsToAnimate = document.querySelectorAll('.fade-in-section');
sectionsToAnimate.forEach(section => {
  sectionObserver.observe(section);
});






// PRODUCTS

const mensContainer = document.getElementById('mensProductContainer');
const womensContainer = document.getElementById('womensProductContainer');


const mensProduct = [
  {image:'Assets/products-images/product-1.jpg' , name: 'Air Jordan 3 Retro "True Blue"', type:"Men's Shoes" , cost: '$230',},
  {image:"Assets/products-images/product-2.jpg" , name: 'Nike Air Max 95 Big Bubble"', type:"Men's Shoes" , cost: '$200',},
  {image:"Assets/products-images/product-3.jpg" , name: "Nike Air Force 1 '07 Edge", type:"Men's Shoes" , cost: '$125',},
  {image:"Assets/products-images/product-4.jpg" , name: "Nike Air Force 1 '07 LX Vibram", type:"Men's Shoes" , cost: '$140',},
  {image:"Assets/products-images/product-5.jpg" , name: 'Book 2 "Tigers"', type:"Men's Shoes" , cost: '$155',},
];



// 3. Podaci za žensku kolekciju
const womensProducts = [
  { image: 'Assets/products-images/product-1-w.jpg', name: 'Air Jordan 1 Low', type: "Women's Shoes", cost: '$91.97' },
  { image: 'Assets/products-images/product-2-w.jpg', name: 'Nike Air Max Excee', type: "Women's Shoes", cost: '$100' },
  { image: 'Assets/products-images/product-3-w.jpg', name: 'Nike Air Max 270', type: "Women's Shoes", cost: '$102.97' },
  { image: 'Assets/products-images/product-4-w.jpg', name: 'Air Jordan 4 Retro "Comic"', type: "Women's Shoes", cost: '$230' },
  { image: 'Assets/products-images/product-5-w.jpg', name: 'Nike Zoom Skylon 11', type: "Women's Shoes", cost: '$135' }
];




function renderProducts(productList, targetContainer) {
  
  productList.forEach((product)=>{
  const singleContainerDiv = document.createElement('div');
  singleContainerDiv.classList.add('single-product');

  const productImageDiv = document.createElement('div');
  productImageDiv.classList.add('product-image-container');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productH3 = document.createElement('h3');
  productH3.textContent = product.name;

  const productH4 = document.createElement('h4');
  productH4.textContent = product.type;

  const productPrice = document.createElement('p');
  productPrice.textContent = product.cost;


  productInfo.append(productH3, productH4, productPrice);

  productImageDiv.appendChild(productImg);

  singleContainerDiv.append(productImageDiv, productInfo);

  
  targetContainer.appendChild(singleContainerDiv);

})



};



renderProducts(mensProduct, mensContainer);
renderProducts(womensProducts, womensContainer);




