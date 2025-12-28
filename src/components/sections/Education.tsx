import React from 'react';
import { Section } from '../ui/Section';
import { GraduationCap, Award } from 'lucide-react';
export function Education() {
  return <Section id="education" title="Education & Certifications">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            Academic Background
          </h3>
          <div className="space-y-8 border-l border-navy-700 ml-3 pl-8 relative">
            <div className="relative">
              <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-cyan-400 bg-navy-900" />
              <h4 className="text-lg font-bold text-slate-200">
                BSc (Hons) Electronics and Computer Science
              </h4>
              <p className="text-cyan-400 font-mono text-sm mb-1">
                University of Kelaniya
              </p>
              <p className="text-slate-400 text-sm mb-2">Current CGPA: 3.425</p>
              <p className="text-slate-500 text-sm">
                Specializing in AI, Embedded Systems, and Computer Vision.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-navy-600 bg-navy-900" />
              <h4 className="text-lg font-bold text-slate-200">
                G.C.E. Advanced Level – Physical Science
              </h4>
              <p className="text-cyan-400 font-mono text-sm mb-1">
                Ruhunu Vijayaba College
              </p>
              <p className="text-slate-400 text-sm">Z-score: 1.5429</p>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-cyan-400" />
            Certifications
          </h3>
          <div className="grid gap-4">
            {[{
            name: 'Computer Vision with Embedded Machine Learning',
            issuer: 'Coursera'
          }, {
            name: 'Supervised Machine Learning',
            issuer: 'Stanford University (Coursera)'
          }, {
            name: 'NLP & Text Mining',
            issuer: 'Simplilearn'
          }, {
            name: 'AWS Cloud 101',
            issuer: 'AWS Educate'
          }, {
            name: 'Programming in Python',
            issuer: 'University of Moratuwa'
          }].map((cert, idx) => <div key={idx} className="bg-navy-800/30 border border-navy-700 p-4 rounded-lg flex justify-between items-center hover:border-cyan-500/30 transition-colors">
                <div>
                  <h4 className="text-slate-200 font-medium text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </Section>;
}