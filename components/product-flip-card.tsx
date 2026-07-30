"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import { FaArrowRight, FaArrowsRotate } from "react-icons/fa6";

type ProductFlipCardProps = {
  frontImage: string;
  backImage: string;
  badge: string;
  category: string;
  title: string;
  description: string;
};

export function ProductFlipCard({
  frontImage,
  backImage,
  badge,
  category,
  title,
  description,
}: ProductFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const dragStart = useRef<{ x: number; rotation: number } | null>(null);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = { x: event.clientX, rotation };
    setHintVisible(false);
    setDragging(true);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragStart.current) {
      return;
    }

    const nextRotation = dragStart.current.rotation + (event.clientX - dragStart.current.x) * 0.4;
    const normalizedRotation = ((nextRotation % 360) + 360) % 360;
    setRotation(nextRotation);
    setFlipped(normalizedRotation > 90 && normalizedRotation < 270);
  }

  function finishPointerGesture() {
    if (!dragStart.current) {
      return;
    }

    dragStart.current = null;
    setDragging(false);
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    setHintVisible(false);
    const nextFlipped = !flipped;
    setFlipped(nextFlipped);
    setRotation(nextFlipped ? 180 : 0);
  }

  return (
    <article className="group">
      <div
        role="button"
        tabIndex={0}
        aria-label={`${flipped ? "Ön" : "Arka"} yüzü göster: ${title}. Kartı basılı tutup yatay sürükleyerek çevirin.`}
        aria-pressed={flipped}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerGesture}
        onPointerCancel={finishPointerGesture}
        className={`relative block aspect-[660/1050] w-full select-none text-left [perspective:1200px] touch-pan-y focus-visible:ring-2 focus-visible:ring-[#a5efbd]/50 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <span
          className={`absolute inset-0 [transform-style:preserve-3d] ${dragging ? "transition-none" : "transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          <span className="absolute inset-0 [backface-visibility:hidden]">
            <Image src={frontImage} alt={`${title} ön yüz`} fill draggable={false} sizes="(max-width: 768px) 90vw, 45vw" className="rounded-[2rem] object-cover transition duration-500 group-hover:scale-[1.025]" />
          </span>
          <span className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <Image src={backImage} alt={`${title} arka yüz`} fill draggable={false} sizes="(max-width: 768px) 90vw, 45vw" className="rounded-[2rem] object-cover" />
          </span>
        </span>
        {hintVisible ? (
          <span className="pointer-events-none absolute bottom-4 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-[#061810]/75 px-3 py-2 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-white/80 shadow-lg backdrop-blur-sm">
            <FaArrowsRotate className="text-[#a5efbd]" /> Basılı tut · 360° çevir
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[#84dca0]">{category}</p>
          <span className="text-[0.62rem] font-extrabold text-[#d5efd9]/45">{badge}</span>
        </div>
        <h3 className="mt-2 text-lg font-bold tracking-[0.005em] text-[#effff1]">{title}</h3>
        <p className="mt-2 min-h-14 text-xs leading-6 text-[#d5efd9]/55">{description}</p>
        <p className="mt-4 text-[0.65rem] font-bold text-[#d5efd9]/40">Basılı tutup yatay sürükleyerek çevirin</p>
        <a href="#iletisim" className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-extrabold text-[#9aebb0] transition hover:gap-3 hover:text-[#d0fbd8]">
          Bu ürün için iletişime geçin <FaArrowRight />
        </a>
      </div>
    </article>
  );
}
