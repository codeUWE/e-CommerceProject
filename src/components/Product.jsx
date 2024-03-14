import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getSingleProduct, getComments } from '../services/asyncGetRequests';
import { useCart } from 'react-use-cart';
import { TbTruckDelivery } from 'react-icons/tb';
import { PiContactlessPaymentBold } from 'react-icons/pi';
import { PiPaypalLogoThin } from 'react-icons/pi';
import { FaGooglePay, FaApplePay, FaCcMastercard } from 'react-icons/fa6';
import { RiVisaLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';

export default function Product() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addItem } = useCart();

	const [singleProduct, setSingleProduct] = useState({});
	const [comments, setComments] = useState([]);

	const randomNumber = () => {
		return Math.floor(Math.random() * 700);
	};

	useEffect(() => {
		getSingleProduct(id)
			.then((data) => setSingleProduct(data))
			.catch((error) => console.log(error));
		getComments(id)
			.then((data) => setComments(data))
			.catch((error) => console.log(error));
	}, [id]);

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
			<div className="text-md text-base-content font-extralight breadcrumbs flex justify-center mt-3">
				<ul>
					<li>
						<Link to={'/'}>home</Link>
					</li>
					<li>
						<Link to={'/products'}>all products </Link>
					</li>
					<li>
						<Link to={`/products/category/${singleProduct.category}`}>
							{singleProduct.category}
						</Link>
					</li>
				</ul>
			</div>
			{/* grid starts here */}
			<div className="grid grid-cols-10auto-rows-max m-12">
				{/* ====== carousel ====== */}
				<div className="col-span-2 col-start-1 row-start-1 row-span-1 my-auto me-3 flex flex-col justify-center items-center">
					<div className="h-60 w-72 carousel carousel-vertical box-border rounded-2xl">
						{singleProduct.images &&
							singleProduct.images.map((image, index) => (
								<div
									className="carousel-item h-full overflow-hidden"
									key={index}
								>
									<img src={image} alt="" width={500} />
								</div>
							))}
					</div>
					<p className="font-extralight text-center text-sm text-base-content">
						scroll inside
					</p>
				</div>
				{/* ========== product image ========= */}
				<div className="row-start-1 col-start-3 row-span-1 col-span-3 me-4 shadow-xl">
					<img
						src={singleProduct.thumbnail}
						alt={singleProduct.title}
						className="rounded-xl h-full"
					/>
				</div>
				{/* ========== product description =========== */}
				<div className="row-start-1 col-start-6 col-span-2 flex flex-col justify-between h-72">
					<div>
						<h3 className="text-3xl">{singleProduct.title}</h3>
						<p className="text-md font-light">{singleProduct.brand}</p>
						{singleProduct.stock > 0 && singleProduct.stock < 50 ? (
							<p className="text-sm text-warning font-bold mt-2">
								Only few left
							</p>
						) : (
							''
						)}
						{singleProduct.stock > 50 ? (
							<p className="text-sm text-success font-bold mt-2">In Stock</p>
						) : (
							''
						)}
					</div>
					<div className="row-start-1 col-start-6 mb-12">
						<p className="font-light">{singleProduct.description}</p>
						<div className="rating rating-sm mt-2 flex items-center">
							<div>
								<input
									type="radio"
									name="rating-1"
									className="mask mask-star bg-warning me-2 mt-1"
								/>
							</div>
							<p className="text-md">
								{singleProduct.rating} based on {randomNumber()} Ratings.{' '}
							</p>
						</div>
					</div>
				</div>
				{/* ======= aside ====== */}
				<div className="row start-2 col-start-9 bg-info rounded-lg p-4 h-full w-48 row-span-2 flex flex-col justify-between py-8 shadow-2xl">
					<div className="flex flex-col justify-center">
						<p className="text-xl font-bold text-primary mb-5 leading-none">
							{singleProduct.price} $ <br />{' '}
							<span className="text-xs font-extralight text-neutral">
								{' '}
								includes USt.
							</span>
						</p>
						{singleProduct.stock > 0 && singleProduct.stock < 50 ? (
							<p className="text-sm bg-neutral p-2 rounded-lg border-2 border-warning text-warning font-bold mb-5">
								Be quick, there are only {singleProduct.stock} elements left.
							</p>
						) : (
							''
						)}
						{singleProduct.stock > 50 ? (
							<p className="text-sm bg-neutral p-2 rounded-lg border-2 border-success text-success font-bold mb-5">
								In Stock
							</p>
						) : (
							''
						)}
						<button
							className="btn btn-error"
							onClick={() => addItem(singleProduct)}
						>
							Add to Card
						</button>
						<button className="btn btn-sm my-3" onClick={() => navigate(-1)}>
							Go Back
						</button>
					</div>
					<div className="flex flex-col justify-center">
						<p className="text-sm text-info-content font-light mt-12">
							<TbTruckDelivery />
							Delivery comes usually in within 5 days. At the end of the process
							you receive more details about the delivery.
						</p>
						<p className="text-sm text-info-content font-light mt-5">
							<PiContactlessPaymentBold />
							Accepted payment methods are the follows:
						</p>
						<div className="flex text-info-content items-center justify-center gap-2 my-2 w-full text-4xl">
							<FaGooglePay />
							<FaApplePay />
							<RiVisaLine />
							<FaCcMastercard />
							<PiPaypalLogoThin />
						</div>
						<p className="text-sm text-info-content font-light mt-2">
							<GrContact />
							Do you have any questions about the product? Please follow the
							button to contact us.
						</p>
						<button className="btn btn-sm btn-warning mt-5 text-warning-content">
							Contact us
						</button>
					</div>
				</div>
				{/* ======= title comments ======= */}
				<div className="col-start-1 row-start-2 col-span-2 my-auto me-5">
					<h2 className="text-4xl text-right text-base-content font-semibold">
						What does <br /> our customers <br /> think about this <br />{' '}
						{singleProduct.category}
						<span className="text-accent"> product</span>?
					</h2>
				</div>
				{/* ======= comments ======= */}
				<div className="relative col-start-3 row-start-2 col-span-6 h-96 mt-10 me-2 p-6 rounded-md bg-base-200 shadow-xl flex flex-col">
					<div>
						<div className="flex justify-between items-center">
							<h2 className="text-base-content font-bold text-xl">
								Customer <span className="text-secondary">reviews</span>.
							</h2>
							<button className="btn">Add Review</button>
						</div>
						<div className="divider divider-primary"></div>
					</div>
					<div className="overflow-scroll h-full">
						{comments.length === 0 ? (
							<p className="font-light text-xl">
								No Reviews yet. Be the first one.
							</p>
						) : (
							comments.map((comment) => {
								return (
									<div key={comment.id} className="flex flex-col">
										<div className="flex justify-between">
											<div>
												<p className="font-light mb-2">
													User:{' '}
													<span className="text-error font-bold">
														{comment.user.username}
													</span>{' '}
												</p>
												<p>
													<span className="font-bold">Review</span>:{' '}
													{comment.body}{' '}
												</p>
											</div>
											<div>
												<div className="rating rating-sm">
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
												</div>
											</div>
										</div>
										<div className="divider"></div>
									</div>
								);
							})
						)}
					</div>
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
