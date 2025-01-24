interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
}

const OptimizedVideo = ({ 
  src, 
  poster, 
  className, 
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto"
}: OptimizedVideoProps) => {
  return (
    <video
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      preload={preload}
      poster={poster}
      className={className}
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default OptimizedVideo 