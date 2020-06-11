import React, { Component } from 'react';

class ImageCard extends Component {
	constructor(props) {
		super(props);

		this.state = { spans: null };

		this.imageRef = React.createRef(); //for DOM reference
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans); //to get height we cant reference it directly 
																		//we must add event listener first
																		//reference desired property in function callback
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		
		const spans = Math.ceil(height / 10);

		this.setState({ spans });
	}

	render = () => {

		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
