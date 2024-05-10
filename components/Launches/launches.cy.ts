
describe('10 Results are returned', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="LaunchCard"]').should('have.length', 10)
  })
})

describe('LaunchCard renders image', () => {
  // if the image loads the rest of the content is likely to be there
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="LaunchCard__img"]')
      .first()
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
  })
})
