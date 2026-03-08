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
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 md:py-32 bg-foreground overflow-hidden" id="stories">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Behind the Scenes
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-background leading-[1.15]">
              Our Stories
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-background" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-background" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {videos.map((url, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] rounded-xl overflow-hidden bg-background/5 snap-start"
          >
            <iframe
              src={url}
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              title={`Story ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoStoriesSection;
