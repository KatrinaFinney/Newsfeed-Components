/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// grab the parent element to append our data too
const containerTwo = document.querySelector('.header')
console.log (containerTwo);
// we looped through the data and created panels for each content and title

containerTwo.appendChild(createMenu(menuItems))


//define functional component here
function createMenu(menuItems) {
  

  // define new elements
  const menuDiv = document.createElement('div');
  const menuList = document.createElement('ul');
  const itemOne = document.createElement('li');
  const itemTwo = document.createElement('li');
  const itemThree = document.createElement('li');
  const itemFour = document.createElement('li');
  const itemFive = document.createElement('li');
  const itemSix = document.createElement('li');
  
  // Setup structure of elements
  menuDiv.appendChild(menuList);
  menuList.appendChild(itemOne);
  menuList.appendChild(itemTwo);
  menuList.appendChild(itemThree);
  menuList.appendChild(itemFour);
  menuList.appendChild(itemFive);
  menuList.appendChild(itemSix);
  // set class names
  menuDiv.classList.add('menu');
 //tc 
  itemOne.textContent = menuItems[0];
  itemTwo.textContent = menuItems[1];
  itemThree.textContent = menuItems[2];
  itemFour.textContent = menuItems[3];
  itemFive.textContent = menuItems[4];
  itemSix.textContent = menuItems[5];
  
  const menuButton = document.querySelector('.menu-button');

   // Toggling classes means this:
  // Remove .toggle-on if .toggle-on exists
  // Add .toggle-on on if .toggle-on does not exist
  menuButton.addEventListener('click',() => {
    // 1. toggle hide-btn on BOTH buttons
    menuDiv.classList.toggle('menu--open');
    
  })
  return menuDiv

}