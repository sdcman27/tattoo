const faqs = [
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Eat a good meal, stay hydrated, and avoid alcohol for 24 hours. Wear comfortable clothing that allows access to the placement area.",
  },
  {
    question: "What is the deposit policy?",
    answer:
      "We take a $150 non-refundable deposit that applies toward the total cost of your tattoo. Reschedules require 48 hours notice to transfer the deposit.",
  },
  {
    question: "How do I care for my new tattoo?",
    answer:
      "Leave the bandage on for 2-4 hours, wash gently with fragrance-free soap, pat dry, and apply a thin layer of recommended ointment twice daily.",
  },
  {
    question: "Do you tattoo minors?",
    answer:
      "We only tattoo clients 18+ with valid government-issued ID.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "Life happens! Email us at least 48 hours ahead to keep your deposit active and we'll find a new time.",
  },
];

const FAQAccordion = () => {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-3xl border border-zinc-200 bg-white p-6"
        >
          <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-zinc-900">
            {faq.question}
            <span className="text-sm text-zinc-500 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm text-zinc-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQAccordion;
