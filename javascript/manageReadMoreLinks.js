function initializeReadMoreButtons() {

    const products = ProductManager.getAllProducts();
    
    console.log("Running initializeReadMoreButtons-function");
    
    products.forEach(product => {
        const productId = product.id;
        
        const readMoreId = `link${productId}ReadMore`;
        const readLessId = `link${productId}ReadLess`;
        const hiddenContentId = `hidden${productId}Content`;
        
        const readMoreLink = document.getElementById(readMoreId);
        const readLessLink = document.getElementById(readLessId);
        const hiddenContent = document.getElementById(hiddenContentId);
        

        if (!readMoreLink || !readLessLink || !hiddenContent) {
            console.warn(`Missing DOM elements for product: ${productId}`);
            return;
        }
        
        // Lägger till event listener för "Read more" länken för product.
        readMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            hiddenContent.style.display = 'block';
            readMoreLink.style.display = 'none';
        });
        
        // Lägger till event listener för "Read less" länken för product. 
        readLessLink.addEventListener('click', function(e) {
            e.preventDefault();
            hiddenContent.style.display = 'none';
            readMoreLink.style.display = 'inline';
        });
        
        console.log(`Added event listeners for product: ${productId}`);
    });
    
    /*
    // Load the cart management script
    document.addEventListener("DOMContentLoaded", function() {
        const script = document.createElement("script");
        script.src = "../javascript/manageCartItems.js";
        script.defer = true;
        document.body.appendChild(script);
        
        script.onload = function() {
            console.log("manageCartItems.js har laddats!");
        };
        
        script.onerror = function() {
            console.error("Fel: kunde inte ladda manageCartItems.js");
        };
    });
    */
}