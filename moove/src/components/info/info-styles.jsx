import styled from "styled-components";

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
  align-self: center;
  width: 100%;
`;

export const InfoMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 20%;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 80%;
  background-color: #f0f05d;
`;

export const InfoTextTitle = styled.div`
  font-size: 8.5rem;
  font-family: "Raleway";
  font-weight: 800;
  padding: 15px;
  width: 100%;
`;

export const InfoTextDescription = styled.div`
  font-size: 4.5rem;
  font-family: "Raleway";
  padding-left: 20px;
  width: 100%;
  margin-top: -20px;
  line-height: 5rem;
`;
