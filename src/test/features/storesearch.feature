Feature: Specsavers nearest store search

  Background:
    Given user navigates to specsaver home page
    When user click on Find a store link

  Scenario: user fetching nearest stores 
    And user key the Coventry store and hit enter
    Then user see the Coventry store card
     


