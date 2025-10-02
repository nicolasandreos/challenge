import { useState } from "react";
import {
  ChevronDown,
  Calendar,
  DollarSign,
  CheckCircle,
  BarChart3,
  Clock,
  Star,
  Award,
} from "lucide-react";

export default function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E5E5] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] sticky top-0 z-50">
        <div className="flex items-center justify-between px-3 py-3 h-[65px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#E60012] rounded-xl flex items-center justify-center mr-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 2C7.879 2 3.289 6.443 3.005 12H6.505C6.78 8.708 9.502 6 13 6C16.59 6 19.5 8.91 19.5 12.5C19.5 16.09 16.59 19 13 19C11.168 19 9.59101 18.24 8.42801 17.016L5.5 19.5C7 21 9 22 11.5 22C15.918 22 19.5 18.418 19.5 14C19.5 9.582 15.918 6 11.5 6L13.5 2Z"
                  fill="black"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-[#1A1A1A]">Swift</h1>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-[#E60012] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">JS</span>
              </div>
              <ChevronDown size={16} className="text-black" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#E5E5E5] py-2 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#1A1A1A] hover:bg-gray-50"
                >
                  Perfil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#1A1A1A] hover:bg-gray-50"
                >
                  Configurações
                </a>
                <hr className="my-1 border-[#E5E5E5]" />
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-[#1A1A1A] hover:bg-gray-50"
                >
                  Sair
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-3 py-6 max-w-md mx-auto w-full">
        {/* Campaign Card */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] p-4 mb-6">
          {/* Campaign Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#1A1A1A]">
              Campanha de Vendas Q4 2024
            </h2>
            <div className="flex items-center px-3 py-1 bg-[#F0FDF4] rounded-full">
              <CheckCircle size={12} className="text-[#166534] mr-1" />
              <span className="text-xs font-medium text-[#166534]">Ativa</span>
            </div>
          </div>

          {/* Campaign Details */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-sm text-[#666]">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 flex-shrink-0" />
              <span>01/10 a 31/12</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={16} className="mr-2 flex-shrink-0" />
              <span>Voucher de R$ 500</span>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="space-y-4">
            {/* Current Points */}
            <div className="bg-[#FEF2F2] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#E60012] mb-1">
                7.800
              </div>
              <div className="text-sm text-[#666]">Pontos Atuais</div>
            </div>

            {/* Ranking Position */}
            <div className="bg-[#FEF9E7] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#D97706] mb-1">
                3<span className="text-xl">º</span>
              </div>
              <div className="text-sm text-[#666] mb-1">Posição no Ranking</div>
              <div className="text-xs text-[#9CA3AF]">de 127 participantes</div>
            </div>

            {/* Challenge Progress */}
            <div className="bg-[#F0F9FF] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#0369A1] mb-1">68%</div>
              <div className="text-sm text-[#666] mb-1">
                Progresso do Desafio
              </div>
              <div className="text-xs text-[#9CA3AF]">Meta: 10.000 pontos</div>
            </div>
          </div>
        </div>

        {/* Additional Challenge Progress */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] p-4 mb-6">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            Progresso do Desafio Adicional
          </h3>

          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[#666]">Progresso atual</span>
            <span className="text-sm text-[#666]">68%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-[#F3F4F6] rounded-full mb-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF4D6D] to-[#E60012] rounded-full"
              style={{ width: "68%" }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#9CA3AF] mb-4">
            <span>0 pontos</span>
            <span>10.000 pontos</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full h-14 bg-[#E60012] rounded-xl flex items-center justify-center text-white font-semibold hover:bg-red-700 transition-colors">
              <BarChart3 size={20} className="mr-2" />
              Ver Ranking
            </button>

            <button className="w-full h-14 bg-[#E60012] rounded-xl flex items-center justify-center text-white font-semibold hover:bg-red-700 transition-colors">
              <Clock size={20} className="mr-2" />
              Histórico de Recompensas
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] p-4 mb-6">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            Atividades Recentes
          </h3>

          <div className="space-y-3">
            {/* Activity 1 */}
            <div className="flex items-center p-3 bg-[#F8F9FA] rounded-xl">
              <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center mr-3">
                <CheckCircle size={16} className="text-black" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  Meta atingida
                </div>
                <div className="text-xs text-[#666]">
                  +500 pontos • há 2 horas
                </div>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="flex items-center p-3 bg-[#F8F9FA] rounded-xl">
              <div className="w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center mr-3">
                <Star size={16} className="text-black" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  Desafio concluído
                </div>
                <div className="text-xs text-[#666]">+1.200 pontos • ontem</div>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="flex items-center p-3 bg-[#F8F9FA] rounded-xl">
              <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center mr-3">
                <Award size={16} className="text-black" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  Recompensa resgatada
                </div>
                <div className="text-xs text-[#666]">
                  Voucher R$ 100 • 3 dias
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Ranking */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] p-4">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
            Top 5 Ranking
          </h3>

          <div className="space-y-3">
            {/* 1st Place */}
            <div className="flex items-center p-3 bg-gradient-to-r from-[#FDE68A] to-[#FEF3C7] border border-[#F59E0B] rounded-xl">
              <div className="w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-white">1</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  Maria Santos
                </div>
                <div className="text-xs text-[#666]">12.450 pontos</div>
              </div>
            </div>

            {/* 2nd Place */}
            <div className="flex items-center p-3 bg-[#F8F9FA] rounded-xl">
              <div className="w-8 h-8 bg-[#9CA3AF] rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-white">2</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  Carlos Lima
                </div>
                <div className="text-xs text-[#666]">9.320 pontos</div>
              </div>
            </div>

            {/* 3rd Place - Current User */}
            <div className="flex items-center p-3 bg-[#FEF2F2] border border-[#E60012] rounded-xl">
              <div className="w-8 h-8 bg-[#E60012] rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  João Silva (Você)
                </div>
                <div className="text-xs text-[#666]">7.800 pontos</div>
              </div>
            </div>

            {/* 4th Place */}
            <div className="flex items-center p-3 bg-[#F8F9FA] rounded-xl">
              <div className="w-8 h-8 bg-[#9CA3AF] rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-white">4</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  Ana Costa
                </div>
                <div className="text-xs text-[#666]">6.150 pontos</div>
              </div>
            </div>

            {/* 5th Place */}
            <div className="flex items-center p-3 bg-[#F8F9FA] rounded-xl">
              <div className="w-8 h-8 bg-[#9CA3AF] rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-white">5</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1A1A1A]">
                  Pedro Oliveira
                </div>
                <div className="text-xs text-[#666]">5.890 pontos</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
