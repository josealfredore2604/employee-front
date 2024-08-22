import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import FetchEmployees from './components/FetchEmployees';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/**
 * Main application component for managing and displaying employee information.
 *
 * @returns {JSX.Element} - The rendered application component.
 */
function App() {
    // State to keep track of the selected employee ID.
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    return (
        <div className="App">
            {/* Navigation bar at the top of the application */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* Brand name and link */}
                    <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* Navigation link */}
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Main content area */}
            <Container className="mt-4">
                <h1>Employee Management</h1>

                {/* Component to list employees and set selected employee */}
                <EmployeeList setSelectedEmployeeId={setSelectedEmployeeId} />

                {/* Component to show details of the selected employee */}
                <EmployeeDetail employeeId={selectedEmployeeId} />

                {/* Component to fetch employees and log them */}
                <FetchEmployees />
            </Container>
        </div>
    );
}

export default App;
