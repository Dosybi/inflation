const sourcesInfo = {
  title: 'Откуда данные',
  text: '',
}

const SourcesInfo = () => {
  return (
    <div>
      <div className="mb-4 cursor-pointer text-blue-500 underline decoration-dashed decoration-1 underline-offset-2 hover:text-blue-800 hover:decoration-blue-800">
        {sourcesInfo.title}
      </div>
      <div className="hidden">{sourcesInfo.text}</div>
    </div>
  )
}

export default SourcesInfo
