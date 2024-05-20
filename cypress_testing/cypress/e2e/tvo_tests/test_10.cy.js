describe('template spec', () => {
  // Test 10
  it('test for french compatibility', () => {
    cy.setup()
    cy.get('#SiteNav')
      .contains('Français')
      .should('be.visible')
      .click()
    cy.contains('Mathématiques').should('exist')
  })

  it('test for french compatibility from the beginning', () => {
    cy.visit('https://tvolearn.com/')
    cy.get('#SiteNav')
      .contains('Français')
      .should('be.visible')
      .click()
    cy.contains('Des ressources pédagogiques sur lesquelles').should('exist')
    cy.log('Home page french support is valid')
    cy.get('#SiteNav').contains('Ressources pédagogiques').click()
    cy.get('#SiteNavLabel-learning-resources-k-12').contains('5ᵉ année').click()
    cy.contains('Focus sur la cinqième année').should('exist')
    cy.log('Grade 5 page french support is valid')
    cy.get('.button-subject-name').contains('Mathématiques').click()
    cy.contains('Mathématiques').should('exist')
    cy.log('Grade 5 Math page french support is valid')
  })


})