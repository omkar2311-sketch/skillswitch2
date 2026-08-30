import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Target, TrendingUp, ArrowRight, CheckCircle2, Zap, Clock, BookOpen } from 'lucide-react';

const currentRoles = [
  'Teacher', 'Accountant', 'Sales Representative', 'Nurse', 'Retail Manager',
  'Administrative Assistant', 'Mechanical Engineer', 'Marketing Coordinator', 'Barista', 'Other',
];

const targetRoles = [
  'Data Scientist', 'UX Designer', 'Full-Stack Developer', 'Cloud Engineer',
  'Product Manager', 'Cybersecurity Analyst', 'Digital Marketer', 'Data Engineer',
];

const skillLevels = [
  { skill: 'Python / Programming', level: 0 },
  { skill: 'Data Analysis', level: 0 },
  { skill: 'Design / UI', level: 0 },
  { skill: 'Project Management', level: 0 },
  { skill: 'Cloud / DevOps', level: 0 },
  { skill: 'Communication', level: 0 },
];

export default function Analyzer() {
  const [step, setStep] = useState(1);
  const [currentRole, setCurrentRole] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [skills, setSkills] = useState(skillLevels);
  const [showResults, setShowResults] = useState(false);

  const updateSkill = (index, level) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], level };
    setSkills(updated);
  };

  const handleAnalyze = () => {
    setShowResults(true);
    setStep(4);
  };

  const gapResults = [
    { skill: 'Technical Programming', current: 30, needed: 85, gap: 55 },
    { skill: 'Data Analysis', current: 20, needed: 90, gap: 70 },
    { skill: 'Machine Learning', current: 5, needed: 80, gap: 75 },
    { skill: 'SQL & Databases', current: 15, needed: 75, gap: 60 },
    { skill: 'Communication', current: 80, needed: 70, gap: 0 },
    { skill: 'Problem Solving', current: 60, needed: 85, gap: 25 },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-4">
            <Brain className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            AI <span className="gradient-text">Skill Gap</span> Analyzer
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover your skill gaps and get a personalized learning plan for your dream career.
          </p>
        </motion.div>

        {/* Progress */}
        {!showResults && (
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= s ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-primary-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Current Role */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What's your current role?</h2>
            <p className="text-gray-500 mb-6">Select the role that best describes your current position.</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {currentRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => setCurrentRole(role)}
                  className={`px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                    currentRole === role
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            <button
              onClick={() => currentRole && setStep(2)}
              disabled={!currentRole}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
          </motion.div>
        )}

        {/* Step 2: Target Role */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What's your dream role?</h2>
            <p className="text-gray-500 mb-6">Choose the career you'd like to transition into.</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {targetRoles.map((role) => (
                <button
                  key={role}
                  onClick={() => setTargetRole(role)}
                  className={`px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                    targetRole === role
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
              <button
                onClick={() => targetRole && setStep(3)}
                disabled={!targetRole}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Skills */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Rate your current skills</h2>
            <p className="text-gray-500 mb-6">Be honest — this helps us build an accurate learning plan.</p>
            <div className="space-y-6 mb-8">
              {skills.map((s, i) => (
                <div key={s.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{s.skill}</span>
                    <span className="text-sm text-gray-400">
                      {['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][s.level]}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => updateSkill(i, lvl)}
                        className={`flex-1 h-3 rounded-full transition-colors ${
                          lvl <= s.level ? 'bg-primary-500' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="btn-secondary flex-1">Back</button>
              <button onClick={handleAnalyze} className="btn-accent flex-1 gap-2">
                <Zap className="w-4 h-4" /> Analyze My Skills
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Results */}
        {step === 4 && showResults && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Summary Card */}
            <div className="card p-8 mb-8 bg-gradient-to-br from-primary-600 to-accent-500 text-white border-0">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Your Skill Gap Analysis</h2>
                <p className="text-white/70 mb-4">{currentRole} → {targetRole}</p>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="bg-white/10 rounded-xl p-4">
                    <Target className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-2xl font-bold">72%</div>
                    <div className="text-xs text-white/70">Gap Score</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Clock className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-2xl font-bold">6 mo</div>
                    <div className="text-xs text-white/70">Est. Time</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <BookOpen className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-xs text-white/70">Rec. Paths</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill Bars */}
            <div className="card p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Breakdown</h3>
              <div className="space-y-5">
                {gapResults.map((r) => (
                  <div key={r.skill}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-700">{r.skill}</span>
                      <span className={`text-sm font-medium ${r.gap > 0 ? 'text-red-500' : 'text-accent-600'}`}>
                        {r.gap > 0 ? `${r.gap}% gap` : '✓ Strong'}
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${r.current}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute h-full bg-primary-500 rounded-full"
                      />
                      <div className="absolute h-full border-r-2 border-dashed border-accent-500" style={{ left: `${r.needed}%` }} />
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-400">
                      <span>Current: {r.current}%</span>
                      <span>Needed: {r.needed}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-3">
              <Link to="/paths" className="btn-primary px-10">
                View Recommended Paths <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <div>
                <button onClick={() => { setStep(1); setShowResults(false); setCurrentRole(''); setTargetRole(''); }} className="text-sm text-gray-500 hover:text-primary-600">
                  Retake Assessment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
