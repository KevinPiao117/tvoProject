describe('template spec', () => {
  before(() => {
    cy.setup()
  })

  // Test 7
  it('Open game link under Resources for Learning', () => {
    cy.get('#resources li')
      .contains('Cyber-Siege')
      .as('game_link')

    cy.get('@game_link')
      .invoke('attr', 'href')
      .should('include', 'mpower.tvo.org')

    cy.get('@game_link')
      .invoke('removeAttr', 'target')
      .click()
  })

})