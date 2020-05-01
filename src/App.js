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
import GalleryPage from './components/pages/GalleryPage';
import GalleryImgViewPage from './components/pages/GalleryImgViewPage';
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
               pathname: "/gallery",
               state: {
                   theme: this.state.theme
               }
             }} >Gallery</Link>
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
          <Route path="/gallery" render={ props => (<GalleryPage onClick={this.handleToggleTheme}/>) }/>
          <Route path="/img/:img" component={GalleryImgViewPage} />
          <Route component={ErrorPage} />
      </Switch>
      </Body>
      <GlobalStyle />
    </ThemeProvider>
    </div>
    );
  }
}
export default App;
