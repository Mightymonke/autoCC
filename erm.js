Game.registerMod("myAutobuy", {
    init: function () {
        console.log("myAutobuy loaded!");

        // Run every 300ms
        setInterval(() => {

            // Find ANY item (upgrade or building) with bright green text
            const greenItems = document.querySelectorAll('[style*="color: rgb(0, 255, 0)"]');

            // Click all of them
            greenItems.forEach(item => {
                try {
                    item.click();
                } catch (e) {
                    console.log("Autobuy error:", e);
                }
            });

        }, 300);
    }
});