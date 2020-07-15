/* This is the data we will be using, study it but don't change anything, yet. */

const menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/




const menuMaker = (items) => {
  //elements
  const menuDiv = document.createElement('div');
  
 const list = document.createElement('ul');

  // class names
menuDiv.classList.add('menu');

list.classList.add('list');

//text content
menuDiv.textContent = list.textContent;
list.textContent = items.forEach(item => {
  document.createElement('li');
})

//parent/child
document.getElementsByTagName('header');
header.appendChild(menuDiv);
menuDiv.appendChild(list);
list.appendChild(li);

return menuDiv;
}

const menuComponent = document.querySelector('header')
header.appendChild(menuMaker([menuItems]));

/*const list = document.createElement('ul');
const menuDiv = document.createElement('div');
menuDiv.className = "menu";
const menuMaker = () => {
[menuItems].forEach(item => {
  document.createElement('li');
  return [];
});
const listItems = document.getElementsByTagName('li');
listItems.forEach(item => {list.appendChild(listItems)
});

menuDiv.appendChild(list);


 
const menuButton = querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('.menu--open');


})

return menuMaker;

}
const menuComponent = querySelector('header');

menuComponent.appendChild(menuMaker([menuItems]));*/