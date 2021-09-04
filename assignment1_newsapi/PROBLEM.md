# **Assignment 1 – NewsAPI Source**

The News Api UI is alrady created.

The Application should be treated as a service for same UI.

## Objective:
The Objective of this application is to understand the fundamentals of Express.

### The estimated effort to complete this assignment is 3-4 hours

## Things to do
- Fork the boilerplate
- Clone the repo in your local directory
- Start coding in your local copy
- Push the code in git
- Submit the code to your mentor

## Boilerplate

Nodejs_Assignment1

## Expected Outcome:
By the end of the assignment you should be able to understand

1. Modules
2. Express
3. Testing

## The NEWS API to be used as data source
- To get category wise news use the following end point. [Category News endpoint]
(https://newsapi.org/v2/top-headlines?category=<<news_category>>&apikey=<<api_key>>&page=1)
- To get trending news use the following endpoint. [Top Headlines endpoint]
(https://newsapi.org/v2/top-headlines?country=in&apikey=<<api_key>>&page=1)
- To search for any news based on serach text . [News search endpoint]
(https://newsapi.org/v2/everything?q=<<search_text>>&apiKey=<<api_key>>&language=en&page=1)

## To register for an API key, follow these steps:
- You need to signup to [NEWSAPI] (https://newsapi.org/register).

- After registration, API key is generated for you.

## Assignment:
This case study is about creating the backend of the news api UI

1. The application should read the data fron news 
2. the application should be able to pass the data from backend to the UI.
3. The application should be unit tested using mocha and chai

Note: Make a meaning full set of services which can be consumed by UI.
