import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import App from './App'

test('renders without crashing', () => {
	const div = document.createElement('div')

	ReactDOM.render(<App />, div)
	ReactDOM.unmountComponentAtNode(div)

	const tree = renderer.create(<App />).toJSON()

	expect(tree).toMatchSnapshot()
})
