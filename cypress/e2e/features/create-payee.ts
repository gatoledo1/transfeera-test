export const CreatePayee = () => {
  describe('Create new Payee', () => {
    beforeEach(() => {
      cy.viewport(1400, 900)
      cy.visit('/new')
    })
    it('Populate form', () => {
      cy.getByData('input_name').type("Teste Cypress")
      cy.getByData('input_cpf').type('57851356040')
      cy.getByData('input_email').type('gatoledo1@gmail.com')
      cy.getByData('select_pix').select('cpf')
      cy.getByData('input_pix_key').type('57851356040')
      cy.getByData('modal-btn-save').click()
      cy.getByData("toast").find("p").should("contain", "Favorecido adicionado com sucesso")
      cy.get('.ant-table-column-sorters').click()
      cy.get('.ant-table-column-sorters').click()
      cy.get(".ant-table-tbody .ant-table-row:nth-child(2) > .ant-table-cell:nth-child(2) > .btn-none").should("contain", "Teste Cypress")
      cy.log('Favorecido Adicionado no final da lista!')
    })
  })
}