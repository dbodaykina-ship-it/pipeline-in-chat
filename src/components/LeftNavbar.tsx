import { Tooltip } from './Tooltip';

interface LeftNavbarProps {
  onLogoClick?: () => void;
}

function LogoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#7863f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="#7863f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="#7863f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97905 4.39227 5.86048C5.08402 4.74191 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49714 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.441 4.55904C16.671 5.78911 17.4042 7.42973 17.5 9.16667V9.58333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 6.66667V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C6.98477 2.5 4.38126 4.22399 3.18913 6.75M2.5 3.33333V6.66667H5.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BoardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="6.25" height="6.25" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11.25" y="2.5" width="6.25" height="6.25" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="2.5" y="11.25" width="6.25" height="6.25" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11.25" y="11.25" width="6.25" height="6.25" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16.1667 10C16.1667 9.54167 16.125 9.09167 16.0417 8.66667L17.8333 7.25L16.1667 4.41667L14.0833 5.16667C13.4583 4.625 12.7083 4.20833 11.8333 3.95833L11.5 2.08333H8.5L8.16667 3.95833C7.29167 4.20833 6.54167 4.625 5.91667 5.16667L3.83333 4.41667L2.16667 7.25L3.95833 8.66667C3.875 9.09167 3.83333 9.54167 3.83333 10C3.83333 10.4583 3.875 10.9083 3.95833 11.3333L2.16667 12.75L3.83333 15.5833L5.91667 14.8333C6.54167 15.375 7.29167 15.7917 8.16667 16.0417L8.5 17.9167H11.5L11.8333 16.0417C12.7083 15.7917 13.4583 15.375 14.0833 14.8333L16.1667 15.5833L17.8333 12.75L16.0417 11.3333C16.125 10.9083 16.1667 10.4583 16.1667 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.16667 2.5V17.5L16.6667 10L4.16667 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PluginIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6.66667 2.5V5.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13.3333 2.5V5.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2.5 10H5.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="5.83333" y="5.83333" width="8.33333" height="11.6667" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function NavButton({ children, tooltip, isActive = false, onClick }: { 
  children: React.ReactNode; 
  tooltip: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <Tooltip text={tooltip}>
      <button 
        onClick={onClick}
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg transition-colors cursor-pointer
          ${isActive 
            ? 'bg-[#7863f6]/20 text-[#7863f6]' 
            : 'text-[#8a8a90] hover:bg-white/10 hover:text-white'
          }
        `}
      >
        {children}
      </button>
    </Tooltip>
  );
}

export function LeftNavbar({ onLogoClick }: LeftNavbarProps) {
  return (
    <div className="flex flex-col items-center w-[52px] h-full bg-[#1a1a1f] border-r border-white/10 py-3 shrink-0">
      <button 
        onClick={onLogoClick}
        className="flex items-center justify-center w-10 h-10 mb-4 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <LogoIcon />
      </button>
      
      <div className="flex flex-col gap-1 flex-1">
        <NavButton tooltip="Чат" isActive>
          <ChatIcon />
        </NavButton>
        
        <NavButton tooltip="История">
          <HistoryIcon />
        </NavButton>
        
        <NavButton tooltip="Доски">
          <BoardIcon />
        </NavButton>
        
        <NavButton tooltip="Плагины">
          <PluginIcon />
        </NavButton>
        
        <NavButton tooltip="Запуск">
          <RunIcon />
        </NavButton>
      </div>
      
      <div className="flex flex-col gap-1 mt-auto">
        <NavButton tooltip="Настройки">
          <SettingsIcon />
        </NavButton>
      </div>
    </div>
  );
}
