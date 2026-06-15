import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, ArrowDown, ChevronRight, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';

interface WelcomeIntroProps {
  onComplete: () => void;
}

export function WelcomeIntro({ onComplete }: WelcomeIntroProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Monitor mouse position for interactive screen glow parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Lock body scroll while intro is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollHeight - target.clientHeight;
    if (maxScroll <= 0) return;

    const currentProgress = Math.min(100, Math.floor((target.scrollTop / maxScroll) * 100));
    setProgress(currentProgress);

    if (currentProgress >= 100 && !hasStartedAnimation) {
      setHasStartedAnimation(true);
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  };

  // Instant fast-forward simulation with smooth interval
  const fastForward = () => {
    if (hasStartedAnimation) return;
    let current = progress;
    const interval = setInterval(() => {
      current += Math.max(2, Math.floor((100 - current) / 4));
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setHasStartedAnimation(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      } else {
        setProgress(current);
      }
    }, 25);
  };

  // Dynamic system boot diagnostic items based on progress value
  const logs = [
    { name: "INIT_ENVIRONMENT", threshold: 10, label: "BOOTSTRAP" },
    { name: "FULLSTACK_CORE_UX", threshold: 25, label: "VITE_ENGINE" },
    { name: "ROBOTICS_INTELLIGENCE", threshold: 45, label: "KINEMATICS" },
    { name: "INTELLIGENT_AI_MODELS", threshold: 65, label: "GENAI_SDK" },
    { name: "PORTFOLIO_DECRYPTION", threshold: 85, label: "SECURE_KEY" },
    { name: "GATEWAY_AUTHORIZED", threshold: 100, label: "ROOT_ACCESS" },
  ];

  return (
    <div 
      id="welcome-intro-viewport"
      className="fixed inset-0 z-[100] w-full h-full bg-[#030303] select-none text-white overflow-hidden"
    >
      {/* Scrollable Track - this does the native scroll action */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="absolute inset-0 w-full h-full overflow-y-auto scrollbar-none z-30 cursor-ns-resize"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Invisible spacer to give scroll runway */}
        <div className="h-[350vh] w-full pointer-events-none" />
      </div>

      {/* Fixed Visual Content Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between p-6 sm:p-8 md:p-12 bg-gradient-to-b from-[#030303] via-[#070707] to-[#010101]">
        
        {/* Futuristic Grid Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(242,125,38,0.015)_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Dynamic mouse parallax glowing ambient coordinates */}
        <div 
          className="absolute rounded-full bg-[#F27D26]/5 blur-[120px] transition-all duration-700 ease-out pointer-events-none"
          style={{ 
            width: '600px', 
            height: '600px',
            top: `calc(50% + ${mousePos.y * 120}px)`, 
            left: `calc(50% + ${mousePos.x * 120}px)`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.35 + (progress * 0.005)
          }}
        />

        {/* Top Header Row of Loader */}
        <div className="flex justify-between items-center font-mono text-[9px] sm:text-xs text-zinc-500 tracking-widest w-full max-w-[1600px] mx-auto border-b border-white/5 pb-5 z-20">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#F27D26] animate-pulse" />
            <span className="font-semibold text-zinc-400">JIVITHESH_OS</span>
            <span className="text-zinc-600">//</span>
            <span className="text-[#F27D26]/70 hidden sm:inline">v3.1.0_PROD</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-zinc-600">SYS_REF: KITS_CSE</span>
            <span className="hidden sm:inline text-zinc-700">//</span>
            <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md text-[8px] sm:text-[10px]">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[#F27D26]">BAUD_115200</span>
            </div>
          </div>
        </div>

        {/* Central Orchestration Segment */}
        <div className="flex-1 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center my-4 sm:my-8 z-20">
          
          {/* LEFT SYSTEM LOG stream - hidden on mobile for ultra high focus */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-5 self-center font-mono text-left">
            <div className="border border-white/5 bg-[#080808]/40 backdrop-blur-md rounded-2xl p-5">
              <div className="flex items-center gap-2 font-black text-[#F27D26] uppercase text-[10px] tracking-widest mb-4">
                <span className="w-1.5 h-1.5 bg-[#F27D26] rounded-full" />
                <span>Diagnostic Monitor</span>
              </div>
              <div className="space-y-3.5">
                {logs.map((log) => {
                  const isDone = progress >= log.threshold;
                  const isLoading = !isDone && progress >= (log.threshold - 15);
                  return (
                    <div key={log.name} className="flex flex-col gap-1 border-b border-white/[0.02] pb-2 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-zinc-400 font-bold">{log.name}</span>
                        <span className={`font-semibold ${
                          isDone 
                            ? "text-emerald-400" 
                            : isLoading 
                              ? "text-[#F27D26] animate-pulse" 
                              : "text-zinc-600"
                        }`}>
                          {isDone ? "[ OK ]" : isLoading ? "[ LOAD ]" : "[ PEND ]"}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-300 ${
                            isDone ? "bg-emerald-500" : isLoading ? "bg-[#F27D26]" : "bg-transparent"
                          }`}
                          style={{ width: isDone ? "100%" : isLoading ? `${((progress % 15) / 15) * 100}%` : "0%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-[#080808]/20 flex items-center gap-3">
              <ShieldAlert className="w-4 h-4 text-[#F27D26] flex-shrink-0" />
              <div className="text-[10px] leading-tight text-zinc-500">
                <span className="text-zinc-400 block font-bold uppercase tracking-wider">Protocol Status</span>
                Awaiting manual scroll input or bypass decryption vector.
              </div>
            </div>
          </div>

          {/* CENTRE STAGE - Main Loader visual clock */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center text-center">
            
            {/* Ambient visual ring */}
            <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#F27D26]/10 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-4 rounded-full border border-dashed border-zinc-900/40 animate-spin" style={{ animationDuration: '50s' }} />
              
              <div className="z-10 p-4 sm:p-6 rounded-full bg-black/60 border border-white/5 backdrop-blur-xl">
                <Cpu className="w-10 h-10 sm:w-14 sm:h-14 text-[#F27D26] animate-pulse" />
              </div>
            </div>

            {/* Glowing display name text */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.1em', filter: 'blur(10px)' }}
              animate={{ opacity: 1, letterSpacing: '0.4em', filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-4 sm:mb-6"
            >
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-[0.4em] select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400"
                style={{ 
                  transform: `scale(${1 + progress * 0.0005})`,
                  filter: `blur(${Math.max(0, (progress - 92) * 0.1)}px)`
                }}
              >
                WELCOM<span className="text-[#F27D26]">E</span>
              </h1>
            </motion.div>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-8 font-sans font-medium tracking-wide leading-relaxed px-4"
            >
              System credentials matching computer science developer & autonomous systems engineer verified. Scroll down to deploy presentation.
            </motion.p>

            {/* Glowing linear progress track */}
            <div className="w-64 sm:w-80 h-1.5 bg-zinc-900/60 border border-white/5 rounded-full overflow-hidden mb-5 relative shadow-[inner_0px_1px_4px_black]">
              <motion.div 
                className="h-full bg-gradient-to-r from-amber-600 via-[#F27D26] to-amber-400 rounded-full shadow-[0_0_12px_#F27D26]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Huge numeric ticker count */}
            <div className="font-mono font-black text-7xl sm:text-8xl md:text-9xl text-white tracking-tighter select-none flex items-baseline leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-500">
                {String(progress).padStart(3, '0')}
              </span>
              <span className="text-xl sm:text-3xl text-[#F27D26] ml-2 font-bold animate-pulse">%</span>
            </div>

            {/* Action control block */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[9px] sm:text-[10px] text-zinc-400 tracking-widest uppercase"
              >
                <div className="w-1.5 h-1.5 bg-[#F27D26] rounded-full animate-ping" />
                {progress >= 100 
                  ? "ESTABLISHING LIVE ENVIRONMENT HANDSHAKE..." 
                  : "SCROLL TRACK OR USE BYPASS BUTTON"
                }
              </motion.div>

              {/* High-fidelity Manual Overrider Button */}
              {progress < 100 && (
                <button
                  id="bypass-decryption-btn"
                  onClick={fastForward}
                  className="pointer-events-auto mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#111111] to-[#161616] hover:from-[#F27D26] hover:to-amber-500 text-zinc-400 hover:text-black border border-white/10 hover:border-[#F27D26]/20 font-mono text-[10px] font-bold tracking-widest uppercase shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Fast-Forward Loader
                </button>
              )}

              {progress < 100 && (
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-zinc-600 mt-4"
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.div>
              )}
            </div>

          </div>

          {/* RIGHT DIGITAL CLOCK WAVEFORM - hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-5 self-center font-mono text-right">
            <div className="border border-white/5 bg-[#080808]/40 backdrop-blur-md rounded-2xl p-5">
              <div className="flex items-center justify-end gap-2 font-black text-zinc-400 uppercase text-[10px] tracking-widest mb-4">
                <span>Signal Frequency</span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              </div>

              {/* Beautiful audio visualization-like lines */}
              <div className="flex items-end justify-between h-20 px-2 bg-black/40 border border-white/5 rounded-xl pt-4">
                {Array.from({ length: 18 }).map((_, i) => {
                  const factor = Math.sin((i + progress / 10)) * 0.5 + 0.5;
                  const heightPercentage = Math.max(10, Math.floor(factor * 90));
                  return (
                    <div 
                      key={i} 
                      className="w-1.5 bg-[#F27D26]/80 rounded-t-sm transition-all duration-150"
                      style={{ 
                        height: `${heightPercentage}%`,
                        opacity: 0.3 + (progress * 0.007)
                      }}
                    />
                  );
                })}
              </div>

              <div className="mt-4 flex flex-col gap-1 text-[9px] text-zinc-500">
                <div className="flex justify-between">
                  <span>VECTOR_X_GRID</span>
                  <span>{Math.sin(progress) * 100}</span>
                </div>
                <div className="flex justify-between border-t border-white/[0.02] pt-1">
                  <span>VECTOR_Y_GRID</span>
                  <span>{Math.cos(progress) * 100}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-[#080808]/25 text-left flex flex-col gap-1">
              <span className="text-[9px] text-[#F27D26] font-bold tracking-widest uppercase">System Memory</span>
              <span className="text-[14px] font-black tracking-tight text-white">41.8 GiB / 64 GiB Alloc</span>
            </div>
          </div>

        </div>

        {/* Bottom System Logs Row */}
        <div className="w-full max-w-[1600px] mx-auto border-t border-white/5 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[9px] font-mono text-zinc-500 z-20">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-[#F27D26]" /> SECURE_CORE: READY</span>
            <span className="hidden sm:inline text-zinc-700">//</span>
            <span>PORTAL_LOCK: STABLE</span>
          </div>
          <div className="flex items-center gap-2 text-[#F27D26]">
            <Terminal className="w-3.5 h-3.5 animate-spin" />
            <span className="font-semibold uppercase tracking-wider">
              {progress === 100 ? "SHIELD_GATE_AUTHORIZED" : "DECRYPT_PORTAL_ACTIVE"}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
