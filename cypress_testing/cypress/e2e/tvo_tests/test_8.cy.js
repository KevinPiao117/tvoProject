describe('template spec', () => {
  // Test 8
  it('open video link under Resources for Learning', () => {
    cy.setup()
    cy.get('#resources li')
      .contains('Algebraic Expressions')
      .as('video_link')

    cy.get('@video_link')
      .invoke('attr', 'href')
      .should('include', 'tvokids.com')

    cy.log('The url for algebraic expression video is correct')

    cy.get('@video_link')
      .invoke('removeAttr', 'target')
      .click()
  })

  it('open video link under Resources for Learning', () => {
    cy.visit("https://www.tvokids.com/school-age/homework-zone-interstitials/videos/algebraic-expressions")
    cy.log('Navigated to the video link')
    cy.url().should('include', 'homework-zone')

    cy.get('video')
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .then(($video) => {
        $video[0].play()
      })
    cy.log('Video is playing')
    // once the video starts playing, check props
    cy.get('video')
      .should('have.prop', 'paused', false)
      .and('have.prop', 'ended', false)
      .then(($video) => {
        $video[0].pause()
      })
    cy.log('Video is paused')
  })
})