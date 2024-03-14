import { NavLink, useNavigate } from 'react-router-dom';

import { useCart } from 'react-use-cart';
import { themes } from '../services/varThemes';
import Icon from '../assets/iconMedium.png';

export default function NavBar() {
	const { totalItems, cartTotal } = useCart();
	const navigate = useNavigate();
	return (
		<>
			<div className="navbar bg-primary h-32">
				<div className="shadow-2xl me-12 ms-8 bg-neutral w-24 h-24 rounded-full flex justify-center items-center">
					<div>
						<NavLink to={'/'} className="cursor-pointer">
							<img src={Icon} alt="Trendera Icon" />
						</NavLink>
					</div>
				</div>
				<div className="flex-1 flex gap-8">
					<div>
						<NavLink
							to={'/categories'}
							className="btn btn-secondary text-secondary-content rounded-3xl shadow-xl"
						>
							<h3 className="font-bold">categories</h3>
						</NavLink>
					</div>
					<div>
						<NavLink
							to={'/products'}
							className="btn btn-secondary text-secondary-content rounded-3xl shadow-xl"
						>
							<h3 className="font-bold">all products</h3>
						</NavLink>
					</div>
					<div>
						<NavLink
							to={'/contact'}
							className="btn btn-sm btn-error btn-outline border-4 shadow-xl"
						>
							<h3 className="font-bold">contact us</h3>
						</NavLink>
					</div>
				</div>
				<label className="cursor-pointer grid place-items-center me-5">
					<input
						type="checkbox"
						value="dark"
						className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
					/>
					<svg
						className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="5" />
						<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
					</svg>
					<svg
						className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				</label>
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn m-1">
						Theme
						<svg
							width="12px"
							height="12px"
							className="h-2 w-2 fill-current opacity-60 inline-block"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 2048 2048"
						>
							<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
					>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Default"
								value="default"
							/>
						</li>
						{themes.map((value) => {
							return (
								<input
									key={value.toLowerCase()}
									type="radio"
									name="theme-dropdown"
									className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
									aria-label={value}
									value={value}
								/>
							);
						})}
					</ul>
				</div>
				<div className="flex-none me-10 gap-8">
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-lg btn-ghost btn-circle"
						>
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10 text-error"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-md  indicator-item">
									{totalItems}
								</span>
							</div>
						</div>
						<div
							tabIndex={0}
							className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
						>
							<div className="card-body bg-base-100 rounded-3xl">
								<span className="font-bold text-xl">{totalItems} Items</span>
								<span className="font-bold text-lg">
									Subtotal: $ <span className="text-error">{cartTotal}</span>{' '}
								</span>
								<div className="card-actions">
									<button
										className="btn btn-primary btn-block"
										onClick={() => navigate(`/cart`)}
									>
										View Cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="btn btn-neutral rounded-3xl text-error shadow-xl">
						<NavLink to={'/login'}>
							<h3 className="font-bold text-2xl">login</h3>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}
