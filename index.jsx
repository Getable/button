import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'button'

export default class Button extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  constructor (props) {
    super()

    const classes = [namespace].concat(props.classes)

    this.state = {
      className: classes.join(' ')
    }
  }

  render () {
    return (
      <button
        className={this.state.className}
        onClick={this.props.onClick}
        type={this.props.type}
        >
          {this.props.text}
      </button>
      )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired
  , classes: PropTypes.array.isRequired
  , onClick: PropTypes.func.isRequired
  , type: PropTypes.string
}

Button.defaultProps = {
  text: 'Submit'
  , classes: []
}
