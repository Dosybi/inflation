const finalStatistics = {
  title: 'Как изменилась ваша зарплата с учётом инфляции',
  text: 'но это без учёта инфляции',
}

const FinalStatistics = ({ previousSalary, currentSalary }) => {
  const inflation = 107.47
  const change = (
    ((currentSalary - previousSalary) / previousSalary) * 100 -
    inflation
  ).toFixed(2)

  return (
    <div className="mb-8 text-xl font-bold">
      <div>{finalStatistics.title}</div>
      <div
        className={`text-4xl font-bold ${
          change > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {`${change > 0 ? '+' : ''}${change}%`}
      </div>
    </div>
  )
}

export default FinalStatistics
