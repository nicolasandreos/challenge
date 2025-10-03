import { useState } from "react";
import { Plus } from "lucide-react";

type CampaignStatus = "active" | "planned" | "finished";

interface Campaign {
  id: string;
  title: string;
  dateRange: string;
  status: CampaignStatus;
  participants: number;
}

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Black Friday 2024",
    dateRange: "2024-11-01 - 2024-11-30",
    status: "active",
    participants: 45,
  },
  {
    id: "2",
    title: "Natal Premium",
    dateRange: "2024-12-01 - 2024-12-25",
    status: "planned",
    participants: 0,
  },
  {
    id: "3",
    title: "Volta às Aulas",
    dateRange: "2024-01-15 - 2024-02-28",
    status: "finished",
    participants: 38,
  },
];

const getStatusConfig = (status: CampaignStatus) => {
  switch (status) {
    case "active":
      return {
        label: "Ativa",
        bgColor: "bg-[#10B981]",
        textColor: "text-white",
      };
    case "planned":
      return {
        label: "Planejada",
        bgColor: "bg-[#3182CE]",
        textColor: "text-white",
      };
    case "finished":
      return {
        label: "Finalizada",
        bgColor: "bg-[#718096]",
        textColor: "text-white",
      };
  }
};

export default function Admin() {
  const [activeTab, setActiveTab] = useState<
    "campaigns" | "challenges" | "analytics"
  >("campaigns");

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-6 px-4">
      <div className="max-w-md mx-auto w-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A202C] leading-9 mb-2">
            Administração
          </h1>
          <p className="text-sm text-[#4A5568] leading-[21px]">
            Gerencie campanhas, desafios e acompanhe métricas
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#E2E8F0] mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab("campaigns")}
              className={`px-4 py-2 text-xs font-medium transition-colors relative ${
                activeTab === "campaigns"
                  ? "text-[#E60012]"
                  : "text-[#718096] hover:text-[#4A5568]"
              }`}
            >
              Campanhas
              {activeTab === "campaigns" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E60012]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("challenges")}
              className={`px-4 py-2 text-xs font-medium transition-colors relative ${
                activeTab === "challenges"
                  ? "text-[#E60012]"
                  : "text-[#718096] hover:text-[#4A5568]"
              }`}
            >
              Desafios
              {activeTab === "challenges" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E60012]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-4 py-2 text-xs font-medium transition-colors relative ${
                activeTab === "analytics"
                  ? "text-[#E60012]"
                  : "text-[#718096] hover:text-[#4A5568]"
              }`}
            >
              Analytics
              {activeTab === "analytics" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E60012]" />
              )}
            </button>
          </div>
        </div>

        {/* Campaigns Tab Content */}
        {activeTab === "campaigns" && (
          <>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1A202C] leading-[30px]">
                Campanhas
              </h2>
              <button className="flex items-center px-4 py-2 bg-[#2D3748] text-white text-xs font-medium rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] hover:bg-[#1a202c] transition-colors">
                <Plus size={12} className="mr-1" />
                Nova Campanha
              </button>
            </div>

            {/* Campaign Cards */}
            <div className="space-y-4">
              {campaigns.map((campaign) => {
                const statusConfig = getStatusConfig(campaign.status);

                return (
                  <div
                    key={campaign.id}
                    className="bg-white border border-[#E2E8F0] rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base font-semibold text-[#1A202C] leading-6">
                        {campaign.title}
                      </h3>
                      <button className="px-3 py-1 bg-[#2D3748] text-white text-[10px] font-medium rounded-md hover:bg-[#1a202c] transition-colors">
                        Editar
                      </button>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs text-[#4A5568]">
                        {campaign.dateRange}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
                      >
                        {statusConfig.label}
                      </span>
                    </div>

                    <div className="text-xs text-[#718096]">
                      <span className="font-bold">{campaign.participants}</span>
                      <span className="ml-1">participantes</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Challenges Tab Content */}
        {activeTab === "challenges" && (
          <div className="text-center py-12">
            <p className="text-[#718096]">
              Conteúdo de Desafios em desenvolvimento
            </p>
          </div>
        )}

        {/* Analytics Tab Content */}
        {activeTab === "analytics" && (
          <div className="text-center py-12">
            <p className="text-[#718096]">
              Conteúdo de Analytics em desenvolvimento
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
