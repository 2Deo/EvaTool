// src/App.test.js
import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Navigation from './components/Navigation'
import Routes from './routes'


chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('contains a Navigation', () => {
    expect(app).to.have.descendants(Navigation)
  })

  it('contains Routes', () => {
    expect(app).to.have.descendants(Routes)
  })

})
