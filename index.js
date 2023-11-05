const fs = require('fs');

class ProductManager{
    constructor(fileName){
        this.products=[];
        this.productsId = 1;
        this.fileName = fileName;
        if (fs.existsSync(fileName)) {
            try {
              let products = fs.readFileSync(fileName, "utf-8");
              this.products = JSON.parse(products);
            } catch (error) {
              this.products = [];
            }
          } else {
            this.products = [];
          }
        }

    addProduct(product) {
        let aux = true;
        if (product.code === undefined) {
            console.log("Error. Product code is not valid");
            return aux = false;
        }
    
        if (this.products.some(storedProduct => storedProduct.code === product.code)) {
            console.log("Error. Product with that code already exists");
            return aux=false;
        }
    
        if (product.description == undefined || product.description === '') {
            console.log("Error. Product description is not valid");
            return aux=false;
        }
        if (product.title == undefined || product.title === '') {
            console.log("Error. Product title is not valid");
            return aux=false;
        }
        if (product.price <= 0 || product.price == undefined) {
            console.log("Error. Product price is not valid");
            return aux=false;
        }
        if (product.thumbnail == undefined || product.thumbnail === '') {
            console.log("Error. Product thumbnail is not valid");
            return aux=false;
        }
        if (product.stock <= 0 || product.stock == undefined) {
            console.log("Error. Product stock is not valid");
            return aux=false;
        }
        if(aux==true){
            product.id = this.productsId;
            this.productsId++;
            this.products.push(product);
            console.log("Product added successfully");
        }
    }
    
    async saveFile(data) {
        try 
        {
          await fs.promises.writeFile(
            this.fileName,
            JSON.stringify(data, null, "\t")
          );
          return true;
        } 
        catch (error) 
        {
          console.log(error);
          return false;
        }
      }

    async getProducts(){
        return this.products;
    }

    async getProductById(id){
        let auxProd = null;
        this.products.forEach(product => {
            if (product.id==id){
                auxProd=product;
            }
        });
        if(auxProd==undefined){
            return console.log("Not Found");
        }
        else{
            return auxProd;
        }
    }
}

class Product{
    constructor(code,title,description,price,thumbnail,stock){
        this.code=code;       
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.stock=stock;
    }
}

let testManager = new ProductManager("./products.json");