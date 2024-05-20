describe('template spec', () => {
  before(() => {
    cy.setup()
  })

  // Test 3
  it('validate on this page buttons', () => {
    cy.get('.button-list>li')
      .its('length')
      .should('be.eq', 4)
    cy.get('.button-list>li')
      .first()
      .should('have.text', 'Learning Activities')
    cy.get('.button-list>li')
      .last()
      .should('have.text', 'Vocabulary')
  })

})