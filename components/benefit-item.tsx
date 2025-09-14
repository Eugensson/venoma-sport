import Image from "next/image";

import type { BenefitItem as BenefitItemProps } from "@/types";

export const BenefitItem = ({
  icon,
  alt,
  title,
  text,
  alignRight,
  extraClasses,
}: BenefitItemProps) => {
  return (
    <div>
      <div
        className={`mb-4 flex items-center gap-2 ${
          alignRight ? "justify-end" : "justify-start"
        }`}
      >
        <Image src={icon} width={24} height={24} alt={alt} />
        <h3 className="uppercase font-bold text-white">{title}</h3>
      </div>
      <p
        className={`${alignRight ? "xl:text-right" : ""} ${extraClasses || ""}`}
      >
        {text}
      </p>
    </div>
  );
};
