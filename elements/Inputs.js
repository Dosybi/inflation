const inputs = {
  title: 'Зарплата раньше и сейчас',
  fields: [
    {
      year: '2012',
      placeholder: '100 000 тенге/мес',
      type: 'previousSalary',
    },
    {
      year: '2022',
      placeholder: '400 000 тенге/мес',
      type: 'currentSalary',
    },
  ],
}

const SingleInput = ({ placeholder, period, handleInputChange }) => {
  return (
    <input
      type="text"
      className="h-12 w-full rounded-md py-2 px-4 outline-none first-of-type:mb-4 focus:outline-none"
      placeholder={placeholder}
      period={period}
      onChange={handleInputChange}
    ></input>
  )
}

const Inputs = ({ onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e)
  }
  return (
    <div className="-mx-8 mb-8 rounded-none bg-gray-100 p-6 md:mx-0 md:rounded-xl">
      <h2 className="mb-3 text-xl font-bold">{inputs.title}</h2>
      {inputs.fields.map((input) => (
        <div key={input.year}>
          <div className="mb-1 text-gray-500">В {input.year} году</div>
          <SingleInput
            placeholder={input.placeholder}
            period={input.type}
            handleInputChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  )
}

export default Inputs
