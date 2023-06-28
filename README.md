# SARK Product Review Site

This Project is Developed as a part of course CS5610. It is Developed by Kaushik Boora, Rahul Reddy Baddam, Sai Sriker Reddy Vootukuri and Abhishek Kumar.
This Repository contains the code for the Frontend of SARK Product review site.

## About

SARK Product review site is a website where users can lookup for products and rate them, developed using React, Redux, HTML5, CSS3, Bootstrap technologies on the frontend.
The site essentially uses a Free Open API service that provides product information. This product Information can be stored on Database. This site assumes there are 3 types of users, Customer, Dealer and Admin.

## Features

This Site provides following pages,
| Page Name | Path | Description |
| ----------- | ---- | ----------- |
| Home Page | "/home" or "/" | The Home Page is the landing page. This page displays content catered based on the user type. For anonymous users it displays generic conetnt and for registered used it shows the last five posts they liked or commented. |
| Profile Page (Self) | "/profile" | The Profile Page displays personal Information of the Currently logged in user. It displays information like first Name, Last name, DOB, Address, Payment Info. |
| Profile Page (Other) | "/profile/{user_id}" | The Profile Page displays Public Information of the user. It displays information like first Name, Last name, user type and most recent activity. |
| Search Page | "/search" | This Page provides the users an ability to search for a product. The page displays search results from the database and Third party API being used. |
| Search Result Page | "/details_db/{product_id}" or "/details/{amazon_pid}" | This Page displays all the Product info, comments about the product and ratings. A user can Like a product or save a product (if they are dealer or admin). |
| Login Page | "/login" | This Page allows users to Login based on username and Password provided. The form consists of validation and error messages will be displayed if incorrect data is provided. |
| Register Page | "/register" | This Page allows users to Register by providing information. The form consists of validation and error messages will be displayed if incorrect data is provided. |

## Running the project

Follow the below steps to run the project

1. Clone the Directory.
2. Make sure the backend is running locally on "localhost:4300" or provide a backend link for the following environmnet variable "REACT_APP_API_SARK".
3. In a terminal move to the cloned directory. Execute the following command `npm start`. This will start the frontend and open up a new browser window with "localhost:3000".
