import FAQAccordion from "@/components/faq/FAQAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to the questions we hear most about booking, healing, and policies at Ink & Ember.",
};

const FAQPage = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">FAQ</p>
        <h1 className="mt-3 text-4xl font-semibold text-zinc-900">Everything you need to know.</h1>
        <p className="mt-4 text-lg text-zinc-600">
          If you still have questions after reading through these, shoot us a DM or email hello@inkandember.com.
        </p>
        <div className="mt-10">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
