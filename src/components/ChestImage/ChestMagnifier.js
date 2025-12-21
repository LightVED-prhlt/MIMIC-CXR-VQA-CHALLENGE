import { useState, useRef, useEffect } from "react";
import chestImg from "../../assets/chest.png";
import lungImg from "../../assets/lung12.png";
import "./ChestMagnifier.css";

const AUTO_DURATION = 6000; // ms
const AUTO_END = { x: 60, y: 110 };
const AUTO_START = { x: 140, y: 90 };

export default function ChestMagnifier() {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const startTimeRef = useRef(null);

  const [pos, setPos] = useState(AUTO_START);
  const show = true;
  const [auto, setAuto] = useState(true);

  const handleMove = (e) => {
    if (auto) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const stopAuto = () => {
    if (!auto) return;
    setAuto(false);
    cancelAnimationFrame(animRef.current);
  };

  const animateExitToAutoEnd = (fromPos) => {
  cancelAnimationFrame(animRef.current);
  startTimeRef.current = null;
  setAuto(false);

  const EXIT_DURATION = 800; // ms

  const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / EXIT_DURATION, 1);

      // Smooth ease-in-out
      const ease = t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

      setPos({
        x: fromPos.x + (AUTO_END.x - fromPos.x) * ease,
        y: fromPos.y + (AUTO_END.y - fromPos.y) * ease,
      });

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    animRef.current = requestAnimationFrame(animate);
  };


  useEffect(() => {
    if (!auto) return;

    const ZIGZAG_AMPLITUDE = 100; // px up-down
    const ZIGZAG_CYCLES = 2;    // number of zigzags

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / AUTO_DURATION, 1);

      // Linear interpolation in X
      const baseX = AUTO_START.x + (AUTO_END.x - AUTO_START.x) * t;
      const baseY = AUTO_START.y + (AUTO_END.y - AUTO_START.y) * t;

      // Vertical zigzag (damped)
      const zigzag =
        Math.sin(t * Math.PI * 2 * ZIGZAG_CYCLES) *
        ZIGZAG_AMPLITUDE *
        (1 - t);

      setPos({
        x: baseX,
        y: baseY + zigzag,
      });

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setAuto(false);
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animRef.current);
  }, [auto]);


  const rect = containerRef.current?.getBoundingClientRect();
  const imageSize = rect?.width || 0;
  const lensSize = imageSize * 0.35;

  return (
    <div
      ref={containerRef}
      className="magnifier-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onMouseEnter={stopAuto}
      onMouseMove={handleMove}
      onMouseLeave={() => animateExitToAutoEnd(pos)}
    >
      {/* Chest */}
      <img
        src={chestImg}
        alt="Chest"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          userSelect: "none",
        }}
        draggable={false}
      />

      {/* Lens */}
      {show && imageSize > 0 && (
        <div
          style={{
            position: "absolute",
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            borderRadius: "50%",
            border: "4px solid #444",
            overflow: "hidden",
            backgroundColor: "#fff",
            pointerEvents: "none",
            boxShadow: "0 0 12px rgba(0,0,0,0.5)",
          }}
        >
          {/* Lung */}
          <img
            src={lungImg}
            alt="Lung"
            style={{
              position: "absolute",
              width: imageSize,
              height: imageSize,
              left: -(pos.x - lensSize / 2),
              top: -(pos.y - lensSize / 2),

              WebkitMaskImage: `url(${chestImg})`,
              WebkitMaskSize: `${imageSize}px ${imageSize}px`,
              WebkitMaskPosition: "0px 0px",
              WebkitMaskRepeat: "no-repeat",

              maskImage: `url(${chestImg})`,
              maskSize: `${imageSize}px ${imageSize}px`,
              maskPosition: "0px 0px",
              maskRepeat: "no-repeat",

              userSelect: "none",
            }}
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}
