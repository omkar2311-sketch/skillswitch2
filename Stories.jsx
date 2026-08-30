import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Filter } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const pathFilters = ['All', ...new Set(testimonials.map((t) => t.path))];

export default function Stories() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? testimonials : testimonials.filter((t) => t.path === filter);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Success <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real professionals who transformed their careers with SkillSwitch.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 flex-nowrap">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          {pathFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === f
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < story.rating ? 'text-amber-400 fill-current' : 'text-gray-200'}`} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{story.quote}"</p>

              {/* Person */}
              <div className="flex items-center gap-4">
                <span className="text-3xl">{story.avatar}</span>
                <div>
                  <div className="font-bold text-gray-900">{story.name}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{story.beforeRole}</span>
                    <ArrowRight className="w-3 h-3 text-accent-500" />
                    <span className="font-semibold text-accent-600">{story.afterRole}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{story.path} • {story.duration}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
