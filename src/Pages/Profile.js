import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

    const Profile = () => {
    const {id} = useParams();

    const  [user, setUser] = useState({})  // State variable to store users data
    useEffect(()=>{
    
        axios 
            .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)   // Make a GET request to the
            .then ((res)=>setUser(res.data[0]))     // When promise is resolved, update the state with the response data
            .catch ((err) => console.log(err))                      // API endpoint for user data
            },)    ;                                            // Empty dependency array means this effect will run once on component mount
    console.log('users:',user)

return (
    <div>
        <h2>User Profile </h2>  
        <Card style={{ width: "18rem" }}>

        <Card.Img variant="top" src="https://play-lh.googleusercontent.com/l1UYrTbjtisvW3ecAd8ArS03i-7fOSELSijeV87-sKwRRUWk9CIbhJ8wYVjYKf41_JrB" />
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.phone} </Card.Text>
        <Card.Text> {user.email} </Card.Text>
        <Button variant="primary" >
        <Link to={`/users/`}> <b style={{color:"white"}}>Goto Users List</b> </Link>
        </Button>
        </Card.Body>
    </Card>

        
    </div>
)
}

export default Profile;
