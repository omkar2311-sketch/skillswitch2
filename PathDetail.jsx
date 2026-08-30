import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, BarChart3, Users, ChevronDown, ChevronUp, ArrowLeft, BookOpen } from 'lucide-react';
import { learningPaths } from '../data/paths';

export default function PathDetail() {
  const { id } = useParams();
  const path = learningPaths.find((p) => p.id === id);
  const [openModule, setOpenModule] = useState(0);

  if (!path) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Path not found</h1>
        <Link to="/paths" className="btn-primary">Browse All Paths</Link>
      </div>
    );
  }

  const totalLessons = path.modules.reduce((s, m) => s + m.lessons, 0);
  const totalHours = path.modules.reduce((s, m) => s + m.hours, 0);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link to="/paths" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Learning Paths
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl">{path.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-700">
                      {path.category}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      path.price === 'Free' ? 'bg-green-100 text-green-700' : 'bg-primary-100 text-primary-700'
                    }`}>
                      {path.price}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{path.title}</h1>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8">{path.longDescription}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Clock, label: 'Duration', value: path.duration },
                  { icon: BarChart3, label: 'Level', value: path.difficulty },
                  { icon: BookOpen, label: 'Lessons', value: totalLessons },
                  { icon: Users, label: 'Students', value: path.students.toLocaleString() },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <s.icon className="w-5 h-5 mx-auto text-primary-600 mb-1" />
                    <div className="text-lg font-bold text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Skills You'll Gain</h2>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-primary-50 text-primary-700 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modules */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Curriculum ({path.modules.length} modules • {totalHours}+ hours)
                </h2>
                <div className="space-y-3">
                  {path.modules.map((mod, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenModule(openModule === i ? -1 : i)}
                        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>
                          <span className="font-semibold text-gray-900">{mod.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500 hidden sm:block">{mod.lessons} lessons • {mod.hours}h</span>
                          {openModule === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </div>
                      </button>
                      {openModule === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          className="px-5 py-4 bg-gray-50 border-t border-gray-200"
                        >
                          <p className="text-sm text-gray-600">
                            This module contains {mod.lessons} lessons covering approximately {mod.hours} hours of content. 
                            Includes hands-on projects, quizzes, and mentor-reviewed assignments.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructors */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Instructors</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {path.instructors.map((inst) => (
                    <div key={inst.name} className="card p-5 flex items-center gap-4">
                      <span className="text-4xl">{inst.avatar}</span>
                      <div>
                        <div className="font-bold text-gray-900">{inst.name}</div>
                        <div className="text-sm text-gray-500">{inst.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 card p-6">
              <div className={`h-3 rounded-t-xl bg-gradient-to-r ${path.color} -mx-6 -mt-6 mb-6 rounded-t-2xl`} />
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-gray-900">{path.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({path.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="text-sm text-gray-500 mb-6">{path.students.toLocaleString()} students enrolled</div>

              <Link to="/signup" className="btn-primary w-full mb-3">Enroll Now</Link>
              <Link to="/analyzer" className="btn-secondary w-full text-sm">Check Skill Gap First</Link>

              <hr className="my-6 border-gray-100" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Duration</span><span className="font-medium">{path.duration}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Level</span><span className="font-medium">{path.difficulty}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Lessons</span><span className="font-medium">{totalLessons}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Total Hours</span><span className="font-medium">{totalHours}+</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Certificate</span><span className="font-medium">Yes</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
