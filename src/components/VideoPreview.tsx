import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Play, X } from 'lucide-react';

interface VideoPreviewProps {
  previewSrc?: string;
  fullSrc?: string;
  posterSrc?: string;
  title: string;
  label?: string;
}

export default function VideoPreview({ previewSrc, fullSrc, posterSrc, title, label = "Prototype Simulation" }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [hasPreview, setHasPreview] = useState(true);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3 });

  // Pause video when offscreen for performance
  useEffect(() => {
    if (!videoRef.current || !hasPreview) return;
    if (inView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [inView, hasPreview]);

  // Check if video can actually load
  const handleVideoError = () => {
    // Only hide preview if the mp4 source truly can't load
    setHasPreview(false);
  };

  return (
    <>
      <div ref={inViewRef} className="relative overflow-hidden rounded-sm bg-card border border-foreground/5 group">
        {/* Preview Video */}
        {hasPreview && previewSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterSrc}
            src={previewSrc}
            className="w-full aspect-video object-cover"
            onError={handleVideoError}
          />
        ) : posterSrc ? (
          <img src={posterSrc} alt={title} className="w-full aspect-video object-cover" />
        ) : (
          /* Fallback — show when video files aren't available yet */
          <div className="w-full aspect-video bg-gradient-to-br from-foreground/5 to-foreground/10 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
              <Play size={20} className="text-foreground/30 ml-0.5" />
            </div>
            <p className="text-foreground/30 text-xs font-mono uppercase tracking-widest">Video demo coming soon</p>
          </div>
        )}

        {/* Overlay Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white/60 text-[9px] font-mono uppercase tracking-widest rounded">
          {label}
        </div>

        {/* Play Full Button */}
        {fullSrc && (
          <button
            onClick={() => setShowModal(true)}
            className="absolute bottom-3 right-3 px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-2 hover:bg-accent/80 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            <Play size={12} /> Watch with voiceover
          </button>
        )}
      </div>

      {/* Full Video Modal */}
      {showModal && fullSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <video
              autoPlay
              controls
              playsInline
              preload="auto"
              poster={posterSrc}
              src={fullSrc}
              className="w-full rounded-sm shadow-2xl"
            />
            <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest mt-3 text-center">
              {title} · {label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
