import { useState } from "react";


function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setResultado(imc);
      setClassificacao(classificarIMC(imc));
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
    if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
    if (imc >= 30 && imc <= 34.9) return "Obesidade grau I";
    if (imc >= 35 && imc <= 39.9) return "Obesidade grau II";
    if (imc >= 40) return "Obesidade grau III";
    return "";
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {resultado && (
        <div>
          <h2>Seu IMC: {resultado}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;