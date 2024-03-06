import axios from 'axios';

// get Category List & Product by Category from API

export const getCategoryList = async () => {
	const { data } = await axios.get('https://dummyjson.com/products/categories');
	return data;
};

export const getProductsByCategory = async (category) => {
	const { data } = await axios.get(
		`https://dummyjson.com/products/category/${category}`
	);
	return data.products;
};

// get Product List & Single Product from API

export const getProductList = async () => {
	const { data } = await axios.get(
		'https://dummyjson.com/products?limit=0&skip=0'
	);
	return data.products;
};
// get Product List for Home Page (limit 4)

export const getProductListHomePage = async () => {
	const { data } = await axios.get(
		'https://dummyjson.com/products?limit=4&skip=20'
	);
	return data.products;
};

export const getSingleProduct = async (id) => {
	const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
	return data;
};

// get Searched Product from API
export const getSearchedProduct = async (search) => {
	const { data } = await axios.get(
		`https://dummyjson.com/products/search?q=${search}`
	);
	return data.results;
};

//============== limit the product list ==============//

// set limit for product list
export const getLimitedProductList = async (limit, skip) => {
	const { data } = await axios.get(
		`https://dummyjson.com/products?limit=${limit}&skip=${skip}`
	);
	return data.results;
};

// need to be fixed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// set limit for category list
export const getLimitedCategoryList = async (limit, skip) => {
	const { data } = await axios.get(
		`https://dummyjson.com/products/categories?limit=${limit}&skip=${skip}`
	);
	return data.results;
};
