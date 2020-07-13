import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleSubmit = e => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return(
      <div>
        Create Todo Component{ event => this.handleSubmit(event) }
        <form onSubmit= {this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type='text' name='text' onChange={this.handleChange} />
            <input type='submit' />
          </p>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({ 
      type: 'ADD_TODO',
      payload: formData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
