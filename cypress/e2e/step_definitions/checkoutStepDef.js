/// <reference types="Cypress" />

import LandingPage from '../../pages/LandingPage'
import { Before, Then, When } from '@badeball/cypress-cucumber-preprocessor'

const landingPage = new LandingPage()

When(/^the portal is launched and logged in$/, () => {
  cy.login()
})

Then(/^add a item to cart from header$/, () => {
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

Then(/^add a item to cart from taskcard$/, () => {
  landingPage.clickMyOrderMenu()
  landingPage.clickPlaceOrder()
})

Then(/^select the quantity$/, () => {
  landingPage.fill1KGTextbox()
  landingPage.fill20LTextbox()
  landingPage.fill40LTextbox()
})

Then(/^add the item to cart$/, () => {
  landingPage.clickAddToCartButton()
  landingPage.proceedToOrder()
})

Then(/^Open My favorite products$/, () => {
  landingPage.myFavoriteTab()
})

Then(/^add a favorite product to cart and place order$/, () => {
  landingPage.addFavoriteProductToCart()
  landingPage.headerCartIcon()
  landingPage.clickSubmitOrder()
})