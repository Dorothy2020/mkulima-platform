class Mkulima {
    constructor() {
        this.farms = [];
        this.vendors = [];
        this.products = [];
    }

    addFarm(farmId, farmName, farmer, phoneNumber, address) {
        var farm = {
            farmId: farmId,
            farmName: farmName,
            farmer: farmer,
            phoneNumber: phoneNumber,
            address: address,

        }
        this.farms.push(farm);
        return this.farms
    }

    removeFarm(farmId) {
        let farm = this.getFarm(farmId)
        let index = this.farms.indexOf(farm);
        this.farms.splice(index, 1)
        this.farms[farm]
        return this.farms


    }


    updateFarm(farmId, name, farmer, phoneNumber, address) {
        var farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phoneNumber: phoneNumber,
            address: address,

        }

        this.farms.push(farm);
        return this.farms;
    }

    getFarm(farmId) {
        var farmId = this.farms.find(farmId => farmId.farmId == farmId)
        return this.farms

    };
    addproduct(productId, name, price) {
        var products = {
            productId: productId,
            name: name,
            price: price,

        }
        this.products.push(products);
        return this.products
    }
    removeProduct(productId) {
        let product = this.getProduct(productId);
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
        return this.product
    }
    updateProduct(productId, name, price) {
        var product = {
            productId: productId,
            name: name,
            price: price,

        }
        this.products.push(product);
        return this.products

    }

    getProduct(productId) {
        for (var i = 0; i < this.productId.length; i++) {
            let products = this.product.Product[i];
            if (this.product.productId === [productId]); {
                return this.products;
            }
        }

    }
    printProducts() {
        for(let items of this.products){
            console.log([items.name+" "+items.price])
        }

    }


    calculateOrderCost(productId, quantity) {
        var cost = productId * 3000;
        return cost

    }
}
let mkulima = new Mkulima()
console.log(mkulima.addFarm(22645, "Gayson.ltd", "Wangara","+25471629372", "44"));
console.log(mkulima.addFarm(224567, "Maroon.ltd", "Aketch","+2546543217", "46"))
console.log(mkulima.removeFarm(22645));
console.log(mkulima.updateProduct(6654, "Maize", 20));
mkulima.printProducts()
console.log(mkulima.getFarm(66562));
console.log(mkulima.addproduct("Kamande", "Rassy", 20));
console.log(mkulima.calculateOrderCost(200));









