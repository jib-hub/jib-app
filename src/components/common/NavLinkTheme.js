import styled from 'styled-components';
import { NavLink } from 'reactstrap';

export const NavLinkTheme = styled(NavLink)`
  a{ color: ${props => props.theme.primaryColor} !important;}
  a:hover{
    color: ${props => props.theme.secondaryColor} !important;
    text-decoration: none;
  }
`;
