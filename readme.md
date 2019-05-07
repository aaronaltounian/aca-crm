## Intro
 A CRM is a software system that let's you create and maintain customer information. Use the existing code as a starting point for building a very basic CRM app. We will allow the creation of customers and searching for customers in our system. We are going to use this project to practice interacting with a database.


## Mlab
Make sure you have a Mlab account and create a datbase for this project. Create a collection for `customers`. Enable the api and get your api key.

## Create Customer - createCustomer
* When you click submit, this function will be called
* Make a fetch call to the mlab api sending the information in the body as JSON.
* What should happen after a customer is succesfully created?

## Search Customer - searchCustomer
* When you click the search button, this function will be called
* Make a fetch call to the Mlab api to search for customers by some value. What should it search for?
* Display the results in a table using the existing example.

## Customer Details - viewCustomer
* When you click on View in a customer record it will display the customer details
* Make a fetch call to the mlab api to retrieve one customer by id
* Show this customer's information in the UI

## Question
* What other functionality could we add?
* Why do we use mlab to search. Why don't we just retrieve all customers and then filter?
* What is the problem with building our app this way?
