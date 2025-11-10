function getAllProducts() {
  // * URL: https://ecommerce.routemisr.com/api/v1/products
  // * Method: GET

  var myRequest = new XMLHttpRequest();
  myRequest.open("GET", "https://ecommerce.routemisr.com/api/v1/products");
  myRequest.send();

  myRequest.addEventListener("readystatechange", function () {
    if (myRequest.readyState === 4) {
      if (myRequest.status === 200) {
        var response = JSON.parse(myRequest.response);
        console.log(response);
        displayAllProducts(response.data)
      }
    }
  });
}

function displayAllProducts(arr) {
  var productsCardsHTML = "";

  for (var i = 0; i < arr.length; i++) {
    productsCardsHTML += ` 
          <div class="col-md-6 col-lg-3">
            <div class="product-card">
              <div class="badge">Hot</div>
              <div class="product-tumb">
                <img src="${arr[i].imageCover}" alt="" />
              </div>
              <div class="product-details">
                <span class="product-catagory">${arr[i].category.name}</span>
                <h4><a href="">${arr[i].title}</a></h4>
                <p>
                  ${arr[i].description}
                </p>
                <div class="product-bottom-details">
                  <div class="product-price">${arr[i].price} L.E</div>
                  <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  }

  document.querySelector(".row").innerHTML = productsCardsHTML;
}

getAllProducts();
