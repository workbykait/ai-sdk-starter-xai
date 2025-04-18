export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animated-paths">
          <style jsx>{`
            .animated-paths {
              position: absolute;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0));
            }
            .animated-paths::before,
            .animated-paths::after {
              content: '';
              position: absolute;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 10%, transparent 10.01%);
              background-size: 50px 50px;
              animation: move 20s linear infinite;
              opacity: 0.5;
            }
            .animated-paths::before {
              top: -50%;
              left: -50%;
            }
            .animated-paths::after {
              bottom: -50%;
              right: -50%;
              animation-direction: reverse;
            }
            @keyframes move {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(100px, 100px);
              }
            }
          `}</style>
        </div>
      </div>
      <h1 className="relative z-10 text-4xl font-bold text-gray-800">Mind Bloom</h1>
    </div>
  );
}
