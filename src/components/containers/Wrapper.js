import React from 'react';


class Wrapper extends React.Component {
    render(props){
      return (
      <div className= {this.props.width} >
        {this.props.children}
      </div>
      )
    }
};

export default Wrapper;
