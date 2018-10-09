import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField (field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
          type="text"
        />
        <div className="text-danger">{field.meta.error}</div>
      </div>
    );
  }

  onSubmit(values){
    console.log('values:', values);
  }

  render () {

    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate (values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a title.';
  }

  if (!values.categories) {
    errors.categories = 'Please enter some categories.';
  }

  if (!values.content) {
    errors.content = 'Please enter some content.';
  }

  // If errors is an empty object, the form is fine to submit
  // If errors has any properties in it, redux-form assumes the form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(PostsNew);