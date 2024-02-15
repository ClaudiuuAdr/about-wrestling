import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animation = useAnimation();
  const slideAn = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
      slideAn.start("visible");
    }
  }, [inView]);
  return (
    <>
      <div ref={ref} className="relative bg-slate-800 text-white">
        <motion.div
          variants={{
            hide: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hide"
          animate={animation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="py-5 text-center text-5xl font-semibold">
            Now, Then, Forever
          </h1>
          <p className="px-10 pb-5 text-justify">
            The promotion was founded in 1953 as the Capitol Wrestling
            Corporation (CWC), a Northeastern territory of the National
            Wrestling Alliance (NWA). Following a dispute, CWC left the NWA and
            became the World Wide Wrestling Federation (WWWF) in April 1963.
            After rejoining the NWA in 1971, the WWWF was renamed to the World
            Wrestling Federation (WWF) in 1979 before the promotion left the NWA
            for good in 1983. In 2002, following a legal dispute with the World
            Wildlife Fund, the WWF was renamed to World Wrestling Entertainment
            (WWE). In 2011, the promotion ceased branding itself as World
            Wrestling Entertainment and began solely branding itself with the
            initials WWE.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
