import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { PiShoppingCartLight } from 'react-icons/pi';

const Cart = () => {
	const {
		isEmpty,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();
	const navigate = useNavigate();

	if (isEmpty)
		return (
			<div className="flex flex-col justify-center items-center w-full my-12">
				<div className="flex items-center gap-10 h-96">
					<h1 className="text-center text-4xl font-bold ">Cart is Empty</h1>
					<PiShoppingCartLight className="text-6xl text-info-content text-center" />
				</div>
				<div className="divider divider-secondary mt-12"></div>
				<footer className="footer p-10 bg-base-100 text-base-content">
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
			</div>
		);
	return (
		<>
			<section className=" my-12 mx-10 p-10 bg-info rounded-xl shadow-xl">
				<div>
					<div>
						<div className="flex justify-between p-2">
							<h5 className="text-3xl text-info-content font-bold">
								Your shopping cart.
							</h5>
							<h5 className="text-3xl font-bold text-info-content">
								Total items: <span className="text-primary">{totalItems}</span>
							</h5>
						</div>
						<br />
						<table className="table table-auto border-1 border-separate border-spacing-y-3 bg-info shadow-2xl p-10">
							<thead>
								<tr>
									<td className="text-xl text-info-content font-bold text-center">
										Product
									</td>
									<td className="text-xl text-info-content font-bold">Name</td>
									<td className="text-xl text-info-content font-bold text-right">
										Price
									</td>
									<td className="text-xl text-info-content font-bold text-center">
										Quantity
									</td>
								</tr>
							</thead>

							<tbody>
								{items.map((item, index) => {
									return (
										<tr key={index}>
											<td>
												<img
													src={item.thumbnail}
													style={{ height: '6rem' }}
													alt={item.title}
													onClick={() => navigate(`/products/${item.id}`)}
													className="cursor-pointer rounded-xl w-28 shadow-xl m-auto"
												/>
											</td>
											<td className="text-xl text-info-content border-1 border-base-300 bg-info rounded-xl shadow-xl ">
												<span className="text-2xl font-light">
													{item.title}
												</span>{' '}
												<br />{' '}
												<span className="font-light text-sm">
													{item.description}
												</span>
											</td>
											<td className="text-right w-32 text-info-content">
												<span className="font-bold text-md border-2 border-neutral shadow-xl px-4 py-2 rounded-3xl">
													{item.price} $
												</span>
											</td>
											<td className="text-xl flex justify-center items-center gap-3">
												<CiCircleMinus
													className="mt-6 text-4xl cursor-pointer text-neutral border-2 border-neutral rounded-full"
													onClick={() =>
														updateItemQuantity(item.id, item.quantity - 1)
													}
												/>{' '}
												<span className="shadow-xl mt-5 font-light border-2 border-neutral bg-info rounded-full w-14 h-14 text-center text-info-content ">
													<p className="mt-3.5 font-medium">{item.quantity}</p>
												</span>
												<CiCirclePlus
													className="mt-6 text-4xl cursor-pointer text-neutral border-2 border-neutral rounded-full"
													onClick={() =>
														updateItemQuantity(item.id, item.quantity + 1)
													}
												/>
											</td>
											<td className="text-md w-40">
												<button
													className="btn btn-sm btn-warning shadow-xl text-warning-content rounded-3xl"
													onClick={() => removeItem(item.id)}
												>
													Remove Item
												</button>
											</td>
											<td>
												<button
													onClick={() => navigate(`/products/${item.id}`)}
													className="btn btn-sm rounded-3xl w-28 shadow-xl"
												>
													Show Item
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>

					{/* <div> */}
					<div className="mt-12 pe-3 w-full flex flex-col items-end justify-end">
						<div>
							<h3 className="text-2xl text-info-content font-bold">
								Total Price: <span className="text-primary">{cartTotal}</span> $
							</h3>
							<div className="divider divider-neutral"></div>
						</div>
						<div className="flex items-center gap-6">
							<button
								className="btn btn-sm btn-warning text-warning-content rounded-3xl shadow-xl "
								onClick={() => emptyCart()}
							>
								Clear Cart
							</button>
							<button className="btn btn-md btn-success rounded-3xl shadow-xl">
								Pay Now
							</button>
						</div>
					</div>
					{/* </div> */}
				</div>
			</section>
			<div className="divider divider-secondary mt-12"></div>
			<footer className="footer p-10 bg-base-100 text-base-content mt-10">
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
};

export default Cart;
