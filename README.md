## Betting Website

This is a web application for a betting website built using React JavaScript and the MERN stack (MongoDB, Express, React, and Node.js).

##
 About this website

A betting website is an online platform that allows users to place bets on various sports events, such as football, basketball, cricket, and more. Users can register an account, deposit funds, and use those funds to place bets on different sports events based on the available betting odds. The website typically provides real-time updates on sports events and their associated betting odds.

1. User Authentication and Authorization: Users can register an account, log in, and manage their account details.

2. Sports Events and Betting Odds: The website displays a list of sports events available for betting, along with the associated betting odds. Users can browse through the events, view details such as teams/players, match schedules, and current odds.

3. Betting Functionality: Users can place bets on sports events using their account balance. They can select the type of bet (e.g., win/lose, over/under, etc.), specify the amount they want to bet, and confirm their bet. 

4. Live Updates: The website provides real-time updates on sports events, including live scores, match progress, and changes in betting odds. This allows users to stay informed and make informed betting decisions.

5. Account Management: Users can manage their account details, including depositing and withdrawing funds, viewing transaction history, and checking their account balance. The website may also have features for responsible gambling, such as setting betting limits or self-exclusion options.

6. Admin Panel: The website may have an admin panel for managing sports events, betting odds, and user accounts. Admins can add, update, or remove sports events, manage betting odds, and review user activity for compliance with site policies.

7. Responsive Design: The website is designed to be responsive, providing a seamless experience across different devices, including desktops, tablets, and mobile phones.

8. Payment Integration: The website may integrate with payment gateways to facilitate deposits and withdrawals of funds from user accounts. This typically involves secure payment processing and adherence to applicable financial regulations.

9. Customer Support: The website may provide customer support features, such as live chat, email support, or a knowledge base, to assist users with inquiries, issues, or complaints.

10. Legal Compliance: The website may comply with relevant laws and regulations related to online gambling, including age restrictions, responsible gambling measures, and data privacy requirements.

## Features

- User authentication and authorization using JWT (JSON Web Tokens)
- Ability to place bets on various sports events
- Live updates of sports events and betting odds
- Account management for users, including viewing betting history and account balance
- Admin panel for managing sports events, betting odds, and user accounts

## Technologies Used

- React: A popular JavaScript library for building user interfaces
- Redux: A state management library for managing global state in the application
- Node.js: A JavaScript runtime for server-side development
- Express: A web application framework for Node.js
- MongoDB: A NoSQL database for storing and managing data
- Mongoose: An Object Data Modeling (ODM) library for MongoDB
- Passport: A middleware for user authentication and authorization
- Axios: A popular HTTP client for making API requests
- Tailwind: A CSS framework for building responsive web pages
- Socket.io: A library for real-time bidirectional communication between the client and server

These technologies are subject to change in future as we build our website.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd betting-website`
3. Install the dependencies for the client: `cd client && npm install`
4. Install the dependencies for the server: `cd ../server && npm install`
5. Set up environment variables:
   - Create a `.env` file in the `server` directory
   - Define the following environment variables:
     ```
     PORT=<port-number>
     MONGODB_URI=<mongodb-uri>
     SECRET_KEY=<secret-key-for-jwt>
     ```
6. Start the client and server concurrently: `npm run dev`
7. Open your web browser and go to `http://localhost:3000` to access the betting website.

## Usage

- Register an account or log in to an existing account
- Browse sports events and view the betting odds
- Place bets on sports events
- View account balance, betting history, and open bets
- Admins can manage sports events, betting odds, and user accounts through the admin panel

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Description of your changes"`
4. Push your changes to the forked repository: `git push origin feature-name`
5. Create a pull request against the `main` branch of the original repository


## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Passport](http://www.passportjs.org/)
- [Axios](https://axios-http.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Socket.io](https://socket.io/)

## Contact

If you have any questions or suggestions, please feel free to contact the project owner:

- [Utkarsh](mailto:hauntedutkarsh@gmail.com)