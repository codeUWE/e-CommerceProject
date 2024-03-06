import { NavLink } from 'react-router-dom';
import iconMedium from '../assets/iconMedium.png';

export default function NavBar() {
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
				</div>
				<div className="navRight">
					<NavLink to="/card">card</NavLink>
					<NavLink to="/login">login</NavLink>
				</div>
			</nav>
		</>
	);
}
