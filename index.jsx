import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
import omit from 'lodash/object/omit'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'btn'

export default class Button extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    const classes = [namespace].concat(this.props.classes)
    return (
      <button {...omit(this.props, 'text')} className={classes.join(' ')}>
          <span className="btn-label">{this.props.text}</span>
      </button>
      )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired
  , classes: PropTypes.array.isRequired
  , onClick: (props, propName) => {
    if (props.type !== 'submit' && !props[propName]) {
      return new Error('if the type is not `submit`, you must define onClick')
    }
  }
  , type: PropTypes.string
}

Button.defaultProps = {
  text: 'Submit'
  , classes: []
}
