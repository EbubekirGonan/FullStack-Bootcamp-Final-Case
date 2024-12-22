import { Client } from '@elastic/elasticsearch';

const esClient = new Client({
  cloud: {
    id: '658e5c94399143058ccb385e66adeeda:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQxYmQ4M2Q5YmU2Mzc0MjNiYjIxNWRjNWQwODJlNjE5ZiQ1ZmQ5YTMxOTAwYTg0Nzg2OTNjMzc2YzdlNTBhY2EzZg=='
  },
  auth: {
    username: 'elastic',
    password: 'QAar6xFkoYuoelmOC9wI6xgB'
  }
});


const addProductToES = async (product) => {
    try {
      const response = await esClient.index({
        index: 'products',   
        body: product, 
      });
      await esClient.indices.refresh({ index: 'products' });
      return response;
    } catch (error) {
      console.error('Error indexing product:', error);
    }
}

const deleteProductFromES = async (product) => {
    try {
      const response = await esClient.delete({
        index: 'products', 
        id: product._id, 
      });
      await esClient.indices.refresh({ index: 'products' });
      return response;
    } catch (error) {
      console.error('Error indexing product:', error);
    }
}



async function searchProductsInEs(query) {
    try {
      const response = await esClient.search({
        index: 'products',
        body: {
          query: {
            multi_match: {
              query, 
              fields: ['title', 'description', 'category'],
            },
          },
        },
        
      });
      return response.hits.hits.map((hit) => hit._source);
    } catch (error) {
      console.error('Error searching products:', error);
    }
}


export default { addProductToES, deleteProductFromES, searchProductsInEs };