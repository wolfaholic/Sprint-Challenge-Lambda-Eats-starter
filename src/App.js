import React from "react";
import { Button, Navbar, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardGroup, CardColumns, Row, Col, Progress, } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import { OrderForm } from './Form.js'

const App = () => {
  return (
    <>
    <Navbar color='danger'>
      <h1 style={{color: 'white'}}>Lambda Eats</h1>
      <Link to={'/'}>
        <Button color='light' >
          Home
        </Button>
      </Link>
    </Navbar>

    <Route exact path='/'>
    <Card>
      <CardImg src={require('./Assets/Pizza.jpg')} />
      <h1 style={{color: 'white', position: 'absolute', left:'35%', top:'40%'}}>Your favorite food, delivered while coding</h1>
      <Link to={'/pizza'}>
      <Button color="danger" size="lg" style={{position: 'absolute', left:'50%', top:'50%'}} >
      Pizza?
      </Button>
      </Link>
    </Card>
    

    <Row>
      <Col sm="auto">
         
          <Card>
            <CardImg top width="50%" src="./Assets/Pizza.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>McDonalds</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
      </Col>

      <Col sm="auto">
          <Card>
            <CardImg top width="20%" src="./Assets/Pizza.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
      </Col>

      <Col sm="auto">
          <Card>
            <CardImg top width="50%" src="./Assets/Pizza.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
      </Col>
  </Row>
  <div><Progress color="dark" value="100" /></div>
  <Row>
      <Col sm="auto">
         
          <Card>
            <CardImg top width="50%" src="./Assets/Pizza.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>McDonalds</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
      </Col>

      <Col sm="6">
          <Card>
            <CardImg top width="20%" src="./Assets/Pizza.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
      </Col>

      <Col sm="6">
          <Card>
            <CardImg top width="20%" src="./Assets/Pizza.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
      </Col>
  </Row>
  </Route>
    
    <Route path='/pizza'>
    <OrderForm />

    </Route>




</>
 
  )
}
export default App;
