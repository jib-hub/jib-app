import React from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Typing from 'react-typing-animation';

import Wrapper from '../containers/Wrapper';
import PrimaryButton from '../common/PrimaryButton';

class ContactPage extends React.Component {
    render(props){
      return (
      <div>
      <Wrapper width="boxed" >
      <Typing speed={50} loop={false}><h1>Hello!<Typing.Delay ms={600} /> I am Julian,<Typing.Delay ms={600} /> webdeveloper and artist.</h1></Typing>
      </Wrapper>
      <Wrapper width="fullWidth">
      dawda
      </Wrapper>
      <Wrapper width="boxed" >
      <Link to ={{
        pathname: "/about",
        state: {
            theme: this.props.theme
        }
      }} ><PrimaryButton>more infos</PrimaryButton></Link>
      </Wrapper>
      </div>
      )
    }
};


export default ContactPage;
