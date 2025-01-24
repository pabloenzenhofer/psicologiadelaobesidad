interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const LazyImage = ({ src, alt, width, height, className, priority = false }: LazyImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      fetchpriority={priority ? "high" : "auto"}
    />
  )
}

export default LazyImage 