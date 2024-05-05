"use client";
import * as React from "react";

import cn from "classnames";
import { useMounted } from "../../hooks/use-mounted";
import Link from "next/link";

interface Item {
  label: string;
  url: string;
  items?: Item[];
}

interface SideReferenceProps {
  refs: Item[];
}

interface TreeProps {
  tree: Item[];
  level?: number;
  activeItem?: string;
}

export function SideReference({ refs }: SideReferenceProps) {
  const itemIds = React.useMemo(
    () => (refs.length ? refs.flatMap((item) => [item.url]) : []),
    [refs]
  );

  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!refs?.length || !mounted) {
    return null;
  }

  return <Tree tree={refs} activeItem={activeHeading as string} />;
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<null | string>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <Link
              href={`#${item.url}`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                item.url
                  ? item.url === `${activeItem}`
                    ? " text-red-500"
                    : "text-muted-foreground"
                  : ""
              )}
            >
              {item.label}
            </Link>
            {item.items?.length ? (
              <Tree
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
