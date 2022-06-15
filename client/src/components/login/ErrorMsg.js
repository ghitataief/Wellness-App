import styled from "styled-components";

const ErrorMsg = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  height: 75px;
  width: 23%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  background-color: #E65856;
  font-size: 30px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default ErrorMsg;