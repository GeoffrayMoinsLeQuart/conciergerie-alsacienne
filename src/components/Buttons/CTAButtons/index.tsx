"use client";

import { cn } from "@/utils/utils";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface CTAButtonProps {
  primary?: {
    text: string;
    href: string;
    icon?: ReactNode;
    colorClass?: string; // e.g. bg-primary text-white
  };
  secondary?: {
    text: string;
    href: string;
    icon?: ReactNode;
    colorClass?: string; // e.g. border border-primary text-primary
  };
}

const CTAButtons: FC<CTAButtonProps> = ({ primary, secondary }) => {
  if (!primary && !secondary) return null;

  return (
    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      {primary && (
        <Link
          href={primary.href}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-medium transition",
            primary.colorClass || "bg-primary text-white hover:bg-opacity-90",
          )}
        >
          {primary.icon && <span className="h-5 w-5 mr-4">{primary.icon}</span>}
          {primary.text}
        </Link>
      )}

      {secondary && (
        <Link
          href={secondary.href}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 text-base font-medium transition",
            secondary.colorClass ||
              "border-primary text-primary hover:bg-primary/10",
          )}
        >
          {secondary.icon && <span className="h-5 w-5 mr-4">{secondary.icon}</span>}
          {secondary.text}
        </Link>
      )}
    </div>
  );
};

export default CTAButtons;
