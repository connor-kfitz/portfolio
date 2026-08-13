import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message: string;
}

export default function EmptyState({ icon: Icon, title, message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 border border-dashed border-border rounded-2xl">
      <Icon className="w-10 h-10 text-muted-foreground mb-4"/>
      <p className="text-lg font-medium text-foreground mb-1">{title}</p>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
