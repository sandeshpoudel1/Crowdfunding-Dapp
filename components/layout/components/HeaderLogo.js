import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>FUNDING</Logo>
  )
}

const Logo = styled.h1`
  font-weight: normal;
  font-size: 35px;
  margin-left: 11px;
  font-family: 'Lobster';
  letter-spacing: 3px;
  cursor: pointer;
`

export default HeaderLogo