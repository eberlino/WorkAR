import Link from "next/link";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
          <span className="text-xl font-bold tracking-tight text-zinc-50">WorkAR</span>
        </Link>

        {/* Enlaces del centro (Se ocultan en celulares pequeños) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/empresas" className="hover:text-zinc-50 transition-colors">Para Empresas</Link>
          <Link href="/talento" className="hover:text-zinc-50 transition-colors">Talento IT</Link>
          <Link href="/feed" className="hover:text-emerald-400 transition-colors">Feed / Noticias</Link>
        </div>

        {/* Botones de Acción (Login / Registro) */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors hidden sm:block"
          >
            Iniciar Sesión
          </Link>
          <Link 
            href="/registro" 
            className="px-4 py-2 text-sm font-bold text-zinc-950 bg-emerald-500 rounded-md hover:bg-emerald-400 transition-colors"
          >
            Crear Cuenta
          </Link>
        </div>

      </div>
    </nav>
  );
}