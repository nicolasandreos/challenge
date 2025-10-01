import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Swift Logo */}
        <div className="w-20 h-20 bg-swift-red rounded-2xl flex items-center justify-center mx-auto mb-6">
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

        <h1 className="text-6xl font-bold text-[#1A1A1A] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Página não encontrada</h2>
        <p className="text-base text-[#666] mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center justify-center h-12 px-6 bg-swift-red text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
        >
          Voltar ao início
        </a>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#9CA3AF] leading-4">
            © 2024 Swift Gamificação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
