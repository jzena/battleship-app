

describe('Header Component ', () => {

  beforeEach(() => cy.visit('/'))

  it('should select level', () => {
    cy.selectLevel();
    cy.get('button').click()
  })
  it('should click on settings menu', () => {
    cy.selectLevel();
    cy.get('button').click()
    cy.get('header').should('exist')
    cy.get('#menuSettings').click()
  })
  it('should click on records menu', () => {
    cy.selectLevel();
    cy.get('button').click()
    cy.get('header').should('exist')
    cy.get('#menuRecords').click()
    cy.findByTestId(/redordsPage/i).should('exist')
  })
  it('should click on Game menu', () => {
    cy.selectLevel();
    cy.get('button').click()
    cy.get('header').should('exist')
    cy.get('#menuGame').click()
    cy.findByTestId(/gamePage/i).should('exist')
  })
  it('should click on logOut button', () => {
    cy.selectLevel();
    cy.get('button').click()
    cy.get('header').should('exist')
    cy.get('#btnLogout').click()
  })
})
