import { useState } from "react";
import { Play } from "lucide-react";

/** Ad-free embed: YouTube (nocookie) or Vimeo. Without an id, shows a "coming soon" slot. */
export function VideoCard({ title, source = "youtube", id, image }: { title: string; source?: "youtube" | "vimeo"; id?: string; image?: string }) {
  const [play, setPlay] = useState(false);
  const src = source === "vimeo" ? `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1` : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  return (
    <div className="relative aspect-video overflow-hidden bg-blush">
      {id && play ? (
        <iframe className="h-full w-full" src={src} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      ) : id ? (
        <button type="button" onClick={() => setPlay(true)} aria-label={`Play ${title}`} className="group absolute inset-0 cursor-pointer">
          {image && <img src={image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />}
          <span className="absolute inset-0 flex items-center justify-center"><span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110"><Play size={18} fill="currentColor" className="ml-1" /></span></span>
        </button>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <span className="flex size-12 items-center justify-center rounded-full border border-primary/30 text-primary"><Play size={16} className="ml-0.5" /></span>
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Video coming soon</p>
        </div>
      )}
    </div>
  );
}
