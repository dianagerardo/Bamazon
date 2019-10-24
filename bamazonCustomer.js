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
        console.log(res[0].product_name, res[0].price)
        // Ask customer what they want to buy
        // inquirer.prompt({
        //     name: "buy",
        //     type: "list",
        //     message:"What item would you like to buy? Please select the item ID",
        //     choices: [
                
        //     ]
        // })
        // .then((answer) => {
            
        // })
        connection.end();
    })

}