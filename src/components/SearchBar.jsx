import { Link } from 'react-router-dom';
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
		if (e.target.value === '') {
			setResults([]);
			return;
		}
		getSearchedData(e.target.value);
	};

	return (
		<div className="mt-12 w-full text-black">
			<input
				type="text"
				placeholder="What are you looking for?"
				className="input border-neutral border-4 bg-error placeholder:text-error-content input-lg w-full h-12 rounded-xl mb-4 placeholder:text-center"
				onChange={handleChange}
				value={input}
			/>
			<div className="w-full h-20 bg-base-100 rounded-2xl overflow-scroll">
				<ul>
					{results.length > 0 ? (
						results.map((result) => {
							return (
								<li key={result.id} className="border-b-2">
									<Link
										to={`products/${result.id}`}
										className="p-2 text-sm font-thin"
									>
										{result.title}
									</Link>
								</li>
							);
						})
					) : (
						<li className="p-2 text-sm"></li>
					)}
				</ul>
			</div>
		</div>
	);
}
