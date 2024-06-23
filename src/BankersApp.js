// src/BankersApp.js
import React, { useState } from 'react';
import BankersAlgorithm from './BankersAlgorithm';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

const BankersApp = () => {
  const initialResources = [10, 5, 7];
  const initialMax = [
    [7, 5, 3],
    [3, 2, 2],
    [9, 0, 2],
    [2, 2, 2],
    [4, 3, 3],
  ];
  const initialAllocation = [
    [0, 1, 0],
    [2, 0, 0],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2],
  ];

  const [resources, setResources] = useState(initialResources);
  const [max, setMax] = useState(initialMax);
  const [allocation, setAllocation] = useState(initialAllocation);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const banker = new BankersAlgorithm(resources, max, allocation);
    setResult(banker.isSafe());
  };

  const handleResourceChange = (index, value) => {
    const newResources = [...resources];
    newResources[index] = Number(value);
    setResources(newResources);
  };

  const handleMaxChange = (rowIndex, colIndex, value) => {
    const newMax = [...max];
    newMax[rowIndex][colIndex] = Number(value);
    setMax(newMax);
  };

  const handleAllocationChange = (rowIndex, colIndex, value) => {
    const newAllocation = [...allocation];
    newAllocation[rowIndex][colIndex] = Number(value);
    setAllocation(newAllocation);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={12}>
          <Card>
            <Card.Header>Banker's Algorithm</Card.Header>
            <Card.Body>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Resource</th>
                    {resources.map((_, index) => (
                      <th key={index}>
                        r{index + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Available</td>
                    {resources.map((resource, index) => (
                      <td key={index}>
                        <input
                          type="number"
                          value={resource}
                          onChange={(e) => handleResourceChange(index, e.target.value)}
                          className="form-control"
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Process</th>
                    {resources.map((_, index) => (
                      <th key={index}>
                        r{index + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {max.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>Max {String.fromCharCode(65 + rowIndex)}</td>
                      {row.map((value, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="number"
                            value={value}
                            onChange={(e) =>
                              handleMaxChange(rowIndex, colIndex, e.target.value)
                            }
                            className="form-control"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Process</th>
                    {resources.map((_, index) => (
                      <th key={index}>
                        r{index + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allocation.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>Allocation {String.fromCharCode(65 + rowIndex)}</td>
                      {row.map((value, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="number"
                            value={value}
                            onChange={(e) =>
                              handleAllocationChange(rowIndex, colIndex, e.target.value)
                            }
                            className="form-control"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="primary" onClick={handleCalculate}>
                Calculate
              </Button>
              {result && (
                <Card className="mt-4">
                  <Card.Body>
                    {result.isSafe ? (
                      <>
                        <Card.Title>System is Safe</Card.Title>
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>Safe Sequence</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{result.safeSequence.map(seq => String.fromCharCode(65 + seq)).join(', ')}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </>
                    ) : (
                      <Card.Title>System is Not Safe</Card.Title>
                    )}
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BankersApp;
