
const nav = document.querySelector('.nav-container');
const image = document.getElementById('image');

window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        nav.style.position = 'fixed'
    }
});

window.addEventListener('scroll', () => {
    if (scrollY > 500) {
        nav.style.padding = "10px";
        image.style.width = "70px";
        nav.style.background = "rgb(143, 13, 13)";
    } else {
        nav.style.background = "#ff4b5d00"
        nav.style.border = "none";
        nav.style.padding = "40px";
        image.style.width = "100px";
    }
});

const heart = document.getElementById('heart');
const body = document.getElementById('body');

heart.addEventListener('click', (event) => {
    event.preventDefault();

    const card = document.createElement('div');
    card.style.width = "600px";
    card.style.height = '700px';
    card.style.background = 'white';
    card.style.position = "absolute";
    card.style.top = '0px';

    card.tabIndex = 0;

    const things = document.createElement('a');
    card.appendChild(things)
    body.appendChild(card);

    card.focus();
    card.addEventListener('blur', () => {
        card.remove()
    });
});



const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showNextItem() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }

    items[currentIndex].classList.add('active');

    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
}

setInterval(showNextItem, 7000);







const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';

const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5
});
const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
};

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});







const newProducts = [
    {
        image: 'christmas-tree.png',
        name: 'Santa Bag',
        price: 155,
        oldPrice: 168,
    },
    {
        image: 'https://ddw.kz/i/p/ka029099.jpg',
        name: 'Santa Bag',
        price: 155,
        oldPrice: 168,
    },
    {
        image: 'https://www.etchedwine.com/cdn/shop/products/Fathersdayscript-1200_540x.jpg?v=1590778770',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://thumbs.dreamstime.com/b/festive-christmas-santa-sack-filled-colorful-gifts-snowflake-designs-festive-christmas-santa-sack-filled-colorful-344249898.jpg ',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://png.pngtree.com/png-clipart/20231020/original/pngtree-christmas-gift-box-collection-3d-rendering-png-image_13380714.png',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://img.freepik.com/premium-photo/christmas-wreath-white-background_1264014-67141.jpg',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://img.freepik.com/premium-photo/beautifully-decorated-christmas-stocking-white-background_600978-10843.jpg',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://www.etchedwine.com/cdn/shop/products/GracefulHappyHolidays1200x1200.jpg?v=1663015513',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
];

const featured = [
    {
        image: 'https://www.etchedwine.com/cdn/shop/products/MerryTree-1200_540x.jpg?v=1605735480',
        name: 'FEATURED',
        price: 155,
        oldPrice: 168,
    },
    {
        image: 'https://cdn.media.amplience.net/i/partycity/178012?$large$&fmt=auto&qlt=default',
        name: 'Santa Bag',
        price: 155,
        oldPrice: 168,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://www.etchedwine.com/cdn/shop/products/HappyHolidaysTree-1200_540x.jpg?v=1605735548',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
];

const best = [
    {
        image: 'https://m.media-amazon.com/images/I/61mTztgcinL.jpg',
        name: 'Santa bag',
        price: 155,
        oldPrice: 168,
    },
    {
        image: 'https://i5.walmartimages.com/seo/Christmas-Wine-Bottle-Cover-Cute-Faux-Fur-Wine-Bottle-Clothes-for-Christmas-Party-Holiday-Festivals-Dinner-Decorations_c284b5f6-86c3-4ed5-b22a-8348ba2c55b0.b0533a5e9dc09a036f3cecf193edd6ff.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        name: 'Santa Bag',
        price: 155,
        oldPrice: 168,
    },
    {
        image: 'https://img.freepik.com/premium-photo/santa-claus-hat-isolated-white-background_103577-6731.jpg',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://target.scene7.com/is/image/Target/GUEST_b8bc2b0c-e0d0-41ca-80af-0cbcba5a100c?wid=488&hei=488&fmt=pjpeg',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://media.istockphoto.com/id/1351629276/photo/christmas-wreath.jpg?s=612x612&w=0&k=20&c=Q11fjf85gzGDDskTw-htrnQDDTElAkUFuGLso5aZ1zk=',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-candles-and-christmas-celebration-png-image_10238136.png',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://ddw.kz/i/p/ka140720.jpg',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
    {
        image: 'https://ddw.kz/i/p/hy0002.jpg',
        name: 'Santa Cap',
        price: 120,
        oldPrice: 138,
    },
];

const newProd = document.getElementById('new');
const feat = document.getElementById('feat');
const bestProd = document.getElementById('best');

newProd.addEventListener('click', () => {
    renderCards(newProducts);
});

feat.addEventListener('click', () => {
    renderCards(featured);
});

bestProd.addEventListener('click', () => {
    renderCards(best);
});

const cardsContainer = document.getElementById('cards-container');

function renderCards(data = best) {
    cardsContainer.innerHTML = '';
    data.forEach((item) => {
        const card = document.createElement('div');
        const cardImage = document.createElement('div');
        const image = document.createElement('img');
        const cardName = document.createElement('h2');
        const price = document.createElement('span');
        const oldPrice = document.createElement('span');

        card.classList.add('card');

        card.appendChild(cardImage);
        cardImage.appendChild(image);
        card.appendChild(cardName);
        card.appendChild(price);
        card.appendChild(oldPrice);
        cardsContainer.appendChild(card);

        image.src = item.image;
        cardName.textContent = item.name;
        price.textContent = item.price + ' $';
        oldPrice.textContent = item.oldPrice + ' $';
        cardImage.classList.add('cardImage')

        oldPrice.style.textDecoration = "line-through"
        oldPrice.style.paddingLeft = "10px";
        oldPrice.style.color = "rgb(77, 77, 77)";
    });
}

renderCards();









document.addEventListener('DOMContentLoaded', () => {
    // Установите конечную дату
    const deadline = new Date('2024-12-31T23:59:59');
    
    // Найдите элементы DOM
    const elDays = document.querySelector('.timer__days');
    const elHours = document.querySelector('.timer__hours');
    const elMinutes = document.querySelector('.timer__minutes');
    const elSeconds = document.querySelector('.timer__seconds');
    
    // Функция склонения числительных
    const declensionNum = (num, words) => {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    };
  
    // Функция обновления таймера
    const updateTimer = () => {
  
      const now = new Date();
      const diff = Math.max(0, deadline - now);
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      elDays.textContent = String(days).padStart(2, '0');
      elHours.textContent = String(hours).padStart(2, '0');
      elMinutes.textContent = String(minutes).padStart(2, '0');
      elSeconds.textContent = String(seconds).padStart(2, '0');
  
      elDays.dataset.title = declensionNum(days, ['Day', 'Day', 'Days']);
      elHours.dataset.title = declensionNum(hours, ['hr', 'hr', 'hr']);
      elMinutes.dataset.title = declensionNum(minutes, ['min', 'min', 'min']);
      elSeconds.dataset.title = declensionNum(seconds, ['sec', 'sec', 'sec']);
  
      if (diff === 0) {
        clearInterval(timerId);
      }
    };
  
    // Запустите таймер
    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
  });
  






  document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.querySelector("#subscribeForm input[type='email']").value;
    if (!email) {
      alert("Please enter your email address!");
      return;
    }
    alert(`Thank you for subscribing with: ${email}`);
    document.querySelector("#subscribeForm").reset();
  });
