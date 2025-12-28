import React from 'react';
import { Section } from '../ui/Section';
import { Users, Trophy, Activity } from 'lucide-react';
export function Leadership() {
  return <Section id="leadership" title="Leadership & Achievements">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Leadership */}
        <div className="bg-navy-800/30 border border-navy-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-400" />
            Leadership & Volunteering
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <div>
                <h4 className="text-slate-200 font-medium">Project Manager</h4>
                <p className="text-slate-400 text-sm">UOK Robot Battles 2k25</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <div>
                <h4 className="text-slate-200 font-medium">Treasurer</h4>
                <p className="text-slate-400 text-sm">
                  IEEE IES Student Branch (University of Kelaniya)
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <div>
                <h4 className="text-slate-200 font-medium">
                  Executive Board Member
                </h4>
                <p className="text-slate-400 text-sm">
                  ECSC, University of Kelaniya
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Sports */}
        <div className="bg-navy-800/30 border border-navy-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-cyan-400" />
            Sports & Achievements
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-slate-200 font-medium">
                  University Colors Awardee
                </h4>
                <p className="text-slate-400 text-sm">University of Kelaniya</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-slate-200 font-medium">National Swimmer</h4>
                <p className="text-slate-400 text-sm">Competitive Swimming</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-slate-200 font-medium">
                  ILS Life Saver Bronze
                </h4>
                <p className="text-slate-400 text-sm">
                  International Life Saving Federation
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>;
}