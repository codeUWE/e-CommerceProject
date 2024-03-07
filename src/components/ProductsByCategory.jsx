import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../services/asyncGetRequests';
import { useCart } from 'react-use-cart';

export default function ProductsByCategory() {
	const { addItem } = useCart();
	const navigate = useNavigate();
	const { category } = useParams();
	const [productsByCategory, setProductsByCategory] = useState([]);

	useEffect(() => {
		getProductsByCategory(category)
			.then((data) => {
				setProductsByCategory(data);
			})
			.catch((error) => console.log(error));
	}, [category]);

	return (
		<>
			{productsByCategory?.map((productByCategory) => (
				<div key={productByCategory.id}>
					<img src={productByCategory.thumbnail} alt="" />
					<h3>{productByCategory.title}</h3>
					<p>{productByCategory.brand}</p>
					<p> {productByCategory.price} $ </p>
					<button onClick={() => navigate(`/products/${productByCategory.id}`)}>
						View Details
					</button>
					<button onClick={() => addItem(productByCategory)}>
						Add to Card
					</button>
				</div>
			))}
		</>
	);
}
