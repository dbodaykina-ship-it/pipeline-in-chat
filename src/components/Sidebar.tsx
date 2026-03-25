const imgLogo = "/assets/logo.svg";
const imgEditNote = "/assets/edit-note.svg";
const imgChartPie = "/assets/chart-pie.svg";
const imgTarget = "/assets/target.svg";
const imgDoc = "/assets/doc.svg";
const imgAI = "/assets/ai.svg";
const imgAvatar = "/assets/avatar.png";

interface SidebarItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function SidebarItem({ children, isActive = false, onClick }: SidebarItemProps) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center justify-center gap-3 p-2 self-stretch w-full min-h-9 transition-colors cursor-pointer
        ${isActive 
          ? 'text-[#8a7cf8]' 
          : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
        }
      `}
    >
      {children}
    </button>
  );
}

export function Sidebar() {
  return (
    <div 
      className="flex flex-col justify-between items-start w-12 h-full rounded-none border-r border-white/[0.06] bg-[rgba(28,28,31,0.92)] backdrop-blur-[60px] p-0 shrink-0"
    >
      {/* === TOP === */}
      <div className="flex flex-col gap-6 items-start p-0 w-full">
        {/* Logo */}
        <div className="flex items-center justify-center h-12 max-h-12 w-full overflow-hidden p-0">
          <img 
            src={imgLogo} 
            alt="Logo" 
            className="h-6 w-7 object-contain"
          />
        </div>
        
        {/* Spaces - nav items */}
        <div className="flex flex-col gap-0.5 items-start justify-center p-0 w-full">
          <SidebarItem>
            <div className="size-5 flex items-center justify-center">
              <img src={imgEditNote} alt="" className="size-[15px]" />
            </div>
          </SidebarItem>
          
          <SidebarItem>
            <div className="size-5 flex items-center justify-center">
              <img src={imgChartPie} alt="" className="size-[16px]" />
            </div>
          </SidebarItem>
          
          <SidebarItem>
            <div className="size-5 flex items-center justify-center">
              <img src={imgTarget} alt="" className="size-[16px]" />
            </div>
          </SidebarItem>
        </div>
      </div>
      
      {/* === BOTTOM === */}
      <div className="flex flex-col gap-4 items-center justify-center pb-2 pt-0 px-0 w-full">
        {/* Group */}
        <div className="flex flex-col gap-0.5 items-start p-0 w-full">
          <SidebarItem>
            <div className="size-5 flex items-center justify-center">
              <img src={imgDoc} alt="" className="size-[15px]" />
            </div>
          </SidebarItem>
          
          <SidebarItem isActive>
            <div className="size-5 flex items-center justify-center">
              <img src={imgAI} alt="" className="size-[16px]" />
            </div>
          </SidebarItem>
        </div>
        
        {/* Avatar */}
        <SidebarItem>
          <div className="size-5 rounded-full overflow-hidden flex items-center justify-center">
            <img src={imgAvatar} alt="" className="size-full object-cover" />
          </div>
        </SidebarItem>
      </div>
    </div>
  );
}
