const generalStatistics = {
  title: 'Зарплата выросла',
  text: 'но это без учёта инфляции',
  paragraph:
    'Теперь посмотрим, как для вас изменилась доступность товаров и услуг. Сравним, сколько того или иного товара вы могли купить на всю зарплату в 2012 и сколько сейчас.',
}

const GeneralStatistics = ({ previousSalary, currentSalary }) => {
  const raise = (
    ((currentSalary - previousSalary) / previousSalary) *
    100
  ).toFixed(2)

  return (
    <div className="mb-8">
      <div className="mb-2 text-xl font-bold">
        <div>{generalStatistics.title}</div>
        <div className="text-green-500">
          на {raise}%,{' '}
          <span className="text-black">{generalStatistics.text}</span>
        </div>
      </div>
      <div>{generalStatistics.paragraph}</div>
    </div>
  )
}

export default GeneralStatistics
