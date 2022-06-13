import styled from "styled-components";

const ErrorMsg = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  height: 75px;
  width: 30%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  background-color: #E65856;
  font-size: 30px;
  padding: 10px;
`;

export default ErrorMsg;