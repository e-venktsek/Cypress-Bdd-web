/// <reference types="Cypress" />

import LandingPage from '../../pages/LandingPage'
import { Before, Then, When } from '@badeball/cypress-cucumber-preprocessor'

const landingPage = new LandingPage()

When(/^the portal is launched and logged in$/, () => {
  cy.login()
})

Then(/^add a item to cart$/, () => {
  landingPage.clickPlaceOrderButton();
  landingPage.clickAndfillProductName()
  landingPage.selectProduct()
})

Then(/^select the shade$/, () => {
  landingPage.selectShade()
  landingPage.fillLitreQiuantity()
  landingPage.fill200MLQiuantity()
  landingPage.fill50MLQiuantity()
})

Then(/^complete the order successfully$/, () => {
  landingPage.clickAddToCart()
  landingPage.clickProceedCheckout()
  landingPage.clickSubmitOrder()
})

Then(/^validate the order in dashboard$/, () => {
  landingPage.VerifyOrderId()
  landingPage.verifyOrderIdInDashboard()
})