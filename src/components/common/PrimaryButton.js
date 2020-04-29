import {Button} from 'reactstrap';
import styled from 'styled-components';

const PrimaryButton = styled(Button).attrs({
  color: 'primary'
})`
  background: ${props => props.theme.backgroundColor} !important;
  color: ${props => props.theme.primaryColor} !important;
  border-color: ${props => props.theme.primaryColor} !important;
  &:hover{
    border-color: ${props => props.theme.secondaryColor} !important;
    color: ${props => props.theme.secondaryColor} !important;
  }
`;

export default PrimaryButton
