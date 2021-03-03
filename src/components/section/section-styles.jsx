import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ bg }) => bg || "white"};
  position: relative;
  height: ${({ height }) => height || "fit-content"};
  display: ${({ display }) => display || "block"};
  justify-content: ${({ justifyCont }) => justifyCont || null};
  padding: ${({ padding }) => padding || null};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  width: 100vw;
  margin: ${({ margin }) => margin || null};
  box-sizing: border-box;
`;
