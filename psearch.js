const mynewProduct = [
    {
        name: "New Bag",
        prize: 50,
        productImg: "bag.png",
        category: "bag",
        discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo suscipit, culpa fuga adipisci eum molestias aut vitae"
    },
    {
        name: "New Shoe",
        prize: 60,
        category: "shoe",
        productImg: "shoes.png",
        discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo suscipit, culpa fuga adipisci eum molestias aut vitae",
    },
    {
        name: "New Watch",
        prize: 90,
        category: "watch",
        productImg: "watch.png",
        discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo suscipit, culpa fuga adipisci eum molestias aut vitae",
    },
    {
        name: "New Watch",
        prize: 90,
        category: "watch",
        productImg: "watch.png",
        discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo suscipit, culpa fuga adipisci eum molestias aut vitae",
    },
    {
        name: "samsung",
        prize: 400,
        category: "mobile",
        productImg: "watch.png",
        discription: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo suscipit, culpa fuga adipisci eum molestias aut vitae",
    },



]

// search function
const searchInputval = document.querySelector("#pnsearch");

searchInputval.addEventListener("keyup", (e) => {

    const searchvalue = e.target.value.toLowerCase();
    let searchItemarr = newSearchFun(mynewProduct, searchvalue);


    showAllNewproduct(searchItemarr);

})
function newSearchFun(mynewProduct, searchtext) {
    let newArray = [];
    for (const val of mynewProduct) {
        if (val.name.toLowerCase().includes(searchtext)) {
            newArray.push(val);

        }

    }

    return newArray;


}
// search function





// category function

const productCat = document.querySelector('.product-category');

productCat.addEventListener('click', (e) => {
    if (e.target.classList.contains('cat-item')) {
        productCat.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const clickCat = categoryFun(mynewProduct, e.target.innerText);
        showAllNewproduct(clickCat);

    }

})

function categoryFun(mynewProduct, clickText) {
    let newCat = [];
    if (clickText === "All") {
        for (const val of mynewProduct) {

            newCat.push(val)

        }

    } else {
        for (const val of mynewProduct) {
            if (val.category.toLowerCase().includes(clickText.toLowerCase())) {
                newCat.push(val)

            }

        }

    }

    return newCat;

}

// category function



// category items
function categoryItems(allproduct) {
    const removeDuplicate = [];
    for (const val of allproduct) {
        if (removeDuplicate.indexOf(val.category) == -1) {
            removeDuplicate.push(val.category);
        }

    }

    const productCat = document.querySelector('.product-category');

    for (const value of removeDuplicate) {
        let catItem = `
        <span class="cat-item">${value}</span>
        `;
        productCat.innerHTML += catItem;
    }

}
categoryItems(mynewProduct);
// category items



// showProduct
showAllNewproduct(mynewProduct);
function showAllNewproduct(product) {
    const allnewProShow = document.querySelector('.new-package-list');
    if (product.length === 0) {
        allnewProShow.innerHTML = "<p>no item matches ,try another keyword</p>";
    } else {
        allnewProShow.innerHTML = "";
        for (const value of product) {
            let productItem = `
            <div class="package-list">
                        <div class="add-card">
                            <a href="">
                                <i class='bx bx-cart'></i>
                            </a>
                            <a href="">
                                <i class='bx bx-heart'></i>
                            </a>
                            <a href="">
                                <i class='bx bx-list-ul'></i>
                            </a>
    
    
                        </div>
                        <div class="package-image">
                            <img src="${value.productImg}" alt="">
                        </div>
                        <div class="package-dis">
                            <p>${value.name}</p>
                            <p>${value.prize}<span>$</span></p>
                        </div>
                        <p>${value.discription}
                        </p>
                        <button>Bye Now</button>
    
    
                    </div>
            `;
            allnewProShow.innerHTML += productItem;


        }


    }


}
// showProduct



// localStorage.setItem("newproduct", JSON.stringify(mynewProduct))

