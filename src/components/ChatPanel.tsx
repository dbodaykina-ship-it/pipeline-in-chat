import { useState, useEffect } from 'react';

const imgChevronDownSmall = "/assets/chevron-down-small.svg";
const imgExpand = "/assets/expand.svg";
const imgFolder = "/assets/folder.svg";
const imgAdd = "/assets/add.svg";
const imgEdit = "/assets/edit.svg";
const imgAiSparkle = "/assets/ai-sparkle.svg";
const imgChevronRight = "/assets/chevron-right.svg";
const imgChevronDown = "/assets/chevron-down.svg";
const imgLine = "/assets/line.svg";
const imgDislike = "/assets/dislike.svg";
const imgLike = "/assets/like.svg";
const imgRefresh = "/assets/refresh.svg";
const imgCopy = "/assets/copy.svg";
const imgAddBoard = "/assets/add-board.svg";

function AttachIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.5 9.16667L10 16.6667C8.95833 17.7083 7.55 18.3333 6.04167 18.3333C4.53333 18.3333 3.125 17.7083 2.08333 16.6667C1.04167 15.625 0.416667 14.2167 0.416667 12.7083C0.416667 11.2 1.04167 9.79167 2.08333 8.75L9.58333 1.25C10.3333 0.5 11.375 0.0833333 12.4583 0.0833333C13.5417 0.0833333 14.5833 0.5 15.3333 1.25C16.0833 2 16.5 3.04167 16.5 4.125C16.5 5.20833 16.0833 6.25 15.3333 7L7.83333 14.5C7.45833 14.875 6.9375 15.0833 6.39583 15.0833C5.85417 15.0833 5.33333 14.875 4.95833 14.5C4.58333 14.125 4.375 13.6042 4.375 13.0625C4.375 12.5208 4.58333 12 4.95833 11.625L11.6667 4.91667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 1.66667C9.11595 1.66667 8.26810 2.01786 7.64298 2.64298C7.01786 3.26810 6.66667 4.11595 6.66667 5V10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.26810 12.9821 9.11595 13.3333 10 13.3333C10.8841 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10V5C13.3333 4.11595 12.9821 3.26810 12.357 2.64298C11.7319 2.01786 10.8841 1.66667 10 1.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8333 8.33333V10C15.8333 11.5471 15.2187 13.0308 14.1248 14.1248C13.0308 15.2187 11.5471 15.8333 10 15.8333C8.45290 15.8333 6.96917 15.2187 5.87521 14.1248C4.78125 13.0308 4.16667 11.5471 4.16667 10V8.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 15.8333V18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 6.66667V13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.66667 10H13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AISparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.95604 2.24634C6.40766 1.25109 7.84145 1.25123 8.2932 2.24634L8.33495 2.34888L9.61815 5.8938L9.65697 5.97217C9.70367 6.0452 9.77321 6.10172 9.85619 6.13183L13.4011 7.41504C14.4976 7.81219 14.5314 9.32741 13.5029 9.79394L13.4011 9.83496L9.85619 11.1182C9.74544 11.1584 9.65837 11.2455 9.61815 11.3562L8.33495 14.9011C7.9251 16.0329 6.32402 16.0331 5.9143 14.9011L4.63183 11.3562C4.60166 11.2731 4.54462 11.2037 4.47143 11.157L4.39379 11.1182L0.848867 9.83496C-0.282957 9.42515 -0.282955 7.82485 0.848867 7.41504L4.39379 6.13183L4.47143 6.09302C4.54461 6.04633 4.60166 5.97689 4.63183 5.8938L5.9143 2.34888L5.95604 2.24634ZM5.99633 6.38745C5.80956 6.9033 5.40327 7.30954 4.88744 7.49634L1.76879 8.625L4.88744 9.75366L4.98192 9.79175C5.4525 9.99212 5.82118 10.3788 5.99633 10.8625L7.12499 13.9805L8.25365 10.8625C8.44044 10.3467 8.84665 9.94042 9.36254 9.75366L12.4805 8.625L9.36254 7.49634C8.87881 7.32122 8.49141 6.95316 8.29101 6.48267L8.25365 6.38745L7.12499 3.2688L5.99633 6.38745Z" fill="#8A7CF8"/>
      <path d="M13.125 1.3992e-10C13.3442 4.08684e-05 13.534 0.152349 13.582 0.366211L13.7563 1.14258C13.8517 1.56688 14.1831 1.89833 14.6074 1.99365L15.3838 2.16797C15.5977 2.21598 15.75 2.40578 15.75 2.625C15.75 2.84421 15.5977 3.03401 15.3838 3.08203L14.6074 3.25635C14.1831 3.35167 13.8517 3.68312 13.7563 4.10742L13.582 4.88379C13.534 5.09765 13.3442 5.24996 13.125 5.25C12.9058 5.25 12.716 5.09768 12.668 4.88379L12.4936 4.10742C12.3983 3.68316 12.0668 3.35172 11.6426 3.25635L10.8655 3.08203C10.6518 3.03389 10.5 2.8441 10.5 2.625C10.5 2.4059 10.6518 2.21611 10.8655 2.16797L11.6426 1.99365C12.0668 1.89828 12.3983 1.56685 12.4936 1.14258L12.668 0.366211C12.716 0.152315 12.9058 -5.33098e-06 13.125 1.3992e-10Z" fill="#8A7CF8"/>
    </svg>
  );
}

export function ChatPanel() {
  const [currentState, setCurrentState] = useState(1); // 1, 2, 3, or 4
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  
  useEffect(() => {
    // State 1 -> State 2: через 1.5 секунды показываем bubble
    const timer1 = setTimeout(() => {
      setCurrentState(2);
    }, 1500);
    
    return () => clearTimeout(timer1);
  }, []);
  
  useEffect(() => {
    // State 2 -> State 3: через 4.5 секунды (время анимации скролла)
    if (currentState !== 2) return;
    
    const timer = setTimeout(() => {
      setCurrentState(3);
    }, 4500);
    
    return () => clearTimeout(timer);
  }, [currentState]);
  
  useEffect(() => {
    // State 3 -> State 4: через 1.5 секунды показываем отчет
    if (currentState !== 3) return;
    
    const timer = setTimeout(() => {
      setCurrentState(4);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [currentState]);

  return (
    <div className="flex flex-col items-center w-[480px] h-full px-0 gap-0 rounded-none border-r border-white/0 bg-[rgba(28,28,31,0.92)] backdrop-blur-[60px] shrink-0">
      {/* Header */}
      <div className="flex items-center w-[480px] pt-2 pr-1.5 pb-2 pl-4 gap-2">
        <div className="flex items-center gap-1 flex-1">
          <span className="text-white text-sm font-semibold uppercase">AI ЧАТ</span>
          <button className="flex items-center gap-0 text-white/60 hover:text-white transition-colors">
            <span className="text-sm">Sonnet 4.5</span>
            <div className="size-5 flex items-center justify-center">
              <img src={imgChevronDownSmall} alt="" className="size-[7.5px]" />
            </div>
          </button>
        </div>
        <div className="flex items-center gap-0 shrink-0">
          <button className="flex items-center justify-center size-8 p-1.5 gap-0 aspect-square text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors">
            <div className="size-5 flex items-center justify-center">
              <img src={imgExpand} alt="" className="size-[12px]" />
            </div>
          </button>
          <button className="flex items-center justify-center size-8 p-1.5 gap-0 aspect-square text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors">
            <div className="size-5 flex items-center justify-center">
              <img src={imgFolder} alt="" className="size-[15px]" />
            </div>
          </button>
          <button className="flex items-center justify-center size-8 p-1.5 gap-0 aspect-square text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors">
            <div className="size-5 flex items-center justify-center">
              <img src={imgAdd} alt="" className="size-[13px]" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Conversation */}
      <div className="flex flex-col items-start max-w-[800px] pt-3 pr-4 pb-0 pl-4 gap-6 grow shrink-0 basis-0 self-stretch overflow-y-auto">
        {/* PromtBlock - Default state */}
        <div className="flex flex-col items-start self-stretch w-full">
          {/* Customer Prompt */}
          <div className="flex flex-col gap-0 items-end pl-6 pr-0 py-0 w-full self-stretch rounded-none">
            <div className="flex gap-0 items-start justify-end bg-white/[0.04] rounded px-3 py-2 w-full">
              <p className="flex-1 text-white text-sm leading-5 tracking-tight">
                Чат, проанализируй текущие рыночные тренды и определи потенциальные торговые возможности
              </p>
            </div>
          </div>
          {/* Actions promt panel */}
          <div className="flex items-start justify-between pl-6 pr-0 py-1 w-full">
            {/* ChipsLink */}
            <div className="flex items-center gap-1 bg-white/[0.04] rounded-sm pl-1.5 pr-2 py-1">
              <div className="flex items-center justify-center size-4">
                <div className="size-3 rounded-full bg-[#f53913]" />
              </div>
              <span className="text-white/60 text-xs font-medium leading-4 tracking-tight whitespace-nowrap">График</span>
            </div>
            {/* Right actions */}
            <div className="flex items-center gap-0 p-0">
              {/* Sourses */}
              <div className="flex items-center gap-1 pl-1 pr-1.5 py-1 rounded-sm">
                <div className="size-4 relative overflow-clip">
                  <img src={imgAiSparkle} alt="" className="absolute inset-[10.6%] size-[79%]" />
                </div>
                <span className="text-white/60 text-xs leading-4 tracking-tight whitespace-nowrap">15 источников</span>
              </div>
              {/* iconButtonXs - edit */}
              <button className="size-6 relative hover:bg-white/[0.06] rounded transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-4 relative overflow-clip">
                    <img src={imgEdit} alt="" className="absolute inset-[12%] size-[76%]" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* AI Response States */}
        <div className="flex flex-col items-start gap-2 w-[448px]">
          {/* State header - shared position for shimmer and actions row */}
          <div className="relative h-8 w-full">
            {/* State 1 & 2: Shimmer text */}
            <div className={`absolute inset-0 flex items-center transition-opacity duration-500 ${currentState < 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="inline-flex h-8 pt-1.5 pr-2 pb-1.5 pl-0 items-center gap-2">
                <div className="text-[#8a7cf8]">
                  <AISparkleIcon />
                </div>
                <span className="text-sm animate-shimmer">Анализирую...</span>
              </div>
            </div>
            {/* State 3 & 4: Actions row */}
            <div className={`absolute inset-0 flex items-center transition-opacity duration-500 ${currentState >= 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <button 
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className="group flex items-center h-8 pr-2 py-1.5 rounded w-full transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="size-5 relative overflow-clip">
                    <img src={imgAiSparkle} alt="" className="absolute inset-[10.6%] size-[79%]" />
                  </div>
                  <span className={`text-sm leading-5 tracking-tight whitespace-nowrap transition-colors ${isAccordionOpen ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                    3 шага выполнено
                  </span>
                </div>
                <div className="size-5 relative">
                  {isAccordionOpen ? (
                    <div className="absolute inset-[43.75%_31.25%_33.75%_31.25%]">
                      <img src={imgChevronDown} alt="" className="absolute block max-w-none size-full" />
                    </div>
                  ) : (
                    <div className="absolute inset-[31.25%_33.75%_31.25%_43.75%]">
                      <img src={imgChevronRight} alt="" className="absolute block max-w-none size-full" />
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
          
          {/* State 2: Bubble */}
          <div className={`flex flex-col items-start gap-0 w-full transition-all duration-500 ${currentState === 2 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              {/* Bubble - State 2: Pipeline steps */}
              {currentState === 2 && (
                <div className="flex flex-col items-start pl-6 gap-2.5 w-[448px]">
                  <div 
                    className="relative flex w-[395px] h-[53px] pt-3 pr-2 pb-3 pl-2 items-start gap-2 rounded-sm backdrop-blur-[6px] overflow-hidden"
                    style={{ background: 'rgba(138, 124, 248, 0.08)' }}
                  >
                  <div className="flex flex-1 gap-2 items-start h-full">
                    {/* Steps - animated scroll */}
                    <div className="flex flex-col items-start gap-1 self-stretch text-[10px] leading-3 tracking-tight overflow-hidden">
                      <div className="flex flex-col gap-2.5 animate-scroll-steps">
                        {/* Step 1 */}
                        <div className="flex flex-col gap-1 items-start w-full min-h-[30px]">
                          <p className="font-medium text-[#8A7CF8] w-full">Сбор данных</p>
                          <p className="text-white/40 w-full">Получение данных из 15 источников...</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col gap-1 items-start w-full min-h-[30px]">
                          <p className="font-medium text-[#8A7CF8] w-full">Анализ трендов</p>
                          <p className="text-white/40 w-full">Выявление ключевых паттернов...</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col gap-1 items-start w-full min-h-[30px]">
                          <p className="font-medium text-[#8A7CF8] w-full">Формирование выводов</p>
                          <p className="text-white/40 w-full">Подготовка рекомендаций...</p>
                        </div>
                        {/* Step 1 repeat for seamless loop */}
                        <div className="flex flex-col gap-1 items-start w-full min-h-[30px]">
                          <p className="font-medium text-[#8A7CF8] w-full">Сбор данных</p>
                          <p className="text-white/40 w-full">Получение данных из 15 источников...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
          </div>
          
          {/* Accordion content - Pipeline steps (State 3 & 4) */}
          {isAccordionOpen && currentState >= 3 && (
                <div className="flex items-start gap-2 overflow-clip pt-3 pr-4 pb-5 pl-2 rounded-sm w-[448px]">
                  {/* Vertical line */}
                  <div className="relative self-stretch shrink-0 w-1">
                    <div className="absolute inset-0">
                      <img src={imgLine} alt="" className="block max-w-none size-full" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3 items-start justify-center text-[10px] leading-3 tracking-tight">
                    {/* Title */}
                    <p className="font-medium text-white w-full">Анализ рыночных трендов</p>
                    
                    {/* Section: Searching */}
                    <div className="flex flex-col gap-1 items-start w-full">
                      <p className="font-semibold text-white/40 text-[8px] leading-3 uppercase w-full">Поиск данных</p>
                      <div className="flex flex-col items-start p-2 gap-3 rounded-sm bg-white/[0.04] w-full">
                        <div className="flex flex-col gap-0.5 text-white/40 w-full">
                          <p>Тезис 1: Собраны данные из 15 источников по выбранному тикеру</p>
                          <p>Тезис 2: Проанализированы исторические данные за последний квартал</p>
                          <p>Тезис 3: Получены актуальные котировки и объёмы торгов</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section: Analyses */}
                    <div className="flex flex-col gap-1 items-start w-full">
                      <p className="font-semibold text-white/40 text-[8px] leading-3 uppercase w-full">Анализ</p>
                      <div className="flex flex-col items-start p-2 gap-3 rounded-sm bg-white/[0.04] w-full">
                        <p className="text-white/40 w-full">Тезис 1: Выявлен восходящий тренд с потенциалом роста 15%</p>
                      </div>
                    </div>
                    
                    {/* Result step */}
                    <div className="flex flex-col gap-1 items-start w-full">
                      <p className="font-medium text-white w-full">Итог: Рекомендация к покупке</p>
                      <p className="text-white/40 w-full">На основе анализа сформированы торговые сигналы</p>
                    </div>
                  </div>
                </div>
              )}
          
          {/* State 4: Message report (appears below Actions row) */}
          {currentState === 4 && (
            <div className="flex flex-col items-start w-full">
              {/* Message text */}
              <div className="flex items-center justify-center pb-2 w-full">
                <p className="flex-1 text-white text-sm leading-5 tracking-tight">
                  По вашему запросу я собрал данные по тикеру. Анализ показывает, что текущие тренды указывают на рост. Рекомендуется обратить внимание на ключевые показатели.
                </p>
              </div>
              {/* Actions panel */}
              <div className="flex items-center justify-between h-8 w-full rounded">
                {/* Left actions */}
                <div className="flex items-center h-full">
                  <button className="size-8 relative hover:bg-white/[0.06] rounded transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-4 relative overflow-clip">
                        <div className="absolute inset-[9%_7%]">
                          <img src={imgDislike} alt="" className="absolute block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="size-8 relative hover:bg-white/[0.06] rounded transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-4 relative overflow-clip">
                        <div className="absolute inset-[9%_7%]">
                          <img src={imgLike} alt="" className="absolute block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                {/* Right actions */}
                <div className="flex items-center h-full">
                  <button className="size-8 relative hover:bg-white/[0.06] rounded transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-4 relative overflow-clip">
                        <div className="absolute inset-[13%]">
                          <img src={imgRefresh} alt="" className="absolute block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="size-8 relative hover:bg-white/[0.06] rounded transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-4 relative overflow-clip">
                        <div className="absolute inset-[9%]">
                          <img src={imgCopy} alt="" className="absolute block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="flex items-center gap-1.5 pl-3.5 pr-3 py-2 rounded-sm hover:bg-white/[0.06] transition-colors">
                    <span className="text-white/60 text-xs font-medium leading-4 tracking-tight whitespace-nowrap">
                      Добавить на доску
                    </span>
                    <div className="size-4 relative">
                      <div className="absolute inset-[14%_7%]">
                        <img src={imgAddBoard} alt="" className="absolute block max-w-none size-full" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full mt-auto">
        <div className="px-2 py-1">
          <p className="text-[6px] text-white/40 text-center uppercase tracking-wide">
            ОТВЕТ AI ЧАТА НЕ ЯВЛЯЕТСЯ ИНДИВИДУАЛЬНОЙ ИНВЕСТИЦИОННОЙ РЕКОМЕНДАЦИЕЙ И ПРЕДЛОЖЕНИЕМ УПОМЯНУТЫХ ИНСТРУМЕНТОВ
          </p>
        </div>
        
        <div className="bg-[rgba(28,28,31,0.92)] border-t border-white/[0.06] px-3 py-3 w-full">
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">Помогу с любым вопросом</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button className="p-1 text-white/60 hover:text-white transition-colors">
              <PlusCircleIcon />
            </button>
            <div className="flex items-center gap-0">
              <button className="p-1.5 text-white/60 hover:text-white transition-colors">
                <AttachIcon />
              </button>
              <button className="p-1.5 text-white/60 hover:text-white transition-colors">
                <MicIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
