// Função para Cálculo do IMC
export function calcImc(weight, height)
{
  return (weight / ((height / 100) ** 2)).toFixed(2);
};

// Função para verificar se é um número
export function notNumber(value) {
  return isNaN(value) || value == "";
};