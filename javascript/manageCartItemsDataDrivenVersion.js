document.addEventListener('DOMContentLoaded', function() {
    const confirmBuyButton = document.getElementById('buttonConfirmPurchase');
    confirmBuyButton.addEventListener('click', function(){
        alert("This is not a real shop. Please do not try to shop here.");
    })
});



// Jag använder här ett "module pattern", även om jag inte behöver någon funktion som endast returnerar en produkt.
// Anledningen är att jag vill komma ihåg att jag stött på module pattern om jag har chans att använda det i framtiden.
const ProductManager = (function() {
    const products = [
        {
            name: "Chesscolate",
            id: "Chesscolate",
            price: 9.00,
            image: "../images/chesscolate.jpg",
            alt: "Box of Chesscolate - chocolates with chess theme.",
            experience: `
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa accusamus ut aut, illo minima eius labore repellendus consequatur nostrum doloremque aliquam perspiciatis modi rerum minus praesentium odio voluptatem debitis.
                </p>
                <ul>
                    <li>Smarter</li>
                    <li>More Friends</li>
                    <li>Delicious</li>
                    <li>No Carbon Footprint</li>
                </ul>`,
            description: "Chesscolate is our premium chess-themed chocolate assortment...",
            features: ["Smarter", "More Friends", "Delicious", "No Carbon Footprint"],
            buttonId: "buttonAddChesscolateToCart",
            table: {
                measurements: {
                    weight: "450 g",
                    height: "5 cm",
                    width: "35 cm",
                    length: "15 cm"
                },
                performance: {
                    harddrive: "32 chocolate pieces",
                    ram: "64 bits",
                    processor: "1 Hz"
                }
            }

        },
        {
            name: "ChessGlasses",
            id: "ChessGlasses",
            price: 2.00,
            image: "../images/chessglasses.jpg",
            alt: "Chess glasses - sunglasses with chess theme.",
            experience: `
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa accusamus ut aut, illo minima eius labore repellendus consequatur nostrum doloremque aliquam perspiciatis modi rerum minus praesentium odio voluptatem debitis.
                </p>
                <ul>
                    <li>Don't think while playing chess</li>
                    <li>More Enemies</li>
                    <li>Look smart while being dumb</li>
                    <li>64 core processor</li>
                </ul>`,
            description: "Chess glasses make you look smart but feel dumb...",
            features: ["Don't think while playing chess", "More Enemies", "Look smart while being dumb", "64 core processor"],
            buttonId: "buttonAddChessGlassesToCart",
            table: {
                measurements: {
                    weight: "200 g",
                    height: "5 cm",
                    width: "12 cm",
                    length: "14 cm"
                },
                performance: {
                    harddrive: "64 GB",
                    ram: "8 billion chess combinations",
                    processor: "10 GHz"
                }
            }
        },
        {
            name: "NerdGlasses",
            id: "NerdGlasses",
            price: 5.00,
            image: "../images/chessglasses2.jpg",
            alt: "Sunglasses for nerds - includes nerdy case.",
            experience: `
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa accusamus ut aut, illo minima eius labore repellendus consequatur nostrum doloremque aliquam perspiciatis modi rerum minus praesentium odio voluptatem debitis.
                </p>
                <ul>
                    <li>Look even Smarter</li>
                    <li>Get Less Friends</li>
                    <li>Intimidate opponents</li>
                    <li>No Carbon Footprint</li>
                </ul>`,
            description: "Look even smarter with nerdy sunglasses...",
            features: ["Look even Smarter", "Get Less Friends", "Intimidate opponents", "No Carbon Footprint"],
            buttonId: "buttonAddNerdGlassesToCart",
            table: {
                measurements: {
                    weight: "300 g",
                    height: "5 cm",
                    width: "10 cm",
                    length: "5 cm"
                },
                performance: {
                    harddrive: "64 TB",
                    ram: "16 trillion chess combinations",
                    processor: "5000 GHz"
                }
            }
        }
    ];

    return {
        getAllProducts: function() {
            return products;
        },
        
        // Hämta en specifik produkt mha ID.
        getProductById: function(id) {
            return products.find(product => product.id === id);
        }
        
        // Här kan man lägga till fler funktioner om man vill.
    };
})();

function manageProductsAndCart(){
    
    const products = ProductManager.getAllProducts();

    const cart = [];

    function generateProducts(){
        const section = document.getElementById('sectionAllProducts');

        products.forEach(product => {
            
            let productHTML = `
                <section class="bg-light text-dark p-5 text-center text-sm-start">
                    <div class="container">
                        <div class="d-sm-flex align-items-start justify-content-between">
                            <div class="col-sm-6 col-md-3">
                                <img src="${product.image}" class="img-fluid" alt="${product.alt}" style="width: 100%; max-width: 300px; margin-bottom: 15px;"/>

                                <div class="d-flex flex-column flex-sm-row gap-3 align-items-center mt-3">
                                    <div class="price-container">
                                        <p class="price">$${product.price.toFixed(2)}</p>
                                    </div>
                                    <div class="button-container">
                                        <button id="${product.buttonId}" class="btn btn-primary btn-lg  buy-button" alt="Click this button to add Chesscolate to cart">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="col-sm-6 col-md-9" style="padding-left: 5%;">
                                <h1>${product.name}</h1>
                                <h2>User experience</h2>
                                <p>${product.experience}</p>
                                
                                <p><a href="#" id="link${product.name}ReadMore">Read more...</a></p>
                                

                                <!-- Hidden content that will be shown when "Read more" is clicked -->
                                <div id="hidden${product.name}Content" style="display: none;">
                                    <h3>Product description</h3>
                                    <p>${product.description}</p>
                                    
                                    <h3>Technical details</h3>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th colspan="2">Measurements</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Height</td>
                                                <td>${product.table.measurements.height}</td>
                                            </tr>
                                            <tr>
                                                <td>Width</td>
                                                <td>${product.table.measurements.width}</td>
                                            </tr>
                                            <tr>
                                                <td>Length</td>
                                                <td>${product.table.measurements.length}</td>
                                            </tr>
                                            <tr>
                                                <td>Weight</td>
                                                <td>${product.table.measurements.weight}</td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th colspan="2">Performance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hard drive</td>
                                                <td>${product.table.performance.harddrive}</td>
                                            </tr>
                                            <tr>
                                                <td>RAM</td>
                                                <td>${product.table.performance.ram}</td>
                                            </tr>
                                            <tr>
                                                <td>Processor speed</td>
                                                <td>${product.table.performance.processor}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <p><a href="#" id="link${product.name}ReadLess" >Read less</a></p>
                                </div>
                                <!-- End of hidden ${product.name} content -->

                            </div>
                        </div>
                    </div>
                </section>
                <hr>
            `;

            // console.log(productHTML);

            section.innerHTML += productHTML;

            calcTotalCost();
        });

        // sleepSync(1000);
        /*
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function demo() {
            console.log("Startar...");
            await sleep(1000); // Väntar i 1 sekund
            console.log("Efter 1 sekund");
        }

        demo();
        */

        initializeReadMoreButtons();
    }
    
    // window.onload = generateProducts;

    function initializeAddToCartButtons(){
        products.forEach(product => {
            const button = document.getElementById(product.buttonId);
            if (button) {
                button.addEventListener('click', () => addToCart(product));
            }
        });
    }

    function addToCart(product) {
        
        const existingProduct = cart.find(item => item.id === product.id);
        
        if (!existingProduct) {
            
            cart.push({
                ...product,
                quantity: 1
            });
            
            updateCartDisplay();
        } else {
            // incrementQuantity(product.id);
            alert('This product is already in your shopping cart!');
        }
    }


    function updateCartDisplay() {
        
        const offcanvas = document.getElementById('sidebar');
        
        // Container för produkter i offcanvas.
        const cartItemsContainer = document.getElementById('cartItemsContainer');


        if (cartItemsContainer) {
            // Rensar produkterna i offcanvars
            Array.from(cartItemsContainer.children).forEach(child => {
                if (child.id && (child.id.startsWith('cartItem') || child.id.startsWith('hr'))) {
                    cartItemsContainer.removeChild(child);
                }
            });
        }
        
        // Lägger alla kundvagnens produkter i offcanvas igen.
        cart.forEach(item => {
            const cartItemHtml = `
                <div class="container" id="cartItem${item.id}" style="display: block;">
                    <div class="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-between">
                        <div class="col-lg-2 pe-5 gap-5">
                            <img src="${item.image}" height="100px">
                        </div>
                        <div class="col-lg-7 px-sm-5 px-md-3 px-lg-2" style="padding-left: 5%">
                            ${item.name} - ${item.alt}
                        </div>
                        <div class="col-lg-3 align-items-center justify-content-end">
                            <table style="border: solid 1px black; text-align: center;">
                                <tr>
                                    <td style="width: 30px;"><button id="buttonDecrease${item.id}" type="button" class="bi-dash" aria-label="Remove one item" style="margin: 5px 0px 0px 0px;"></button></td>
                                    <td style="width: 75px;"><span id="number${item.id}" style="font-size: 30px;">${item.quantity}</span></td>
                                    <td style="width: 30px;"><button id="buttonIncrease${item.id}" type="button" class="bi-plus" aria-label="Remove one item" style="margin: 5px 0px 0px 0px;"></button></td>
                                    <td style="width: 30px;"><button id="buttonRemove${item.id}" type="button" class="bi-trash" aria-label="Remove these item(s)" style="margin: 5px 0px 0px 10px;"></button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <hr id="hr${item.id}">
            `;
            
            if (cartItemsContainer) {
                cartItemsContainer.innerHTML += cartItemHtml;
            }
        });
        
        // Lägger till event listeners för kundvagnens knappar
        initializeCartItemButtons();

        // Beräknar totalkostnaden för produkterna i kundvagnen och uppdaterar summan i offcanvas.
        calcTotalCost();
    }

    function calcTotalCost(){
        let currentAmount = 0;
        cart.forEach(item => {
            // currentAmount += item.price * parseInt(document.getElementById(`number${item.id}`).textContent);
            currentAmount += item.price * item.quantity;
        })

        document.getElementById('totalAmount').innerHTML = `Total: $${currentAmount.toFixed(2)}`;
    }

    // Lägger till event listeners för kundvagnens knappar
    function initializeCartItemButtons() {
        
        cart.forEach(item => {
            const increaseButton = document.getElementById(`buttonIncrease${item.id}`);
            if (increaseButton) {
                increaseButton.addEventListener('click', () => incrementQuantity(item.id));
            }
            
            const decreaseButton = document.getElementById(`buttonDecrease${item.id}`);
            if (decreaseButton) {
                decreaseButton.addEventListener('click', () => decrementQuantity(item.id));
            }
            
            const removeButton = document.getElementById(`buttonRemove${item.id}`);
            if (removeButton) {
                removeButton.addEventListener('click', () => removeFromCart(item.id));
            }
        });
    }


    function incrementQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            updateCartItemQuantity(productId);
        }
    }

    function decrementQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            updateCartItemQuantity(productId);
        } else if (item && item.quantity === 1) {
            // Om man har noll av en produkt, så tas den bort ur kundvagnen.
            removeFromCart(productId);
        }
    }

    function removeFromCart(productId) {
        // Varans index i cart-arrayen.
        const index = cart.findIndex(item => item.id === productId);
        
        if (index !== -1) {
            // Tar bort varan ur varukorgen
            cart.splice(index, 1);
            
            // Nu ska varan inte längre visas i kundvagnen.
            updateCartDisplay();
        }
    }

    function updateCartItemQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            const quantityElement = document.getElementById(`number${productId}`);
            if (quantityElement) {
                quantityElement.textContent = item.quantity;
                calcTotalCost();
            }
        }
    }

    window.onload = function(){
        generateProducts();
        initializeAddToCartButtons();
    }

}

manageProductsAndCart();