const UiList = document.getElementById("batch-list")
const shoppingCart = document.getElementById("shopping-cart")
const btnAdd = document.getElementById("batch-add")
const productList = document.getElementById('product-List')
const HTMLCountList = document.getElementsByClassName('items')
const cartCounter = document.getElementById('cart-counter')
const price = document.getElementById('price')
const totalPrice = document.getElementById('priceTotal')
const listPrice = document.createElement('li')


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
    const productItem = event.target.closest('.card')
    const name = productItem.querySelector('h5').textContent
    const price = event.target.getAttribute('data-price')
    const list = document.createElement('li')


    if(event.target.classList.contains('add-to-cart')){
        list.setAttribute('data-price', price)
        
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
            updateTotalDisplay()
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

function calculateTotal() {
    let total = 0
    const listItems = document.querySelectorAll('#batch-list li')
    listItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'))
        total += price
    })
    return total
}

function updateTotalDisplay() {
    const total = calculateTotal()
    const totalElement = document.getElementById('cart-total')
    if (totalElement) {
        totalElement.textContent = `Total: $${total}`
    }
}
