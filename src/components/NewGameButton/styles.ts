import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  margin: 0 auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  font-size: 1rem;
  line-height: 3rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(160deg, #13e5ed, #ec008c);
  border-radius: 30px;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.6s;

  :hover {
    box-shadow: 0 0 60px 2px #ec008c, 0.5rem 0.5rem 30px #13e5ed;
  }

  :after {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    border-radius: 30px;
    background-image: linear-gradient(170deg, rgba(white, 0.3), rgba(white, 0));
    pointer-events: none;
  }
`;

export default Button;
