describe('validate the functionality of grade 5 math page', () => {
  before(() => {
    cy.setup()
  })

  // Test 1
  it('check if it reached the selected page', () => {
    cy.url().should('include', '/grade-5-mathematics')
  })
})
