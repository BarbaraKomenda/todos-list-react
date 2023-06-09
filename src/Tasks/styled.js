import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  border-bottom: solid 1px #ddd;
  padding: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: hsl(120, 61%, 34%);

      &:hover {
        background: hsl(120, 61%, 39%);
      }
      &:active {
        background: hsl(120, 61%, 44%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: hsl(348, 83%, 47%);

      &:hover {
        background: hsl(348, 83%, 52%);
      }
      &:active {
        background: hsl(348, 83%, 57%);
      }
    `}
`;
