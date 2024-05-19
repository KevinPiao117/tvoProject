describe('validate the functionality of grade 5 math page', () => {
  beforeEach(() => {
    cy.visit('https://tvolearn.com/')
    cy.get('#SiteNav').contains('Learning Resources').click()
    cy.get('#SiteNavLabel-learning-resources-k-12').contains('Grade 5').click()
    cy.get('.button-subject-name').contains('Mathematics').click()
  })



  it('validate if scroll to top button works', () => {
    cy.get('#bttopBtn').should('not.be.visible')
    cy.scrollTo('bottom')
    cy.get('#bttopBtn').should('be.visible')
    cy.get('#bttopBtn').click()
    cy.get('#bttopBtn').should('not.be.visible')
  })

  it('check if it reached the selected page', () => {
    cy.url().should('include', '/grade-5-mathematics')
  })

  it('validate on this page buttons', () => {
    cy.get('.button-list>li')
      .its('length')
      .should('be.eq', 4)
  })

  it('validate subscribe button', () => {
    // check button without any input
    cy.get('input[name="subscribe"]').click()
    cy.get('input[name="EMAIL"]').should('be.focused')
    cy.get('.mce_inline_error').should('be.visible')

    // check button with a valid email address
    cy.get('input[name="EMAIL"]').type('abc@abcde.com')
    cy.get('input[name="EMAIL"]').should('have.value', 'abc@abcde.com')
    cy.get('input[name="subscribe"]').click()
    cy.get('#mce-success-response').should('be.visible')
  })


})
