import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deletePost, fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { fetchPost, match: { params: { id } } } = this.props;
    fetchPost(id);
  }

  onDeleteClick() {
    const { history, match: { params: { id } } } = this.props;
    const { deletePost } = this.props;
    deletePost(id, () => {
      history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <div className="button-row">
          <Link to="/" className="btn btn-primary">Back to List</Link>
          <button
            type="button"
            className="btn btn-danger ml-auto"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
        </div>
        <h3>
          { post.title }
        </h3>
        <h6>
          Categories:
          { post.categories }
        </h6>
        <p>
          { post.content }
        </p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

PostsShow.propTypes = {
  deletePost: PropTypes.func,
  fetchPost: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
  post: PropTypes.object,
};

PostsShow.defaultProps = {
  deletePost: {},
  fetchPost: {},
  history: {},
  match: {},
  post: {},
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
