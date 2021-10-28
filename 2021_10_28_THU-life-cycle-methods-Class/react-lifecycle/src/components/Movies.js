import React, { Component } from "react";

export default class Movies extends Component {
	render() {
		return (
			<div>
				{this.props.movies.map((movie) => (
					<h2>{movie.Title}</h2>
				))}
			</div>
		);
	}
}
