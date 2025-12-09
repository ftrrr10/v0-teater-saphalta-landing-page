export function DecorativeStars() {
  return (
    <>
      {/* Hanging stars */}
      <div className="absolute -top-8 left-8 flex flex-col items-center">
        <div className="w-px h-12 bg-maroon/40" />
        <span className="text-maroon text-xl">★</span>
      </div>
      <div className="absolute -top-4 left-20 flex flex-col items-center">
        <div className="w-px h-8 bg-maroon/40" />
        <span className="text-maroon/60 text-sm">★</span>
      </div>
      <div className="absolute -top-6 left-32 flex flex-col items-center">
        <div className="w-px h-10 bg-maroon/40" />
        <span className="text-maroon text-lg">★</span>
      </div>
    </>
  )
}
