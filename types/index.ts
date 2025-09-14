export type BenefitItem = {
  icon: string;
  alt: string;
  title: string;
  text: string;
  alignRight?: boolean;
  extraClasses?: string;
};

export type BenefitGroup = {
  side: "left" | "right";
  items: BenefitItem[];
};

export type CategoryLink = {
  title: string;
  items: string[];
};

export type CategoryLinks = CategoryLink[];
