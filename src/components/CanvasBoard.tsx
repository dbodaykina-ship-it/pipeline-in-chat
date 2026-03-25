import { useState } from 'react';

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4.16667V15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.16667 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.16667 4.16667L8.33333 15.8333L10 10.8333L15 9.16667L4.16667 4.16667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FrameIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3.33333" y="3.33333" width="13.3333" height="13.3333" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10.8333 1.66667L2.5 11.6667H10L9.16667 18.3333L17.5 8.33333H10L10.8333 1.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckSquareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6.66667 10L9.16667 12.5L13.3333 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26468C18.1294 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.47619 18.1294 4.78269 18.0109 5.06866C17.8925 5.35462 17.7189 5.61446 17.5 5.83333L6.25 17.0833L1.66667 18.3333L2.91667 13.75L14.1667 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M1.66667 5V16.6667L6.66667 14.1667L13.3333 16.6667L18.3333 14.1667V2.5L13.3333 5L6.66667 2.5L1.66667 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66667 2.5V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 5V16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3.33333 2L12.6667 8L3.33333 14V2Z" fill="currentColor"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface NodeProps {
  x: number;
  y: number;
  children: React.ReactNode;
  className?: string;
}

function Node({ x, y, children, className = '' }: NodeProps) {
  return (
    <div 
      className={`absolute ${className}`}
      style={{ left: x, top: y }}
    >
      {children}
    </div>
  );
}

function ConnectionPoint({ side }: { side: 'left' | 'right' }) {
  return (
    <div 
      className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#7863f6] border-2 border-[#1a1a1f] ${
        side === 'left' ? '-left-1.5' : '-right-1.5'
      }`}
    />
  );
}

function AddTickerNode() {
  return (
    <div className="relative bg-[#2a2a30] rounded-xl p-4 border border-white/10 hover:border-[#7863f6]/50 transition-colors cursor-pointer">
      <ConnectionPoint side="right" />
      <div className="flex flex-col items-center gap-2 text-white/60">
        <PlusIcon />
        <span className="text-sm text-center">Добавить<br/>тикер</span>
      </div>
    </div>
  );
}

function ParamNode({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative bg-[#2a2a30] rounded-lg px-4 py-3 border border-white/10 min-w-[120px]">
      <ConnectionPoint side="left" />
      <ConnectionPoint side="right" />
      <div className="flex items-center justify-between gap-4">
        <span className="text-white/60 text-sm">{label}</span>
        <div className="flex items-center gap-1 text-white text-sm">
          <span>{value}</span>
          {value && <ChevronDownIcon />}
        </div>
      </div>
    </div>
  );
}

function StrategyCard() {
  const [prompt, setPrompt] = useState('');
  
  return (
    <div className="bg-[#1a1a1f] rounded-xl border border-[#7863f6]/30 overflow-hidden w-[280px]">
      <div className="bg-[#7863f6] px-3 py-1.5">
        <span className="text-white text-xs font-medium">Новая стратегия</span>
      </div>
      <div className="p-4 space-y-3">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Введите промт для стратегии"
          className="w-full h-24 bg-[#2a2a30] rounded-lg p-3 text-white text-sm placeholder:text-white/40 resize-none outline-none border border-white/10 focus:border-[#7863f6]/50 transition-colors"
        />
        <button className="w-full flex items-center justify-center gap-2 bg-[#7863f6]/20 hover:bg-[#7863f6]/30 text-[#7863f6] rounded-lg py-2.5 transition-colors cursor-pointer">
          <PlayIcon />
          <span className="text-sm font-medium">Запуск</span>
        </button>
      </div>
    </div>
  );
}

function ToolbarButton({ children, tooltip }: { children: React.ReactNode; tooltip: string }) {
  return (
    <button 
      className="p-2.5 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
      title={tooltip}
    >
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 bg-[#1a1a1f] rounded-xl p-1.5 border border-white/10">
      <ToolbarButton tooltip="Выбор">
        <CursorIcon />
      </ToolbarButton>
      <ToolbarButton tooltip="Рамка">
        <FrameIcon />
      </ToolbarButton>
      <ToolbarButton tooltip="Действие">
        <ZapIcon />
      </ToolbarButton>
      <ToolbarButton tooltip="Задача">
        <CheckSquareIcon />
      </ToolbarButton>
      <ToolbarButton tooltip="Редактировать">
        <EditIcon />
      </ToolbarButton>
      <ToolbarButton tooltip="Карта">
        <MapIcon />
      </ToolbarButton>
    </div>
  );
}

interface CanvasBoardProps {
  className?: string;
}

export function CanvasBoard({ className = '' }: CanvasBoardProps) {
  return (
    <div className={`relative bg-[#0f0f12] overflow-hidden blur-[24px] ${className}`}>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        <path
          d="M 155 130 C 220 130, 220 180, 285 180"
          stroke="#7863f6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 155 130 C 220 130, 220 230, 285 230"
          stroke="#7863f6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 155 130 C 220 130, 220 280, 285 280"
          stroke="#7863f6"
          strokeWidth="2"
          fill="none"
        />
        
        <path
          d="M 420 180 C 480 180, 480 130, 540 130"
          stroke="#7863f6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 420 230 C 500 230, 500 180, 580 180"
          stroke="#7863f6"
          strokeWidth="2"
          fill="none"
        />
        
        <circle cx="540" cy="130" r="5" fill="#7863f6" />
        <circle cx="580" cy="180" r="5" fill="#7863f6" />
      </svg>
      
      <Node x={60} y={90}>
        <AddTickerNode />
      </Node>
      
      <Node x={280} y={160}>
        <ParamNode label="" value="10" />
      </Node>
      
      <Node x={280} y={210}>
        <ParamNode label="волатильность" value="" />
      </Node>
      
      <Node x={280} y={260}>
        <ParamNode label="просадка" value="" />
      </Node>
      
      <Node x={540} y={60}>
        <StrategyCard />
      </Node>
      
      <Toolbar />
      
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/40 text-xs">
        <span>Масштаб: 100%</span>
      </div>
    </div>
  );
}
