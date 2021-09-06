import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

/* Estilos */
const Form = styled.form`
  margin: 2;
  width: 100%;
`;

const Input = styled.input`
  padding: 1.5rem 1rem;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  background-color: #FFFFFE;
  font-size: 1.9rem;
  color: #0F0E17;
  border-style: none;
  border: .6rem solid transparent;

  &:focus {
    outline: none;
    border: .6rem inset orange;
  }
`;

const Textarea = styled.textarea`
  padding: 1.5rem 1rem;
  height: 17rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: #FFFFFE;
  font-size: 1.9rem;
  color: #0F0E17;
  border-style: none;
  border: .6rem solid transparent;
  resize: none;

  &:focus {
    outline: none;
    border: .6rem inset orange;
  }
`;

const Submit = styled(Input)`
  cursor: pointer;
  background-color: #FF8906;
  color: white;
  font-size: 1.6rem;
  border: .6rem solid transparent;

  &:focus {
    border: .6rem solid transparent;
  }
`;


/* Componentes */
class FormUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendEmail (event) {
    emailjs.sendForm('service_3q309iw',
                     'template_8ptjeq6',
                     event.target,
                     'user_JWJxdGxYLDrw6lPkkuwr3')
    .then((response) => {
      console.log('Enviado!', response.text);
      this.isEmailSend(true);
    },(error) => {
      console.log('Error...', error);
      this.isEmailSend(false);
    });
  }

  isEmailSend (send) {
    const Toast = Swal.mixin({
      toast: false,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: (send ? 'success' : 'error'),
      iconColor: (send ? 'green' : 'black'),
      title: 'Enviando mensaje'
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendEmail(event);
    this.resetForm();
  }

  resetForm () {
    /* Reseteando formularios controlados */
    this.setState({
      name: '',
      email: '',
      comment: ''
    })
  }

  handleChange (e) {
    const {name, value} = e.target;
    this.setState({[name]: value });
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre completo"
          maxLength="50"
          minLength="3"
          onChange={this.handleChange} 
          name="name"
          value={this.state.name}
          autoComplete="off"
          required
        />

        <Input
          type="email"
          placeholder="Correo electrónico"
          maxLength="70"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          autoComplete="off"
          required
        />

        <Textarea
          placeholder="Mensaje"
          onChange={this.handleChange} 
          name="comment"
          value={this.state.comment}
          autoComplete="off"
          required
        ></Textarea>

        <Submit
          type="submit"
          value="Enviar Mensaje"
        />

        {/* <div style={{color: '#FFFFFE'}}>
          <p> Name: {this.state.name} </p> 
          <p> Email: {this.state.email} </p> 
          <p> Text: {this.state.comment} </p> 
        </div> */}
      </Form>
    );
  }
}

export default FormUser;