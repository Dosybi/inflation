const content = {
  heading: `Инфляция в Казахстане в донерах, айфонах и казы: узнайте как
  изменился ваш уровень жизни за 10 лет`,
  text: [
    `В 2022 году цены выросли на 19,6%, а годом ранее — на 8,4%. Жизнь постоянно дорожает, но ведь и зарплата тоже меняется, поэтому оценить масштаб инфляции сложно.`,
    `Калькулятор считает, как изменился ваш уровень жизни за 10 лет: что вы могли бы купить на зарплату в 2012 и сейчас.`,
  ],
}

const Description = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">{content.heading}</h1>
      {content.text.map((paragraph) => {
        return (
          <p className="mb-3 last-of-type:mb-8" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
    </>
  )
}

export default Description
