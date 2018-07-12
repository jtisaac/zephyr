module.exports = function(result) {
  const score = {
    weight: 0,
    earned: 0,
    extraCredit: 0,
    pct: 0,
    errors: result.errors
  };

  result.testCases.forEach(function (testCase) {
    score.weight += testCase.weight;
    if (testCase.success) {
      score.earned += testCase.weight;
    }
    if (testCase.extraCredit) {
      score.extraCredit += testCase.extraCredit;
    }
  });

  if (score.weight > 0) {
    score.pct = score.earned / score.weight;
  }
  score.pct100 = (score.pct * 100).toFixed(2);

  return score;
};
