import React from "react";
import { Button, Navbar, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardGroup, CardColumns } from 'reactstrap';
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar color='danger'>
      <h1 style={{color: 'white'}}>Lambda Eats</h1>
      <Link to={'/'}>
        <Button color='light' >
          Home
        </Button>
        <Button color='light' >
          Help
        </Button>
      </Link>
    </Navbar>
    <Card>
      <CardImg src={require('./Assets/Pizza.jpg')} />
      <Button color="danger" style={{position: 'absoloute', width:'10%', left:'50%', top:'50%'}}>
      Pizza?
      </Button>
    </Card>



     </>
  );
};
export default App;
