//* A Example of componentWillUnmount:
// import React, { Component } from "react";
// import LifeCycleClass from "./components/LifeCycleClass";

// export default class App extends Component {
// 	state = {
// 		mount: true,
// 	};
// 	removeCom = () => {
// 		this.setState({ mount: false });
// 	};
// 	render() {
// 		return (
// 			<div>
// 				{this.state.mount === true ? <LifeCycleClass /> : ""}
// 				<button onClick={this.removeCom}>remove component</button>
// 			</div>
// 		);
// 	}
// }

import React, { Component } from "react";
import Movies from "./components/Movies";

export default class App extends Component {
	state = {
		isLoading: true,
		movies: [],
	};
	async componentDidMount() {
		const response = await fetch(
			`http://www.omdbapi.com/?s=$harry&apikey=be69e2af`
		);
		const data = await response.json();
		this.setState({ isLoading: false, movies: data.Search });

		//? the simple fake example of fetch()
		// const fetchedMovie = [
		// 	"batman",
		// 	"harry potter",
		// 	"spiderman",
		// 	"Ice age",
		// 	"Halloween never die",
		// ];
		// setTimeout(() => {
		// 	this.setState({ isLoading: false, movies: fetchedMovie });
		// }, 3000);
	}
	render() {
		return (
			<div>
				{this.state.isLoading === true ? (
					<img
						src="https://i.pinimg.com/originals/f5/a4/9b/f5a49bee120a71d8a00a273a5a315d04.gif"
						alt="loading"
					/>
				) : (
					<Movies movies={this.state.movies} />
				)}
			</div>
		);
	}
}
