let item = {
    id: 101,
    imgUrl: 'https://www.fullerssugarhouse.com/wp-content/uploads/2021/08/maplebaconburger.jpg',
    name: 'Burger',
    price: 90,
    ratings: 4.2,
    qat: 1
};

let htmlCode = `
    <img src="${item.imgUrl}" alt="burger" />
    <div class="items">
        <h2>🍔 ${item.name}</h2>
        <h3>&#8377; ${item.price}.00</h3>
        <h3>⭐ ${item.ratings}</h3>
    </div>

    <div class="btn">
        <button onclick="decCount()">-</button>
        <span id="count">${item.qat}</span>
        <button onclick="incCount()">+</button>
    </div>
`;

document.querySelector('#items-list').innerHTML = htmlCode;
let spanTag = document.querySelector('#count');

function incCount() {
    item.qat++;
    spanTag.innerText = item.qat;
}

function decCount() {
    if (item.qat > 1) {
        item.qat--;
        spanTag.innerText = item.qat;
    }
}
