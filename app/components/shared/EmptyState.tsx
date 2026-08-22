import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message: string;
}

export default function EmptyState({ icon: Icon, title, message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 border border-dashed border-border rounded-lg">
      <Icon className="w-10 h-10 text-muted-foreground mb-4"/>
      <p className="text-lg font-display font-semibold text-foreground mb-1">{title}</p>
      <p className="placard-label">{message}</p>
    </div>
  );
}
