
document.addEventListener('DOMContentLoaded', function() {

    const confirmBuyButton = document.getElementById('buttonConfirmPurchase');
    confirmBuyButton.addEventListener('click', function(){
        alert("This is not a real shop. Please do not try to shop here.");
    })
    

    const chesscolateQuantity = document.getElementById('chesscolateNumber');
    const chesscolateDecreaseButton = document.getElementById('buttonDecreaseChesscolate');
    const chesscolateIncreaseButton = document.getElementById('buttonIncreaseChesscolate');
    const chesscolateRemoveButton = document.getElementById('buttonRemoveChesscolate');
    const chesscolateCartItem = document.getElementById('cartItemChesscolate');


    chesscolateDecreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(chesscolateQuantity.textContent);
        if (currentValue > 0) {
            chesscolateQuantity.textContent = currentValue - 1;
        }
    });

    chesscolateIncreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(chesscolateQuantity.textContent);
        chesscolateQuantity.textContent = currentValue + 1;
    });

    chesscolateRemoveButton.addEventListener('click', function() {
        chesscolateQuantity.textContent = '0';
        chesscolateCartItem.style.display = 'none';
    });


    const chessGlassesQuantity = document.getElementById('chessGlassesNumber');
    const chessGlassesDecreaseButton = document.getElementById('buttonDecreaseChessGlasses');
    const chessGlassesIncreaseButton = document.getElementById('buttonIncreaseChessGlasses');
    const chessGlassesRemoveButton = document.getElementById('buttonRemoveChessGlasses');
    const chessGlassesCartItem = document.getElementById('cartItemChessGlasses');

    chessGlassesDecreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(chessGlassesQuantity.textContent);
        if (currentValue > 0) {
            chessGlassesQuantity.textContent = currentValue - 1;
        }
    });

    chessGlassesIncreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(chessGlassesQuantity.textContent);
        chessGlassesQuantity.textContent = currentValue + 1;
    });

    chessGlassesRemoveButton.addEventListener('click', function() {
        chessGlassesQuantity.textContent = '0';
        chessGlassesCartItem.style.display = 'none';
    });


    const nerdGlassesQuantity = document.getElementById('nerdGlassesNumber');
    const nerdGlassesDecreaseButton = document.getElementById('buttonDecreaseNerdGlasses');
    const nerdGlassesIncreaseButton = document.getElementById('buttonIncreaseNerdGlasses');
    const nerdGlassesRemoveButton = document.getElementById('buttonRemoveNerdGlasses');
    const nerdGlassesCartItem = document.getElementById('cartItemNerdGlasses');

    nerdGlassesDecreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(nerdGlassesQuantity.textContent);
        if (currentValue > 0) {
            nerdGlassesQuantity.textContent = currentValue - 1;
        }
    });

    nerdGlassesIncreaseButton.addEventListener('click', function() {
        let currentValue = parseInt(nerdGlassesQuantity.textContent);
        nerdGlassesQuantity.textContent = currentValue + 1;
    });

    nerdGlassesRemoveButton.addEventListener('click', function() {
        nerdGlassesQuantity.textContent = '0';
        nerdGlassesCartItem.style.display = 'none';
    });



    // Läser in Add-to-cart-knappar
    const  addChesscolateToCartButton = document.getElementById( 'buttonAddChesscolateToCart');
    const addChessGlassesToCartButton = document.getElementById('buttonAddChessGlassesToCart');
    const  addNerdGlassesToCartButton = document.getElementById( 'buttonAddNerdGlassesToCart');

    /*
    addChesscolateToCartButton.addEventListener('click', function(){
        let chesscolateQuantityNum = parseInt(chesscolateQuantity.textContent);
        if(chesscolateQuantityNum == 0 || chessGlassesCartItem.style.display == 'none'){
            chesscolateQuantity.textContent = '1';
            chessGlassesCartItem.style.display = 'block';
        }
    });
    */

    // Add Chesscolate knapp
    addChesscolateToCartButton.addEventListener('click', function() {
        console.log("click")
        const currentQuantity = parseInt(chesscolateQuantity.textContent);
        if(currentQuantity === 0 || chesscolateCartItem.style.display === 'none') {
            console.log("yes");
            chesscolateQuantity.textContent = '1';
            chesscolateCartItem.style.display = 'block';
        }
    });
    
    // Add ChessGlasses knapp
    addChessGlassesToCartButton.addEventListener('click', function() {
        const currentQuantity = parseInt(chessGlassesQuantity.textContent);
        if(currentQuantity === 0 || chessGlassesCartItem.style.display === 'none') {
            chessGlassesQuantity.textContent = '1';
            chessGlassesCartItem.style.display = 'block';
        }
    });
    
    // Add NerdGlasses knapp
    addNerdGlassesToCartButton.addEventListener('click', function() {
        const currentQuantity = parseInt(nerdGlassesQuantity.textContent);
        if(currentQuantity === 0 || nerdGlassesCartItem.style.display === 'none') {
            nerdGlassesQuantity.textContent = '1';
            nerdGlassesCartItem.style.display = 'block';
        }
    });


    function updateTotalAmount(){
        const chesscolatePrice = 9.00;
        const chessGlassesPrice = 2.00;
        const nerdGlassesPrice = 5.00;

        const chesscolateTotal = parseInt(chesscolateQuantity.textContent) * chesscolatePrice;
        const chessGlassesTotal = parseInt(chessGlassesQuantity.textContent) * chessGlassesPrice;
        const nerdGlassesTotal = parseInt(nerdGlassesQuantity.textContent) * nerdGlassesPrice;
        
        const totalAmount = chesscolateTotal + chessGlassesTotal + nerdGlassesTotal;

        console.log(totalAmount);
        
        document.getElementById('totalAmount').textContent = `Total: $${totalAmount.toFixed(2)}`;
    }

    const observer = new MutationObserver((mutations) => {
        updateTotalAmount();
    });

    // Konfigurera observern att lyssna på textContent-ändringar
    const config = { 
        childList: true,      // Lyssna på ändringar i barn-noder
        characterData: true,  // Lyssna på ändringar i text
        subtree: true        // Lyssna på ändringar i hela trädet under noden
    };

    [chesscolateQuantity, chessGlassesQuantity, nerdGlassesQuantity].forEach(element => {
        observer.observe(element, config);
    });

    updateTotalAmount();
});