import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Homepage from './components/HomePage';
import CategoryList from './components/CategoryList';
import ProductsByCategory from './components/ProductsByCategory';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Card from './components/Card';
import Login from './components/Login';

function App() {
	return (
		<>
			<HeroSection />
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
					<Route path="/card" element={<Card />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
