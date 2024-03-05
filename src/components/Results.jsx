import { calculateInvestmentResults, formatter } from '../util/investment'

export default ( { input } ) => {
  const results = calculateInvestmentResults(input)

  const initalInvestment = results[0].valueEndOfYear - results[0].annualInvestment - results[0].interest
  console.log(results)
  return <table id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Intrest (Years)</th>
        <th>Total Intrest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {results.map(result => {
        const totalIntrest = result.valueEndOfYear - result.annualInvestment * result.year - initalInvestment
        const totalAmountInvested = result.valueEndOfYear - totalIntrest
          return (<tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalIntrest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>)
        }
      )}
    </tbody>
  </table>
}