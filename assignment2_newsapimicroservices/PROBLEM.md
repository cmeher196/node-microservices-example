---
layout: main
title: Assignment - 2 NewsApi L2
previousLink: ./nodejs-architecture
previousTitle: Nodejs Architecture
nextLink: ./developing-web-service
nextTitle: Developing Web Service 
duration: 
---
# **Assignment 2 – NewsAPI Microservices**

The Microservice based design for backend apis of News Application

## Objective:
The Objective of this application is to understand the Microservic design.

### The estimated effort to complete this assignment is 3-4 hours

## Things to do
- Fork the boilerplate
- Clone the repo in your local directory
- Start coding in your local copy
- Push the code in git
- Submit the code to your mentor


## Expected Outcome:
By the end of the assignment you should be able to understand

1. Microservices
2. API Gateway
3. Client Server comunication

## Biolerplate
[Nodejs Assignment 2](/services/gitlab/stack_nodejs/assignment2_newsapimicroservices)

## Assignment:
1. The application should have following backend services
    1. NewsApp Source
    2. NewsApp Aut
    3. NewsApp DB
    4. NewsApp UI
    5. ApiGateway

2. All the microservices should be independently deployed and accessed
3. the Microservices should perform the following task:-
    - NewsApp Source:- 
        - allready implemented in Assignment 1. please reuse the same.
    - NewsApp Auth:-
        - Responsible to preform the Authencation on the News Api.
        - should have login and Register routes.
        - the routes should return the static data for now.
    - NewsApp DB:-
        - Responsible to store the data into the database.
        - should have readnow and readlater routes.
        - Route should return static data for now 
    - NewsApp UI:-
        - Allready Implemented in UI sessions.please reuse the same.
    - ApiGateway:-
        - Responsible to Manage the application Routes.
        