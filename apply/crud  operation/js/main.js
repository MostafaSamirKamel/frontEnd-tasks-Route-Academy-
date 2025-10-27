// HTML Elements
var productName = document.getElementById("name");
var productCategory = document.getElementById("category");
var productPrice = document.getElementById("price");
var productDescription = document.getElementById("description");
var productImg = document.getElementById("file");
var productCardsRow = document.getElementById("productCardsRow");
var searchInput = document.getElementById("searchInput");

// App variable
var productList = [];

// get products from localStorage
if (localStorage.getItem('productList') !== null) {
    productList = JSON.parse(localStorage.getItem('productList'));
    displayAllProduct();
} else {
    productList = [];
}

// Global flags
var indexFlag = -1;
var lastUpdatedCard = null;
var lastImgSrc = null;

// Functions
function addProduct() {

    // Validation
    if (
        productName.value.trim() === "" ||
        productCategory.value.trim() === "" ||
        productPrice.value.trim() === "" ||
        productDescription.value.trim() === "" ||
        (indexFlag === -1 && productImg.files.length === 0)
    ) {
        alert("Please fill in all fields before adding product");
        return;
    }

    // If in update mode
    if (indexFlag !== -1) {
        productList[indexFlag].name = productName.value;
        productList[indexFlag].category = productCategory.value;
        productList[indexFlag].price = productPrice.value;
        productList[indexFlag].description = productDescription.value;

        if (productImg.files.length > 0) {
            productList[indexFlag].imgName = productImg.files[0].name;
        }

        localStorage.setItem("productList", JSON.stringify(productList));

        displayAllProduct();

        
        lastUpdatedCard = document.getElementById("updateBtn");
        if (lastUpdatedCard) {
            lastUpdatedCard.scrollIntoView({ behavior: "smooth", block: "end" });
        }

        // Reset form
        document.getElementById("addBtn").innerText = "Add Product";
        clearForm();
        indexFlag = -1;
        return;
    }

    // Create new product
    var newProduct = {
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value,
        description: productDescription.value,
        imgName: productImg.files[0].name
    };


    productList.push(newProduct);
    localStorage.setItem('productList', JSON.stringify(productList));

    displayProduct(productList.length - 1);
    clearForm();
}

function displayProduct(index) {
    var productCard = `
    <div class="col-sm-6 col-lg-3">
      <div class="card h-100 text-bg-dark border-dark">
        <img
          src="./img/${productList[index].imgName}"
          alt="${productList[index].name}"
          class="card-img-top object-fit-contain"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${productList[index].name}</h5>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="text-body-secondary">
              <i class="fa-solid fa-tags me-1"></i>${productList[index].category}
            </span>
            <span class="fw-semibold text-body-secondary">${productList[index].price} L.E</span>
          </div>
          <p class="card-text text-secondary flex-grow-1">
            ${productList[index].description}
          </p>
          <div class="d-flex gap-2">
            <button class="btn btn-outline-warning w-100" id="updateBtn" onclick="updateProduct(${index})">Update</button>
            <button class="btn btn-outline-danger w-100" onclick="deleteProduct(${index})">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
    productCardsRow.innerHTML += productCard;
}

function displayAllProduct() {
    productCardsRow.innerHTML = "";
    for (var i = 0; i < productList.length; i++) {
        displayProduct(i);
    }
}

function updateProduct(index) {
    productName.value = productList[index].name;
    productCategory.value = productList[index].category;
    productPrice.value = productList[index].price;
    productDescription.value = productList[index].description;

    indexFlag = index;
    lastUpdatedCard = document.getElementById("productCard-" + index);

    document.getElementById("addBtn").innerText = "Save Update";
    window.scrollTo({ top: 0, behavior: "smooth" });
    productName.focus();
}

function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayAllProduct();
}

function clearForm() {
    productName.value = "";
    productCategory.value = "";
    productPrice.value = "";
    productDescription.value = "";
    productImg.value = "";
}


function searchProduct(){
  var searchKey = searchInput.value.toLowerCase().trim();
  productCardsRow.innerHTML = "";

  for (var i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes(searchKey) ) {
      displayProduct(i);
    }
  }
}