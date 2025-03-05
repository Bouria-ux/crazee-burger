
import { Link } from 'react-router-dom'
import styled from 'styled-components';
export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled >
    Right
    <h1>Hey {username}</h1>
      <Link to="/">
      <button>Deconexion</button></Link> 
  </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`

      background: purple;
    
  
`;
