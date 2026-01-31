interface SpriteIconProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
}

const SpriteIcon = ({
  id,
  width = 20,
  height = 20,
  className,
}: SpriteIconProps) => {
  return (
    <svg width={width} height={height} className={className} aria-hidden="true">
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};

export default SpriteIcon;
