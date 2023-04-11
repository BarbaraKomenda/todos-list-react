import styled from "styled-components";

export const TasksButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: teal;
  transition: color 1s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: hsl(180, 100%, 15%);
  }

  &:disabled {
    color: #ccc;
  }
`;
