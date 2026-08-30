import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield } from 'lucide-react';
import { pricingPlans, faqs } from '../data/pricing';
import PricingCard from '../components/PricingCard';

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. All plans include a 30-day money-back guarantee.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-20"
        >
          <Shield className="w-6 h-6 text-accent-500" />
          <span className="text-sm text-gray-500">
            <strong className="text-gray-700">30-day money-back guarantee</strong> on all paid plans. No questions asked.
          </span>
        </motion.div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 text-left transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
