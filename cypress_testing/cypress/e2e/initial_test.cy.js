describe('validate the functionality of grade 5 math page', () => {
  beforeEach(() => {
    cy.visit('https://tvolearn.com/')
    cy.get('#SiteNav').contains('Learning Resources').click()
    cy.get('#SiteNavLabel-learning-resources-k-12').contains('Grade 5').click()
    cy.get('.button-subject-name').contains('Mathematics').click()
  })

  // // Test 1
  // it('check if it reached the selected page', () => {
  //   cy.url().should('include', '/grade-5-mathematics')
  // })

  // // Test 2
  // it('validate if scroll to top button works', () => {
  //   cy.get('#bttopBtn').should('not.be.visible')
  //   cy.scrollTo('bottom')
  //   cy.get('#bttopBtn').should('be.visible')
  //   cy.get('#bttopBtn').click()
  //   cy.get('#bttopBtn').should('not.be.visible')
  // })

  // // Test 3
  // it('validate on this page buttons', () => {
  //   cy.get('.button-list>li')
  //     .its('length')
  //     .should('be.eq', 4)
  // })

  // // Test 4
  // it('validate subscribe button', () => {
  //   // check button without any input
  //   cy.get('input[name="subscribe"]').click()
  //   cy.get('input[name="EMAIL"]').should('be.focused')
  //   cy.get('.mce_inline_error').should('be.visible')

  //   // check button with a valid email address
  //   cy.get('input[name="EMAIL"]').type('abc@abcde.com')
  //   cy.get('input[name="EMAIL"]').should('have.value', 'abc@abcde.com')
  //   cy.get('input[name="subscribe"]').click()
  //   cy.get('#mce-success-response').should('be.visible')
  // })

  // // Test 5
  // it('different viewport tests', () => {

  //   cy.viewport(1920, 1080)
  //   cy.get('#AccessibleNav').should('be.visible')

  //   cy.viewport('iphone-3')
  //   cy.get('#AccessibleNav').should('not.be.visible')

  // })

  // // Test 6
  // it('check elements in list', () => {
  //   cy.get('#s-21183bd0-8fed-4d84-b535-64484df11e21 li').should('have.length', 6)
  //   cy.get('#s-21183bd0-8fed-4d84-b535-64484df11e21 li').last().should('have.text', 'Financial Literacy')
  // })

  // // Test 7
  // it('Open link under Resources for Learning', () => {
  //   cy.get('#resources li')
  //     .first()
  //     .invoke('removeAttr', 'target')
  //     .click()
  //   cy.wait(200)
  //   cy.url().should('include', 'mpower.tvo,org')
  // })

  // Test 8
  it('search functionality', () => {
    cy.get('#SiteNav > li:nth-child(5) > button').click()
    cy.get('#SearchDrawer > div > div.search-bar__table-cell.search-bar__form-wrapper > form')
      .should('be.visible')
    cy.get('#SearchDrawer > div > div.search-bar__table-cell.search-bar__form-wrapper > form')
      .find('[type="text"]')
      .type('grade 6 math')
    cy.get('#SearchDrawer > div > div.search-bar__table-cell.search-bar__form-wrapper > form')
      .submit()
    cy.wait(200)
    cy.url().should('include', 'search')
    cy.get('#MainContent > div.search-results-content > h1')
      .should('contain.text', 'grade 6 math')
  })

})
