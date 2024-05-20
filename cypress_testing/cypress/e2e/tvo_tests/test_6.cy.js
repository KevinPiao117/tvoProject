describe('template spec', () => {
  before(() => {
    cy.setup()
  })

  // Test 6
  it('check elements in list', () => {
    cy.get('#s-21183bd0-8fed-4d84-b535-64484df11e21 li').should('have.length', 6)
    cy.get('#s-21183bd0-8fed-4d84-b535-64484df11e21 li').first().should('contain.text', 'Social-Emotional Learning')
    cy.get('#s-21183bd0-8fed-4d84-b535-64484df11e21 li').last().should('have.text', 'Financial Literacy')
  })

})