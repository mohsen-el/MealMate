export default function LoadingPage({ item }) {
    return [...Array(item).keys()].map(() => (
      // eslint-disable-next-line react/jsx-key
      <div className="animate-pulse">
          <div className="bg-gray-300 rounded-lg h-72"></div>
      </div>
    ))
  }