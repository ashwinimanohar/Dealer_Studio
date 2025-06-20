export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-4xl md:mx-auto lg:max-w-none">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden animate-pulse">
          <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />
          <div className="px-6 pt-6 pb-3">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
          </div>
          <div className="px-6 pb-6 flex-grow">
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6" />
            </div>
            <div className="mt-4 h-10 bg-gray-300 dark:bg-gray-700 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
