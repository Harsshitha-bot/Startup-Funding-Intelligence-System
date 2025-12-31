import React from 'react';
import { Globe, FileText, Users, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: <Globe className="w-8 h-8" />, value: "12+", label: "Indian Languages" },
    { icon: <FileText className="w-8 h-8" />, value: "10K+", label: "Funding Records" },
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Investors Tracked" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "Real-time", label: "Data Updates" }
  ];

  return (
    <section className="py-16 px-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="p-8 rounded-2xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <div className="text-cyan-400 mb-4">{stat.icon}</div>
            <div className="text-4xl font-black text-white mb-2 font-orbitron">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}