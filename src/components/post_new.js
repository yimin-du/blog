import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index'

class PostNew extends Component {
	render() {

		const { fields: { title, categories, content }, handleSubmit } = this.props;
		console.log(title);

		return (
			<div>
				<h3>Create a New Post</h3>
				<form onSubmit={handleSubmit(this.props.createPost)}>
					<div className="formGroup">
						<label>Title</label>
						<input type="text" className="form-control" {...title}/>
					</div>
					<div className="formGroup">
						<label>Categories</label>
						<input type="text" className="form-control" {...categories}/>
					</div>
					<div className="formGroup">
						<label>Content</label>
						<input type="text" className="form-control" {...content}/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, {createPost})(PostNew);