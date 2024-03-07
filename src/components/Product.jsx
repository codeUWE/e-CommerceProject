import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleProduct } from '../services/asyncGetRequests';
import { useCart } from 'react-use-cart';

export default function Product() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addItem } = useCart();

	const [singleProduct, setSingleProduct] = useState({});

	useEffect(() => {
		getSingleProduct(id)
			.then((data) => setSingleProduct(data))
			.catch((error) => console.log(error));
	}, [id]);

	return (
		<div>
			<>
				<img src={singleProduct.thumbnail} alt="" />
				<h3>{singleProduct.title}</h3>
				<p>{singleProduct.brand}</p>
				<p>{singleProduct.price} $</p>
				<button onClick={() => addItem(singleProduct)}>Add to Card</button>
				<button onClick={() => navigate(-1)}>Go Back</button>
				<p>{singleProduct.description}</p>
				<div className="productImages">
					{singleProduct.images &&
						singleProduct.images.map((image, index) => (
							<img key={index} src={image} alt="" />
						))}
				</div>
			</>
		</div>
	);
}
