import { Visor } from "../Visor";
import { TecladoPrincipal } from "../TecladoPrincial";
import { ContainerCalc } from "./styled";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const Calculadora = () => {

  const [valorResult, setValorResult] = useState('');
  const [valueNumber, setValueNumber] = useState([0]);


  return (
    <ContainerCalc>
      <div className="content-calculadora">
        <Visor resultado={valorResult} valorExpressao={valueNumber} />
        <TecladoPrincipal setValorResult={setValorResult} valorCompleto={{ valueNumber, setValueNumber }} />
      </div>
    </ContainerCalc>
  );
};
