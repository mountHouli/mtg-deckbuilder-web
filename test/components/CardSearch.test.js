import React from 'react'
import renderer from 'react-test-renderer'

import Header from 'components/Header'

it('Header snapshot matches', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
})
