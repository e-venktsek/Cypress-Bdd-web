class LandingPage{

  clickPlaceOrderButton(){
    return cy.get('[data-target="#modal-quick-order"]').click()
  }

  clickAndfillProductName(){
    return cy.get('.order__select--universal > .selectize-control > .selectize-input').click().type("Asian").click()
  }

  selectProduct(){
    return cy.get('.active > .product-select__text').click()
  }

  selectShade(){
    cy.get('.order__select--shade > .selectize-control > .selectize-input').click().type("M003").wait(3000)
  //cy.get('.selectize-input.items.has-options.not-full').click()
  }

  fillLitreQiuantity(){
    return cy.get('[name="qty0"]').clear().type("4")
  }

  fill200MLQiuantity(){
    return cy.get('[name="qty1"]').clear().type("10")
  }

  fill50MLQiuantity(){
    return cy.get('[name="qty2"]').clear().type("40")
  }

  clickAddToCart(){
    return cy.get('#newAddToCartBtn').click()
  }

  clickProceedCheckout(){
    cy.get('#btn-checkout').click()
  }

  clickSubmitOrder(){
    cy.get('#order-place').click()
  }

  VerifyOrderId(){
    cy.get('#success > :nth-child(1)').contains("Order ID")
  }

  verifyOrderIdInDashboard(){
    cy.get('#success span:first-child')
      .invoke('text')
      .then((orderIdText) => {
        const orderId = orderIdText.replace('Order ID: ', '').trim();
    cy.get('#orderPlacedModal > .modal-dialog > .modal-content > .modal-header > .close').click()
    cy.get('.left-navigation > .menu > :nth-child(1) > .ico-left-menu').click({force: true})  

    cy.get('.six-tiles > :nth-child(3) > .panel > .panel-body')
    .should('contain.text', orderId);
});
};

}

export default LandingPage