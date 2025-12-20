import { useState, useRef } from "react";
import chestImg from "../../assets/chest.png";
import lungImg from "../../assets/lung12.png";
import "./ChestMagnifier.css";

export default function ChestMagnifier() {
  const containerRef = useRef(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMove}
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
