// src/components/Blog/SkeletonMasonryBlog.tsx

export default function SkeletonMasonryBlog() {
  return (
    <div className="mx-[-16px] flex flex-wrap">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="mb-10 w-full px-4 sm:w-1/2 xl:w-1/3">
          <div className="mb-4 aspect-video w-full animate-pulse rounded-xl bg-gray-200" />
          <div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-300" />
          <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-gray-300" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
