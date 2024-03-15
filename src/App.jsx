import { Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';

import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import CategoryList from './components/CategoryList';
import ProductsByCategory from './components/ProductsByCategory';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Contact from './components/Contact';
// import Wishlist from './components/Wishlist';

function App() {
	return (
		<>
			<CartProvider>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/categories" element={<CategoryList />} />
						<Route
							path="/products/category/:category"
							element={<ProductsByCategory />}
						/>
						<Route path="/products" element={<ProductList />} />
						<Route path="/products/:id" element={<Product />} />
						<Route path="/cart" element={<Cart />} />
						{/* <Route path="/wishlist" element={<Wishlist />} /> */}
						<Route path="/login" element={<Login />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</CartProvider>
		</>
	);
}

export default App;

//I am a bad boy !
