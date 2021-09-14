import { useEffect, useState } from "react";
import { ContainerTecladoPrincipal, ContainerOperacoes, ContainerNumeros } from "./styled";

export const TecladoPrincipal = ({ setValorResult, valorCompleto }) => {

  const [numberCount, setNumberCount] = useState('');


  useEffect(() => {
    setValorResult(numberCount);
  }, [numberCount])

  const limparOperacao = (e) => {
    setNumberCount('');
    valorCompleto.setValueNumber([0]);
  }

  const limparDigito = (e) => {
    setNumberCount(numberCount.slice(0, numberCount.length - 1));
  }

  const handleClick = (e) => {
    setNumberCount(numberCount.concat(e.target.name));
  }

  const operador = (e) => {
    valorCompleto.setValueNumber([...valorCompleto.valueNumber, Number(numberCount)]);
    setNumberCount('');
  }

  const expressaoSoma = valorCompleto.valueNumber.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  const totalCalc = () => {
    setNumberCount(Number(numberCount) + expressaoSoma);
  }

  return (
    <ContainerTecladoPrincipal>
      <div className="teclado-numerico">
        <ContainerNumeros>
          <div className="btn"><button name="7" onClick={handleClick}>7</button></div>
          <div className="btn"><button name="8" onClick={handleClick}>8</button></div>
          <div className="btn"><button name="9" onClick={handleClick}>9</button></div>
          <div className="btn"><button name="4" onClick={handleClick}>4</button></div>
          <div className="btn"><button name="5" onClick={handleClick}>5</button></div>
          <div className="btn"><button name="6" onClick={handleClick}>6</button></div>
          <div className="btn"><button name="1" onClick={handleClick}>1</button></div>
          <div className="btn"><button name="2" onClick={handleClick}>2</button></div>
          <div className="btn"><button name="3" onClick={handleClick}>3</button></div>
          <div className="btn"><button name="=" onClick={totalCalc}>=</button></div>
          <div className="btn"><button name="0" onClick={handleClick}>0</button></div>
          <div className="btn"><button name="back-clear" onClick={limparDigito}>C</button></div>
          <div className="btn"><button name="clear" onClick={limparOperacao}>Limpar</button></div>
        </ContainerNumeros>
      </div>
      <div className="teclado-operacoes">
        <ContainerOperacoes>
          <div className="btn"><button name="dividir" onClick={operador}>/</button></div>
          <div className="btn"><button name="multiplicar" onClick={operador}>*</button></div>
          <div className="btn"><button name="subitrair" onClick={operador}>-</button></div>
          <div className="btn"><button name="somar" onClick={operador}>+</button></div>
        </ContainerOperacoes>
      </div>
    </ContainerTecladoPrincipal >

  );
};
