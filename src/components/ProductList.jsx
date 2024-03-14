import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductList } from '../services/asyncGetRequests';
import { useCart } from 'react-use-cart';

export default function ProductList() {
	const navigate = useNavigate();
	const { addItem } = useCart();

	const [productList, setProductList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(12);

	useEffect(() => {
		getProductList()
			.then((data) => setProductList(data))
			.catch((error) => console.log(error));
	}, []);

	// Get current posts
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = productList.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);
	const totalProducts = productList.length;
	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}
	const [activePage, setActivePage] = useState(1);
	const handlePageClick = (number) => {
		setActivePage(number);
		paginate(number);
	};

	return (
		<>
			<div className="flex justify-center mt-8">
				<h2 className="text-5xl text-right text-base-content font-semibold">
					See all products <span className="text-accent">here</span>.
				</h2>
			</div>
			<div className="w-full flex justify-center p-10 bg-base-100">
				<div className="flex flex-wrap w-3/4 h-1/2 items-stretch justify-center gap-5">
					{currentProducts?.map((product) => (
						<div
							key={product.id}
							className="card bg-base-200 border-2 border-neutral shadow-xl h-96 w-80"
						>
							<figure className="h-44 w-full border-b-2 border-neutral">
								<img
									src={product.thumbnail}
									alt={`${product.title} thumbnail`}
									className="h-full w-full"
								/>
							</figure>
							<div className="card-body">
								<div className="tooltip" data-tip={product.title}>
									<h2 className="card-title text-ellipsis overflow-hidden whitespace-nowrap">
										{product.title}{' '}
									</h2>
								</div>
								<div className="flex w-full justify-between items-center my-3">
									<p>{product.brand}</p>
									<p className="text-right text-lg font-bold">
										{product.price}
										<span className="text-secondary">$</span>
									</p>
								</div>

								<div className="card-actions flex flex-row justify-between">
									<button
										className="btn btn-secondary rounded-2xl text-secondary-content btn-sm"
										onClick={() => addItem(product)}
									>
										Add to cart
									</button>
									<button
										className="btn btn-sm btn-primary rounded-2xl btn-outline border-2"
										onClick={() => navigate(`/products/${product.id}`)}
									>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<aside className="w-72 shadow-2xl">
					<div className="rounded-2xl h-full bg-neutral text-neutral-content p-5 flex flex-col justify-between">
						<button
							className="btn btn-warning btn-outline text-warning-content"
							onClick={() => navigate(-1)}
						>
							Go back
						</button>
						<button
							className="btn btn-neutral btn-outline text-warning-content"
							onClick={() => navigate('/')}
						>
							Go Home
						</button>
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
						<button
							className="btn btn-warning btn-outline text-warning-content"
							onClick={() => navigate(-1)}
						>
							Go back
						</button>
					</div>
				</aside>
			</div>

			{/* pagination */}
			<div className="w-full flex justify-center items-center gap-5">
				<div className="join flex justify-center items-center">
					{pageNumbers.map((number) => (
						<button
							key={number}
							className={
								activePage === number
									? 'join-item btn btn-error btn-active'
									: 'join-item btn btn-error'
							}
							onClick={() => {
								handlePageClick(number);
								paginate(number);
							}}
						>
							{number}
						</button>
					))}
				</div>
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
