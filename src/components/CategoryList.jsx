import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategoryList } from '../services/asyncGetRequests';

export default function CategoryList() {
	const navigate = useNavigate();
	const { category } = useParams();

	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		getCategoryList()
			.then((data) => setCategoryList(data))
			.catch((error) => console.log(error));
	}, [category]);
	return (
		<>
			{categoryList.map((category, index) => (
				<div key={index}>
					<p>{category}</p>
					<button onClick={() => navigate(`/products/category/${category}`)}>
						Show all products
					</button>
				</div>
			))}
		</>
	);
}
