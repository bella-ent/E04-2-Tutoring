import "./App.css";
import Header from "./components/Header";
import ItemLists from "./components/ItemLists";
import Order from "./components/Order";
import Cart from "./components/Cart";
import Pay from "./components/Pay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState([]);
	const [order, setOrder] = useState([]);
	const [visible, setVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	async function fetchData() {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		setItems(data);
		setIsLoading(false);
	}
	//1. componentDidMount()
	useEffect(() => {
		//*Another way to fetch data and store to state.
		// fetch("https://fakestoreapi.com/products").then((response)=>setItems(response.json()));
		fetchData();
	}, []);
	// useEffect(() => {}, []);
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<section>
							{isLoading === true ? (
								<img
									src="https://i.pinimg.com/originals/f5/a4/9b/f5a49bee120a71d8a00a273a5a315d04.gif"
									alt="loading"
								/>
							) : (
								<ItemLists
									items={items}
									setItems={setItems}
									cart={cart}
									setCart={setCart}
									visible={visible}
									setVisible={setVisible}
								/>
							)}
						</section>
						<Cart
							cart={cart}
							setCart={setCart}
							visible={visible}
							setVisible={setVisible}
						/>
					</Route>
					<Route path="/order">
						<Order order={order} setOrder={setOrder} />
					</Route>
					<Route path="/pay">
						<Pay
							cart={cart}
							setCart={setCart}
							order={order}
							setOrder={setOrder}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
