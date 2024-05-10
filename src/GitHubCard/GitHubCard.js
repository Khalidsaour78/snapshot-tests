import React from "react"
import Card from "react-bootstrap/Card"
import Khalidsaour78 from './Khalidsaour78.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={Khalidsaour78} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>Khalid Alsaoor</Card.Title>
            <Card.Text>
            Hi, I am @Khalidsaour78. And I love having fun and being happy
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard