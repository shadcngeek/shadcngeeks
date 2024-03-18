import { Badge } from "@/components/ui/badge";

export function AppBadge({ count }: { count?: number }) {
  return (
    <Badge className="dark:bg-lime-400 bg-lime-400 text-slate-900 hover:bg-lime-300 hover:dark:bg-lime-300">
      {count} New
    </Badge>
  );
}
