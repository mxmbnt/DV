import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface SocialProofItemProps {
  name: string;
  username: string;
  text: React.ReactNode;
  className?: string;
  url?: string;
  image?: string;
}

const commonClasses =
  "flex max-w-[320px] flex-col rounded-lg glass-3 p-4 text-start shadow-md sm:max-w-[420px] sm:p-6";

export default function SocialProofItem({
  name,
  username,
  text,
  className,
  url,
  image,
}: SocialProofItemProps) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        <div className="relative flex size-12 shrink-0 overflow-hidden rounded-full bg-[#171717]">
          {image ? (
            <img src={image} alt="" className="aspect-square size-full object-cover" />
          ) : (
            <span className="flex size-full items-center justify-center text-lg font-semibold text-white">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-md leading-none font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{username}</p>
        </div>
      </div>
      <p className="sm:text-md text-muted-foreground mt-4 text-sm">{text}</p>
    </>
  );

  if (url) {
    return (
      <Link
        href={url}
        data-slot="social-proof-item"
        className={cn(
          commonClasses,
          "hover:from-card/30 hover:to-card/20",
          className,
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div data-slot="social-proof-item" className={cn(commonClasses, className)}>
      {content}
    </div>
  );
}
