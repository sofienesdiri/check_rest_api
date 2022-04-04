const Product = require("../Model/Product")

exports.AddProduct = async(req,res)=>{
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(200).send({newProduct,msg: 'Product added'})
    } catch (error) {
        res.status(500).send('could not add product')
    }

}

exports.GetProduct = async(req,res)=>{
    try {
        const Products = await Product.find()
        res.status(200).send({Products})
        
    } catch (error) {
        res.status(500).send('could not show product')
    }
}

exports.DeleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const delProduct = await Product.findByIdAndDelete(id)
        res.status(200).send('product deleted')

    } catch (error) {
        res.send(500).send('could not delete product')
    }
}

exports.UpdateContact = async(req,res)=>{
    try {
        const {id} = req.params
        const upProduct = await Product.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).send('product updated')
    } catch (error) {
        res.send(500).send('could not update product')

    }
}
exports.GetOneProduct = async(req,res)=>{
    try {
        const {id}= req.params
        const oneProduct = await Product.findById(id)
    } catch (error) {
        res.send(500).send('coould not get one contact')
    }

}

