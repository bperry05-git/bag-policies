import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { VenueDetails } from '../../types/venue';
import { generateFAQSchema } from '../../utils/schema';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-0 py-2">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-2 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-3 prose prose-blue max-w-none">
          <div className="text-gray-600 whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

interface FAQSectionProps {
  venue: VenueDetails;
}

export default function FAQSection({ venue }: FAQSectionProps) {
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({});
  const faqSchema = generateFAQSchema(venue.faqs, venue.name);

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="bg-white">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions About {venue.name} Bag Policy
        </h2>
        
        <div className="space-y-2">
          {venue.faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems[faq.id]}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}