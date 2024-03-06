import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleProduct } from '../services/asyncGetRequests';

export default function Product() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [singleProduct, setSingleProduct] = useState({});

	useEffect(() => {
		getSingleProduct(id)
			.then((data) => setSingleProduct(data))
			.catch((error) => console.log(error));
	}, [id]);

	return (
		<div>
			<img src={singleProduct.thumbnail} alt="" />
			<p>Place a carousel for the pictures with Tailwind</p>
			<h3>{singleProduct.title}</h3>
			<p>{singleProduct.brand}</p>
			<p>{singleProduct.price} $</p>
			<p>{singleProduct.description}</p>
			<button onClick={() => navigate('/card')}>Add to Card</button>
		</div>
	);
}
