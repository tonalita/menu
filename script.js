const menu = {
  brunch: [
    { name: "Sunrise Crunch Muffin", price: "£6.95", desc: "Toasted English muffin filled with crispy chicken, beef bacon, egg, and caramelised onion — your perfect morning bite." },
    { name: "Classic English Breakfast", price: "£6.95", desc: "Traditional full breakfast served with eggs, toast, sausage, beans." },
    { name: "Morning Granola Bowl", price: "£6.50", desc: "Crunchy granola with yogurt, honey, and seasonal fruits." },
    { name: "Pancake", price: "£5.50", desc: "Soft, golden pancakes drizzled with syrup." },
    { name: "Beef Bacon & Egg Wrap", price: "£5.95", desc: "Scrambled egg, smoky beef bacon, caramelised onion, and cheese wrapped to perfection." }
  ],

  burgers: [
    { name: "Classic Beef Burger", price: "£6.95", desc: "Juicy Angus beef patty with lettuce, cheese, and special burger sauce." },
    { name: "Sweet Inferno", price: "£6.95", desc: "Crunchy chicken topped with lettuce, coleslaw and a hint of sweet and chilli." },
    { name: "Smoky BBQ Beef", price: "£6.95", desc: "Beef patty glazed in BBQ sauce with melted cheese and caramelised onions." },
    { name: "K. BBQ Street Burger", price: "£7.95", desc: "Korean-style Angus beef BBQ burger — tangy and bold." },
    { name: "Mexican Jalapeño Crunch", price: "£7.95", desc: "Spicy Angus beef burger with jalapeños and nacho crunch." }
  ],

  wraps: [
    { name: "Classic BBQ / Mayo Chicken Wrap", price: "£5.50", desc: "Crispy chicken with lettuce, cheese and your choice of BBQ or mayo sauce." }
  ],

  fries: [
    { name: "Chicken Loaded Fries", price: "£5.95", desc: "Golden fries topped with saucy chicken and melted cheese." },
    { name: "Mexican Nacho Fiesta", price: "£6.50", desc: "Chicken tenders and fries layered with nachos and spicy sauce." }
  ],

  sides: [
    { name: "BBQ Wings (5pcs)", price: "£4.95", desc: "Tender wings glazed with smoky BBQ sauce." },
    { name: "Crispy Wings (5pcs)", price: "£4.25", desc: "Crisp-fried wings with golden crunch." },
    { name: "Seasoned Fries", price: "£4.00", desc: "Perfectly seasoned with cajun." }
  ]
};

// DOM elements
const viewMenuBtn = document.getElementById("viewMenuBtn");
const menuCategories = document.getElementById("menuCategories");
const menuItems = document.getElementById("menuItems");
const backBtn = document.getElementById("backBtn");
const itemsContainer = document.getElementById("itemsContainer");
const menuTitle = document.getElementById("menuTitle");

viewMenuBtn.addEventListener("click", () => {
  document.getElementById("about").classList.add("hidden");
  menuCategories.classList.remove("hidden");
});

document.querySelectorAll(".category").forEach((btn) => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    showMenu(cat);
  });
});

backBtn.addEventListener("click", () => {
  menuItems.classList.add("hidden");
  menuCategories.classList.remove("hidden");
});

function showMenu(category) {
  menuCategories.classList.add("hidden");
  menuItems.classList.remove("hidden");
  menuTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  itemsContainer.innerHTML = "";

  const items = menu[category];
  if (!items) {
    itemsContainer.innerHTML = "<p>Menu coming soon...</p>";
    return;
  }

  items.forEach((i) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<h3>${i.name}<span>${i.price}</span></h3><p>${i.desc}</p>`;
    itemsContainer.appendChild(div);
  });
}
