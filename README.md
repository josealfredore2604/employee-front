# Employee Management Front-End

This is a front-end application for managing employee information, built with React and Bootstrap. It allows users to view a list of employees, fetch employee data, and see detailed information about a selected employee.

## Features

- **Employee List**: View and search through a list of employees.
- **Employee Detail**: View detailed information about a selected employee, including their profile image, ID, name, age, and salary.
- **Fetch Employees**: Fetch and log employee data from the server.

## Requirements

- Node.js (v14 or later)
- npm or yarn (for package management)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/josealfredore2604/employee-front.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd employee-front
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Configuration

Ensure that your project is set up to communicate with the back-end server by configuring the proxy in `package.json`. It should be set to the URL of your back-end server:

```json
"proxy": "http://localhost:8080"
```

## Usage

1. **Start the Development Server**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   This will start the development server and open the application in your default web browser.

2. **Fetch Employees**

   Click the "Fetch Employees" button to fetch and log employee data from the server.

3. **View Employee List**

   Use the search box to filter employees by their ID or view the complete list.

4. **View Employee Details**

   Click on an employee in the list to view their detailed information, including their profile image, ID, name, age, and salary.

## API Endpoints

- **Fetch All Employees**: `GET /employees`
- **Fetch Employee Details**: `GET /employees/:id`
- **Fetch Annual Salary**: `GET /employees/annual-salary/:id`
- **Fetch Employees (Button Click)**: `POST /employees/fetch`


## Contact

For any questions or issues, please contact [josealfredore200326@gmail.com](mailto:josealfredore200326@gmail.com).