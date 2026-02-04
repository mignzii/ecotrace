import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Leaf, Droplets, Zap, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

const data = [
  { name: 'Lun', volume: 4000, co2: 2400 },
  { name: 'Mar', volume: 3000, co2: 1398 },
  { name: 'Mer', volume: 2000, co2: 9800 },
  { name: 'Jeu', volume: 2780, co2: 3908 },
  { name: 'Ven', volume: 1890, co2: 4800 },
  { name: 'Sam', volume: 2390, co2: 3800 },
  { name: 'Dim', volume: 3490, co2: 4300 },
];

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
        <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
          dashboard.ecotrace.africa/overview
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
      </div>

      <div className="flex h-[450px]">
        {/* Sidebar */}
        <div className="w-16 md:w-48 bg-slate-50 border-r border-slate-200 p-4 hidden md:flex flex-col gap-4">
          <div className="flex items-center gap-2 text-green-700 font-bold mb-4">
            <Leaf className="w-5 h-5" />
            <span>EcoTrace</span>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-green-100 text-green-700 rounded-md text-sm font-medium flex items-center gap-2">
              <Activity className="w-4 h-4" /> Dashboard
            </div>
            <div className="p-2 text-slate-600 hover:bg-slate-100 rounded-md text-sm font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Certificats
            </div>
            <div className="p-2 text-slate-600 hover:bg-slate-100 rounded-md text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Anomalies
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-slate-50/50 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800">Vue d'ensemble</h3>
            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Système Actif
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <Droplets className="w-3 h-3 text-blue-500" /> Huile Collectée
                </div>
                <div className="text-xl font-bold text-slate-800">12,450 L</div>
                <div className="text-xs text-green-600">+12% vs semaine dernière</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <Leaf className="w-3 h-3 text-green-500" /> CO2 Économisé
                </div>
                <div className="text-xl font-bold text-slate-800">28.6 T</div>
                <div className="text-xs text-green-600">Impact élevé</div>
            </div>
             <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <Zap className="w-3 h-3 text-yellow-500" /> Énergie (kWh)
                </div>
                <div className="text-xl font-bold text-slate-800">69,720</div>
                <div className="text-xs text-slate-400">Cumulé annuel</div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm h-60">
            <h4 className="text-sm font-semibold text-slate-700 mb-4">Volume Recyclé & Impact (7 jours)</h4>
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{fontSize: 12, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 12, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Area type="monotone" dataKey="volume" stroke="#16a34a" strokeWidth={2} fillOpacity={1} fill="url(#colorVolume)" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;