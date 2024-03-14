import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
			<div className="w-full h-20 bg-zinc-800 flex justify-center items-center">
				<h3 className="font-mono text-white">Get ready, dear Trendera Fans!</h3>
				<h2 className="text-warning text-4xl font-bold mx-10">SALE</h2>
				<h3 className="font-mono text-white">
					starts sooooon. Even better prices!
				</h3>
			</div>
			<div className="text-md font-extralight text-base-content breadcrumbs flex justify-center mt-3">
				<ul>
					<li>
						<Link to={'/'}>home</Link>
					</li>
					<li>
						<Link to={'/categories'}>all categories </Link>
					</li>
				</ul>
			</div>
			<div className="w-full flex justify-center p-10 bg-base-100">
				<div className="flex flex-wrap w-3/4 h-1/2 items-stretch justify-center gap-5">
					{productsByCategory?.map((productByCategory) => (
						<div
							key={productByCategory.id}
							className="card bg-base-200 border-2 border-neutral shadow-xl h-96 w-80"
						>
							<figure className="h-44 w-full border-b-2 border-neutral">
								<img
									src={productByCategory.thumbnail}
									alt={`${productByCategory.title} thumbnail`}
									className="h-full w-full"
								/>
							</figure>
							<div className="card-body">
								<div className="tooltip" data-tip={productByCategory.title}>
									<h2 className="card-title overflow-hidden whitespace-nowrap">
										{productByCategory.title}{' '}
									</h2>
								</div>
								<div className="flex w-full justify-between items-center my-3">
									<p>{productByCategory.brand}</p>
									<p className="text-right text-lg font-bold">
										{productByCategory.price}
										<span className="text-secondary">$</span>
									</p>
								</div>

								<div className="card-actions flex flex-row justify-between">
									<button
										className="btn btn-secondary rounded-2xl text-secondary-content btn-sm"
										onClick={() => addItem(productByCategory)}
									>
										Add to cart
									</button>
									<button
										className="btn btn-sm btn-primary rounded-2xl btn-outline border-2"
										onClick={() =>
											navigate(`/products/${productByCategory.id}`)
										}
									>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
					<div className="card bg-error shadow-xl w-80 h-96">
						<figure className="h-44 w-full">
							<img
								src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Shoes!"
								className="h-full w-full"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Something missing?</h2>
							<p>Take a moment to tell us what you are looking for!</p>
							<div className="card-actions flex flex-row my-2">
								<button
									className="btn btn-sm"
									onClick={() => navigate('/contact')}
								>
									Contact us
								</button>
							</div>
						</div>
					</div>
				</div>
				<aside className="w-60 shadow-2xl">
					<div className="rounded-2xl h-full bg-neutral text-neutral-content p-5 flex flex-col justify-between">
						<div className="border-2 border-neutral-content rounded-xl h-52 flex justify-center items-center">
							<h2 className="text-3xl p-5">
								Place <br /> your adds inside here.
							</h2>
						</div>
						<div className="border-2 border-neutral-content rounded-xl h-52 flex justify-center items-center">
							<h2 className="text-3xl p-5">
								Place <br /> your adds inside here.
							</h2>
						</div>
						<div className="border-2 border-neutral-content rounded-xl h-52 flex justify-center items-center">
							<h2 className="text-3xl p-5">
								Place <br /> your adds inside here.
							</h2>
						</div>
					</div>
				</aside>
			</div>
			<footer className="footer p-10 bg-base-300 text-base-300-content mt-10">
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
