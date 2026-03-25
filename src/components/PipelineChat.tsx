import { useState } from 'react';

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.66667 10.6667V13.3333H5.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 5.33333V2.66667H10.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 2.66667L9.33333 6.66667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.66667 13.3333L6.66667 9.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M14 12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6L7.33333 4H12.6667C13.0203 4 13.3594 4.14048 13.6095 4.39052C13.8595 4.64057 14 4.97971 14 5.33333V12.6667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 3.33333V12.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M3.33333 8H12.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M9 3L3 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M3 3L9 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.33333V3.33333" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M8 12.6667V14.6667" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M3.28667 3.28667L4.7 4.7" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M11.3 11.3L12.7133 12.7133" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M1.33333 8H3.33333" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M12.6667 8H14.6667" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M3.28667 12.7133L4.7 11.3" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M11.3 4.7L12.7133 3.28667" stroke="#7863f6" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
  );
}

function AttachIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M14 7.33333L8.00001 13.3333C7.11595 14.2174 5.9134 14.7147 4.66001 14.7147C3.40661 14.7147 2.20406 14.2174 1.32001 13.3333C0.435954 12.4493 -0.0613281 11.2467 -0.0613281 9.99333C-0.0613281 8.73993 0.435954 7.53739 1.32001 6.65333L7.32001 0.653332C7.91207 0.0612738 8.71631 -0.270996 9.55334 -0.270996C10.3904 -0.270996 11.1946 0.0612738 11.7867 0.653332C12.3787 1.24539 12.711 2.04963 12.711 2.88666C12.711 3.7237 12.3787 4.52793 11.7867 5.12L5.78001 11.12C5.48398 11.416 5.08186 11.5822 4.66334 11.5822C4.24482 11.5822 3.8427 11.416 3.54667 11.12C3.25065 10.824 3.0844 10.4219 3.0844 10.0033C3.0844 9.58481 3.25065 9.18269 3.54667 8.88666L9.00001 3.44" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M14.6667 1.33333L7.33333 8.66667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6667 1.33333L10 14.6667L7.33333 8.66667L1.33333 6L14.6667 1.33333Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.5"/>
      <path d="M8 4V8L10.5 10.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Chip({ label, variant = 'default', onClose }: { 
  label: string; 
  variant?: 'default' | 'red';
  onClose?: () => void;
}) {
  return (
    <div className={`
      flex items-center gap-1.5 px-2 py-1 rounded-full text-xs
      ${variant === 'red' 
        ? 'bg-[#ef4444]/10 text-[#ef4444]' 
        : 'bg-[#7863f6]/10 text-[#7863f6]'
      }
    `}>
      {variant === 'red' && <ChartIcon />}
      <span>{label}</span>
      {onClose && (
        <button onClick={onClose} className="hover:opacity-70 cursor-pointer">
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

interface PipelineChatProps {
  className?: string;
}

export function PipelineChat({ className = '' }: PipelineChatProps) {
  const [inputValue] = useState('Чат, проанализируй текущие рыночные тренды и определи потенциальные торговые возможности');
  
  return (
    <div className={`flex flex-col h-full bg-[#121212] ${className}`}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-white text-sm font-medium">AI ЧАТ</span>
            <span className="text-[#8a8a90] text-sm">Sonnet 4.5</span>
            <ChevronDownIcon />
          </button>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg text-[#8a8a90] hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
            <MaximizeIcon />
          </button>
          <button className="p-2 rounded-lg text-[#8a8a90] hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
            <FolderIcon />
          </button>
          <button className="p-2 rounded-lg text-[#8a8a90] hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
            <PlusIcon />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-4">
          <div className="bg-[#7863f6]/10 rounded-xl p-3 border border-[#7863f6]/20">
            <p className="text-white text-sm leading-relaxed">
              {inputValue}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Chip label="График" variant="red" />
          <Chip label="15 источников" onClose={() => {}} />
          <button className="text-[#8a8a90] hover:text-white p-1 cursor-pointer">
            <CloseIcon />
          </button>
          <button className="text-[#7863f6] hover:opacity-80 p-1 cursor-pointer">
            <CheckIcon />
          </button>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <SparkleIcon />
          <span className="text-[#8a8a90] text-sm">Анализирую...</span>
        </div>
        
        <div className="space-y-4">
          <div className="bg-[#1a1a1f] rounded-xl p-4 border border-white/5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7863f6] to-[#5a45d6] flex items-center justify-center shrink-0 overflow-hidden">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/60 text-xs mb-2">
                  Ответ AI чата не является инвестиционной рекомендацией и представлен исключительно для информационных целей
                </p>
                <p className="text-white text-sm leading-relaxed">
                  В мире, где креативность течет, как река, идеи расцветают, как цветы весной. Каждая мысль танцует грациозно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-3 py-3 border-t border-white/10">
        <div className="relative">
          <div className="flex items-center gap-2 bg-[#1a1a1f] rounded-xl p-3 border border-white/10 focus-within:border-[#7863f6]/50 transition-colors">
            <button className="p-1.5 rounded-lg text-[#8a8a90] hover:bg-white/10 hover:text-white transition-colors shrink-0 cursor-pointer">
              <AttachIcon />
            </button>
            
            <input 
              type="text"
              placeholder="Спросите что-нибудь..."
              className="flex-1 bg-transparent text-white text-sm placeholder:text-[#8a8a90] outline-none"
            />
            
            <div className="flex items-center gap-1">
              <span className="text-[#8a8a90] text-xs">1 добавлен</span>
              <button className="p-2 rounded-lg bg-[#7863f6] text-white hover:bg-[#6952e5] transition-colors cursor-pointer">
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
