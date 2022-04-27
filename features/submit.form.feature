Feature: Automate Practice Form

  Scenario Outline: As a user, I can ...

    Given I am on the demoqa page

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
