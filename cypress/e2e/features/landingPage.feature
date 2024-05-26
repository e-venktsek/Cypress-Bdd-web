Feature: Checkout


  Scenario: Place a order and validate the order id in dashboard
    When the portal is launched and logged in
    Then add a item to cart
    And select the shade
    And complete the order successfully
    And validate the order in dashboard