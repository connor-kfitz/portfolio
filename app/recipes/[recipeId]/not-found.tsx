import NotFoundState from "../../components/shared/NotFoundState";

export default function NotFound() {
  return (
    <NotFoundState
      title="Recipe Not Found"
      message="The recipe you're looking for doesn't exist."
      backHref="/recipes"
    />
  );
}
