import ListPageLayout from "../components/shared/ListPageLayout";
import EmptyState from "../components/shared/EmptyState";

import { NotebookText } from "lucide-react";

export default function BlogPage() {
  return (
    <ListPageLayout
      title="Blog"
      description="My mind is an enigma"
    >
      <EmptyState icon={NotebookText} title="No posts yet" message="Check back later."/>
    </ListPageLayout>
  );
}
