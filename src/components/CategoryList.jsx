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
			<div className="flex justify-center mt-8">
				<h2 className="text-5xl text-right text-base-content font-semibold">
					See all categories <span className="text-accent">here</span>.
				</h2>
			</div>
			<div className=" flex my-10 w-full bg-base-100 justify-center gap-5">
				<div className="w-4/5 flex flex-wrap gap-7 justify-start">
					{categoryList.map((category, index) => (
						<div
							key={index}
							className="card  w-96 bg-base-100 text-base-content shadow-2xl border-2 border-neutral"
						>
							<div className="card-body">
								<h2 className="card-title text-2xl text-secondary font-extrabold">
									{category}{' '}
								</h2>
								<p className="text-base-content">
									Take a look at different products in {category}
								</p>
								<div className="card-actions justify-end">
									<button
										className="btn btn-base border-2 border-neutral"
										onClick={() => navigate(`/products/category/${category}`)}
									>
										Show all
									</button>
								</div>
							</div>
						</div>
					))}
					<div className="card w-96 bg-red-500 text-primary-content">
						<div className="card-body shadow-2xl">
							<h2 className="card-title font-extrabold text-white">
								Something is missing?{' '}
							</h2>
							<p className="text-white">
								Tell us what you are looking for and we will add it to our list!
							</p>
							<div className="card-actions justify-end">
								<button
									className="btn btn-outline btn-error text-error-content border-4"
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
						<div className="border-2 border-neutral-content rounded-xl h-64 flex justify-center items-center">
							<h2 className="text-3xl p-5">
								Place <br /> your adds inside here.
							</h2>
						</div>
						<div className="border-2 border-neutral-content rounded-xl h-64 flex justify-center items-center">
							<h2 className="text-3xl p-5">
								Place <br /> your adds inside here.
							</h2>
						</div>
						<div className="border-2 border-neutral-content rounded-xl h-64 flex justify-center items-center">
							<h2 className="text-3xl p-5">
								Place <br /> your adds inside here.
							</h2>
						</div>
						<div className="border-2 border-neutral-content rounded-xl h-64 flex justify-center items-center">
							<h2 className="text-3xl p-5">
								Place <br /> your adds inside here.
							</h2>
						</div>
						<div className="border-2 border-neutral-content rounded-xl h-64 flex justify-center items-center">
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
