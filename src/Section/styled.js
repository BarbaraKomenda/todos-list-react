import styled from "styled-components";

export const MainSection = styled.section`
  background-color: white;
  margin: 10px 0;
  box-shadow: 0 0 5px #ddd;
`;

export const HeaderSection = styled.header`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 767px) {
        grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
