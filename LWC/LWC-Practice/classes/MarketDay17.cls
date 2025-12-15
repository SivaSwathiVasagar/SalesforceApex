/**
* Author: 	svasagar
* Date  : 	08/13/2025
* Purpose: created this cls for Product cls as parent cls for Market17 cls as child for day 17 diy Without using Super.
*/

public class MarketDay17 extends ProductDay17{
    private Map<Integer, ProductDay17> productsMap = new Map<Integer, ProductDay17>();
    public List<ProductDay17> productList;
    ProductDay17 singleProduct;
    
    public void addProduct(List<ProductDay17> productList){
        for(ProductDay17 product : productList){
            productsMap.put(product.productCode, product);
        }
        System.debug(productsMap); 
    }
    
    // Display all stock details
    public void displayStocks() {
        System.debug('------ Stock Details ------');
        for (ProductDay17 p : productsMap.values()) {
            System.debug('Code: ' + p.productCode +
                         ', Name: ' + p.productName +
                         ', Price: Rs. ' + p.price +
                         ', Stock: ' + p.stockQuantity +
                         ', Discount: ' + p.discountPercent + '%');
        }
    }
    public void billingMap(Integer code, Integer quantity){
        if (productsMap.containsKey(code)) {
            singleProduct = productsMap.get(code);
            singleProduct.billing(quantity); // Uses ProductDay17's own reorder logic
        }
        else{
            System.debug('Product Not Found');
        }
    }
    public void searchProduct(Integer code) {
        if (productsMap.containsKey(code)) {
            singleProduct = productsMap.get(code);
            singleProduct.searchByCode();  
        }
        else{
            System.debug('Search By Code :: Product Not Found');
        } 	
    }
    public void reorderProductsByCode(Integer code){
        if (productsMap.containsKey(code)) {
            singleProduct = productsMap.get(code);
            singleProduct.reorderProducts();
        }
        else
        {
            System.debug('Reorder by Code :: Product Not Found');
        }
    }
}
/*
// Create a List of products
List<ProductDay17> productList = new List<ProductDay17>{
new ProductDay17(11, 'Wool', 1000, 25, 20),
new ProductDay17(12, 'Cotton', 800, 10, 50),
new ProductDay17(13, 'Silk', 1500, 15, 5)
};

// Create SuperMarket object
MarketDay17 market = new MarketDay17();
market.addProduct(productList);
market.displayStock();
market.billingMap(11,3);
market.reorderProductsByCode(15);
market.searchProduct(15);
*/