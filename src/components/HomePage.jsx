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
			<div className="w-full h-20 bg-neutral flex justify-center items-center">
				<h3 className="font-mono text-neutral-content">
					Get ready, dear Trendera Fans!
				</h3>
				<h2 className="text-error text-4xl font-bold mx-10">SALE</h2>
				<h3 className="font-mono text-neutral-content">
					starts sooooon. Even better prices!
				</h3>
			</div>
			<div className="grid grid-cols-12 auto-rows-max bg-base-100 mb-4">
				<div className="searchBar col-span-4 col-start-5">
					<SearchBar />
				</div>
				<div className="interestCategories row-start-3 col-span-4 col-start-1 me-5">
					<h2 className="pt-9 text-5xl text-right text-base-content font-bold">
						These <br /> Categories <br /> might interest{' '}
						<span className=" text-accent">you</span>.
					</h2>
				</div>
				<div className="interestCategoriesList  row-start-3 col-start-5 col-end-10 flex gap-12">
					{categoryList.slice(4, 8).map((category, index) => (
						<div
							key={index}
							className="card bg-warning text-primary-content shadow-xl mb-5"
						>
							<div className="card-body w-40 items-start">
								<h2 className="bg-opacity-80 card-title bg-success shadow-md text-success-content h-28 w-40 rounded-xl p-4">
									{category}
								</h2>
								<div className="card-actions justify-center mt-3">
									<button
										className="btn btn-sm btn-primary rounded-3xl border-4 text-primary-content shadow-xl"
										onClick={() => navigate(`/products/category/${category}`)}
									>
										<span className="font-bold">See Products</span>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row-start-4 col-start-9 col-end-12 mb-16">
					<Link to="/categories">
						<p className="text-3xl text-right text-rose-700 font-semibold mb-12">
							&gt;&gt;See all Categories
						</p>
					</Link>
				</div>
				<div className="searchedProducts row-start-5 col-span-5 col-start-8">
					<h2 className=" pt-6 ps-5 text-5xl text-left text-base-content font-bold">
						Products <br /> based on what <br /> you recently{' '}
						<span className=" text-accent">searched</span>.
					</h2>
				</div>
				<div className="bg-info row-start-5 row-span-3 col-span-5 col-start-3 rounded-2xl shadow-2xl h-48 me-3"></div>
				<div className="bg-secondary bg-opacity-45 row-start-4 row-span-2 col-span-3 col-start-2 rounded-2xl shadow-xl h-36 mt-20"></div>
				<div className="flex gap-4 rounded-xl col-start-2 row-start-5 col-span-6 pt-12 ms-16">
					{products?.map((product) => {
						return (
							<div key={product.id} className="bg-transparent w-96">
								<div className="tooltip" data-tip={product.title}>
									<img
										src={product.thumbnail}
										alt={product.title}
										className=" rounded-full h-28 w-28 border-neutral cursor-pointer"
										onClick={() => navigate(`/products/${product.id}`)}
									/>
								</div>
							</div>
						);
					})}
				</div>

				<div className="row-start-8 col-start-5 col-span-5 mt-5 m-auto">
					<Link to="/products">
						<p className="text-3xl text-right text-rose-700 font-semibold">
							&gt;&gt;See all Products
						</p>
					</Link>
				</div>
			</div>
			{/* ======================= next div ============================= */}
			<div className="grid grid-cols-12 auto-rows-max bg-base-100">
				<div className=" row-start-7 col-span-4 col-start-1 my-10">
					<h2 className="text-5xl text-base-content pt-6 ps-5  text-left font-bold">
						Get inspired <span className=" text-accent"> by</span>:
					</h2>
				</div>
				{/* ======== carousel ============== */}
				<div className="carousel mt-5 col-span-5 h-96 row-span-3 col-start-2 row-start-8 rounded-xl shadow-2xl">
					<div id="slide1" className="carousel-item relative w-full">
						<img
							src="https://images.pexels.com/photos/896291/pexels-photo-896291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							className="w-full cursor-pointer"
							onClick={() => navigate('/products/category/womens-dresses')}
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide4" className="btn btn-circle">
								❮
							</a>
							<a href="#slide2" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide2" className="carousel-item relative w-full">
						<img
							src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							className="w-full cursor-pointer"
							onClick={() => navigate('/products/category/furniture')}
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide1" className="btn btn-circle">
								❮
							</a>
							<a href="#slide3" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide3" className="carousel-item relative w-full">
						<img
							src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							className="w-full cursor-pointer"
							onClick={() => navigate('/products/category/groceries')}
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide2" className="btn btn-circle">
								❮
							</a>
							<a href="#slide4" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
					<div id="slide4" className="carousel-item relative w-full">
						<img
							src="https://images.pexels.com/photos/7428097/pexels-photo-7428097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							className="w-full cursor-pointer"
							onClick={() => navigate('/products/category/skincare')}
						/>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide3" className="btn btn-circle">
								❮
							</a>
							<a href="#slide1" className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
				</div>
				{/* ============ carousel end ============ */}
				<div className="mask mask-squircle bg-success w-full h-32 row-start-7 row-span-2 mt-5  col-start-9 shadow-xl"></div>
				<div className="mask mask-circle bg-primary w-52 h-48 bg-opacity-55 row-start-7 col-start-9 row-span-2 col-span-2 ms-12 mt-12 shadow-2xl"></div>
				<div className="sellProducts col-start-7 row-start-9 col-span-2 ms-8 mb-10">
					<h2 className="text-5xl pt-6 ps-5 text-base-content  text-left font-bold">
						Want to sell your <span className="text-error">products</span>?
					</h2>
				</div>
				<div className="col-start-9 row-start-9 col-span-2 m-auto ">
					<button
						className="btn btn-error text-error-content w-32 h-12 rounded-3xl shadow-xl"
						onClick={() => {
							navigate('/contact');
						}}
					>
						Get in touch
					</button>
				</div>
				<div className="row-start-11 col-start-4 mt-12 col-span-5">
					<h2 className="text-5xl pt-6 ps-5  text-left font-bold">
						People love <span className="text-red-600">T</span>
						<span className="text-blue-600">rendera</span>. <br />
						Give us a rating! Just <span className="text-accent">click</span>.
					</h2>
				</div>
				<div className="chat chat-start w-72 row-start-10 col-start-9 row-span-2 ms-8 col-span-2">
					<div className="chat-bubble w-full h-40 bg-info bg-opacity-100"></div>
				</div>
				<div className="chat chat-end w-72 row-start-10 col-start-9 row-span-2 ms-8 col-span-2">
					<div className="chat-bubble w-96 h-40 bg-error bg-opacity-70"></div>
				</div>
				<div className="rating rating-lg row-start-12 col-start-7 col-span-2 m-auto my-5">
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
						checked
					/>
				</div>
			</div>
			<footer className="footer p-10 bg-accent text-accent-content mt-10">
				<nav>
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</footer>
		</>
	);
}
