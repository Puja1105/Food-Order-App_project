const menu = ["Pizza", "Burger", "Noodles", "Soup", "Ice-cream", "Pasta"];
const restaurant = ["Dominos", "BurgerKing", "KFC" , "PizzaHut", "Meghana Biryani", "Baskin Robbin", "Mc Donald's", "WOW MOMO"]
// ✅ Grab the popup container & list UL
const menuPopup = document.getElementById("menuPopup");
const menuList = document.getElementById("menuList");
const restaurantPopup = document.getElementById("restaurantPopup");
const restaList = document.getElementById("restaList");



// ✅ When "Menu" button is clicked
document.getElementById("menu").addEventListener("click", () => {
  // 1️⃣ Clear old list
  menuList.innerHTML = "";

  // 2️⃣ Loop through each menu item and create a <li>
  menu.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li); // add to UL
  });

  // 3️⃣ Show the popup
  menuPopup.style.display = "flex";
});

// ✅ Close function hides popup
function closeMenuPopup() {
  menuPopup.style.display = "none";
}



document.getElementById("Restaurants").addEventListener("click",()=>{
    restaList.innerHTML ="";

    restaurant.forEach(element =>{
        const list =document.createElement("li");
        list.textContent = element
        restaList.appendChild(list);

    })
    restaurantPopup.style.display = "flex";

})

function closePopup(){
    restaurantPopup.style.display = "none"
}


// ✅ Each brand’s menu items
const brandMenus = {
  dominos: ["🍕 Margherita", "🍕 Farmhouse", "🍕 Peppy Paneer", "🥤 Coke"],
  MCd: ["🍔 Big Mac", "🍔 McAloo Tikki", "🍟 French Fries", "🥤 Pepsi"],
  KFC: ["🍗 Hot & Crispy", "🍗 Zinger Burger", "🥗 Rice Bowl", "🥤 Sprite"],
  pizzaHut: ["🍕 Veggie Supreme", "🍕 Paneer Makhni", "🍕 Tandoori Paneer"],
  meghna: ["🍛 Chicken Biryani", "🍛 Mutton Biryani", "🥗 Raita"],
  burger: ["🍔 Whopper", "🍔 Veggie Burger", "🍟 Cheesy Fries", "🥤 Coke"],
  wow: ["🥟 Veg Momos", "🥟 Chicken Momos", "🥣 Soup"],
  baskin: ["🍨 Chocolate Ice Cream", "🍨 Strawberry Scoop", "🍨 Vanilla Sundae"]
};

// ✅ Popup elements
const brandPopup = document.getElementById("brandPopup");
const brandTitle = document.getElementById("brandTitle");
const brandMenuList = document.getElementById("brandMenuList");

// ✅ Function to open popup
function openBrandPopup(brandId, brandName) {
  const menuItems = brandMenus[brandId];
  if (!menuItems) return;

  // Set title
  brandTitle.textContent = `🍴 ${brandName} Menu`;

  // Clear old menu
  brandMenuList.innerHTML = "";

  // Add new menu items
  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    brandMenuList.appendChild(li);
  });

  // Show popup
  brandPopup.style.display = "flex";
}

// ✅ Close popup
function closeBrandPopup() {
  brandPopup.style.display = "none";
}

// ✅ Attach click events for each button
document.querySelectorAll(".brands button").forEach(button => {
  button.addEventListener("click", () => {
    const brandId = button.id; // e.g. "dominos", "MCd"
    const brandName = button.querySelector("img").alt || brandId; // use alt text
    openBrandPopup(brandId, brandName);
  });
});
