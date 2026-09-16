import Link from "next/link";
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Building2, 
  Star, 
  Zap, 
  ShieldCheck, 
  ChevronRight,
  Database
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden selection:bg-emerald-500/30">
      {/* Efectos de fondo (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* HEADER / HERO SECTION */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center space-y-10">
        
        <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm font-mono text-zinc-300 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
          WorkAR v1.0.0-beta [Status: Online]
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl">
          El nexo definitivo para el <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Talento Tecnológico
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          No somos un portal de empleo tradicional. WorkAR es el hub donde programadores, ingenieros de IA y arquitectos de software validan su stack, rankean por estrellas y son descubiertos directamente por las mejores empresas.
        </p>

        {/* Botones Principales */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-4">
          <Link href="/registro" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-zinc-950 bg-zinc-50 rounded-lg hover:bg-zinc-200 transition-all hover:scale-105">
            <Terminal className="w-5 h-5 mr-2" />
            Inicializar Perfil (Talento)
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href="/empresas" className="group inline-flex items-center justify-center px-8 py-4 font-bold text-zinc-50 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
            <Building2 className="w-5 h-5 mr-2" />
            Buscar Candidatos (Empresas)
          </Link>
        </div>
      </main>

      {/* SECCIÓN: PROPUESTA PARA DEVS */}
      <section className="border-t border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Diseñado por y para <span className="text-emerald-500">Developers</span>
            </h2>
            <p className="text-zinc-400 mt-4 font-mono text-sm">sudo apt-get install tu-futuro-trabajo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <Code2 className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Define tu Stack Real</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Olvídate de los CVs aburridos. Selecciona tus lenguajes, frameworks (React, Python, Rust) y áreas de expertise (Frontend, Backend, DevOps, Data).
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-colors">
              <Cpu className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Feed de Inteligencia</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Un hub de noticias a tu medida. Entérate de los últimos zero-days, exploits, nuevos modelos de IA, prompts avanzados y librerías en tendencia.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/50 transition-colors">
              <Star className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gamificación y Rank</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Interactúa con la comunidad, completa tu ficha y gana estrellas de reputación. A más estrellas, más arriba apareces en las búsquedas B2B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: PROPUESTA PARA EMPRESAS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center text-sm font-bold text-cyan-500 uppercase tracking-wider">
              <Zap className="w-4 h-4 mr-2" /> Para Empresas y Recruitiers
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Búsqueda quirúrgica. <br/> Pago por resultados.
            </h2>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                <p className="text-zinc-300"><strong className="text-white">Adiós suscripciones infladas:</strong> Encuentra al candidato ideal usando nuestros filtros avanzados de tecnologías y reputación (estrellas) de forma 100% gratuita.</p>
              </li>
              <li className="flex items-start">
                <Database className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                <p className="text-zinc-300"><strong className="text-white">Pay-per-Lead (MercadoPago):</strong> El CV y los datos de contacto están protegidos. Paga una micro-tarifa única solo para desbloquear el contacto directo del talento que realmente quieres.</p>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            {/* Decoración visual para simular un "dashboard" de perfiles */}
            <div className="w-full h-80 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur p-6 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 animate-pulse" />
                  <div>
                    <div className="h-4 w-32 bg-zinc-800 rounded animate-pulse mb-2" />
                    <div className="h-3 w-20 bg-emerald-500/20 rounded animate-pulse" />
                  </div>
                </div>
                <div className="flex gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-zinc-800 rounded animate-pulse" />
                <div className="h-2 w-4/5 bg-zinc-800 rounded animate-pulse" />
                <div className="h-2 w-full bg-zinc-800 rounded animate-pulse" />
              </div>
              
              {/* Botón de desbloqueo simulado */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md flex items-center justify-between">
                <span className="text-sm font-medium text-emerald-400">Contacto bloqueado</span>
                <button className="px-4 py-2 bg-emerald-500 text-zinc-950 font-bold text-sm rounded-lg">
                  Desbloquear con MercadoPago
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} WorkAR. Desarrollado para la comunidad IT.</p>
      </footer>
    </div>
  );
}