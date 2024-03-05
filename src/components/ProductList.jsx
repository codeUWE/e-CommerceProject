import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

export default function ProductList() {
	const [products, setProducts] = useState([]);

	const getProduct = () => {
		axios
			.get('https://dummyjson.com/products?skip=0&limit=0')
			.then((res) => {
				setProducts(res.data.products);
				console.log(res.data.products);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			{products.map((product) => {
				return <Product key={product.id} product={product} />;
			})}
		</>
	);
}
