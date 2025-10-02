import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ArrowRight } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-6 sm:py-8">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <div className="w-20 h-20 bg-[#E60012] rounded-2xl flex items-center justify-center mb-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path
              d="M22.5 3.33337C13.1316 3.33337 5.48163 10.7384 5.0083 20H10.8416C11.3 14.5134 15.8366 10 21.6666 10C27.65 10 32.5 14.85 32.5 20.8334C32.5 26.8167 27.65 31.6667 21.6666 31.6667C18.6133 31.6667 15.985 30.4 14.0466 28.36L9.16663 32.5C11.6666 35 15 36.6667 19.1666 36.6667C26.53 36.6667 32.5 30.6967 32.5 23.3334C32.5 15.97 26.53 10 19.1666 10L22.5 3.33337Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Brand Title */}
        <h1 className="text-[30px] font-bold text-[#1A1A1A] leading-9 mb-2">
          Swift
        </h1>

        {/* Subtitle */}
        <p className="text-base font-normal text-[#666] leading-6 mb-8 text-center">
          Sistema de Gamificação
        </p>

        {/* Login Card */}
        <form onSubmit={handleLogin} className="w-full max-w-[320px] bg-white rounded-2xl border border-[#E5E5E5] p-4 sm:p-6 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]">
          {/* Card Title */}
          <h2 className="text-2xl font-semibold text-[#1A1A1A] leading-8 text-center mb-8">
            Entrar na sua conta
          </h2>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#333] leading-5 mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="w-full h-[50px] px-4 border border-[#D1D5DB] rounded-xl text-base text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#E60012] focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-[#333] leading-5 mb-2">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full h-[50px] px-4 pr-12 border border-[#D1D5DB] rounded-xl text-base text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#E60012] focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700"
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full h-12 bg-[#E60012] rounded-xl flex items-center justify-center text-white text-base font-semibold mb-6 hover:bg-red-700 transition-colors">
            <span className="mr-2">Entrar</span>
            <ArrowRight size={20} className="rotate-180" />
          </button>

          {/* Forgot Password */}
          <div className="text-center mb-6">
            <a
              href="#"
              className="text-sm text-[#333] hover:text-[#E60012] transition-colors"
            >
              Esqueci minha senha
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E5E5E5] pt-6">
            {/* Sign Up Link */}
            <p className="text-center text-sm">
              <span className="text-[#666]">Não tem uma conta? </span>
              <a
                href="#"
                className="text-[#E60012] font-medium hover:underline"
              >
                Criar conta
              </a>
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 text-center px-4">
          <p className="text-xs text-[#9CA3AF] leading-4 mb-4 max-w-[254px] mx-auto">
            © 2024 Swift Gamificação. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-[#9CA3AF]">
            <a
              href="#"
              className="hover:text-[#E60012] transition-colors whitespace-nowrap"
            >
              Termos de Uso
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="#"
              className="hover:text-[#E60012] transition-colors whitespace-nowrap"
            >
              Política de Privacidade
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="#"
              className="hover:text-[#E60012] transition-colors whitespace-nowrap"
            >
              Suporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
