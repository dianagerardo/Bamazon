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
    manageItems()
})

function manageItems() {
    inquirer.prompt([{
        name: "manage",
        type: "list",
        message: "What would you like to do?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }
])
        .then((answer) => {
            console.log(answer)
            switch (answer.manage) {
                case "View Products for Sale":
                forSale();
                break;

                case "View Low Inventory":
                lowInventory();
                break;

                case "Add to Inventory":
                addInventory();
                break;

                case "Add New Product":
                addProduct();
                break;
            }
        })
}

function forSale(){
    connection.query("SELECT * FROM bamazon.products", (err, res) => {
        if (err) throw err;
        console.log(`Here are the items available for sale:`);
        console.table(res);
        connection.end();
    })

}

function lowInventory(){

}

function addInventory(){

}

function addProduct(){

}