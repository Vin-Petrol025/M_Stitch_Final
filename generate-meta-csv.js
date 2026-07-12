const fs = require("fs");
const vm = require("vm");

// Read products.js
const code = fs.readFileSync("products.js", "utf8");

// Evaluate it safely
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code + "\nthis.products = products;", sandbox);

const products = sandbox.products;

function csvEscape(str) {
    return `"${String(str).replace(/"/g, '""')}"`;
}

const rows = [];

rows.push([
    "id",
    "title",
    "description",
    "availability",
    "condition",
    "price",
    "link",
    "image_link"
].join(","));

products.forEach(product => {

    const price = product.price.replace(/[^0-9]/g, "");

    rows.push([
        product.id,
        csvEscape(product.name),
        csvEscape(product.description),
        product.inStock ? "in stock" : "out of stock",
        "new",
        `${price} PKR`,
        `https://mstitch.pk/product?id=${product.id}`,
        `https://mstitch.pk/${encodeURI(product.image)}`
    ].join(","));

});

fs.writeFileSync("meta_catalog.csv", rows.join("\n"));

console.log("✅ meta_catalog.csv created!");