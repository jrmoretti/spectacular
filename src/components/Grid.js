import React from "react";
import styled from "styled-components";

const Grid = ({times}) => (
  <GridStyled>
    {
      times.map((time, key) => (
        <GridLine key={key} time={time}></GridLine>
      ))
    }
  </GridStyled>
);

const GridStyled = styled.div`
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const GridLine = styled.div`
  align-items: center;
  background: #ddd;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1px;
`;

export default Grid;
