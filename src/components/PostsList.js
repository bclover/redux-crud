import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsList extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  renderPosts() {
    const { posts } = this.props;
    return _.map(posts, post => (
      <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right button-row-padding">
          <Link className="btn btn-primary" to="/posts/new">
              Add a Post
          </Link>
        </div>
        <h3>List of Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

PostsList.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.object,
};

PostsList.defaultProps = {
  fetchPosts: {},
  posts: {},
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
