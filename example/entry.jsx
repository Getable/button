import React from 'react'
import Button from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<Button {...data} />, document.getElementById('app'))
