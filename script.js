console.log('Hello!');

const shoppingButton = document.querySelector('#shoppingButton');

shoppingButton.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Dette er en handleliste med følgende innhold:');

  const shoppingInputElement = document.querySelector('#shoppingInput');
  const shoppingInputValue = shoppingInputElement.value;
  console.log(shoppingInputValue);

  if (shoppingInputElement.value == '') {
    console.log('Husk å skriv en vare..');
    //alert("Husk å skriv en vare..");
  } else {
    console.log('Vare er lagt til!');
  }

  const shoppingListElement = document.querySelector('#shoppingList');
  console.log(shoppingListElement);

  const shoppingItemElement = document.createElement('li');
  shoppingItemElement.classList.add('shoppingItem');
  shoppingItemElement.textContent = shoppingInputValue;
  console.log(shoppingItemElement);

  const itemPurchased = document.createElement('button');
  itemPurchased.textContent = 'Ferdig handlet';
  itemPurchased.addEventListener('click', function () {
    shoppingItemElement.style.textDecoration = 'line-through';
  });
  console.log(itemPurchased);

  shoppingItemElement.appendChild(itemPurchased);
  shoppingListElement.appendChild(shoppingItemElement);

  shoppingInputElement.value = '';
});
