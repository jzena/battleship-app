describe('Unauthenticated App ', () => {
  beforeEach(() => cy.visit('/'))

  it('should display page', () => {
    cy.findByTestId(/settingsTitle/i).should('exist')
  })
  it('should select level', () => {
    cy.selectLevel()
    cy.get('button').click()
  })
})
