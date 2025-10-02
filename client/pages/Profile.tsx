import { Settings, MapPin, CheckCircle } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-6 px-3">
      <div className="max-w-md mx-auto w-full">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] overflow-hidden mb-6">
          {/* Black Header Background */}
          <div className="h-[100px] bg-black relative"></div>
          
          {/* Profile Avatar */}
          <div className="relative px-4">
            <div className="absolute -top-14 left-4">
              <div className="w-[100px] h-[100px] bg-[#6B7280] rounded-full border-4 border-white shadow-[0_4px_16px_0_rgba(0,0,0,0.15)] flex items-center justify-center">
                <span className="text-white text-4xl font-bold">JS</span>
              </div>
              {/* Online Status Indicator */}
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#10B981] rounded-full border-2 border-white"></div>
            </div>
            
            {/* User Info */}
            <div className="pt-12 pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 ml-[116px]">
                  <h1 className="text-[22px] font-bold text-[#1A202C] leading-[27.5px] mb-1">
                    João Silva
                  </h1>
                  <p className="text-sm font-medium text-[#4A5568] mb-2">
                    Vendedor Sênior
                  </p>
                  <div className="flex items-center text-xs text-[#718096]">
                    <MapPin size={12} className="mr-1 flex-shrink-0" />
                    <span>Loja Shopping Center Norte</span>
                  </div>
                </div>
                
                {/* Config Button */}
                <button className="flex items-center px-3 py-2 bg-[#2D3748] rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] hover:bg-[#1a202c] transition-colors">
                  <Settings size={12} className="mr-1 text-white" />
                  <span className="text-xs font-medium text-white">Config</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Statistics Cards */}
          <div className="px-4 pb-6 grid grid-cols-3 gap-3">
            {/* Sales Card */}
            <div className="border border-[#E2E8F0] bg-[#F7FAFC] rounded-xl p-3 text-center">
              <div className="text-xl font-bold text-[#E60012] leading-[30px] mb-1">
                127
              </div>
              <div className="text-[10px] font-medium text-[#718096] uppercase tracking-wide leading-[15px]">
                Vendas Este<br />Mês
              </div>
            </div>
            
            {/* Rewards Card */}
            <div className="border border-[#E2E8F0] bg-[#F7FAFC] rounded-xl p-3 text-center">
              <div className="text-xl font-bold text-[#E60012] leading-[30px] mb-1">
                6
              </div>
              <div className="text-[10px] font-medium text-[#718096] uppercase tracking-wide leading-[15px]">
                Recompensas
              </div>
            </div>
            
            {/* Satisfaction Card */}
            <div className="border border-[#E2E8F0] bg-[#F7FAFC] rounded-xl p-3 text-center">
              <div className="text-xl font-bold text-[#E60012] leading-[30px] mb-1">
                98%
              </div>
              <div className="text-[10px] font-medium text-[#718096] uppercase tracking-wide leading-[15px]">
                Satisfação
              </div>
            </div>
          </div>
          
          {/* Rewards Achieved Section */}
          <div className="px-4 pb-6">
            <div className="flex items-center mb-4">
              <CheckCircle size={20} className="mr-3 text-black" />
              <h2 className="text-lg font-bold text-[#1A202C]">
                Recompensas Conquistadas
              </h2>
            </div>
            
            {/* Monthly Goal Progress */}
            <div className="border border-[#E2E8F0] bg-[#F7FAFC] rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#1A202C]">
                  Progresso da Meta Mensal
                </h3>
                <span className="text-xs font-bold text-[#E60012]">
                  127/100
                </span>
              </div>
              
              {/* Progress Bar - Full (exceeded goal) */}
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full mb-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#FF4757] to-[#E60012] rounded-full"
                  style={{ width: '100%' }}
                />
              </div>
              
              {/* Congratulations Message */}
              <p className="text-[10px] text-[#718096] leading-[15px]">
                Meta superada em 27%! Parabéns pelo excelente desempenho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
