import React from 'react';
//import styled from 'styled-components';

import Wrapper from '../containers/Wrapper';
import PrimaryButton from '../common/PrimaryButton';

class AboutPage extends React.Component {
    render(props){
      return (
      <Wrapper width="boxed">
      <PrimaryButton onClick={this.props.onClick}>New Primary Button</PrimaryButton>
      <PrimaryButton onClick={this.props.onClick}>New Primary Button</PrimaryButton>
      </Wrapper>
      )
    }
};


export default AboutPage;
