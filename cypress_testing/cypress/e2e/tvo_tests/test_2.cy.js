describe('template spec', () => {
  before(() => {
    cy.setup()
  })

  // Test 2
  it('validate if scroll to top button works', () => {
    cy.get('#bttopBtn').should('not.be.visible')
    cy.scrollTo('bottom')
    cy.get('#bttopBtn').should('be.visible')
    cy.get('#bttopBtn').click()
    cy.log("Button Clicked")
    cy.get('#bttopBtn').should('not.be.visible')
  })
})