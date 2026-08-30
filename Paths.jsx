import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { learningPaths, categories, difficulties } from '../data/paths';
import PathCard from '../components/PathCard';

export default function Paths() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const filtered = learningPaths.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    const matchDifficulty = difficulty === 'All' || p.difficulty === difficulty;
    return matchSearch && matchCategory && matchDifficulty;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            All <span className="gradient-text">Learning Paths</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choose your path and start your career transformation today.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search learning paths..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>
            ))}
          </select>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {difficulties.map((d) => (
              <option key={d} value={d}>{d === 'All' ? 'All Levels' : d}</option>
            ))}
          </select>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((path) => (
              <PathCard key={path.id} path={path} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No paths match your filters.</p>
            <button
              onClick={() => { setSearch(''); setCategory('All'); setDifficulty('All'); }}
              className="btn-secondary mt-4 text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
