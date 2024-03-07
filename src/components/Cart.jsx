import { useCart } from 'react-use-cart';

const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty) return <h1 className="text-center">Cart is Empty</h1>;
	return (
		<section>
			<div>
				<div>
					<h5>
						Cart ({totalUniqueItems}) total Items: ({totalItems})
					</h5>
					<br />
					<table>
						<tbody>
							<tr>
								<td>
									<b>Product</b>
								</td>
								<td>
									<b>Name</b>
								</td>
								<td>
									<b>Price</b>
								</td>
								<td>
									<b>Quantity</b>
								</td>
							</tr>
							{items.map((item, index) => {
								return (
									<tr key={index}>
										<td>
											<img
												src={item.thumbnail}
												style={{ height: '6rem' }}
												alt={item.title}
											/>
										</td>
										<td>{item.title}</td>
										<td>{item.price}</td>
										<td> {item.quantity}</td>
										<td>
											<button
												onClick={() =>
													updateItemQuantity(item.id, item.quantity - 1)
												}
											>
												–
											</button>
											<button
												onClick={() =>
													updateItemQuantity(item.id, item.quantity + 1)
												}
											>
												+
											</button>
											<button onClick={() => removeItem(item.id)}>
												Remove Item
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<hr />
				<br />
				{/* <div> */}
				<div>
					<h3>Total Price: {cartTotal} $</h3>
				</div>
				<div>
					<button onClick={() => emptyCart()}>Clear Cart</button>
					<button>Pay Now</button>
				</div>
				{/* </div> */}
			</div>
		</section>
	);
};

export default Cart;
