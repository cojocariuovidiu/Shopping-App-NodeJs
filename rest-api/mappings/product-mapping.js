/**
 * New node file
 * 
 */
var ProductService=require("../service/product-services.js");

module.exports=function(app){
	app.get("/products",ProductService.getAllProducts);
//	app.get("/products",ProductService.getProductbyId);
	app.post("/products", ProductService.addProduct);
	app.delete("/products/:_id",ProductService.deleteProductbyId);
	
};


