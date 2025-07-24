'use client';

export default function Hero() {
  return (
    <section className="relative py-32 bg-[#1C1C1C] text-white overflow-hidden font-['roc-grotesk']">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-[64px] font-bold mb-6 leading-[1.1]">
          Tranquilidad Financiera,<br className="hidden sm:inline" />
          <span className="text-[#FDB813]">Crecimiento Exponencial</span>
        </h1>
        <p className="text-xl mb-10 text-white/80">
          Te acompañamos a que te ordenes con tus finanzas y liberes tiempo para que te dediques a crecer
        </p>
      </div>
    </section>
  );
} 