import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductList } from '../services/asyncGetRequests';

export default function ProductList() {
	const navigate = useNavigate();

	const [productList, setProductList] = useState([]);

	useEffect(() => {
		getProductList()
			.then((data) => setProductList(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			<h2>See all products here</h2>
			{productList?.map((product) => (
				<div key={product.id}>
					<img src={product.thumbnail} alt="" />
					<h3>{product.title}</h3>
					<p>{product.brand}</p>
					<p> {product.price} $ </p>
					<button onClick={() => navigate(`/products/${product.id}`)}>
						View Details
					</button>
				</div>
			))}
		</div>
	);
}
