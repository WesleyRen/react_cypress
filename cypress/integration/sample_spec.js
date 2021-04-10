describe('My First Test', () => {
  it('Visits the my Modal', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Demo Stuff')
    cy.get('.modal-container').should('not.exist')

    cy.contains('show Modal').click()
    cy.get('.modal-container').should('exist')

    cy.contains('Close Modal').click()
    cy.contains('show Modal')
    cy.get('.modal-container').should('not.exist')

  })

  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')


    cy.get('#name')
      .type('Joe Doe')
      .should('have.value', 'Joe Doe')
  })

})