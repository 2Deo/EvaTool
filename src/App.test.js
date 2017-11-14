// src/App.test.js
import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Batch from './components/Batch'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains a Batch', () => {
    expect(app).to.have.descendants(Batch)
  })


})
