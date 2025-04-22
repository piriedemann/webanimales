'use client';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Animales Financieros. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
} 