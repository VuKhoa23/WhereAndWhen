# CS50W Final Project - WhereAndWhen

- [CS50W Final Project - WhereAndWhen](#cs50w-final-project---WhereAndWhen)
  - [Overview](#overview)
  - [Distinctiveness and Complexity](#distinctiveness-and-complexity)
  - [File structure description](#files-structure-description)
  - [How to run the application](#how-to-run-the-application)
  - [Features I would like to improve/add](#todo-list)

## Overview
Have you ever wanted to keep track of the places you have visited but lacked a tool to do so? With WhereAndWhen, you can save all your journeys and plan for upcoming trips. This app addresses users' real needs with a friendly and easy-to-use interface.

Let's get started with WhereAndWhen!

## Distinctiveness and Complexity
### Distinctiveness
This project is entirely different from Project Commerce and Project Network. It is an application designed to facilitate and manage journeys in an easy and convenient way. All you need to provide the program with is "Where And When," and it will organize and store your itinerary with a user-friendly interface.
### Comlexity
The first complexity is to figure out how to effectively and simply manage journeys so that users do not feel confused when using the application. In addition, it is necessary to find a way to make the interface intuitive and user-friendly, ensuring that it works well both on computers and mobile devices.

Furthermore, one of the biggest concerns when planning a trip is the weather. So, I want the program to integrate the weather of the locations on the interface. Therefore, I have researched the existing APIs and integrated them into my program. The difficulty here lies in using an external API for integration.

And I want my application to respond quickly to user interactions, so I have implemented a single-page structure for my application. Therefore, I had to write my own RESTful API to serve the program. The single-page structure allows for a smoother user experience, as the application loads once, and subsequent interactions with the app don't require full page reloads. This enhances responsiveness and reduces the waiting time for users.

And because this is an application that extensively utilizes dates, I have to handle various date-related cases, such as calculating the number of days until a trip, determining the number of days since a trip was taken, and more.

Here are some APIs that I wrote to serve this project

| METHOD | URL                          | Result                                                  | 
| ------ | ---------------------------- | ------------------------------------------------------- |
| POST   | /trip                        | Add new trip. If the trip with <br/> specific date and city name exists, it return fail| 
| DELETE | /trip                        | Delete the trip                                         | 
| GET    | /trip/get-all                | Get all the trips of the user who is requesting         | 
| GET    | /trip/<int:id>               | Get a specific trip with specific id to display on the </br> detail page| 
| PUT    | /trip/update-notes/<int:id>  | Update notes for the trip which id is id                | 

And ofcourse. My application is mobile-responsive


