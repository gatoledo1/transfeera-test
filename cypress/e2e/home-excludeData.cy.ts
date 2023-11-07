import { CreatePayee } from "./features/create-payee"

describe('Change table', () => {
  context('Add new Payee', function() {
    CreatePayee()
  })
  context('Exclude data', function() {
    beforeEach(() => {
      cy.viewport(1400, 900)
      cy.visit('/')
    })
    it('Execute delete', () => {
      cy.get('.ant-table-column-sorters').click()
      cy.get('.ant-table-column-sorters').click()
      cy.get('.ant-table-tbody .ant-table-row:nth-child(2) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
      cy.getByData("delete-selections").click()
      cy.log("Favorecido 'Teste Cypress' removido!")
    })
  })
})