import { useEffect, useState } from "react";
import { ContainerVisor } from "./styled";

export const Visor = ({ resultado, valorExpressao }) => {


  return (
    <ContainerVisor>
      <div>
        <h1>expressão</h1>
        <ul>
          {valorExpressao.map((item, index) => (index === 0 ? '' : <li key={index}>{item}</li>))}

        </ul>
      </div>
      <span>{resultado}</span>
    </ContainerVisor>
  );
};
