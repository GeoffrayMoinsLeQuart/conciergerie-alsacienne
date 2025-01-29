"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ post }: any) => {
  const pathUrl = usePathname();

  return (
    <>
      <li className="block">
        <Link
          href={`/docs/${post?.slug}`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathUrl === `/docs/${post?.slug}`
              ? "bg-primary/5 text-primary"
              : "bg-white text-body-color hover:text-primary"
          }`}
        >
          {post?.title}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
