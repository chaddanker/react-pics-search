import React, { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };
//controlled form - value property NB NB NB
	
	onFormSubmit = event => {
		event.preventDefault(); //stops default page reload on form submit

		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" onChange={e => this.setState({ term: e.target.value })} value={this.state.term} />
					</div>
				</form>
			</div>
		);
	}
}


export default SearchBar;