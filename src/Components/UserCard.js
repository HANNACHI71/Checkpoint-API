import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div >
      <Card  style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://play-lh.googleusercontent.com/l1UYrTbjtisvW3ecAd8ArS03i-7fOSELSijeV87-sKwRRUWk9CIbhJ8wYVjYKf41_JrB"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text> {user.username} </Card.Text>
          <Card.Text> {user.email} </Card.Text>
          <Button variant="primary">
            <Link to={`/user/${user.id}`}>
              {" "}
              <b style={{color:"white"}}>Check My Profile</b>
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
