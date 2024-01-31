import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Title = styled.h2`
  font-size: 60px;
  padding: 0 20px;
`;

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;