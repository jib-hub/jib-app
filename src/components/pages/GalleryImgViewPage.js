import React from 'react';

import Wrapper from '../containers/Wrapper';

class GalleryImgView extends React.Component  {
  render(){
    return (
      <Wrapper width="boxed">
      <img src={require(`../../img/${this.props.match.params.img}`)} alt={this.props.match.params.img} />
      </Wrapper>
    );
  }
}

export default GalleryImgView;
