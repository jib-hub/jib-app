import React, {Component, Fragment } from 'react';

import logoDark from './img/jib_logo_dark_600.png';
import logoLight from './img/jib_logo_light_600.png';
import {ThemeProvider} from 'styled-components';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';

import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLinkTheme } from './components/common/NavLinkTheme';

import { Route, Switch, Link } from 'react-router-dom';
import history from './services/history';

import ThemeSwitcher from './components/common/ThemeSwitcher';

import Body from './components/containers/Body';

import StartPage from './components/pages/StartPage';
import AboutPage from './components/pages/AboutPage';
import GalleryImgView from './components/pages/GalleryImgView';
import ErrorPage from './components/pages/ErrorPage';

class App extends Component {
  state = {
    theme: LightTheme,
  	name: '',
  	email: '',
  	message: ''
  };
  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
    });
  }
  onNameChange(event) {
	this.setState({name: event.target.value});
  }

  onEmailChange(event) {
	this.setState({email: event.target.value});
  }

  onMessageChange(event) {
	this.setState({message: event.target.value});
  }

  handleSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    console.log('test: '+this.state.theme.id);
    return (
    <div className="App">
    <ThemeProvider theme={this.state.theme}>

      <header className="App-header">
        <Fragment>
         <Navbar expand="md">

           <NavbarBrand>
           <Link to ={{
             pathname: "/",
             state: {
                 theme: this.state.theme
             }
           }} ><img src={this.state.theme.id === 'light' ? logoDark : logoLight} className="App-logo" alt="logo" /></Link>
           </NavbarBrand>
           <Nav className="ml-auto" navbar>
             <NavItem className="d-flex align-items-center">
              <NavLinkTheme>
              <Link to ={{
                pathname: "/",
                state: {
                    theme: this.state.theme
                }
              }} >Home</Link>
              </NavLinkTheme>
             </NavItem>
             <NavItem className="d-flex align-items-center">
               <NavLinkTheme>
               <Link to ={{
                pathname: "/about",
                state: {
                    theme: this.state.theme
                }
              }} >About</Link>
               </NavLinkTheme>
             </NavItem>
             <NavItem className="d-flex align-items-center">
               <NavLinkTheme>
               <Link to ={{
                pathname: "/img/jib_logo_dark_600.png",
                state: {
                    theme: this.state.theme
                }
              }} >Img</Link>
               </NavLinkTheme>
             </NavItem>
             <NavItem className="d-flex align-items-center">
             <ThemeSwitcher onClick={this.handleToggleTheme} >
             <div></div>
             <div></div>
             </ThemeSwitcher>
             </NavItem>
            </Nav>
         </Navbar>
        </Fragment>
      </header>
      <Body>
      <Switch history={history} >
          <Route path="/" render={ props => (<StartPage onClick={this.handleToggleTheme}/>) } exact />
          <Route path="/about" render={ props => (<AboutPage onClick={this.handleToggleTheme}/>) }/>
          <Route path="/img/:img" component={GalleryImgView} />
          <Route component={ErrorPage} />
      </Switch>
      </Body>
      <div>
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
       <div className="form-group">
           <label htmlFor="name">Name</label>
           <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
       </div>
       <div className="form-group">
           <label htmlFor="exampleInputEmail1">Email address</label>
           <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
       </div>
       <div className="form-group">
           <label htmlFor="message">Message</label>
           <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>
       </form>
      </div>
      <GlobalStyle />
    </ThemeProvider>
    </div>
    );
  }
}
export default App;
