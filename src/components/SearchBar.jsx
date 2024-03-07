import { Link } from 'react-router-dom';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { getSearchedProduct } from '../services/asyncGetRequests';

export default function SearchBar() {
	const [input, setInput] = useState('');
	const [results, setResults] = useState([]);

	const getSearchedData = (input) => {
		getSearchedProduct(input)
			.then((data) => setResults(data))
			.catch((error) => console.log(error));
	};
	const handleChange = (e) => {
		setInput(e.target.value);
		getSearchedData(e.target.value);
	};
	return (
		<div className="inputWrapper">
			<input type="text" onChange={handleChange} value={input} />
			<IoSearchCircleSharp
				onClick={() => {
					getSearchedData(input);
				}}
			></IoSearchCircleSharp>
			<ul>
				{results.length > 0 &&
					results.map((result) => {
						return (
							<li key={result.id}>
								<Link to={`products/${result.id}`}>{result.title} </Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
