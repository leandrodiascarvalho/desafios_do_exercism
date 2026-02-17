// @ts-check

export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Calcula os minutos que ainda faltam no forno.
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  // Subtraímos o tempo que já passou do tempo total esperado
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Calcula o tempo de preparação com base nas camadas.
 */
export function preparationTimeInMinutes(numberOfLayers) {
  // Cada camada leva 2 minutos
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calcula o tempo total (preparo + forno).
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  // Somamos o tempo das camadas com o tempo atual de forno
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
