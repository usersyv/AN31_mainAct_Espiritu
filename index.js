// declaring the store infor as variable
const storeName = "Alt F4 Hub";
const storeLocation = "Alabang, Muntinlupa City";
let storeCapacity = 100;

// Product Array to store the products details
let products = [
  { name: "Laptop", price: 18999, quantity: 20 },
  { name: "Smartphone", price: 9999, quantity: 50 },
  { name: "Tablet", price: 12999, quantity: 30 }
];

// Display Menu Options
console.log('MAIN MENU');
console.log('1. View Products');
console.log('2. Add Products');
console.log('3. Remove Products');
console.log('4. View Most Expensive Product');
console.log('5. View Total Inventory Value');

// Get User Input for Menu Option
let userInput = parseInt(prompt('Enter your number (1-5): '));

// if else statement for menu
if (userInput === 1) {
    viewProducts();
} else if (userInput === 2) {
    addProduct();
} else if (userInput === 3) {
    removeProduct();
} else if (userInput ===  4) {
    console.log(`Most Expensive Product: ${getMostExpensiveProduct()}`);
} else if (userInput === 5) {
    console.log(`Total Inventory Value: ${calculateTotalInventoryValue()}`);
} else {
    console.log('Invalid Value');
}

// Function to View Products
function viewProducts() {
    console.log("Current Products in Inventory:");
    
    for (let i = 0; i < products.length; i++) {
        console.log(`Name: ${products[i].name}, Price: ${products[i].price}, Quantity: ${products[i].quantity}`);
    }
}

// Function to Check Inventory Capacity
function checkInventoryCapacity() {
    let totalNumberOfProducts = products.reduce((total, product) => total + product.quantity, 0);
    if (totalNumberOfProducts <= storeCapacity) {
        console.log('You are within the Store Capacity');
    } else {
        console.log('You have exceeded the Store Capacity, please remove some items.');
    }
}

// Function to Add Products
function addProduct() {
    let newProductName = prompt("Enter new product name:");
    let newProductPrice = parseFloat(prompt("Enter price of the new product:"));
    let newProductQuantity = parseInt(prompt("Enter the quantity of the new product:"));

    let totalNumberOfProducts = products.reduce((total, product) => total + product.quantity, 0) + newProductQuantity;

    if (totalNumberOfProducts > storeCapacity) {
        console.log('WARNING: You cannot add this product! You will exceed the Store Capacity');
        return;
    }

    products.push({ name: newProductName, price: newProductPrice, quantity: newProductQuantity });
    console.log(`Product Added: Name: ${newProductName}, Price: ${newProductPrice}, Quantity: ${newProductQuantity}`);
}

// Function to Remove Products
function removeProduct() {
    let removeProductName = prompt("Enter the name of the product to remove:");
    let removeQuantity = parseInt(prompt("Enter the quantity to remove:"));

    let product = products.find(product => product.name === removeProductName);

    if (!product) {
        console.log("WARNING: Product not found!");
        return;
    }

    if (product.quantity < removeQuantity) {
        console.log("WARNING: Not enough stock to remove the specified quantity!");
        return;
    }

    product.quantity -= removeQuantity;
    console.log(`Removed: ${removeQuantity} units of ${removeProductName}.`);
}

// Function to Get the Most Expensive Product
function getMostExpensiveProduct() {
    let expensiveProduct = products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    return expensiveProduct.name;
}

// Function to Calculate Total Inventory Value
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

// Output Store Details and Inventory Summary
console.log(`Store: ${storeName}`);
console.log(`Located at: ${storeLocation}`);
console.log();
console.log(`Total Number of Product Types: ${products.length}`);
console.log();
console.log();