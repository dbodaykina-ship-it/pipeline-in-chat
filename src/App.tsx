import { Sidebar } from './components/Sidebar';
import { ChatPanel } from './components/ChatPanel';

function CursorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 5L10 19L12 13L18 11L5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StickyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function FlashIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChartLineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 12L7 8L12 13L16 9L21 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 8C19.6569 8 21 9.34315 21 11C21 12.6569 19.6569 14 18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 11H6L11 6V16L6 11H3V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 3V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 6V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4.16667V15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.16667 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CanvasToolbar() {
  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-0 bg-[rgba(28,28,31,0.92)] backdrop-blur-[40px] rounded shadow-lg">
      <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
        <CursorIcon />
      </button>
      <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
        <StickyIcon />
      </button>
      <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
        <TargetIcon />
      </button>
      <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
        <FlashIcon />
      </button>
      <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
        <ChartLineIcon />
      </button>
      <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
        <MegaphoneIcon />
      </button>
      <div className="mx-3 my-1 h-px bg-white/10" />
      <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
        <MapIcon />
      </button>
    </div>
  );
}

function CanvasBoard() {
  return (
    <div className="relative flex-1 h-full overflow-hidden isolate">
      {/* Blurred content layer */}
      <div className="absolute inset-0 blur-[8px]">
        <div className="absolute inset-0 bg-[#040405]" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M 200 300 C 300 300, 350 250, 450 250" stroke="#7863f6" strokeWidth="2" fill="none"/>
          <path d="M 200 300 C 300 300, 350 350, 450 350" stroke="#7863f6" strokeWidth="2" fill="none"/>
          <path d="M 550 250 C 600 250, 650 200, 700 200" stroke="#7863f6" strokeWidth="2" fill="none"/>
          <path d="M 550 350 C 620 350, 680 280, 750 280" stroke="#7863f6" strokeWidth="2" fill="none"/>
          <circle cx="700" cy="200" r="5" fill="#7863f6"/>
          <circle cx="750" cy="280" r="5" fill="#7863f6"/>
        </svg>
        
        <div className="absolute left-[100px] top-[250px] bg-[#1c1c1f] border border-white/[0.06] rounded p-4 flex flex-col items-center justify-center w-[104px] h-[104px]">
          <button className="p-2 text-white/60 hover:text-white transition-colors">
            <PlusIcon />
          </button>
          <span className="text-white/60 text-sm text-center mt-1">Добавить тикер</span>
        </div>
        
        <div className="absolute left-[420px] top-[220px] flex flex-col gap-2">
          <div className="bg-[#2c2c2e] border border-white/[0.06] rounded px-4 py-2.5 flex items-center justify-between min-w-[140px]">
            <span className="text-white text-sm">10</span>
            <ChevronDownIcon />
          </div>
          <div className="bg-[#2c2c2e] border border-white/[0.06] rounded px-4 py-2.5 flex items-center justify-between min-w-[140px]">
            <span className="text-white/60 text-sm">волатильность</span>
          </div>
          <div className="bg-[#2c2c2e] border border-white/[0.06] rounded px-4 py-2.5 flex items-center justify-between min-w-[140px]">
            <span className="text-white/60 text-sm">просадка</span>
          </div>
        </div>
        
        <div className="absolute right-[200px] top-[120px] w-[300px]">
          <div className="bg-[rgba(6,177,241,0.56)] rounded-t px-2 py-1">
            <span className="text-white text-xs font-medium">Новая стратегия</span>
          </div>
          <div className="bg-[#1c1c1f] border border-white/[0.06] border-t-0 rounded-b p-4">
            <div className="bg-white/10 rounded p-3 mb-3">
              <p className="text-white/50 text-sm">Введите промт для стратегии</p>
            </div>
            <button className="w-full bg-[#8a7cf8]/30 text-[#8a7cf8] rounded py-2.5 flex items-center justify-center gap-2 opacity-50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2L14 8L4 14V2Z"/>
              </svg>
              <span className="font-medium">Запуск</span>
            </button>
          </div>
        </div>
        
        <CanvasToolbar />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#040405]">
      <Sidebar />
      <ChatPanel />
      <CanvasBoard />
    </div>
  );
}
