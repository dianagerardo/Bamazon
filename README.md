# Bamazon

## Overview

This Command Line Interface (CLI) App is an Amazon-like storefront that takes in orders from customers or allows managers to manage their products. On the customer side, the customer can purchase products, which depletes stock from the store's inventory and shows them the total proce of their purchase. On the manager side, the manager can view all products, view products that have a low inventory, add more inventory to the stock of an existing product, or add a new product completely.

## Instructions (How to use Bamazon App)

* Visual instructions are included in the screenshot folder.

### Customer App

* Since this is a CLI App, open the `bamazonCustomer.js` in terminal. 

    * This will show a table with the items available for purchase. (`bamazonCustomer_for-sale.png`)

        * The table shows the product id, product name, product's department, price and the number of items in stock. 

    * To select an item to purchase, simply type in the product's id.

    * The app will then ask how much of that item you would like to purchase. (`bamazonCustomer_number-items.png`)

        * Type in the number of items you would like to purchase into the terminal. 

        * If there are enough items in the inventory, the app will display a message saying there are enough items, and the purchase will go through. (`bamazonCustomer_enough-items.png`)

        * The app will then show you the total cost of your purchase and then display the updated version of the product table. (`bamazonCustomer_not-enough-items.png`)

- - -

### Manager App

* Since this is a CLI App, open the `bamazonManager.js` in terminal.

    * This should prompt the user with a list of choices. (`BamazonManager_prompt.png`)

        * The manager has the choice to:

              * View Products for Sale

                * This option should display a table with all the items for sale. The table includes the item-ID, product name, price, and quantity in stock. (`BamazonManager_for-sale.png`)

              * View Low Inventory (`BamazonManager_low-inventory.png`)

                * This option should display a table with the item thats have a low inventory. (`BamazonManager_lowInventory.png`)

              * Add to Inventory  (`BamazonManager_add-inventory-prompt.png`)

                * This option shouls display a table with all the items currently available in the store, as well as prompt the manager to input an item ID in order to add more of that item. (`BamazonManager_added-inventory.png`)

                * After inputting the item ID, then the manager will be prompted to input the number of items they would like to add to the inventory.

                * When the manager is done adding the item, the app should display the table with the updated number of items.

              * Add New Product(`BamazonManager_added-new-item.png`)

                * This option should prompt the manager for the name of the item they would like to add. 

                * After adding the name, the app will also prompt the manager for the item's department, price and quantity in stock.

                * After adding the new item, the app will show the table with the updated items for sale.

- - - 

## Instructions on how to create the app:

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.

   * This means updating the SQL database to reflect the remaining quantity.
   
   * Once the update goes through, show the customer the total cost of their purchase.

- - -

### Challenge #2: Manager View (Next Level)

* Create a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

- - -
