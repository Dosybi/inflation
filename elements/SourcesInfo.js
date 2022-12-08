import { use, useState } from 'react'

const sourcesInfo = {
  title: 'Откуда данные',
  text: [
    'Проценты инфляции нашлись на сайтах Бюро национальной статистики и Нацбанка. Цены на продукты — в веб-архивах СМИ и форумов.',
    'Программа часто оперирует приблизительными и средними ценами и не претендует на точность до последней тиынки. Поэтому калькулятор — это не последний источник истины, а всего лишь инструмент, который помогает лучше представить себе масштабы инфляции и по-новому посмотреть на нынешний доход.',
    'Процент роста зарплаты без учёта инфляции считался по формуле: ((старая зарлата − новая) ÷ старая зарплата) × 100. Если отнять от результата суммарную инфляцию за 10 лет, получится процент с учётом инфляции.',
  ],
}

const SourcesInfo = () => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div>
      <div
        className="mb-2 cursor-pointer text-blue-500 underline decoration-dashed decoration-1 underline-offset-2 hover:text-blue-800 hover:decoration-blue-800"
        onClick={() => setIsToggled(!isToggled)}
      >
        {sourcesInfo.title}
      </div>
      <div className={`${!isToggled ? 'hidden' : 'block'}`}>
        {sourcesInfo.text.map((paragraph) => {
          return (
            <p className="mb-3 last-of-type:mb-8" key={paragraph}>
              {paragraph}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default SourcesInfo
