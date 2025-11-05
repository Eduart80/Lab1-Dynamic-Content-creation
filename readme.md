# Dynamic Content Creation

- How did you dynamically create and append new elements to the DOM?<br>
I started with creating a card on HTML. I give it an Image, h5 and p tag. Than i reused the same code 5 times to create 5 cards.
On JS side i cash the element by Id. Inside the event listeners i create the functionalities. By using event.target acction and targeting the card class value, grabbing the h5 querySelector and textcontet. Then i create an element list. After i list the appendChild to send the value to the DOM / UI 

- What steps did you take to ensure accurate updates to the total price?
On event .triger , after i get the Attribute of that class which contain data , in our case data-price value.
After title of article and the data is cashed, i create element('span') for me to output textContent item name and price

- How did you handle invalid input for product name or price?
I used the same event listener inisiated by click. Integrated with some logic for output, the diference was how you get the data from input fields, wich in this case was "userEntry.value"

- What challenges did you face when implementing the remove functionality?<br>
Mostly errors/retry was on finding the right element 
Calculate was a challenge at first i try to put everything inside the 'add from product' eventlisterer, but than i tried to create small funtions and get where i wonted. 