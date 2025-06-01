import { Skeleton } from "./ui/skeleton";

function SkeletonCard({ count = 12, className = "" }) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          className={`
            h-62 rounded-xl
            w-[calc(100vw-2rem)]
            [@media(min-width:320px)]:w-[7.5rem]
            [@media(min-width:375px)]:w-[9rem]
            [@media(min-width:425px)]:w-[10.5rem]
            [@media(min-width:426px)]:w-80
          `}
        />
      ))}
    </div>
  );
}

export { SkeletonCard };
