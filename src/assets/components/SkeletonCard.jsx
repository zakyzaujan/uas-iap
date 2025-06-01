function SkeletonCard({ count = 12, height = "h-62", className = "" }) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`w-80 ${height} bg-gray-200 rounded-xl animate-pulse`}
        />
      ))}
    </div>
  );
}

export default SkeletonCard;
