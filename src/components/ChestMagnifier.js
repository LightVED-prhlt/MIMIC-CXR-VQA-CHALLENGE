import { useState } from "react";
import chestImg from "../assets/chest.png";
import lungImg from "../assets/lung12.png";

const IMAGE_SIZE = 400;
const LENS_SIZE = 140;

export default function ChestMagnifier() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMove}
    >
      {/* Chest */}
      <img
        src={chestImg}
        alt="Chest"
        style={{
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
          display: "block",
          userSelect: "none",
        }}
        draggable={false}
      />

      {/* Lens */}
      {show && (
        <div
          style={{
            position: "absolute",
            left: pos.x - LENS_SIZE / 2,
            top: pos.y - LENS_SIZE / 2,
            width: LENS_SIZE,
            height: LENS_SIZE,
            borderRadius: "50%",
            border: "4px solid #444",
            overflow: "hidden",
            backgroundColor: "#fff",
            pointerEvents: "none",
            boxShadow: "0 0 12px rgba(0,0,0,0.5)",
          }}
        >
          {/* Lung (aligned to chest coordinates) */}
          <img
            src={lungImg}
            alt="Lung"
            style={{
              position: "absolute",
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,

              /* 🔑 Move lung under lens */
              left: -(pos.x - LENS_SIZE / 2),
              top: -(pos.y - LENS_SIZE / 2),

              /* 🔑 Mask stays FIXED to image space */
              WebkitMaskImage: `url(${chestImg})`,
              WebkitMaskSize: `${IMAGE_SIZE}px ${IMAGE_SIZE}px`,
              WebkitMaskPosition: `0px 0px`,
              WebkitMaskRepeat: "no-repeat",

              maskImage: `url(${chestImg})`,
              maskSize: `${IMAGE_SIZE}px ${IMAGE_SIZE}px`,
              maskPosition: `0px 0px`,
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
