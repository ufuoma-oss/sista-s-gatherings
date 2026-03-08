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
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32 bg-foreground" id="stories">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <div className="h-[3px] w-16 bg-accent mb-8" />
            <p className="font-body text-[13px] uppercase tracking-[0.3em] text-accent font-semibold mb-5">
              Behind the Scenes
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-background leading-[1.1]">
              Our Stories
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-background" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-background" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 lg:px-12 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex-shrink-0 w-[calc((100vw-1400px)/2)] hidden 2xl:block" />
        {videos.map((url, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex-shrink-0 w-72 aspect-[9/16] rounded-2xl overflow-hidden bg-background/5"
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
