export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {

  const filtered_array = inventory
  .filter(([itemName, quantity, pricePerUnit]) => quantity > 5)         // 2. Filter out under 5)
  .map(([itemName, quantity, pricePerUnit]) => quantity * pricePerUnit)
  .reduce((sum, totalItemValue) => sum + totalItemValue, 0); // 3. Reduce to sum them up (returns a single number)

  return filtered_array;
}
