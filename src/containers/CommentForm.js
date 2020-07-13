import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewComment, fetchComments } from '../store/actions/comment';
import { Field, reduxForm } from 'redux-form';

//========================= normal form ================//
class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: ''
		};
	}

	handleNewComment = (event) => {
		event.preventDefault();
		this.props.postNewComment(this.state);
		this.setState({ detail: '' });
		// this.props.history.push("/");
	};

	render() {
		return (
			<form onSubmit={this.handleNewComment} style={{ width: '100%' }}>
				<input
					type="text"
					className="form-control"
					value={this.state.detail}
					onChange={(e) => this.setState({ detail: e.target.value })}
				/>

				<button type="submit" className="btn btn-dark">
					Add my Comment!
				</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		errors: state.errors
	};
}
export default connect(mapStateToProps, { postNewComment, fetchComments })(CommentForm);
//==================== redux form =============================//
// class CommentForm extends Component {
// 	submit = (values) => {
// 		this.props
// 			.postNewComment(values)
// 			.then(() => {
// 				return this.props.reset();
// 			})
// 			.then(() => {
// 				return this.props.fetchComments();
// 			});
// 		// this.props.history.push('/');
// 	};

// 	render() {
// 		// ============================
// 		const { handleSubmit } = this.props;
// 		return (
// 			<form onSubmit={handleSubmit(this.submit)} className="col-12">
// 				<div>
// 					<label>Add Your Comment</label>
// 					<div>
// 						<Field
// 							className="col-12"
// 							name="detail"
// 							component="textarea"
// 							type="text"
// 							placeholder="add your comment here"
// 						/>
// 					</div>
// 					<button type="submit" className="btn btn-dark">
// 						Add Your Comment
// 					</button>
// 				</div>
// 			</form>
// 		);
// 	}
// }
// CommentForm = reduxForm({
// 	// a unique name for the form
// 	form: 'commentform'
// })(CommentForm);

// function mapStateToProps(state) {
// 	return {
// 		errors: state.errors
// 	};
// }

// export default connect(mapStateToProps, { postNewComment, fetchComments })(CommentForm);

// ============================================//
