describe('template spec', () => {
  before(() => {
    cy.setup()
  })

  // Test 9
  it('search functionality', () => {
    cy.get('#SiteNav > li:nth-child(5) > button')
      .click()
    cy.log("Search button clicked")
    cy.get('#SearchDrawer > div > div.search-bar__table-cell.search-bar__form-wrapper > form')
      .should('be.visible')
    cy.log("Search drawer is visible")
    cy.get('#SearchDrawer > div > div.search-bar__table-cell.search-bar__form-wrapper > form')
      .find('[type="text"]')
      .type('grade 6 math')
    cy.get('#SearchDrawer > div > div.search-bar__table-cell.search-bar__form-wrapper > form')
      .submit()
    cy.log("Search text of grade 6 math is inputted and submitted")
    cy.wait(200)
    cy.url().should('include', 'search')
    cy.get('#MainContent > div.search-results-content > h1')
      .should('contain.text', 'grade 6 math')
  })

})