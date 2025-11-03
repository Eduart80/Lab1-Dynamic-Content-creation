const UiList = document.getElementById("batch-list")
const shoppingCart = document.getElementById("shopping-cart")
const btnAdd = document.getElementById("batch-add")
const productList = document.getElementById('product-List')
const HTMLCountList = document.getElementsByClassName('items')
const cartCounter = document.getElementById('cart-counter')

// Shopping cart counter
let cartCount = 0

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
        
        list.innerHTML = name + '  $' + price + ' <button class="remove-from-cart">Remove</button>'
        UiList.appendChild(list)
        
        // Increment cart counter
        cartCount++
        updateCartCounter()
        
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
