import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Inner = styled.div`
  max-width: 430px;
  width: 100%;
  padding: 45px;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
const Title = styled.h2`
  font-size: 28px;
`;

const Description = styled.p`
  font-size: 18px;
  opacity: 0.5;
`;

const StyledLink = styled(Link)`
  text-align: center;
  display: block;
  color: #adadad;
`;

export { Form, Inner, Header, Title, Description, StyledLink as Link };
