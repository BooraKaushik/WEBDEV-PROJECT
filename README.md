# SARK Product Review Site

This Project is Developed as a part of course CS5610. It is Developed by Kaushik Boora, Rahul Reddy Baddam, Sai Sriker Reddy Vootukuri and Abhishek Kumar.
This Repository contains the code for the Frontend of SARK Product review site. 

## About
SARK Product review site is a website where users can lookup for products and rate them, developed using React, Redux, HTML5, CSS3, Bootstrap technologies on the frontend.
The site essentially uses a Free Open API service that provides product information. This product Information can be stored on Database. This site assumes there are 3 types of users, Customer, Dealer and Admin.

## Features

This Site provides following pages,
| Page Name   | Path | Description |
| ----------- | ---- | ----------- |
| Home Page | /home or / | The Home Page is the landing page. This page displays content catered based on the user type. For anonymous users it displays generic conetnt and for registered used it shows the last five posts they liked or commented. |
| Profile Page (Self) | /profile | The Profile Page displays personal Information of the Currently logged in user. It displays information like first Name, Last name, DOB, Address, Payment Info. |
| Profile Page (Other) | /profile/{user_id} | The Profile Page displays Public Information of the user. It displays information like first Name, Last name, user type and most recent activity. |
| Search Page | /search | This Page provides the users an ability to search for a product. The page displays search results from the database and Third party API being used. |
| Search Result Page | /details_db/{product_id} or /details/{amazon_pid} | This Page displays all the Product info, comments about the product and ratings. A user can Like a product or save a product (if they are dealer or admin). |
| Login Page | /login | This Page allows users to Login based on username and Password provided. The form consists of validation and error messages will be displayed if incorrect data is provided. |
| Register Page | /register | This Page allows users to Register by providing information. The form consists of validation and error messages will be displayed if incorrect data is provided. |


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

