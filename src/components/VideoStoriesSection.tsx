import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "https://player.cloudinary.com/embed/?cloud_name=dfbh21zqc&public_id=D97EC707-0192-4415-8A9F-BDCE0FD026ED_hc3aue",
  "https://player.cloudinary.com/embed/?cloud_name=dfbh21zqc&public_id=c2dbd83e6d3c491baf054d691d97b362_gzexzn",
  "https://player.cloudinary.com/embed/?cloud_name=dfbh21zqc&public_id=66CED4FB-8BBB-4040-BBC4-0128A395E571_jiaclb",
  "https://player.cloudinary.com/embed/?cloud_name=dfbh21zqc&public_id=0912275270aa4f88acdfcde6309a8d1e_cwgq6g",
  "https://player.cloudinary.com/embed/?cloud_name=dfbh21zqc&public_id=9b4ec0ec85da4b4c99c7d0077963a5bb_syxnjr",
  "https://player.cloudinary.com/embed/?cloud_name=dfbh21zqc&public_id=9b4ec0ec85da4b4c99c7d0077963a5bb_rbmdxu",
];

const VideoStoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-28 bg-charcoal" id="stories">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-medium mb-4">
              Behind the Scenes
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
              Our Stories
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-primary-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex-shrink-0 w-[calc((100vw-1400px)/2+2rem)] hidden 2xl:block" />
        {videos.map((url, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex-shrink-0 w-72 aspect-[9/16] bg-charcoal border border-primary-foreground/10 overflow-hidden"
          >
            <iframe
              src={url}
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write; gyroscope"
              allowFullScreen
              title={`Story ${i + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoStoriesSection;
