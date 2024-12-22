import mongooseProduct from '../models/product-model.js';
import redis from '../utils/redis.js'
import esClient from '../utils/elasticSearch.js';

async function createProduct(title, description, stock, price, category, image){
    try {
        const newProduct = new mongooseProduct({
            title,
            description,
            stock,
            price, 
            category, 
            image
        })
        const productForEs = {
            title: newProduct.title,
            description: newProduct.description,
            category: newProduct.category
        }
        esClient.addProductToES(productForEs)
        newProduct.save()
        return newProduct
    } catch (error) {
        console.log('error: ', error)
    }
}

async function updateProduct(id, updateFields) {
    try {
        const updatedProduct = await mongooseProduct.findByIdAndUpdate(id, updateFields, {new: true});

        if(!updatedProduct){
            throw new Error('Product not found')
        }
        return updatedProduct;
    } catch (error) {
        console.log("Error Mesage: ", error)
    }
}

async function deleteProduct(productParams) {
    const id = productParams.id
    try {
        const deletedProduct = await mongooseProduct.findByIdAndDelete(id)
        if(!deletedProduct){
            throw new Error('Product not found')
        }
        return deletedProduct
    } catch (error) {
        console.log('error: ', error)
        return false
    }
}

async function getProduct(productParams) {
    const id = productParams.id
    try {
        const client = redis.client
        const productData = await client.get(id)
        if(productData === null) {
            const getProduct = await mongooseProduct.findById(id)
            await client.set(id, JSON.stringify(getProduct))
            return getProduct
        }else {
            return JSON.parse(productData)
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

async function getAllProducts() {
    const key = "showcase" 
    try {
        const client = redis.client
        const showcase = await redis.client.get(key)
        if(showcase === null){
            const allProducts = await mongooseProduct.find()
            await client.set(key, JSON.stringify(allProducts))
            return allProducts
        }else{
            return JSON.parse(showcase)
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

async function searchProducts(query) {
    try {
        const response = await esClient.searchProductsInEs(query);
        return response;
    } catch (error) {
        console.error('Error searching products:', error);
    }
}

export default {createProduct, updateProduct, deleteProduct, getProduct, getAllProducts, searchProducts};