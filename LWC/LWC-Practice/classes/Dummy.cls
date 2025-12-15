public virtual class Dummy{
/*{public class SuperMarketMap extends ProductStore 
{
	
	// Constructor in child calling parent constructor
    public SuperMarketMap(String productCode, String productName, Integer productPrice, Integer productStock, Decimal productDiscount)
    {
		super(productCode, productName, productPrice, productStock, productDiscount);
    }
    
	//Intialize Map
	static Map<String,SuperMarketMap> productMap = new map<string,SuperMarketMap>();
    
    //List of Products to intialize
	public static List<SuperMarketMap> ProductList = new List<SuperMarketMap>
    {
		new SuperMarketMap('001','Laptop',50000,35,0.30),
		new SuperMarketMap('002','Moblie Phone',15000,40,0.40),
		new SuperMarketMap('003','Tv',24000,20,0.10)
	};
    
	//Compare the product code and do billing
	public static void billingByMap(String productCode)
		{
			for(SuperMarketMap supermaketrecord :productList)
				{
                	productMap.put(supermaketrecord.productCode,supermaketrecord);
				}
       			if(ProductMap.containsKey(productCode))
                    {
                        ProductMap.get(productCode).billing(2);   
                    }
                else
                    {
                        system.debug('This Product code Does Not Here');
                    }
    	}
    
	//Compare the product code and Reorder products
	public static void reorderProductsByMap(String productCode)
	{
		for(SuperMarketMap supermaketrecord :productList)
			{
                productMap.put(supermaketrecord.productCode,supermaketrecord);
			}
       		if(ProductMap.containsKey(productCode))
            	{
                	ProductMap.get(productCode).reorderProducts();   
                }
            else
            	{
                	system.debug('This Product code Does Not Here');
                }
    }
    
    //Compare the product code and Check the display products
	public static void stockDisplayByMap(String productCode)
	{
		for(SuperMarketMap supermaketrecord :productList)
			{
                productMap.put(supermaketrecord.productCode,supermaketrecord);
			}
       		if(ProductMap.containsKey(productCode))
            	
                 	ProductMap.get(productCode).stockDisplay();   
                 }
            else
            	{
                	system.debug('This Product code Does Not Here');
                 }
    }
}}


    private List<ProductBillingDay7> productList = new List<ProductBillingDay7>();
    private Map<Integer, ProductBillingDay7> productMap = new Map<Integer, ProductBillingDay7>();

    // Constructor to add products
    public SuperMarketDay17(Integer productCode, String productName, Integer price, Decimal discountPercent, Integer stockQuantity) {
       super(productCode,productName,price,discountPercent,stockQuantity);

        // Create sample products
        ProductBillingDay7 p1 = new ProductBillingDay7(101, 'Wool', 1000, 25, 20);
        ProductBillingDay7 p2 = new ProductBillingDay7(102, 'Cotton', 800, 10, 15);
        ProductBillingDay7 p3 = new ProductBillingDay7(103, 'Silk', 1500, 30, 5);

        // Add to list
        productList.add(p1);
        productList.add(p2);
        productList.add(p3);

        // Add to map
        productMap.put(p1.productCode, p1);
        productMap.put(p2.productCode, p2);
        productMap.put(p3.productCode, p3);
        system.debug(productMap);
    }

    // Billing function
    public void billing(Integer productCode, Integer quantity) {
        if (productMap.containsKey(productCode)) {
            ProductBillingDay7 product = productMap.get(productCode);
            product.billing(quantity);
        } else {
            System.debug('Product not found for code: ' + productCode);
        }
    }

    // Reorder function
  /*  public override void reorderProducts() {
        for (ProductBillingDay7 p : productList) {
            p.reorderProducts();
        }
    }


    // Stock display function
    public void displayStock() {
        System.debug('--- Stock Details ---');
        for (ProductBillingDay7 p : productList) {
            System.debug('Code: ' + p.productCode +
                         ' | Name: ' + p.productName +
                         ' | Price: ' + p.price +
                         ' | Stock: ' + p.stockQuantity);
        }
    }
   
        
*/}