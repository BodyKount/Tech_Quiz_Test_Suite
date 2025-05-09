import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })
  it('contains the text "Start Quiz"', () => {
    cy.mount(<Quiz />)
    cy.contains('Start Quiz').should('be.visible')
  })
})