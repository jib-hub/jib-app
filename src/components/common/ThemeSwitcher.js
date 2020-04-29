import styled from 'styled-components';

const ThemeSwitcher = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: none;
  width: 2rem;
  height: 0.875rem;
  margin: 0 auto;
  border-radius: 15px;
  border: 2px solid ${props => props.theme.primaryColor};
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  div {
    width: 0.7rem;
    height: 0.7rem;
    border: none;
    border-radius: 100%;
    transition: all 0.3s linear;
    &:first-child {
      background: ${props => props.theme.primaryColor};
      transform: ${props => props.theme.light ? 'translateX(0)' : 'translateX(100px)'};
    }
    &:nth-child(2) {
      background: ${props => props.theme.primaryColor};
      transform: ${props => props.theme.light ? 'translateX(-100px)' : 'translateX(0)'};
    }
  }
  &:hover {
    border: 2px solid ${props => props.theme.secondaryColor};
  }
  &:hover {
    div {background: ${props => props.theme.secondaryColor};}}
`;

export default ThemeSwitcher
