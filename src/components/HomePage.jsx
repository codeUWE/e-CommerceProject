import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	getCategoryList,
	getProductListHomePage,
} from '../services/asyncGetRequests';
import SearchBar from './SearchBar';

export default function Homepage() {
	const [categoryList, setCategoryList] = useState([]);
	const [products, setProducts] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		getProductListHomePage()
			.then((data) => setProducts(data))
			.catch((error) => console.log(error));
		getCategoryList()
			.then((data) => setCategoryList(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<div className="vhWrapper">
				<div className="searchBar">
					<SearchBar />
				</div>
				<div className="interestCategories">
					<h2>These Categories might interest you.</h2>
					<div className="interestCategoriesList">
						{categoryList?.map((category, index) => (
							<div key={index}>
								<p>{category}</p>
							</div>
						))}
						<Link to="/categories"> &gt;&gt;See all Categories</Link>
					</div>
				</div>
				<div className="searchedProducts">
					<h2>Based on what you recently searched.</h2>
					{products?.map((product) => {
						return (
							<div key={product.id}>
								<p>{product.title} </p>
							</div>
						);
					})}
					<Link to="/products"> &gt;&gt;See all Products</Link>
				</div>
			</div>
			<div className="vhWrapper">
				<div className="carousel">
					<h2>Get inspired by:</h2>
					<p>here comes a carousel</p>
				</div>
				<div className="sellProducts">
					<h2>Want to sell your products?</h2>
					<button
						onClick={() => {
							navigate('/contact');
						}}
					>
						Get in touch
					</button>
				</div>
			</div>
		</>
	);
}
