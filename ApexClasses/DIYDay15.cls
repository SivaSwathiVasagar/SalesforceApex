public class ProductBillingDay7 {
    private Integer productCode;  // we can declare without keyword private too
    private String productName;
    private Integer price;
    private Decimal discountPercent;
    private Integer stockQuantity;
    
    // Constructor
    public ProductBillingDay7(Integer productCode, String productName, Integer price, Decimal discountPercent, Integer stockQuantity){
        this.productCode = productcode;
        this.productName = productName;
        this.price = price;
        this.discountPercent = discountPercent;
        this.stockQuantity = stockQuantity;  
    }
    
    // Calculate billing
    public void billing(Integer quantity){
        // Check for invalid quantity 
        if (quantity <= 0) 
        {
            System.debug('Invalid quantity. Quantity must be greater than zero.');
            return;
        }
        // Check for stock availability
        else if (quantity > this.stockQuantity) 
        {
            System.debug('Insufficient stock. Only ' + this.stockQuantity + ' units available.');
            return;
        }
        // Valid quantity and stock — proceed with billing
        else {
            Integer bill = this.price * quantity;
            Decimal discount = bill * (this.discountPercent/100);
            Decimal finalBill = bill - discount;
            // Bill Summary
            System.debug('Billing successful!');
            System.debug('Product: ' + this.productName);
            System.debug('Quantity: ' + quantity);
            System.debug('Price per unit: Rs. ' + this.price);
            System.debug('Total: Rs. ' + bill);
            System.debug('Discount: Rs. ' + discount);
            System.debug('----------------------------');
            System.debug('Final Bill: Rs. ' + finalBill);
            System.debug('----------------------------');
            
            // Update Stock after ordering
            this.stockQuantity -= quantity;
        }      
    }
    //  Product Search by user specified code
    public void searchByCode(Integer code){
        if (this.productCode == code){
            System.debug('Search Result is... ' + ' Product Name = ' + this.productName + ' | In Stock Quantity = ' + this.stockQuantity);
        }
        else{
            System.debug('Product Not Found');
        } 	 
    }
    // Re-order based on condition
    public void reorderProducts()
    {
        if (this.stockQuantity < 20)
        {
            System.debug('Reordering required - Product ' + this.productName + ' has only ' + this.stockQuantity + ' in stock.');
        }
        else
        {
            System.debug('No Reordering Required');
        }      
    }
}

/*
* ProductBillingDay7 obj = new ProductBillingDay7(11, 'Wool', 1000, 25, 20);
obj.billing(3);
obj.searchByCode(12);
obj.reorderProducts();
*/
