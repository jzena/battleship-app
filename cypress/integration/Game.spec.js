describe('Game Page ', () => {
  beforeEach(() => cy.visit('/'))

  it('should page and board display', () => {
    cy.selectLevel()
    cy.get('button').click()
    cy.findByTestId(/gamePage/i).should('exist')
    cy.findByTestId(/board/i).should('exist')
  })
})
