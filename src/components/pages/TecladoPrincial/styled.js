import styled from "styled-components";

export const ContainerTecladoPrincipal = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(1, 1fr);
    .teclado-numerico{
      grid-column: 1/2; 
    } 
    .teclado-operacoes{
      grid-column: 2/3;
    } 
    
`;

export const ContainerOperacoes = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  .btn{
    margin: 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
      width: 90%;
      height: 90%;
    }
  }
`;

export const ContainerNumeros = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  .btn{
    margin: 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
      width: 90%;
      height: 90%;
    }
  }
`;

