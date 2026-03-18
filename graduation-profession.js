import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Scale, 
  Brain, 
  ChevronRight, 
  TrendingUp, 
  Award, 
  Info,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [activeLevel, setActiveLevel] = useState(null);

  const colors = {
    defensive: 'border-[#27DEF2]', // Cyan/Blue
    offensive: 'border-[#FF5347]', // Red/Tomato
    strategic: 'border-[#564887]', // Iris
    ai: 'border-[#05F283]',        // Spring Green
    bg: '#002b56'                  // Berkeley Blue
  };

  const careerLevels = [
    {
      id: 1,
      title: "Level 1: Entry (0-2 Years)",
      description: "Foundational Monitoring & Hygiene",
      pillars: [
        {
          name: "Defensive",
          roles: ["Junior SOC Analyst", "Email Security Analyst"],
          certs: "Security+, BTL1"
        },
        {
          name: "Offensive",
          roles: ["Junior PenTester", "OSINT Specialist"],
          certs: "eJPT"
        },
        {
          name: "Strategic",
          roles: ["Junior GRC Analyst", "Policy Writer"],
          certs: "Sec+"
        }
      ]
    },
    {
      id: 2,
      title: "Level 2: Intermediate (2-5 Years)",
      description: "Deep Investigation & Technical Testing",
      pillars: [
        {
          name: "Defensive",
          roles: ["Incident Responder", "Malware Analyst"],
          certs: "CySA+, GCIH"
        },
        {
          name: "Offensive",
          roles: ["Ethical Hacker", "API Security Tester"],
          certs: "OSCP"
        },
        {
          name: "Specialized",
          roles: ["AI Security Engineer", "Data Privacy Officer (DPO)"],
          certs: "CIPP, AI-102"
        }
      ]
    },
    {
      id: 3,
      title: "Level 3: Advanced (5-8 Years)",
      description: "Architecture & Strategic Design",
      pillars: [
        {
          name: "Defensive",
          roles: ["Security Architect", "Detection Engineer"],
          certs: "CISSP, CASP+"
        },
        {
          name: "Offensive",
          roles: ["Red Team Operator", "Exploit Developer"],
          certs: "OSWE, GXPN"
        },
        {
          name: "Strategic",
          roles: ["Risk Manager", "Compliance Lead"],
          certs: "CISM, CISA"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans p-4 md:p-10">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#002b56] mb-4">
          Cybersecurity Career <span className="text-[#564887]">Mastery Flow</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Interactive roadmap from graduation to industry leadership. Explore paths in Defense, Offense, Strategy, and AI.
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* The Flow Container */}
        <div className="flex flex-col gap-12">
          {careerLevels.map((level, idx) => (
            <div key={level.id} className="relative">
              {/* Level Connector Arrow */}
              {idx !== 0 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[#05F283]">
                  <TrendingUp size={40} className="opacity-30" />
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="bg-[#002b56] p-6 text-white flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">{level.title}</h2>
                    <p className="text-[#05F283] font-medium">{level.description}</p>
                  </div>
                  <Award className="opacity-50" size={32} />
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {level.pillars.map((pillar) => (
                    <div 
                      key={pillar.name}
                      className={`p-6 rounded-xl border-t-8 bg-slate-50 transition-all hover:shadow-md ${
                        pillar.name === 'Defensive' ? colors.defensive : 
                        pillar.name === 'Offensive' ? colors.offensive : 
                        pillar.name === 'Strategic' ? colors.strategic : colors.ai
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        {pillar.name === 'Defensive' && <Shield size={20} className="text-cyan-600" />}
                        {pillar.name === 'Offensive' && <Zap size={20} className="text-red-600" />}
                        {pillar.name === 'Strategic' && <Scale size={20} className="text-iris" />}
                        {pillar.name === 'Specialized' && <Brain size={20} className="text-[#05F283]" />}
                        <h3 className="font-bold text-lg text-slate-800 uppercase tracking-wider">{pillar.name}</h3>
                      </div>

                      <div className="space-y-3 mb-6">
                        {pillar.roles.map(role => (
                          <div key={role} className="flex items-center gap-2 text-slate-700">
                            <ArrowRight size={14} className="text-slate-400" />
                            <span className="text-sm font-medium">{role}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-200">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Target Certifications</p>
                        <span className="text-xs px-2 py-1 bg-white border border-slate-300 rounded font-semibold text-slate-600 inline-block">
                          {pillar.certs}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend / Info */}
        <footer className="mt-20 p-8 bg-[#002b56] rounded-3xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Info className="text-[#05F283]" /> Career Pivot Logic
              </h4>
              <ul className="space-y-4 opacity-80 text-sm">
                <li>• <strong>Defensive → Offensive:</strong> Analysts who master internal logs make the best PenTesters because they know what "noise" looks like.</li>
                <li>• <strong>Offensive → Strategic:</strong> Former hackers are highly valuable as GRC Leads because they can validate if policies actually stop real-world attacks.</li>
                <li>• <strong>AI Integration:</strong> All paths eventually merge into AI Security—either using AI to defend or red-teaming AI models.</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <h5 className="font-bold mb-2 text-[#05F283]">Estimated Salary Growth</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Entry Level</span><span>$55k - $85k</span></div>
                <div className="flex justify-between font-bold text-[#27DEF2]"><span>Intermediate</span><span>$90k - $140k</span></div>
                <div className="flex justify-between"><span>Architect/Lead</span><span>$150k - $450k+</span></div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
