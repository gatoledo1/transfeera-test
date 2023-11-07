describe('Navigation', () => {
  beforeEach(() => {
    cy.viewport(1400, 900)
    cy.visit('/')
  })
  it('Open modal', () => {
    cy.get(".ant-table-tbody .ant-table-row:nth-child(2) > .ant-table-cell:nth-child(2) > .btn-none").click()
    cy.getByData("modal-btn-close").click()
    cy.log('Favorecido removido!')
  })
  it('Change table page', () => {
    cy.get('.ant-pagination-item-2 > a').click()

  })
})