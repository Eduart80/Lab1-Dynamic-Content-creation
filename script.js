const UiList = document.getElementById("batch-list")
const shoppingCart = document.getElementById("shopping-cart")
const btnAdd = document.getElementById("batch-add")
const productList = document.getElementById('product-List')
const HTMLCountList = document.getElementsByClassName('items')
const cartCounter = document.getElementById('cart-counter')
const price = document.getElementById('price')
const totalPrice = document.getElementById('priceTotal')

const cartItems = [
    { name: "Blue Parrot", price: 120, quantity: 1 },
    { name: "Multicolor Parrot", price: 250, quantity: 1 },
    { name: "Red Parrot", price: 850, quantity: 1 },
    { name: "Small Parrot", price: 99, quantity: 1 },
    { name: "White Parrot", price: 500, quantity: 1 },
];

// Shopping cart counter
let cartCount = 0
let totalPriceCalc = 0

// Function to update cart counter
function updateCartCounter() {
    if (cartCount > 0) {
        cartCounter.textContent = cartCount
        cartCounter.style.display = 'inline'
    } else {
        cartCounter.style.display = 'none'
    }
}

//add from product
productList.addEventListener('click',(event)=>{

    if(event.target.classList.contains('add-to-cart')){
        const productItem = event.target.closest('.card')
        const list = document.createElement('li')
        const name = productItem.querySelector('h5').textContent
        const price = event.target.getAttribute('data-price')
        
        const itemText = document.createElement('span')
        itemText.textContent = `${name} - $${price}`
        
        const removeBtn = document.createElement('button')
        removeBtn.className = 'btn btn-danger btn-sm remove-from-cart'
        removeBtn.textContent = 'Remove'
        
        list.appendChild(itemText)
        list.appendChild(removeBtn)
        
        UiList.appendChild(list)
        
        // Increment cart counter
        cartCount++
        updateCartCounter()
        updateTotalDisplay()
    }

})
//remove
UiList.addEventListener('click', function(event) {
    if ( event.target.classList.contains('remove-from-cart')) {
        const li = event.target.closest('li')
        if (li) {
            li.remove()
            cartCount--
            updateCartCounter()
        }
    }
    if ( event.target.classList.contains('completed-from-cart')) {
        const li = event.target.closest('li')
        if (li) {
            li.style.color='Green'
            li.style.textDecoration = 'line-through';
        }
    }
});

function calculatorTotal(items){
    const total = items.reduce((accumulator, currentItem)=>{
        const itemCost = currentItem.price * currentItem.quantity
        return accumulator + itemCost
    },0)
    return total
}
