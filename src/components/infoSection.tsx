import { InfoCard } from "./InfoCard";
import { INFO_CARDS } from "../data/infoCards";
import type { InfoCardData } from "../data/infoCards";

export function InfoSection() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {INFO_CARDS.map((card: InfoCardData) => (
          <InfoCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
