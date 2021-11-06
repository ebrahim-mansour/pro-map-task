Init backend by moving to backend directory and installing node_modules at first: 
  - cd backend
  - npm install

Create a .env file at the backend directory to define environment variables, and allow connection with database, include the following key:
  - MONGO_URI=mongodb://127.0.0.1:27017/project-managment

Run the following command to start the application on port 3000
  - npm start

Here is postman link if you would like to test backend APIs
  - https://www.getpostman.com/collections/5c5eb9a418b47af910a2

Init the frontend the same way as the backend, by installing the node_modules and starting the app by running:
  - npm start

The frontend will be running on:
  - http://localhost:4200
