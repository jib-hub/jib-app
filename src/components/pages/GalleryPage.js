import React from 'react';

import Wrapper from '../containers/Wrapper';

class Gallery extends React.Component  {
  render(){
    return (
      <Wrapper width="boxed">
      <img src={require(`../../img/jib_logo_light_600.png`)} alt="IMG" />
      </Wrapper>
    );
  }
}

export default Gallery;
