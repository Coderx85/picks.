# Betting Website

This is a web application for a betting website built using React JavaScript and the MERN stack (MongoDB, Express, React, and Node.js).

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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
