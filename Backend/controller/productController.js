const Product = require('../model/productModel');


exports.addProduct = (request, response) => {
    console.log(request.body)
    Product.create({
        productName: request.body.productName,
        productPrice: request.body.productPrice,
        productDescription: request.body.productDescription,
        productQty: request.body.productQty,
        productImage: "http://localhost:3000/images/"+request.file.filename
    }).then(result => {
        console.log(result);
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json(err);
    })
}





exports.viewProduct = (request, response) => {
    Product.find().then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json(err);
    })
}


exports.updateProduct = (request, response) => {
    Product.updateOne({
        _id: request.body.prodId
    }, {
        $set: {
            productName: request.body.productName,
            productPrice: request.body.productPrice,
            productDescription: request.body.productDescription,
            productQty: request.body.productQty,
            productImage: "http://localhost:3000/images/"+request.file.filename

        }
    }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json(err);
    })
}


exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.body.Id})
      .then((result) => {
          console.log(result)
        return response.status(200).json(result);
      })
      .catch((err) => {
        return response.status(500).json(err);
      });
  };
  