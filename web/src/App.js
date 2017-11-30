import React, { Component } from 'react';
import './App.css';
import ImgList from './Components/ImgList';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
	 this.setState({value: event.target.value});
}

 handleSubmit(event) {
	 fetch('https://pixabay.com/api/?key=4521698-0a0bb4f2bcb4188eb3a7646d7&q=' + this.state.value + '&image_type=photo&pretty=true')
 		.then(res => res.json())
 		.then(data => {
 			this.setState({ imgs: data.hits });
 		})
 		.catch(err => {
 			console.log('Error happened during fetching!', err);
 		});
	 event.preventDefault();
}

componentDidMount() {
	fetch('https://pixabay.com/api/?key=4521698-0a0bb4f2bcb4188eb3a7646d7&q=happy&image_type=photo&pretty=true')
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
				<form onSubmit={this.handleSubmit}>
		      <label>
		        	<input className="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Seach for anything..." />
		       </label>
		       	<input className="btn" type="submit" value="Search" />
	     	</form>
				</div>
			</div>
			<div className="main-content">
				<ImgList data={this.state.imgs} />
			</div>  
		</div>
	);
}
}
