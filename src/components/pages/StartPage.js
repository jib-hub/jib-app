import React from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';


import Wrapper from '../containers/Wrapper';
import PrimaryButton from '../common/PrimaryButton';

import Heading1 from '../common/Heading1';

import CategoryBox from '../containers/CategoryBox';

class StartPage extends React.Component {
    render(props){
      return (
      <div>
      <Wrapper width="boxed" >
      <Heading1>Hello!<br/>I am Julian, webdeveloper and artist.</Heading1>
      </Wrapper>
      <Wrapper width="fullWidth">
      <CategoryBox>1, 2, 3</CategoryBox>
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


export default StartPage;
