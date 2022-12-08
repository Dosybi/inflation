import { useState } from 'react'
import Head from 'next/head'

import { products } from '../data'

import Inputs from '../elements/Inputs'
import GeneralStatistics from '../elements/GenralStatistics'
import Tags from '../elements/Tag'
import Description from '../elements/Description'
import Purchases from '../elements/Purchases'
import FinalStatistics from '../elements/FinalStatistics'
import SourcesInfo from '../elements/SourcesInfo'

export default function Home() {
  const [salary, setSalary] = useState({
    previousSalary: 100000,
    currentSalary: 400000,
  })
  const [purchase, setPurchase] = useState('Хлеб')

  const onInputChange = (e) => {
    if (e.target.getAttribute('period') === 'previousSalary') {
      setSalary({
        ...salary,
        previousSalary: e.target.value,
      })
    }
    if (e.target.getAttribute('period') === 'currentSalary') {
      setSalary({ ...salary, currentSalary: e.target.value })
    }
  }

  const onTagSelect = (activeTag) => setPurchase(activeTag)

  return (
    <div>
      <Head>
        <title>Инфляция</title>
        <meta name="description" content="Инфляция" />
      </Head>
      <main className="m-auto mb-8 max-w-2xl p-8">
        <Description />
        <Inputs onInputChange={onInputChange} />
        <GeneralStatistics
          previousSalary={salary.previousSalary}
          currentSalary={salary.currentSalary}
        />
        <Tags onTagSelect={onTagSelect} />
        <Purchases
          products={products}
          purchase={purchase}
          previousSalary={salary.previousSalary}
          currentSalary={salary.currentSalary}
        />
        <FinalStatistics
          previousSalary={salary.previousSalary}
          currentSalary={salary.currentSalary}
        />
        <SourcesInfo />
      </main>
    </div>
  )
}
