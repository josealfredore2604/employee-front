import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

/**
 * Component to display detailed information about an employee.
 *
 * @param {Object} props - Component properties.
 * @param {number} props.employeeId - The ID of the employee to fetch and display details for.
 *
 * @returns {JSX.Element} - The rendered component.
 */
function EmployeeDetail({ employeeId }) {
    // State to hold the employee details.
    const [employee, setEmployee] = useState(null);
    // State to hold the annual salary of the employee.
    const [annualSalary, setAnnualSalary] = useState(null);

    /**
     * Fetches the employee details and annual salary when the employeeId changes.
     */
    useEffect(() => {
        const fetchEmployeeDetail = async () => {
            if (employeeId) {
                try {
                    // Fetch employee details from the API.
                    const response = await axios.get(`/employees/${employeeId}`);
                    setEmployee(response.data);

                    // Fetch the annual salary from the API.
                    const salaryResponse = await axios.get(`/employees/annual-salary/${employeeId}`);
                    setAnnualSalary(salaryResponse.data);
                } catch (error) {
                    // Log any error that occurs during the fetch operations.
                    console.error('Error fetching employee detail:', error);
                }
            }
        };

        // Call the fetchEmployeeDetail function to get employee data.
        fetchEmployeeDetail();
    }, [employeeId]); // Dependency array includes employeeId, so effect runs when employeeId changes.

    // Return a message if no employee is selected.
    if (!employee) {
        return <p>Select an employee to see details</p>;
    }

    return (
        <Card className="mt-4">
            {/* Display the employee's profile image */}
            <Card.Img variant="top" src={employee.profile_image} alt={`${employee.employee_name}'s profile`} />
            <Card.Body>
                {/* Display employee details */}
                <Card.Title>{employee.employee_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    ID: {employee.id}
                </Card.Subtitle>
                <Card.Text>
                    Name: {employee.employee_name}
                </Card.Text>
                <Card.Text>
                    Age: {employee.employee_age} years old
                </Card.Text>
                <Card.Text>
                    Salary: ${employee.employee_salary}
                </Card.Text>
                {/* Display annual salary if available */}
                {annualSalary !== null && (
                    <Card.Text>
                        Annual Salary: ${annualSalary}
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}

export default EmployeeDetail;
