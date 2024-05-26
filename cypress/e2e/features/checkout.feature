Feature: Checkout


  Scenario: Successful login and place order from header
    When the portal is launched and logged in
    Then add a item to cart from header
    And select the shade
    And complete the order successfully
    And validate the order in dashboard

  Scenario: Place order from my favorites product
    When the portal is launched and logged in
    Then Open My favorite products
    And add a favorite product to cart and place order
    And validate the order in dashboard

  Scenario: Place order from Taskcard
    When the portal is launched and logged in
    Then add a item to cart from taskcard
    # And select the quantity
    # And add the item to cart
    # And complete the order successfully
    # And validate the order in dashboard