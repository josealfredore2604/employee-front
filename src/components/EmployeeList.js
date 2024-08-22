import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

/**
 * Component to display and search for employees.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.setSelectedEmployeeId - Function to set the selected employee ID in the parent component.
 *
 * @returns {JSX.Element} - The rendered component.
 */
function EmployeeList({ setSelectedEmployeeId }) {
    // State to hold the list of employees.
    const [employees, setEmployees] = useState([]);
    // State to hold the current search input (employee ID).
    const [searchId, setSearchId] = useState('');

    /**
     * Fetches the list of employees from the backend API when the component mounts.
     */
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Send GET request to fetch all employees.
                const response = await axios.get('/employees');
                // Update state with the fetched employee data.
                setEmployees(response.data);
            } catch (error) {
                // Log any error that occurs during the fetch operation.
                console.error('Error fetching employees:', error);
            }
        };

        // Call the fetchEmployees function to get the employee data.
        fetchEmployees();
    }, []); // Empty dependency array means this effect runs once when the component mounts.

    /**
     * Filters the list of employees based on the search ID.
     * If searchId is empty, returns all employees.
     * If searchId is not empty, filters employees to match the ID.
     */
    const filteredEmployees = searchId
        ? employees.filter(employee => employee.id === parseInt(searchId))
        : employees;

    return (
        <div>
            {/* Input field for searching employees by ID */}
            <Form.Control
                type="text"
                placeholder="Enter employee ID to search"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="mb-3"
            />
            {/* List group to display the filtered list of employees */}
            <ListGroup>
                {filteredEmployees.map(employee => (
                    <ListGroup.Item
                        key={employee.id}
                        action
                        onClick={() => setSelectedEmployeeId(employee.id)}
                    >
                        {/* Display employee ID and name */}
                        {employee.id} - {employee.employee_name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default EmployeeList;
