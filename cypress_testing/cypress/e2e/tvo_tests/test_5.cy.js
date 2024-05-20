describe('template spec', () => {
  before(() => {
    cy.setup()
  })

  // Test 5
  it('different viewport tests', () => {

    cy.viewport(1920, 1080)
    cy.get('#AccessibleNav').should('be.visible')

    cy.viewport('iphone-3')
    cy.log('Resolution changed to mobile size')
    cy.get('#AccessibleNav').should('not.be.visible')

  })

})