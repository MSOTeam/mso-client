import React, { Component } from 'react';
import { boxShadow, change, fadeBottom } from '../utility/animation';
import styled, { css } from 'styled-components';

import SubmitLoading from '../utility/submitloading';
import axios from 'axios';

const ScMessageEmail = styled.p`  
  font-size: 1.2em;
  font-weight: 100;
  line-height: 30px;
  color: white;
`

const ScEmailSection = styled.div`  
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  animation-delay: 1.8s;
`

const ScEmail = styled.div`  
  display: flex;
  margin: 80px auto 0;
  justify-content: space-between;
  align-items: center;
  animation: ${boxShadow} 1.5s linear infinite;
  animation-direction: alternate;
  border-radius: 10px;
  @media (max-width: 1000px) {
  }
`

const ScInput = styled.input`  
  background: #fff;
  color: #000;
  height: 62px;
  width: 140%;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
  cursor: pointer;
  padding-left: 20px;
  outline: none;
  font-size: 20px;
  font-weight: 300;

  &::placeholder {
    color: #40359C;
    letter-spacing: 1px;
    opacity: 0.7;
    font-weight: 400;
    font-weight: 100;
  }
  &:hover {
      cursor: text;
  }
  @media (max-width: 1000px) {
    width: 96%;
    padding-left: 4%;
  }
`

const ScButton = styled.div`  
  background: #40359C;
  color: #fff;
  height: 50px;
  width: 40%;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  ${props => props.idle && css`
    &:hover {
      animation: ${change} .3s linear;
      animation-fill-mode: forwards;
      background: hsl(181, 66%, 47%);
    }
  `}
  ${props => props.disabled === true && css`
    background: rgba(57, 60, 63, 0.13);
  `}
  ${props => props.sending && css`
    &:hover {
      background: #40359C;
    }
  `}
  @media (max-width: 1000px) {
    margin-top: 20px;
    width: 100%;
  }
`

const ScSpan = styled.div`  
  color: #fff;
  margin-top: 25px;
  margin-bottom: -25px;
  font-size: 1.2em;
  display: none;
  ${props => props.no && css`
    display: block;
  `}
  ${props => props.yes && css`
    display: block;
  `}
  
`

const Button = styled.div`
  background: #29C3C6;
  min-width: 130px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 7px 15px;
  transition: all 0.3s;
  font-size: 20px !important;

  &:hover{
    cursor: pointer;
    background: #27b6b9;
  }
`;

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      spinner: false,
      success: false,
      error: false,
    };
    this.signUp = this.signUp.bind(this);
    this.handleEmail = this.handleEmail.bind(this)
  } 

  signUp = (e) => {    
    this.setState({ spinner: true});
    this.setState({ success: false});
    this.setState({ error: false});  
    this.setState({ valid: false});  
    e.preventDefault(); 
    let eReg = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(this.state.email === "" || !eReg.exec(this.state.email)) {
      this.setState({spinner: false})   
      return(
        this.state.valid && <ScSpan no>Email not valid 🙄 </ScSpan>
      )
      
    }
    else {
      //axios.post('http://localhost:3034/postUrl', {
      axios.post('https://tagitemail.herokuapp.com/postUrl', {
        email: this.state.email
      })
      .then((response) => {
        console.log("fda");

        this.setState({spinner: false});  
        this.setState({success: true});      
      })
      .catch((error) => {
        this.setState({spinner: false}); 
        this.setState({error: true});
        console.log(error);    
        
      });
    }
  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  
  
render() {
  return (
    <ScEmailSection>
        <ScEmail>
            <ScInput placeholder="Email..." onChange={this.handleEmail}/>
            {this.state.spinner
              ? <Button sending onClick={this.signUp}><SubmitLoading/></Button>
              : <Button idle onClick={this.signUp}>Sign up</Button>
            }           
        </ScEmail>
        {this.state.success && <ScSpan yes>Hooray, we will send you your access shortly 👏</ScSpan>}
        {this.state.error && <ScSpan no>Oops, something went wrong 😖</ScSpan>}
      </ScEmailSection>
    )
  }
}
export default Email;
