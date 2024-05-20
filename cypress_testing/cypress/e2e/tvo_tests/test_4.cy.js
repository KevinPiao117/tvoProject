describe('template spec', () => {
  beforeEach(() => {
    cy.setup()
  })

  // Test 4
  it('validate subscribe button without input', () => {
    // check button without any input
    cy.get('input[name="subscribe"]').click()
    cy.get('input[name="EMAIL"]').should('be.focused')
    cy.get('.mce_inline_error').should('be.visible')
  })

  it('validate subscribe button with valid email address', () => {
    // check button with a valid email address
    cy.get('input[name="EMAIL"]').type('abc@abcde.com')
    cy.get('input[name="EMAIL"]').should('have.value', 'abc@abcde.com')
    cy.get('input[name="subscribe"]').click()
    cy.log("Subscribe button Clicked")
    cy.get('#mce-success-response').should('be.visible')
  })

})