// Common FAQ questions and answers that can be reused across venues
export const commonFAQs = {
  bagPolicy: {
    id: 'general-policy',
    question: 'What is the bag policy?',
    answer: 'The venue enforces a clear bag policy. Only clear plastic bags (12" x 6" x 12" or smaller) and small clutch bags (4.5" x 6.5") are permitted.'
  },
  prohibitedItems: {
    id: 'prohibited-items',
    question: 'What bags are prohibited?',
    answer: 'Prohibited bags include backpacks, large purses, duffel bags, camera bags, briefcases, and tote bags.'
  },
  medicalBags: {
    id: 'medical-bags',
    question: 'Are medical bags allowed?',
    answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
  },
  storage: {
    id: 'storage-options',
    question: 'What if my bag is not allowed?',
    answer: 'There are storage options available near the venue. You can store your bags securely with our partner Bounce.'
  }
};

// Helper function to customize FAQ answers for a specific venue
export function customizeFAQ(faq: typeof commonFAQs[keyof typeof commonFAQs], venueName: string) {
  return {
    ...faq,
    answer: faq.answer.replace('The venue', venueName)
  };
}