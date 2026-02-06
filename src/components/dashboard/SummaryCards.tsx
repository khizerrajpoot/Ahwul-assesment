import Card1Icon from '../../assets/cards1.svg';
import Card2Icon from '../../assets/cards2.svg';
import Card3Icon from '../../assets/cards3.svg';
import Card4Icon from '../../assets/cards4.svg';
import Card5Icon from '../../assets/cards5.svg';
import Card6Icon from '../../assets/cards6.svg';

interface SummaryCard {
  value: string;
  label: string;
  icon: string;
}

interface SummaryCardsProps {
  cards: SummaryCard[];
}

const iconMap: Record<string, string> = {
  'cards1.svg': Card1Icon,
  'cards2.svg': Card2Icon,
  'cards3.svg': Card3Icon,
  'cards4.svg': Card4Icon,
  'cards5.svg': Card5Icon,
  'cards6.svg': Card6Icon,
};

export const SummaryCards = ({ cards }: SummaryCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, index) => {
        const iconSrc = iconMap[card.icon] || card.icon;
        return (
          <div
            key={index}
            className="bg-white border border-[#E0E8ED] rounded-[10px] relative p-4 sm:p-6"
          >
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-3 lg:right-3">
              <img
                src={iconSrc}
                alt={card.label}
                className="lg:w-5 lg:h-5"
              />
            </div>
            <div className="font-bold mb-1 lg:text-lg text-[#1D3557]">
              {card.value}
            </div>
            <div className="lg:text-[10px] text-[#6B7280]" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
              {card.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
