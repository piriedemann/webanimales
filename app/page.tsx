import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-12 sm:py-24 bg-[#1C1C1C] text-white overflow-hidden font-['roc-grotesk']">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image src="/images/logo-caras.png" alt="Caras comunidad" width={180} height={180} className="rounded-2xl border-4 border-white shadow-lg" priority />
          </div>
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-[1.1] text-center">
            Tranquilidad Financiera, <span className="text-[#FDB813]">Crecimiento Exponencial</span>
          </h1>
          <p className="text-xl mb-10 text-white/80">
            Te acompañamos a que te ordenes con tus finanzas y liberes tiempo para que te dediques a crecer
          </p>
        </div>
      </section>

      {/* Podcast */}
      <section className="pt-8 sm:pt-12 pb-12 sm:pb-24 bg-[#1C1C1C] text-white font-['roc-grotesk']">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6 gap-4">
            <h2 className="text-4xl font-bold mb-0">Escúchanos en Spotify</h2>
            <Image src="/images/spotify-logo.png" alt="Spotify" width={72} height={72} className="ml-4" />
          </div>
          <p className="text-lg mb-10 text-white/80">Descubre los mejores consejos y conversaciones sobre finanzas personales. Estos son nuestros 3 capítulos más escuchados:</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            <div className="flex-1 bg-[#23272F] rounded-2xl p-6 flex flex-col items-center">
              <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/episode/45yCTTXHDD5rCRRac8DrAq?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <Link href="https://open.spotify.com/episode/45yCTTXHDD5rCRRac8DrAq?si=49e718f9e9604e76" target="_blank" className="mt-4 text-[#FDB813] font-bold">70 - Las Reglas del Juego del Dinero</Link>
            </div>
            <div className="flex-1 bg-[#23272F] rounded-2xl p-6 flex flex-col items-center">
              <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/episode/4ORCxsI8C3VF8O5GrwxLZC?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <Link href="https://open.spotify.com/episode/4ORCxsI8C3VF8O5GrwxLZC?si=108047850b03493d" target="_blank" className="mt-4 text-[#FDB813] font-bold">77 - Mentores: La visión con Patricio Jottar</Link>
            </div>
            <div className="flex-1 bg-[#23272F] rounded-2xl p-6 flex flex-col items-center">
              <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/episode/2aEp7BKPvqF6P6Cvf38MSe?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <Link href="https://open.spotify.com/episode/2aEp7BKPvqF6P6Cvf38MSe?si=3a7b9ccbf2de4abb" target="_blank" className="mt-4 text-[#FDB813] font-bold">92 - Cómo invertir en tus 20s, 30s, 40s, 50s y 60s</Link>
            </div>
          </div>
          <div className="mt-8">
            <Link href="https://open.spotify.com/show/5RqxERcDPazAmdiOGPSjcf?si=22c0595a12604cc6" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FDB813] text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-[#FFD966] transition-colors">Escuchar en Spotify</Link>
          </div>
        </div>
      </section>

      {/* Youtube */}
      <section className="py-24 bg-white font-['roc-grotesk']">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#1C1C1C]">Nuestro canal de Youtube</h2>
          <p className="text-lg mb-10 text-gray-700">Videos, entrevistas y contenido exclusivo para la comunidad.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <iframe width="340" height="191" src="https://www.youtube.com/embed/A33l-2kka8s" title="Video destacado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl mx-auto" style={{minWidth:340, minHeight:191, maxWidth:340, maxHeight:191}} loading="lazy"></iframe>
            <iframe width="340" height="191" src="https://www.youtube.com/embed/7gJu6RbdfxQ" title="Video destacado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl mx-auto" style={{minWidth:340, minHeight:191, maxWidth:340, maxHeight:191}} loading="lazy"></iframe>
            <iframe width="340" height="191" src="https://www.youtube.com/embed/krrae50uFlw" title="Video destacado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl mx-auto" style={{minWidth:340, minHeight:191, maxWidth:340, maxHeight:191}} loading="lazy"></iframe>
          </div>
          <div className="mt-8">
            <Link href="https://www.youtube.com/@animalesfinancieros" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FDB813] text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-[#FFD966] transition-colors">Ver canal</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#1C1C1C] text-white font-['roc-grotesk']">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Newsletter</h2>
          <p className="text-lg mb-10 text-white/80">Recibe tips, novedades y recursos exclusivos para tu tranquilidad financiera.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="https://animalesfinancieros.beehiiv.com/p/conocimiento-especifico" target="_blank" className="w-[320px] bg-white border border-gray-300 rounded-2xl p-6 flex flex-col items-center hover:bg-gray-50 transition-colors shadow-md">
              <h3 className="text-xl font-bold mb-2 text-[#FDB813]">Conocimiento específico</h3>
              <p className="text-gray-700 mb-2">¿Qué es y por qué deberías perseguirlo?</p>
              <span className="text-[#B784A7] underline">Leer artículo</span>
            </a>
            <a href="https://animalesfinancieros.beehiiv.com/p/maldita-motivaci-n" target="_blank" className="w-[320px] bg-white border border-gray-300 rounded-2xl p-6 flex flex-col items-center hover:bg-gray-50 transition-colors shadow-md">
              <h3 className="text-xl font-bold mb-2 text-[#FDB813]">Maldita motivación</h3>
              <p className="text-gray-700 mb-2">Cómo salir de los bajones y avanzar igual.</p>
              <span className="text-[#B784A7] underline">Leer artículo</span>
            </a>
            <a href="https://animalesfinancieros.beehiiv.com/p/un-gusto" target="_blank" className="w-[320px] bg-white border border-gray-300 rounded-2xl p-6 flex flex-col items-center hover:bg-gray-50 transition-colors shadow-md">
              <h3 className="text-xl font-bold mb-2 text-[#FDB813]">Fue un gusto</h3>
              <p className="text-gray-700 mb-2">Intangibles que te van a ayudar a resistir.</p>
              <span className="text-[#B784A7] underline">Leer artículo</span>
            </a>
          </div>
        </div>
      </section>

      {/* Comunidad */}
      <section className="py-24 bg-white font-['roc-grotesk']">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#1C1C1C]">Comunidad</h2>
          <p className="text-lg mb-10 text-gray-700">Únete a nuestra comunidad y comparte tu camino hacia la tranquilidad financiera.</p>
          <a href="https://chat.whatsapp.com/FAmyb9AOBLe5D6Ny6YJxdO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-[#1ebe57] transition-colors border-2 border-[#128C7E] shadow-md">
            <Image src="/images/logo-whatsapp.png" alt="WhatsApp" width={32} height={32} />
            Unirme a la comunidad
          </a>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-24 bg-[#1C1C1C] text-white font-['roc-grotesk']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Nuestros Cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link href="/cursos/las-reglas-del-juego" className="bg-white border border-gray-200 shadow-lg rounded-2xl p-0 overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
              <div className="relative py-16 bg-[#1C1C1C] text-white overflow-hidden font-['roc-grotesk']">
                <div className="absolute top-0 left-0 right-0 flex justify-center py-4">
                  <div className="bg-white text-black px-8 py-2 rounded-full">
                    <p className="text-lg font-medium">- Curso Las Reglas del Juego -</p>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                  <div className="grid grid-cols-1 gap-8 items-start">
                    <div className="mb-8 flex justify-center">
                      <Image src="/images/logo.png" alt="Animales Financieros Logo" width={80} height={80} className="lg:mx-0" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.1] text-center">
                      Las finanzas tienen un orden.{' '}
                      <span className="text-[#FDB813]">Síguelo</span>.
                    </h1>
                    <p className="text-xl mb-8 text-center">
                      Aprovecha la plata gratis, prepara tu futuro y ten claro{' '}
                      <span className="text-[#B784A7]">qué hacer con tu próxima luca</span>.
                    </p>
                    <div className="flex justify-center mb-8">
                      <span className="inline-block bg-white text-black px-12 py-4 rounded-md text-lg font-medium cursor-pointer">Más información</span>
                    </div>
                    <p className="text-gray-400 text-lg text-center">
                      Súmate a más de 90 animales ordenados
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <a href="https://piriedemann.github.io/curso-ia-animal/" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 shadow-lg rounded-2xl p-0 overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
              <div className="relative py-16 bg-[#23272F] text-white overflow-hidden font-['roc-grotesk']">
                <div className="absolute top-0 left-0 right-0 flex justify-center py-4">
                  <div className="bg-white text-black px-8 py-2 rounded-full">
                    <p className="text-lg font-medium">- Curso Introducción a la IA -</p>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                  <div className="grid grid-cols-1 gap-8 items-start">
                    <div className="mb-8 flex justify-center">
                      <Image src="/images/logo.png" alt="Animales Financieros Logo" width={80} height={80} className="lg:mx-0" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.1] text-center">
                      Trabaja con <span className="text-[#FDB813]">IA</span>, hoy día
                    </h1>
                    <p className="text-xl mb-8 text-center">
                      Aprende a usar las herramientas que te harán una <span className="text-[#B784A7]">máquina de productividad</span>
                    </p>
                    <div className="flex justify-center mb-8">
                      <span className="inline-block bg-white text-black px-12 py-4 rounded-md text-lg font-medium cursor-pointer">Más información</span>
                    </div>
                    <p className="text-gray-400 text-lg text-center">
                      Súmate a más de 150 alumnos
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-24 bg-white font-['roc-grotesk']">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#1C1C1C]">Contacto</h2>
          <div className="bg-[#1C1C1C] p-8 rounded-2xl shadow-lg flex flex-col gap-8 items-center">
            <p className="text-lg text-white text-center">
              Escríbenos por Instagram <br />
              <Link href="https://www.instagram.com/animales_financieros/" target="_blank" rel="noopener noreferrer" className="text-[#FDB813] underline">@animales_financieros</Link>
              <br />
              o envíanos un correo a <br />
              <a href="mailto:animaaalesfinancieros@gmail.com" className="text-[#B784A7] underline">animaaalesfinancieros@gmail.com</a>
            </p>
            <a
              href="mailto:animaaalesfinancieros@gmail.com"
              className="bg-[#FDB813] text-black font-bold py-3 px-8 rounded-md hover:bg-[#FFD966] transition-colors text-lg"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
