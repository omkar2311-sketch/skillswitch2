import { motion } from 'framer-motion';
import { Heart, Target, Users, Globe, Award, Lightbulb } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Empathy First', desc: 'We understand career transitions are hard. Every decision we make starts with empathy for our learners.' },
  { icon: Target, title: 'Outcome Driven', desc: 'We measure success by job placements, not course completions. Real results matter.' },
  { icon: Users, title: 'Community Powered', desc: 'Learning is better together. Our mentors, peers, and alumni form a lifelong support network.' },
  { icon: Globe, title: 'Accessible to All', desc: 'We believe everyone deserves a chance to switch careers, regardless of background or budget.' },
  { icon: Award, title: 'Excellence Always', desc: 'Our content is built by industry leaders and continuously updated to stay relevant.' },
  { icon: Lightbulb, title: 'Innovation Led', desc: 'We use AI and data to personalize every learner\'s journey and maximize their success.' },
];

const team = [
  { name: 'Sarah Chen', role: 'CEO & Co-Founder', avatar: '👩‍💼', bio: 'Former VP of Engineering at Google. 15+ years in EdTech.' },
  { name: 'Marcus Johnson', role: 'CTO & Co-Founder', avatar: '👨‍💻', bio: 'Ex-Netflix ML Lead. Stanford CS PhD.' },
  { name: 'Emily Rodriguez', role: 'Head of Design', avatar: '👩‍🎨', bio: 'Former Design Director at Apple. 12 years in UX.' },
  { name: 'David Kim', role: 'Head of Curriculum', avatar: '👨‍🏫', bio: 'Ex-Coursera Content VP. Harvard EdD.' },
];

const milestones = [
  { year: '2020', event: 'SkillSwitch founded with a mission to democratize career transitions' },
  { year: '2021', event: 'Launched first 10 learning paths and AI skill gap analyzer' },
  { year: '2022', event: 'Reached 10,000 career switchers. Raised Series A funding' },
  { year: '2023', event: '95% placement rate achieved. Expanded to 200+ learning paths' },
  { year: '2024', event: '50,000+ successful career transitions. Global expansion' },
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We believe your career shouldn't be defined by your first job. SkillSwitch exists to
            empower anyone to reinvent themselves through world-class education, AI-powered
            personalization, and a community that has your back.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <span className="text-5xl block mb-3">{t.avatar}</span>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{t.role}</p>
                <p className="text-xs text-gray-500">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 text-white text-sm font-bold flex items-center justify-center">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-gray-700 pt-3">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
