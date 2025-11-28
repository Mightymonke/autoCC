Game.registerMod("myAutobuy", {
    init: function () {
        console.log("myAutobuy loaded!");

        setInterval(() => {
            // Find all price elements
            const prices = document.querySelectorAll('.price');

            prices.forEach(p => {
                const color = getComputedStyle(p).color;

                // Check for bright green
                if (color === 'rgb(0, 255, 0)') {

                    // Look upward for the clickable building div
                    const product = p.closest('.product');
                    if (product) {
                        product.click();  // THIS is the real buy action
                    }
                }
            });
        }, 250);
    }
});
