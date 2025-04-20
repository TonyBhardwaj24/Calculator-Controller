# Backend Calculator Application

This is the backend component of the calculator application. It is built using Node.js and Express, providing a RESTful API for performing basic arithmetic operations.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: The entry point of the application, setting up the Express server and middleware.
  - **routes/**: Contains route definitions for the application.
    - **calculatorRoutes.js**: Defines the endpoints for performing calculations.
  - **controllers/**: Contains the logic for handling requests.
    - **calculatorController.js**: Implements methods for arithmetic operations.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd calculator-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
node src/app.js
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

- **POST /calculate**: Performs a calculation based on the provided operation and operands.
  - Request body should include:
    - `operation`: The arithmetic operation (add, subtract, multiply, divide).
    - `operands`: An array of numbers to perform the operation on.

## Contributing

Feel free to submit issues or pull requests if you would like to contribute to this project.