const UiList = document.getElementById("batch-list")
const shoppingCart = document.getElementById("shopping-cart")
const btnAdd = document.getElementById("batch-add")
const productList = document.getElementById('product-List')
const HTMLCountList = document.getElementsByClassName('items')
const cartCounter = document.getElementById('cart-counter')
const price = document.getElementById('price')
const totalPrice = document.getElementById('priceTotal')
const listPrice = document.createElement('li')
// user entry 
const userEntry = document.getElementById('card-title')
// const userBtn = document.getElementById('user-List')
const userPrice = document.getElementById('price')



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
    let itemText //= document.createElement('span')
    let list //= document.createElement('li')
    
    
    if(event.target.classList.contains('user-entry-cart')){
        if(userEntry.value === '' || userPrice.value==='') return 
        
        itemText = document.createElement('span')
        list = document.createElement('li')
        itemText.textContent = `${userEntry.value} - $${userPrice.value}`

        // userEntry.value=''
        // userPrice.value=''
    }
    else if(event.target.classList.contains('add-to-cart')){
        const productItem = event.target.closest('.card')
        const name = productItem.querySelector('h5').textContent
        const price = event.target.getAttribute('data-price')
        console.log('2 pop');
        
        list = document.createElement('li')
        list.setAttribute('data-price', price)
        
        itemText = document.createElement('span')
        itemText.textContent = `${name} - $${price}`
        
    }
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
        
        userEntry.value=''
        userPrice.value=''
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
        if(price){
            total += price
        }else{ total += parseFloat(userPrice.value)}

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
