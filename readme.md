# Contact List API

This project is a web server that provides a RESTful API for managing user contact lists.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VitaliiBlyskun/contacts-reader-api.git
   ```

- Navigate to the project directory:
  `cd contacts-reader-api`

- Install dependencies:
  `npm install`

## Usage

**Registering a new user**

To register a new user, use an HTTP POST request to /api/users. Send the new user's data in JSON format, including their name, email, and password.

_Swagger Documentation_
You can explore the API documentation using Swagger by navigating to https://contacts-reader-api.onrender.com/api/swagger after starting the server.

**Running the Server**

- Production mode:
  `npm start`

- Development mode:
  `npm run start:dev`

**Linting**
Code linting is performed using ESLint. Before each Pull Request, run the command:
`npm run lint`

To automatically fix simple errors, use:
`npm run lint:fix`

## Dependencies

This project is built using the following technologies and libraries:

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer
- JWT Web Token
- Gravatar

Author

- Author: Vitalii Blyskun
- GitHub: VitaliiBlyskun
