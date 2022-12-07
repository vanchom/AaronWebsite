// Menu Mobile

const NavbarMobile = document.querySelector(".navbar__menu-mobile").addEventListener("click" , toggleMobileMenu);
const navbarMenu = document.querySelector(".navbar__menu-list");

function toggleMobileMenu () {
    navbarMenu.classList.toggle("active");

}
// services on landing page

const extensionBox = document.getElementById("extensionBox");
const extensionBoxBackground = document.getElementById("extensionBoxBackground");
 
const kitchenBox = document.getElementById("kitchenBox");
const kitchenBoxBackground = document.getElementById("kitchenBoxBackground");

const bathroomBox = document.getElementById("bathroomBox");
const bathroomBoxBackground = document.getElementById("bathroomBoxBackground");

const loftBox = document.getElementById("loftBox");
const loftBoxBackground = document.getElementById("loftBoxBackground");

const paintingBox = document.getElementById("paintingBox");
const paintingBoxBackground = document.getElementById("paintingBoxBackground");

const groundworkBox = document.getElementById("groundworkBox");
const groundworkBoxBackground = document.getElementById("groundworkBoxBackground");

// variables
// Extension
const extension = document.getElementById("extensionBox").addEventListener("mouseover" , titleExtension);
const extensionOut = document.getElementById("extensionBox").addEventListener("mouseout" , titleOut);

const extensionTitle = document.getElementById("extension-title");

// Kitchen
const kitchen = document.getElementById("kitchenBox").addEventListener("mouseover" , titleKitchen);
const kitchenOut = document.getElementById("kitchenBox").addEventListener("mouseout" , titleOut);

const kitchenTitle = document.getElementById("kitchen-title");

// Bathroom
const bathroom = document.getElementById("bathroomBox").addEventListener("mouseover" , titleBathroom);
const bathroomOut = document.getElementById("bathroomBox").addEventListener("mouseout" , titleOut);

const bathroomTitle = document.getElementById("bathroom-title");

// Loft
const loft = document.getElementById("loftBox").addEventListener("mouseover" , titleLoft);
const loftOut = document.getElementById("loftBox").addEventListener("mouseout" , titleOut);

const loftTitle = document.getElementById("loft-title");

// Painting
const painting = document.getElementById("paintingBox").addEventListener("mouseover" , titlePainting);
const paintingOut = document.getElementById("paintingBox").addEventListener("mouseout" , titleOut);

const paintingTitle = document.getElementById("painting-title");

// Groundwork
const groundwork = document.getElementById("groundworkBox").addEventListener("mouseover" , titleGroundwork);
const groundworkOut = document.getElementById("groundworkBox").addEventListener("mouseout" , titleOut);

const groundworkTitle = document.getElementById("groundwork-title");

// Hover on services on Landing page
// Extension
function titleExtension() {
    extensionTitle.innerHTML = "Extension";
    extensionTitle.style.backgroundColor = "#B58147";
    // extensionBoxBackground.style.backgroundColor = "#EEF0F4";
    extensionBoxBackground.classList.add("largeView");
}

// kitchen
function titleKitchen() {
    kitchenTitle.innerHTML = "Kitchen Fitting";
    kitchenTitle.style.backgroundColor = "#B58147";
    // kitchenBoxBackground.style.backgroundColor = "#EEF0F4";
}

// Bathroom
function titleBathroom() {
    bathroomTitle.innerHTML = "Bathroom Fitting";
    bathroomTitle.style.backgroundColor = "#B58147";
    // bathroomBoxBackground.style.backgroundColor = "#EEF0F4";
}

// Loft
function titleLoft() {
    loftTitle.innerHTML = "Loft";
    loftTitle.style.backgroundColor = "#B58147";
    // kitchenTitle.style.backgroundColor = "#B58147";
}

// Painting
function titlePainting() {
    paintingTitle.innerHTML = "Painting";
    paintingTitle.style.backgroundColor = "#B58147";
    // paintingBoxBackground.style.backgroundColor = "#EEF0F4";
}

// Groundwork
function titleGroundwork() {
    groundworkTitle.innerHTML = "Loft";
    groundworkTitle.style.backgroundColor = "#B58147";
    // groundworkBoxBackground.style.backgroundColor = "#EEF0F4";
}


// Hover out  on services
function titleOut() {
    extensionTitle.innerHTML = " ";
    extensionTitle.style.backgroundColor = "#345995";
    extensionBoxBackground.style.backgroundColor = "#345995";
    kitchenTitle.innerHTML = " ";
    kitchenTitle.style.backgroundColor = "#345995";
    kitchenBoxBackground.style.backgroundColor = "#345995";
    bathroomTitle.innerHTML = " ";
    bathroomTitle.style.backgroundColor = "#345995";
    bathroomBoxBackground.style.backgroundColor = "#345995";
    loftTitle.innerHTML = " ";
    loftTitle.style.backgroundColor = "#345995";
    loftBoxBackground.style.backgroundColor = "#345995";
    paintingTitle.innerHTML = " ";
    paintingTitle.style.backgroundColor = "#345995";
    paintingBoxBackground.style.backgroundColor = "#345995";
    groundworkTitle.innerHTML = " ";
    groundworkTitle.style.backgroundColor = "#345995";
    groundworkBoxBackground.style.backgroundColor = "#345995";
}