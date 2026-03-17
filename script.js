
/* PRODUCTS */

const products = [
{
name:"White Shirt",
price:25,
img:"https://via.placeholder.com/150"
},
{
name:"Gray Hoodie",
price:40,
img:"https://via.placeholder.com/150"
},
{
name:"Blue Jeans",
price:50,
img:"https://via.placeholder.com/150"
},
{
name:"Black T-Shirt",
price:20,
img:"https://via.placeholder.com/150"
},
{
name:"Red Hoodie",
price:45,
img:"https://via.placeholder.com/150"
}
]

let cart = []
let orders = []
let fav = 0


/* RENDER PRODUCTS */

function renderProducts(list){

const container = document.getElementById("products")
container.innerHTML=""

list.forEach((p,i)=>{

container.innerHTML+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="addCart(${i})">Add</button>

<button onclick="addFav()">❤️</button>

</div>

`

})

}

renderProducts(products)


/* ADD CART */

function addCart(i){

cart.push(products[i])

renderCart()

}


/* RENDER CART */

function renderCart(){

const items = document.getElementById("cartItems")

items.innerHTML=""

let total = 0

cart.forEach(p=>{

total += p.price

items.innerHTML+=`

<div class="cart-item">

<span>${p.name}</span>

<span>$${p.price}</span>

</div>

`

})

document.getElementById("total").innerText = total
document.getElementById("cartCount").innerText = cart.length

}


/* FAVORITES */

function addFav(){

fav++

document.getElementById("favCount").innerText = fav

}


/* CHECKOUT */

function checkout(){

if(cart.length===0) return

orders.push([...cart])

const ordersList = document.getElementById("ordersList")

ordersList.innerHTML+=`<p>Order #${orders.length} (${cart.length} items)</p>`

cart=[]

renderCart()

}


/* SEARCH */

document.getElementById("search").addEventListener("input",e=>{

const value = e.target.value.toLowerCase()

const filtered = products.filter(p=>p.name.toLowerCase().includes(value))

renderProducts(filtered)

})

