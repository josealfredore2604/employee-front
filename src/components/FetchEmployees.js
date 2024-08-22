import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

/**
 * Component to fetch and log the list of employees when the button is clicked.
 *
 * @returns {JSX.Element} - The rendered component.
 */
function FetchEmployees() {
    /**
     * Handles the click event of the "Fetch Employees" button.
     * Sends a POST request to the server to fetch employee data.
     */
    const handleFetch = async () => {
        try {
            // Send a POST request to the API endpoint to fetch employees.
            const response = await axios.post('employees/fetch');
            // Log the response data (list of employees) to the console.
            console.log(response.data);
        } catch (error) {
            // Log any error that occurs during the request.
            console.error('Error fetching employees:', error);
        }
    };

    return (
        <Button variant="info" onClick={handleFetch} className="mt-4">
            Fetch Employees
        </Button>
    );
}

export default FetchEmployees;
