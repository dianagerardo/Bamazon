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

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    buyItems();
})

function buyItems(){
    connection.query("SELECT * FROM bamazon.products", (err, res) => {
        if(err) throw err;
        // Show the products table
        console.table(res);
        // Ask customer what they want to buy
        connection.end();
    })

}