const UiList = document.getElementById("batch-list")
const btnAdd = document.getElementById("batch-add")
const productList = document.getElementById('product-List')
const HTMLCountList = document.getElementsByClassName('items')

//add from product
productList.addEventListener('click',(event)=>{

    if(event.target.classList.contains('add-to-cart')){
        const productItem = event.target.closest('.items')
        productItem.classList.toggle('active')
        const list = document.createElement('li')
        const name = productItem.querySelector('p').textContent
        list.innerHTML = name +' <button class="remove-from-cart">Remove</button>'
        UiList.appendChild(list)
    }
})
//remove
UiList.addEventListener('click', function(event) {
    if ( event.target.classList.contains('remove-from-cart')) {
        const li = event.target.closest('li')
        if (li) {
            li.remove()
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
