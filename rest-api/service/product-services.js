

var ProductSchema=require('../../entity/Product-Schema');

exports.addProduct=function(req,res) {
	console.log("was i here?");
//	var product=req.body;
	var pid=req.body.pid;
	var name=req.body.name;
	var image=req.body.image;
	var price=req.body.price;
	var store=req.body.store;
	var mfg=req.body.mfg;
	var category=req.body.catergory;
	var entity=new ProductSchema();
	entity.pid=pid;
	entity.name=name;
	entity.image=image;
	entity.price=price;
	entity.store=store;
	entity.mfg=mfg;
	entity.category=category;
	entity.save(function(error,result) {
		if(error) {
			console.log(error);
			var data={status:"fail",message:"Hey! your product has not been uploaded successfully into the database!!!!!!!!!!!!!!!"};
			res.status(500).json(data);
		}else{
			 var data1={status:"success",message:"Hey! your product has been uploaded successfully into the database!!!!!!!!!!!!!!!"};
			res.status(200).json(data1);
		}
	}); //this will save data into the database
};

	exports.getAllProducts=function(req,res) {
		ProductSchema.find({},function(error,results){
			  if(error){
					var data={status:"fail",data:"Sorry there is some problem!"};
				    res.status(500).json(data);
			  }else{
			   		var data1={status:"success",data:results};
					//res.status(200).json(data);
					res.status(200).json(results);
			  }
	});
};

