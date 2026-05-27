import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Users, Globe, Lock, Mail, CheckCircle2 } from 'lucide-react';

export default function Login({ onLoginSuccess }) {
  const { appMode, setAppMode, setActiveModule } = useTheme();
  const [email, setEmail] = useState('james.may@maybank.com.my');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSignIn = (e) => {
    e.preventDefault();
    setActiveModule('Summary');
    onLoginSuccess(appMode);
  };

  return (
    <div className="min-h-screen w-screen bg-[#0A0A0A] flex flex-col md:flex-row text-white overflow-x-hidden font-sans">
      
      {/* Left Column: Branded Panel with Gradient Art */}
      <div className="flex-1 bg-[#0A0A0A] relative flex flex-col justify-between p-12 md:p-16 overflow-hidden border-r border-zinc-900">
        {/* Decorative Grid Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E6308A]/15 via-[#C6E84F]/5 to-transparent pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#9E005D]/20 to-[#E6308A]/5 blur-3xl pointer-events-none" />

        {/* Brand logo wordmark */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E6308A] to-[#C6E84F] flex items-center justify-center font-bold text-black text-base shadow-lg">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-widest text-[#E6308A] leading-none uppercase">
              BUSINESS<span className="text-[#C6E84F]">NEXT</span>
            </span>
            <span className="text-[10px] text-zinc-400 font-bold tracking-wider">Maybank CRM Ecosystem</span>
          </div>
        </div>

        {/* Narrative Tagline Block */}
        <div className="my-auto py-12 relative z-10">
          <span className="text-[#C6E84F] text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full shadow-inner">
            Next Generation CRM
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight tracking-wide">
            One CRM.<br />
            <span className="bg-gradient-to-r from-[#E6308A] to-[#C6E84F] bg-clip-text text-transparent">
              Every Relationship.
            </span>
          </h2>
          <p className="text-zinc-400 text-xs mt-4 max-w-sm leading-relaxed font-medium">
            Empowering Maybank Relationship Managers with unified portfolio intelligence, automated Islamic finance calculations, and pro-active churn mitigation strategies.
          </p>
        </div>

        {/* Bottom copyright signpost */}
        <div className="text-[10px] text-zinc-500 font-semibold tracking-wide relative z-10">
          © Copyright 2026 Maybank Berhad. Powered by BUSINESSNEXT Platform.
        </div>
      </div>

      {/* Right Column: White Authorization Card Form */}
      <div className="flex-1 bg-[#0E0E10] flex items-center justify-center p-8 md:p-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C6E84F]/5 via-transparent to-transparent pointer-events-none" />

        {/* Sign In Card */}
        <div className="w-full max-w-md bg-white text-zinc-900 rounded-3xl p-8 shadow-2xl relative border border-zinc-150 transform hover:scale-[1.005] transition-all">
          <h3 className="text-xl font-black text-[#E6308A] uppercase tracking-wide">
            Account Sign In
          </h3>
          <p className="text-xs text-zinc-500 font-medium mt-1">
            Access the CRM workspace console
          </p>

          <form onSubmit={handleSignIn} className="mt-6 space-y-4">
            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                Corporate Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@maybank.com.my"
                  className="w-full h-10 border border-zinc-200 rounded-xl pl-10 pr-4 text-xs font-semibold focus:outline-none focus:border-[#E6308A] transition-colors bg-zinc-50/50"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                Security Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-10 border border-zinc-200 rounded-xl pl-10 pr-4 text-xs font-semibold focus:outline-none focus:border-[#E6308A] transition-colors bg-zinc-50/50"
                />
              </div>
            </div>

            {/* Remember Me and Recover Row */}
            <div className="flex items-center justify-between text-[11px] font-bold text-zinc-600 mt-2 select-none">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 text-[#E6308A] border-zinc-300 rounded focus:ring-0" 
                />
                <span>Remember me on this node</span>
              </label>
              <a href="#" className="hover:text-[#E6308A] transition-colors">
                Recover credential?
              </a>
            </div>

            {/* Two Large Selectable Application Workspace Tiles */}
            <div className="pt-2">
              <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                Select Active Application Workspace
              </label>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Tile 1: GCFS Retail */}
                <div 
                  onClick={() => setAppMode('gcfs')}
                  className={`border-2 rounded-2xl p-3.5 cursor-pointer transition-all flex flex-col justify-between h-28 relative ${
                    appMode === 'gcfs' 
                      ? 'border-[#E6308A] bg-[#E6308A]/5 shadow' 
                      : 'border-zinc-200 hover:border-zinc-300 bg-white'
                  }`}
                >
                  {appMode === 'gcfs' && (
                    <CheckCircle2 className="w-4 h-4 text-[#E6308A] absolute top-2 right-2" />
                  )}
                  <Users className={`w-6 h-6 ${appMode === 'gcfs' ? 'text-[#E6308A]' : 'text-zinc-400'}`} />
                  <div>
                    <h4 className="text-xs font-black text-zinc-800 leading-none">GCFS</h4>
                    <span className="text-[9px] text-zinc-400 font-semibold leading-tight block mt-1">
                      Retail & Premier Wealth
                    </span>
                  </div>
                </div>

                {/* Tile 2: GGB Corporate */}
                <div 
                  onClick={() => setAppMode('ggb')}
                  className={`border-2 rounded-2xl p-3.5 cursor-pointer transition-all flex flex-col justify-between h-28 relative ${
                    appMode === 'ggb' 
                      ? 'border-[#C6E84F] bg-[#C6E84F]/5 shadow' 
                      : 'border-zinc-200 hover:border-zinc-300 bg-white'
                  }`}
                >
                  {appMode === 'ggb' && (
                    <CheckCircle2 className="w-4 h-4 text-[#C6E84F] absolute top-2 right-2 bg-black rounded-full" />
                  )}
                  <Globe className={`w-6 h-6 ${appMode === 'ggb' ? 'text-[#C6E84F] bg-black p-[2px] rounded' : 'text-zinc-400'}`} />
                  <div>
                    <h4 className="text-xs font-black text-zinc-800 leading-none">GGB</h4>
                    <span className="text-[9px] text-zinc-400 font-semibold leading-tight block mt-1">
                      Corporate & Syndicate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Trigger Submit */}
            <button 
              type="submit"
              className="w-full h-11 rounded-xl bg-[#C6E84F] hover:opacity-95 text-black font-extrabold text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 mt-4 transform hover:translate-y-[-1px] transition-all"
            >
              <span>Initialize Workspace</span>
            </button>
          </form>

          {/* Day 1 / Day 2 Hint Info Bar */}
          <div className="mt-5 p-3 rounded-xl bg-zinc-50 border border-zinc-150 text-[10px] text-zinc-500 font-semibold flex items-center justify-between">
            <span className="text-[#E6308A] uppercase tracking-wider font-extrabold">Demo Info:</span>
            <span className="text-zinc-600">Day 1 Workspace - GCFS / Day 2 Workspace - GGB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
