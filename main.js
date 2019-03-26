const products = [
    {
       title: 'product1',
       description: 'blah blah blah',
       imageUrl: 'http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg',
       size: '4 " x 4"', 
       weight: '8 oz.',
       price1:'$1.99',
       price2: '$1.49',
       price3: '$.99',
       validUntil: '04/01/2016',
    },
    {
       title: 'product2',
       description: 'blah blah blah',
       imageUrl: 'http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg',
       size: '4 " x 4"', 
       weight: '8 oz.',
       price1:'$1.99',
       price2: '$1.49',
       price3: '$.99',
       validUntil: '05/01/2016',
    },
    {
       title: 'product3',
       description: 'blah blah blah',
       imageUrl: 'http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg',
       size: '4 " x 4"', 
       weight: '8 oz.',
       price1:'$1.99',
       price2: '$1.49',
       price3: '$.99',
       validUntil: '06/01/2016',
    },
    {
       title: 'product4',
       description: 'blah blah blah',
       imageUrl: 'http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg',
       size: '4 " x 4"', 
       weight: '8 oz.',
       price1:'$1.99',
       price2: '$1.49',
       price3: '$.99',
       validUntil: '07/01/2016',
    },
    {
       title: 'product5',
       description: 'blah blah blah',
       imageUrl: 'http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg',
       size: '4 " x 4"', 
       weight: '8 oz.',
       price1:'$1.99',
       price2: '$1.49',
       price3: '$.99',
       validUntil: '08/01/2016',
    },
];

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (x) => {
    let domString = ``;
        domString += `<div class="row">`;
    x.forEach((product) => {
        domString +=    `<div class="col-4 cards">`;
        domString +=        `<div class='card'>`;
        domString +=            `<div class="card-header">${product.title}</div>`;
        domString +=            `<img class="imgLoop" src="${product.imageUrl}" alt="">`;
        domString +=    `<div class="card-body">`;
        domString +=   `<h5 class="card-title">Card title</h5>`;
        domString +=    `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`;
        domString +=    `</div>`;
        domString +=    `</div>`;

        // domString +=        `<p>${product.description}<p>`;
        // domString +=        `<img class="imgLoop" src="${product.imageUrl}" alt="">`;
        // domString +=        `<p>${product.size}</p>`;
        // domString +=        `<p>${product.weight}</p>`;
        // domString +=        `<p>${product.price1}</p>`;
        // domString +=        `<p>${product.price2}</p>`;
        // domString +=        `<p>${product.price3}</p>`;
        // domString +=        `<p>${product.validUntil}</p>`;
        domString +=    `</div>`;
        })
        domString += `</div>`;

    printToDom('printDom', domString);
};

const init = () => {
    domStringBuilder(products);
};
init();

console.log('products', products);
console.log(products.length);
