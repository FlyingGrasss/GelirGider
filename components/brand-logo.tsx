import Image from "next/image";

export function BrandLogo({ className = "h-12 max-w-[18rem]" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.svg"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 shrink-0 object-contain"
        priority
      />
      <span className="whitespace-nowrap text-sm font-bold tracking-[-0.01em] text-[#f4f8f2] sm:text-base">
        NFC Solutions <strong className="font-bold text-[#8ce0ac]">Turkey</strong>
      </span>
    </span>
  );
}
