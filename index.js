/**
 * unique
 * @param min { number }
 * @param max { number }
 * @return { string }
 * ========== ========== ==========
 */
function unique(min = 0, max = 1) {
  // Set Numeric of Random
  let numeric = Math.random();

  // Set Min and Max
  if (max > min >= 0) {
    numeric = numeric * (max - min) + min;
  }

  // Result
  return Math.floor(numeric);
}

// Export
export default unique;
