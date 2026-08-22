interface HeroImagePlaceholderProps {
  className?: string;
  label?: string;
}

/**
 * Marks where a real hero photo/artwork will be dropped in later.
 * Intentionally left empty per the brief — do not fill with generated or stock imagery.
 */
export default function HeroImagePlaceholder({
  className = "",
  label = "HERO_IMAGE_PLACEHOLDER"
}: HeroImagePlaceholderProps) {
  return (
    <div
      className={`rd-hero-placeholder ${className}`}
      role="img"
      aria-label="Placeholder for hero image, to be replaced with real photography or artwork"
    >
      <span className="rd-hero-placeholder-label">{label}</span>
    </div>
  );
}
