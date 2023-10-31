class ProductManager{
    constructor(){
        this.products=[];
        this.productsId = 1;
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
    

    getProducts(){
        return this.products;
    }

    getProductById(id){
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
