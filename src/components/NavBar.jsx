import { NavLink } from 'react-router-dom';
import iconMedium from '../assets/iconMedium.png';
import { useCart } from 'react-use-cart';

export default function NavBar() {
	const { isEmpty, totalItems, cartTotal } = useCart();

	return (
		<>
			<nav>
				<div className="navLeft">
					<NavLink to="/">
						<img src={iconMedium} alt="Trendera Icon" />
					</NavLink>
					<NavLink to="/categories">categories</NavLink>
					<NavLink to="/products">all products</NavLink>
					<NavLink to="/inspired">get inspired</NavLink>
					<NavLink to="/contact">contact us</NavLink>
				</div>
				<div className="navRight">
					<NavLink to="/wishlist">wishlist</NavLink>
					<div className="navCart">
						{isEmpty ? (
							''
						) : (
							<span>
								{totalItems} Items, {cartTotal}$
							</span>
						)}
						<NavLink to="/cart">cart</NavLink>
					</div>
					<NavLink to="/login">login</NavLink>
				</div>
			</nav>
		</>
	);
}
