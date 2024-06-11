
export default function SearchArea() {
  return (
    <div className="bg-gray-900 flex item-center py-10">
        <div className="max-w-md mx-auto w-auto">
        <form>
        <div className="flex space-x-4">
            <input name="meal" placeholder="Meal type" className="rounded-lg focus:border-red-100 focus:ring-1 focus:outline-non focus:ring-red-100"/>
            <input name="calories" placeholder="Calories" className="rounded-lg"/>
        <button className="bg-red-300 hover:bg-red-400 rounded-lg px-1 py-1">Search</button>
        </div>
        </form>
        </div>
    </div>
  )
}
