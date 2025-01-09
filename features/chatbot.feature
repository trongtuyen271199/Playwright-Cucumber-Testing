Feature: Chatbot API interaction

Scenario: Send a message to the chatbot and get a 200 status code
  Given I have a valid chat id and message
  When I send a POST request to the chatbot API
  Then I should receive a status code 200
