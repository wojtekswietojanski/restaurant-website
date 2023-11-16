const menu_btn = document.querySelector(".hamburgerContainer");
const mobile_menu = document.querySelector(".hamburgerNav");
const basketContainer = document.querySelector(".basketContainer");
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  document.body.classList.toggle("hamburgerNavActive");
});

const basketOpen = document.querySelector(".basket");
basketOpen.addEventListener("click", function () {
  navigation.style.display = "none";
  basketContainer.classList.toggle("open");
  center(basketContainer);
});

const closeBasket1 = document.querySelector("#continueShopping");
closeBasket1.addEventListener("click", function () {
  navigation.style.display = "flex";
  basketContainer.classList.toggle("close");
  basketContainer.classList.remove("open");
});

const closeBasket = document.querySelector("#closeBasket");
closeBasket.addEventListener("click", function () {
  navigation.style.display = "flex";
  basketContainer.classList.toggle("close");
  basketContainer.classList.remove("open");
});

const input = document.querySelector("#Code");
const addPromo = document.querySelector("#addPromo");

addPromo.addEventListener("click", function () {
  window.alert("promocja zakładając że działa została naliczona");
});

function btn() {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  document.body.classList.toggle("hamburgerNavActive");
}
var dayOfTheWeek = new Date().getDay();
const weekBtn = document.querySelector("#openingHours");
const week = document.querySelector(".week");
const contactTemplate = document.querySelector(".contactTemplate");
ponCzw = [1, 2, 3, 4];
if (dayOfTheWeek in ponCzw) {
  weekBtn.textContent = "dzisiaj 10:00-22:00 ▲";
} else if (dayOfTheWeek == 5 || dayOfTheWeek == 6) {
  weekBtn.textContent = "dzisiaj 10:00-22:00 ▲";
} else {
  weekBtn.textContent = "dzisiaj 10:00-20:00 ▲";
}

function weekOpen() {
  week.classList.toggle("block");
  contactTemplate.classList.toggle("height");
}

pizza = document.querySelector(".menuPizza");
pasta = document.querySelector(".menuPasta");
drinks = document.querySelector(".menuDrinks");

function showPizza() {
  pizza.style.display = "grid";
  pasta.style.display = "none";
  drinks.style.display = "none";
}

function showPasta() {
  pizza.style.display = "none";
  pasta.style.display = "grid";
  drinks.style.display = "none";
}

function showDrinks() {
  pizza.style.display = "none";
  pasta.style.display = "none";
  drinks.style.display = "grid";
}

showPizza();

foto0 = document.querySelector(".fotoContainer0");
foto1 = document.querySelector(".fotoContainer1");
foto2 = document.querySelector(".fotoContainer2");

foto0.style.display = "none";
foto1.style.display = "block";
foto2.style.display = "none";

fotoTab = [foto0.style.display, foto1.style.display, foto2.style.display];
fotoTab1 = ["none", "block", "none"];
fotoLength = fotoTab.length;

function currentFoto() {
  for (i in fotoTab) {
    if (fotoTab1[i] == "block") {
      return i;
    }
  }
}

function prevFoto() {
  z = currentFoto();
  for (i in fotoTab1) {
    fotoTab1[i] = "none";
  }
  if (z != 0) {
    fotoTab1[z - 1] = "block";
  } else {
    fotoTab1[2] = "block";
  }
  foto0.style.display = fotoTab1[0];
  foto1.style.display = fotoTab1[1];
  foto2.style.display = fotoTab1[2];
}

function nextFoto() {
  z = currentFoto();
  h = z + 1;
  for (i in fotoTab1) {
    fotoTab1[i] = "none";
  }
  if (z == 0) {
    fotoTab1[1] = "block";
  } else if (z == 1) {
    fotoTab1[2] = "block";
  } else {
    fotoTab1[0] = "block";
  }

  foto0.style.display = fotoTab1[0];
  foto1.style.display = fotoTab1[1];
  foto2.style.display = fotoTab1[2];
}

const peperoni = document.querySelector("#Peperoni38zł");
const capriciosa = document.querySelector("#Capriciosa36zł");
const margheritta = document.querySelector("#Margheritta32zł");
const bianco = document.querySelector("#Bianco36zł");
const marinara = document.querySelector("#Marinara28zł");
const pesto = document.querySelector("#Pesto32zł");
const bolongese = document.querySelector("#Bolongese36zł");
const risotto = document.querySelector("#Risotto32zł");
const woda = document.querySelector("#Woda8zł");
const wino = document.querySelector("#Winoczerwone20zł");
const sok = document.querySelector("#Sok8zł");
const basket = document.querySelector(".basket");

var deliveryCost = 0;
var quantity = 0;
var suma = 0;
let nameOfItem = "";
let idIndex = 0;
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function remove(id) {
  let elementToRemove = document.getElementById(id);
  if (elementToRemove) {
    suma -= parseFloat(elementToRemove.dataset.price);
    quantity -= 1;
    basket.textContent = "Koszyk:" + quantity;
    parent.removeChild(elementToRemove);
  } else {
    console.error("Element with ID " + id + " not found.");
  }
}

function buttonListner(xyz) {
  xyz.addEventListener("click", function () {
    z = xyz.id * -1;
    remove(z);
  });
}

function buttonWork(name) {
  name.addEventListener("click", function () {
    id = name.id;
    let price = "";
    for (i in id) {
      if (id[i] in num) {
        price += id[i];
      } else {
        nameOfItem += id[i];
      }
    }

    suma += parseFloat(price);
    quantity += 1;
    idIndex += 1;
    idIndexMinus = idIndex * -1;
    basket.textContent = "Koszyk:" + quantity;
    basketRemove = document.createElement("button");
    basketRemove.classList.add("basketRemove");
    basketRemove.textContent = "usuń";
    basketRemove.setAttribute("id", idIndexMinus);
    ItemInBasket = document.createElement("div");
    ItemInBasket.textContent = nameOfItem + " " + price;
    ItemInBasket.appendChild(basketRemove);
    ItemInBasket.setAttribute("id", idIndex);
    parent.appendChild(ItemInBasket);
    nameOfItem = "";
    ItemInBasket.dataset.price = price;
    buttonListner(basketRemove);
  });
}

buttonWork(peperoni);
buttonWork(capriciosa);
buttonWork(margheritta);
buttonWork(bianco);
buttonWork(marinara);
buttonWork(pesto);
buttonWork(bolongese);
buttonWork(risotto);
buttonWork(woda);
buttonWork(wino);
buttonWork(sok);

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

const navigation = document.querySelector(".navigation");

center(basketContainer);
center(navigation);

const parent = document.querySelector(".basketContent");

function center(element) {
  let elementWidth = element.offsetWidth;
  let margin = (getWidth() - elementWidth) / 2;
  element.style.marginLeft = margin + "px";
}

addEventListener("resize", function () {
  center(basketContainer);
  center(navigation);
});

const priceElement = document.createElement("p");
parent.appendChild(priceElement);

priceElement.classList.add("priceElement");
function showPrice() {
  let x = 0;
  x += suma;
  x += deliveryCost;
  priceElement.textContent = "Należnośc: " + x;
}

function delivery() {
  deliveryCost = 10;
}
function takeAway() {
  deliveryCost = 0;
}

interwal = setInterval(showPrice, 50);

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const navBar = document.querySelector("#view");

function isNav() {
  if (isElementInViewport(navBar)) {
    console.log("widze");
  } else {
    console.log("nie widze");
  }
}
