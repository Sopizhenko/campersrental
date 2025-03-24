const Icon = ({ id, size = 24, className = "icon" }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={`/icons.svg#${id}`} />
    </svg>
  );
};

export default Icon;
