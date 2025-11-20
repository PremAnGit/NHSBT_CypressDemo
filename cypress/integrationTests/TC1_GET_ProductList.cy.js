describe('API: Products List', () => {

    it('should GET products list', () => {
  
      const api = Cypress.env('apiUrl');
      const productListPath = Cypress.env('productList');
  
      // Clean up possible whitespace
      const base = api.trim().replace(/\/$/, '')
      const path = productListPath.trim().replace(/^\//, '')
      
      const fullUrl = `${base}/${path}`

    cy.request({
      method:'GET',
      url:fullUrl}).then((response) => {
      expect(response.status).to.eq(200);
      // assume response.body is an array
      expect(response.body).to.have.length.greaterThan(0);
      });
    });
  });