//Fernando Alfaro 3/4/2025 Revature: grocery shopping tracker app

console.log("Grocery Shopping Tracker\n");

const GROCERY_LIST = [];
let itemId = 1;
// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

function askuserQuestion () {
    rl.question('Please enter grocery name to add to your list\nType "Done" to finish\nType "Remove" to remove item from list: ', (itemName) => {
        if(itemName.toLocaleLowerCase() === "remove"){
            removeitemfromList();
        }
        if(itemName.toLocaleLowerCase() === "done"){
            console.log(GROCERY_LIST);
            rl.close();
            return;
        }
        console.log(itemName + " was added to your grocery list");
        rl.question('Please enter quanity of item: ', (productQuantity)=> {
            console.log("Quantity of " + productQuantity + " has been added to your grocery list");
            rl.question('Please enter price of item: ', (priceofItem) =>{
                console.log("price of " + priceofItem + " has been added to your grocery list")
                rl.question('Was the purchase of ' + itemName + ' completed Yes or No? ' , (statusofPurchase) => {
                    if (statusofPurchase.toLocaleLowerCase() === 'yes'){
                        statusofPurchase = true;
                    }
                    else{
                        statusofPurchase = false;
                        }
        GROCERY_LIST.push({
            id: itemId++,
            name: itemName,
            quantity: parseInt(productQuantity),
            price: parseFloat(priceofItem),
            purchased: statusofPurchase});
        console.log(GROCERY_LIST);
        askuserQuestion();
                });
            });
        });
    });
    }
function removeitemfromList (){
    if(GROCERY_LIST.length === 0){
        console.log("\n List is empty, cannot remove items! ");
        askuserQuestion();
    }
    console.log("\n Current Grocery List")
    console.log(GROCERY_LIST);

    rl.question('\nPlease enter the item ID you would like to remove: ', (itemInputID) => {
    const itemID = parseInt(itemInputID);
    const index = GROCERY_LIST.findIndex((item) => item.id === itemID);
       if (index !== -1){
            const deletedItem = GROCERY_LIST.splice(index, 1);
            console.log("\nItem ID: " + deletedItem + " was removed from the list");
       } 
       else {
        console.log("Error item ID not found in the list");
       }
       
       askuserQuestion();
    });

}    
    askuserQuestion();
rl.once('close', () => {
     // end of input
     console.log("Goodbye");
 });


