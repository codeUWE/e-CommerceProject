import { Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Homepage from './components/HomePage';
import CategoryList from './components/CategoryList';
import ProductsByCategory from './components/ProductsByCategory';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Contact from './components/Contact';
import Wishlist from './components/Wishlist';
// import SearchedInput from './components/SearchedInput';

function App() {
	return (
		<>
			<CartProvider>
				<HeroSection />
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Homepage />} />
						{/* <Route path="/searched/:input" element={<SearchedInput />} /> 
						How to do that? I need a different searchbar which is searching for all the keys in the object */}
						<Route path="/categories" element={<CategoryList />} />
						<Route
							path="/products/category/:category"
							element={<ProductsByCategory />}
						/>
						<Route path="/products" element={<ProductList />} />
						<Route path="/products/:id" element={<Product />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/wishlist" element={<Wishlist />} />
						<Route path="/login" element={<Login />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
			</CartProvider>
		</>
	);
}

export default App;
