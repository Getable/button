import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import Button from '../index.jsx'
const {TestUtils} = addons
const {Simulate, renderIntoDocument, isElement, createRenderer} = TestUtils
// const getReactNode = (dom, node) => TestUtils.findRenderedDOMComponentWithTag(dom, node)
// const getDOMNode = (dom, node) => getReactNode(dom, node).getDOMNode()
// const getDOMNodes = (dom, type) => TestUtils.scryRenderedDOMComponentsWithTag(dom, type)
// const getDOMNodeText = (dom, node) => getDOMNode(dom, node).textContent

test('Button: constructor', (t) => {
  const button = React.createElement(Button)
  t.ok(
    isElement(button)
    , 'is a valid react component'
  )

  t.end()
})

