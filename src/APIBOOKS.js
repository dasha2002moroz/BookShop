const apiKey = "AIzaSyAgg_6I4Yr5TNmF8E9l5TnnAGDeP-U_ocA";

const countShowCardsClick = 6; 
const loadBooksBtn = document.querySelector(".container__section__books__body__button_load-more");

const booksCard = document.querySelector('.container__section__books__body__cards');

let shownCards = countShowCardsClick;
let countClickBtnShowCards = 1;

const categories = [
          {
             name: 'Architecture',
             subject: 'Architecture'
          },
          {
             name: 'Art & Fashion',
             subject: 'Art'
          },
          {
             name: 'Biography',
             subject: 'Biography&Autobiography'
          },
          {
             name: 'Business',
             subject: 'Business'
          },
          {
             name: 'Crafts & Hobbies',
             subject: 'Crafts&Hobbies'
          },
          {
             name: 'Drama',
             subject: 'Drama'
          },
          {
             name: 'Fiction',
             subject: 'Fiction'
          },
          {
             name: 'Food & Drink',
             subject: 'Cooking'
          },
          {
             name: 'Health & Wellbeing',
             subject: 'Health&Fitness'
          },
          {
             name: 'History & Politics',
             subject: 'History'
          },
          {
             name: 'Humor',
             subject: 'Humor'
          },
          {
             name: 'Poetry',
             subject: 'Poetry'
          },
          {
             name: 'Psychology',
             subject: 'Psychology'
          },
          {
             name: 'Science',
             subject: 'Science'
          },
          {
             name: 'Technology',
             subject: 'Technology'
          },
          {
             name: 'Travel & Maps',
             subject: 'Travel'
          },
];


let activeCategory = categories[0].subject

loadBooksBtn.addEventListener('click', loadCards);

booksCard.addEventListener('click', handleCardClick);

categories.forEach(category => {
    document.querySelector('.section-navigation__category-list').innerHTML += 
        `<li class="category-list__item">
            <a class="category-list__item-link ${activeCategory === category.subject && 'active-item'}" data-category="${category.subject}">
                ${category.name}
            </a>
        </li>`        
});

function getBasketLocalStorage() {
    const cartDataJson = localStorage.getItem('basket');
    return cartDataJson ? JSON.parse(cartDataJson) : [];
};

function loadCards () {
    countClickBtnShowCards++;
    shownCards = countShowCardsClick * countClickBtnShowCards;
    getResponse(shownCards)
};

function handleCardClick (event) {
    const targetButton = event.target.closest('.container__section__books__body__button_load-more');
    if (!targetButton) return;

    const card = targetButton.closest('.container__section__books__body__cards');
    const id = card.dataset.productId;
    const basket = getBasketLocalStorage();

    basket.push(id);
};

function createCards(data) {
    let cards = '';

    data.forEach(item => {
        const cardBook = `
        <div class="books__card" data-product-id='${item.id}>
            <div class="books__card-image">
            <img class="books__card-img" src="${item.volumeInfo.imageLinks.thumbnail}">
            </div>
            <div class="books__card-content">
            <p class="books__card-autor">
                ${item.volumeInfo.authors}
            </p>
            <h2 class="books__card-name">
                ${item.volumeInfo.title}
            </h2>
            <div class="books__card-reviews">
                <img src="${item.averageRating}">
                <p class="books__card-reviews-text">
                    ${item.volumeInfo.retingsCount}
                </p>
            </div>
            <p class="books__card-description">
                ${item.volumeInfo.description}
            </p>
            <h2 class="books__card-price">
                $4.99
            </h2>
            <button class="books__button-btn">
                buy now
            </button>
            </div>
        </div>`;

        cards += cardBook;
    });

    booksCard.innerHTML = cards;
    
};

getResponse(shownCards);

async function getResponse (count) {  
    const responseApi = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:"${activeCategory}"&key=${apiKey}&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`)
        .then(response => {
            return response.json();                
        })
        .then((json) => {
            return json["items"];
            
        })
        .catch(() => {console.log('error'); 
    });
    createCards(responseApi)
};

const backet = document.querySelector('.basket__count');

document.querySelector('.books__button-btn').addEventListener('click', function(){
    backet.style.backgroundColor = "red";
    backet.style.zIndex = '100';

    const p = document.createElement("p");

    const number = 0;
    number += 1;
    p.innerHTML = "${number}";

});
