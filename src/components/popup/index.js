
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { PopContainer } from './PopupElements'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phkmg6h', 'template_6mlaa6l', e.target, 'xMajseKqUnjQY-ntb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  e.target.reset()
};
  
class Modal extends Component {
  render() {
    return (
      <PopContainer style={{ background: 'black', }} >
        <Container>
          <Form onSubmit={ sendEmail }>
              <Form.Group className="mb-3 my-2" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text-light my-2'>Nom</Form.Label>
                  <Form.Control type="text" name="from_name" />
            </Form.Group>
            <Form.Group className="mb-3 my-2" controlId="exampleForm.ControlInput2">
                  <Form.Label className='text-light my-2'>Prenom</Form.Label>
                  <Form.Control type="text" name="from_prenom"/>
              </Form.Group>
              <Form.Group className="mb-3 my-2" controlId="exampleForm.ControlInput3">
                  <Form.Label className='text-light my-2'>Email address</Form.Label>
                  <Form.Control type="email" name="sender_email" placeholder="nom@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='text-light my-2'>Votre Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={6} />
              </Form.Group>
                  <Button className='my-3' variant="primary" type="submit">Envoyer</Button>
          </Form>
        </Container>
      </PopContainer>
    );
  }
       
}

export default Modal;