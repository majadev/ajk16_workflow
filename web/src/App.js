import React, { Component } from 'react';
import './App.css';
import ImgList from './Components/ImgList';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
		fetch('https://pixabay.com/api/?key=4521698-0a0bb4f2bcb4188eb3a7646d7&q=yellow+flowers&image_type=photo&pretty=true')
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data.hits });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">Yellow Flowers</h1>
					</div>
				</div>
				<div className="main-content">
					<ImgList data={this.state.imgs} />
				</div>
			</div>
		);
	}
}
