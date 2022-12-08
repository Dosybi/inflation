import { AreaChart, Area, XAxis, YAxis } from 'recharts'

import { products } from '../data'

const Purchases = ({ purchase, previousSalary, currentSalary }) => {
  const previuosAmount = (
    previousSalary /
    products.filter((tag) => tag.label === purchase)[0].previousPrice
  ).toFixed(2)

  const currentAmount = (
    currentSalary /
    products.filter((tag) => tag.label === purchase)[0].currentPrice
  ).toFixed(2)

  const chartData = [
    {
      year: 2012,
      x: previuosAmount,
    },
    {
      year: 2022,
      x: currentAmount,
    },
  ]

  return (
    <div className="mb-8">
      <div className="text-center">
        <div className="font-bold">
          {products.filter((tag) => tag.label === purchase)[0].label}
        </div>
        <div className="mb-4">
          {previuosAmount} → {currentAmount}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <AreaChart width={450} height={200} data={chartData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f87171" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="year" padding={{ right: 10 }} />
          <YAxis domain={['auto', 'dataMax']} padding={{ top: 10 }} />
          <Area
            type="monotone"
            dataKey="x"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  )
}

export default Purchases
