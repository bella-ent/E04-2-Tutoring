import React, { Component } from "react";

export default class ToDoView extends Component {
	render() {
		return (
			<div>
				{this.props.toDos.map((item, index) => (
					<h2 key={index}>
						{item}
						<button onClick={() => this.props.removeToDo(index)}>x</button>
					</h2>
				))}
			</div>
		);
	}
}
