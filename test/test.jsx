import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import Button from '../index.jsx'
const {TestUtils} = addons
const {isElement} = TestUtils

test('Button: constructor', (t) => {
  const button = React.createElement(Button)
  t.ok(
    isElement(button)
    , 'is a valid react component'
  )

  t.end()
})

