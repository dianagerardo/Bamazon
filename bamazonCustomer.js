let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    buyItems()
})

function buyItems() {
    connection.query("SELECT * FROM bamazon.products", (err, res) => {
        if (err) throw err;
        // Show the products table
        // console.table(res);
        // console.log(res[0].product_name, res[0].price);

        // function itemList() {
        //     for (let i = 0; i < res.length; i++) {
        //         console.log(res[i].product_name, res[i].price)
        //     }
        // }
        console.log(`Here are the items available for sale:`);
        console.table(res);
        // Ask customer what they want to buy
        inquirer.prompt([{
            name: "id",
            type: "input",
            message: "What item would you like to buy?",
        },
        {
            name: "quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
        }])
            .then((answer) => {
                // console.log(answer.id)
                // console.log(answer.quantity)
                // console.log(JSON.stringify(res[answer.id-1].stock_quantity));
                let itemID = answer.id;
                let index = answer.id - 1;
                // console.log(index);
                console.log(`You are purchasing ${res[index].product_name}`);

                if (answer.quantity < JSON.stringify(res[index].stock_quantity)) {
                    let newQuantity = res[index].stock_quantity - answer.quantity;
                    // console.log(newQuantity)
                    console.log("Great, there are enough items!")
                    connection.query(`UPDATE bamazon.products
                    SET stock_quantity = ${newQuantity}
                    WHERE item_id = ${itemID}`, (err, res) => {
                        if (err) throw err;
                    })
                    connection.query("SELECT * FROM bamazon.products", (err, res) => {
                        if (err) throw err;
                        console.table(res);
                    })
                    let purchaseCost = answer.quantity * res[index].price;
                    console.log(`The total cost of your purchase is $${purchaseCost}`);

                    connection.end();
                }
                else if (answer.quantity > JSON.stringify(res[answer.id - 1].stock_quantity)) {
                    console.log("Sorry, insufficient quantity.")
                    // connection.end();
                }
                else (console.log("Please enter a quantity"));
                // connection.end();

            });

    })

}