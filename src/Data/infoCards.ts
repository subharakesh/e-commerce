import type { LucideIcon } from "lucide-react";
import { ClipboardMinus, ShieldCheck, BadgeCheck } from "lucide-react";


export interface InfoCardData {
  icon: LucideIcon;
  title: string;
  description: string;
}


export const INFO_CARDS: InfoCardData[] = [
  {
    icon: ClipboardMinus,
    title: "Transparent Pricing",
    description: "Upfront prices with no hidden costs.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description: "Every car is thoroughly inspected.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted History",
    description: "Complete vehicle history reports.",
  },
];
