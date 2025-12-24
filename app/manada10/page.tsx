'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Impulso() {
  return (
    <main className="bg-white font-['roc-grotesk']">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-[#1C1C1C] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
                Manada 10%
              </h1>
              <p className="text-2xl sm:text-3xl">
                Cuerpo, mente y foco: un sistema simple y una comunidad que te empuja.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="/images/Hero-percentil.png" 
                alt="Manada 10% Hero" 
                width={600} 
                height={400} 
                className="rounded-2xl shadow-lg"
                priority
                key="hero-percentil"
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center px-6 md:px-8">
            <div className="space-y-4 mb-8 text-lg text-white/90">
              <p>
                ¿Cuántas veces has dicho &quot;debería hacer ejercicio&quot;, &quot;debería comer mejor&quot;,
                &quot;debería leer más&quot;... y te quedaste ahí?
              </p>
              <p>
                Sabes lo que tienes que hacer, pero no logras que el cambio dure.
              </p>
              <p>
                Es el clásico fracaso de las resoluciones de fin de año. Duran un par de semanas y volvemos a lo mismo.
              </p>
              <p>
                En los últimos años leímos libros relacionados a hábitos (desde Hábitos Atómicos a otros menos conocidos). Probamos distintos modelos y nos quedamos con lo que funcionó.
              </p>
              <p>
                El 2025 fue el mejor año de nuestras vidas. Creemos que el 2026 será aún mejor.
              </p>
              <p>
                Parte importante de hacer estos cambios es hacerlo acompañado. <em>Accountability</em>, le dicen los gringos. Por eso diseñamos este experimento para que te puedas sumar.
              </p>
              <p>
                Te queremos llevar al 10% mejor de la población en lo que te interesa. Top 10% en una carrera, leer más libros que el 90% de la población, o quién sabe, 10% más feliz.
              </p>
              <p>
                90 días, vamos juntos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="https://dvacapital.typeform.com/manada10" target="_blank" rel="noopener noreferrer" className="bg-[#FDB813] text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-[#FFD966] transition-colors inline-block text-center">
                Quiero participar
              </Link>
              <p className="text-[#FDB813] font-semibold">Quedan 16 cupos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-[#1C1C1C]">
            Para quién es
          </h2>
          
          <div className="mb-12 flex justify-center">
            <Image 
              src="/images/esparati.png" 
              alt="Es para ti" 
              width={600} 
              height={400} 
              className="rounded-2xl"
            />
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[#1C1C1C]">ESTO ES PARA TI SI...</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813] text-2xl">✓</span>
                <span className="text-lg text-gray-700">Estás frustrado porque los buenos hábitos te duran poco</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813] text-2xl">✓</span>
                <span className="text-lg text-gray-700">Has intentado &quot;empezar el lunes&quot; 50 veces y siempre vuelves a lo mismo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813] text-2xl">✓</span>
                <span className="text-lg text-gray-700">Tienes claro que pequeños cambios diarios pueden transformar tu vida</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813] text-2xl">✓</span>
                <span className="text-lg text-gray-700">Estás dispuesto a comprometerte 3 meses en serio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813] text-2xl">✓</span>
                <span className="text-lg text-gray-700">Quieres resultados reales, no motivación de Instagram que dura 2 días</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#1C1C1C]">NO ES PARA TI SI...</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="text-lg text-gray-700">Buscas una solución mágica sin esfuerzo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="text-lg text-gray-700">No puedes comprometer un par de horas a la semana</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="text-lg text-gray-700">Solo quieres &quot;inspiración&quot; pero no acción</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="text-lg text-gray-700">Esperas resultados en 1 semana</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="text-lg text-gray-700">No estás listo para que otros te vean en el proceso (esto se hace en comunidad)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* El 2025 */}
      <section className="py-24 bg-[#1C1C1C] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">El 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image 
                src="/images/resultados.png" 
                alt="Resultados 2025" 
                width={600} 
                height={450} 
                className="rounded-2xl"
                key="resultados-2025"
              />
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813] text-xl">•</span>
                  <span>Nuestro podcast estuvo en el 1% de podcast más compartidos en el mundo en Spotify</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813] text-xl">•</span>
                  <span>Pablo corrió una Spartan Race y quedó en el 13% mejor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813] text-xl">•</span>
                  <span>Francisco obtuvo el tercer lugar del panamericano senior en Brasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813] text-xl">•</span>
                  <span>Pablo leyó más de 50 libros</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813] text-xl">•</span>
                  <span>Francisco cerró el computador y fue a bañar a su hija la mayoría de los días</span>
                </li>
              </ul>
              <p>
                Estos logros en un momento fueron objetivos. Estábamos en mala forma física, desconcentrados y a la deriva. El primer paso fue pasar del promedio al 10% mejor. <span className="font-bold">Súmate.</span>
              </p>
              <div className="mt-6">
                <Link href="https://dvacapital.typeform.com/manada10" target="_blank" rel="noopener noreferrer" className="bg-[#FDB813] text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-[#FFD966] transition-colors inline-block text-center">
                  Quiero Participar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#1C1C1C]">
            Cómo Funciona
          </h2>
          <p className="text-2xl font-bold mb-12 text-center text-[#1C1C1C]">
            3 meses. 2 hábitos. 1 Proyecto
          </p>

          <div className="space-y-16">
            {/* Mes 1 */}
            <div className="bg-[#1C1C1C] text-white rounded-2xl p-8 sm:p-12">
              <h3 className="text-3xl font-bold mb-4 text-[#FDB813]">Mes 1 → CUERPO</h3>
              <p className="text-xl mb-6">
                Queremos que despiertes sin postponer la alarma, hagas bien tu trabajo, te muevas, y te acuestes cansado pero feliz.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Rutina matutina que te da energía</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Pequeños cambios de alimentación sostenibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Movimiento diario que cabe en tu día a día</span>
                </li>
              </ul>
            </div>

            {/* Mes 2 */}
            <div className="bg-[#23272F] text-white rounded-2xl p-8 sm:p-12">
              <h3 className="text-3xl font-bold mb-4 text-[#FDB813]">Mes 2 → MENTE</h3>
              <p className="text-xl mb-6">
                En vez de trabajar revisando el correo y respondiendo mensajes, trabaja en sesiones de trabajo profundo y sé el mejor de la oficina.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Eliminar distracciones y recuperar la capacidad de concentración</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Sistema para leer 1-2 libros al mes (sin forzar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Ejercicios para bajar el ritmo de tu cerebro y analizar los pensamientos que se repiten</span>
                </li>
              </ul>
            </div>

            {/* Mes 3 */}
            <div className="bg-[#1C1C1C] text-white rounded-2xl p-8 sm:p-12">
              <h3 className="text-3xl font-bold mb-4 text-[#FDB813]">Mes 3 → DESAFÍO PERSONAL</h3>
              <p className="text-xl mb-6">
                Aquí aplicamos todo. Tú eliges tu desafío personal:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Lanzar ese proyecto que llevas 2 años postergando</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Correr tu primeros 10K</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FDB813]">•</span>
                  <span>Terminar ese curso que compraste hace meses</span>
                </li>
              </ul>
              <p className="text-lg mt-6">
                Vamos a estar acompañándote y empujándote para que llegues al objetivo sin fallar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Incluye */}
      <section className="py-24 bg-[#1C1C1C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Qué Incluye</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">COMUNIDAD PRIVADA</h3>
              <p className="text-lg">
                Grupo de WhatsApp con personas que están en la misma que tú.
                Sin influencers ni apariencias. Personas reales haciendo cambios reales.
              </p>
            </div>

            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">12 SESIONES EN VIVO</h3>
              <p className="text-lg mb-4">
                Reuniones semanales virtuales de 60-90 minutos.
              </p>
              <ul className="space-y-2 text-lg">
                <li>• Entiendes la CIENCIA detrás de lo que estamos haciendo</li>
                <li>• Resolvemos tus obstáculos específicos</li>
                <li>• Ajustamos el sistema a TU vida real</li>
              </ul>
              <p className="text-sm text-white/70 mt-4">
                (Todas las sesiones quedan grabadas si no puedes en vivo)
              </p>
            </div>

            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">CHARLAS CON EXPERTOS</h3>
              <p className="text-lg mb-4">
                Gente que dedica su vida a los temas que veremos:
              </p>
              <ul className="space-y-2 text-lg">
                <li>• Nutrición y deporte</li>
                <li>• Mentalidad</li>
              </ul>
            </div>

            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">WORKBOOKS Y MATERIALES</h3>
              <p className="text-lg mb-4">
                Para cada mes, herramientas prácticas para aplicar los hábitos:
              </p>
              <ul className="space-y-2 text-lg">
                <li>• Planilla de hábitos (acá no puedes fallar)</li>
                <li>• Ejercicios específicos</li>
                <li>• Material Complementario</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="https://dvacapital.typeform.com/manada10" target="_blank" rel="noopener noreferrer" className="bg-[#FDB813] text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-[#FFD966] transition-colors inline-block text-center">
              Quiero Participar
            </Link>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-[#1C1C1C]">
            Quiénes Somos
          </h2>
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/logo.png" 
              alt="Animales Financieros Logo" 
              width={120} 
              height={120} 
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-6 text-lg text-gray-700 mb-12">
            <p>
              Animal, gracias por darte el tiempo de leer esta página.
            </p>
            <p>
              Somos Pablo y Francisco. Nos conocimos trabajando pero nos hicimos amigos porque compartimos valores de vida. A Francisco le fascina el deporte (campeón panamericano de padel), y Pablo lee hasta la botella del jabón.
            </p>
            <p>
              Empezamos nuestro podcast, Animales Financieros, para ayudar a personas a tomar mejores decisiones con su plata. En el camino (después de 150 capítulos), nos dimos que la plata no era lo más importante.
            </p>
            <p>
              Si despiertas con energía, tienes una mente clara y sabes hacia donde ir, creemos que la vas a romper. Es la filosofía que nos mueve en el día a día. Tenemos la suerte que nos ha resultado, trabajamos en cosas que nos encantan, y queremos compartir nuestros aprendizajes en el camino.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Image 
                src="/images/foto-francisco.png" 
                alt="Francisco" 
                width={300} 
                height={300} 
                className="rounded-2xl mx-auto mb-4"
              />
              <p className="text-xl font-bold text-[#1C1C1C]">Francisco</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/foto-pablo.png" 
                alt="Pablo" 
                width={300} 
                height={300} 
                className="rounded-2xl mx-auto mb-4"
              />
              <p className="text-xl font-bold text-[#1C1C1C]">Pablo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-[#1C1C1C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Testimonios</h2>
          <p className="text-lg mb-12 text-center text-white/80">
            Durante el año hicimos varios desafíos pensados en superarnos.
            Impulso toma los aprendizajes de esos desafíos y buscamos generar más cambios como estos:
          </p>

          <div className="space-y-12">
            {/* TALI */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">TALI</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Contexto: jamás había logrado ser disciplinada con el deporte.
                  Muy de mente limitada, siempre pensaba &apos;jamás seré de esas personas
                  que se comprometen con el deporte&apos;. Siempre tenía un panorama mejor,
                  así que &apos;nunca tenía tiempo&apos; para el deporte.
                </p>
                <p>
                  Empecé con pilates una vez por semana, sin compromiso...solo para hacerle el favor a una amiga que empezó a hacer clases en un estudio. Se cambió de estudio y la seguí. Me quedaba un poco más lejos pero apañé… spoiler… soy de las alumnas más constantes… voy martes, jueves y a veces también los sábados… y ya no cancelo la clase si es que alguien me invita a alguna actividad… al contrario o es después de la clase, o tengo que rechazar la invitación porque la clase está primero
                </p>
                <p>
                  Pensarán que ahí que me quedé… no… algo más tenía que hacer… porque nada me hace más ilusión que poder celebrar mi cumpleaños 70, 80, 90… bailando!!
                </p>
                <p>
                  Empecé a ir a spinning… becycle, una clase donde aparte de pedalear bailas… la gente tiene una energía brutal, los profes también… la primera clase fue horrible… la segunda también, la tercera ya no tanto… y así, llevo un par de meses… voy entre 2 y 3 veces a la semana a las 7 am los días lunes y también algunos viernes en ese mismo horario…
                </p>
                <p>
                  O sea, pasé de nada.. a entrenar entre 5 y 6 veces a la semana, disciplinadamente… ahora esa gente que se levanta 6 am a entrenar soy yo misma… no me la creo…
                  Y ahora entreno entre 5 y 6 veces a la semana, disciplinadamente.
                </p>
                <p>
                  Incluso llevé un challenge deportivo a mi equipo en la oficina y
                  la situación se descontroló. Ahora hasta voy los domingos a subir cerros.
                </p>
                <p>
                  Tenía 2 grandes metas para este año: el inglés y el deporte.
                  Con el inglés sigo al debe, pero de la parte deportiva estoy orgullosa.
                </p>
              </div>
            </div>

            {/* GERARDO */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">GERARDO</h3>
              <p className="text-lg leading-relaxed">
                &quot;A principios de año, en parte por esta comunidad, me puse el desafío
                de hacer un ironman. Un desafío muy ambicioso, con hartas probabilidades
                de dejarlo botado.
              </p>
              <p className="text-lg leading-relaxed">
                Ayer llegó ese día y se logró. A punta de calambres, caminatas y
                mucha pelea mental llegamos a la meta después de 7 horas 40 minutos.&quot;
              </p>
            </div>

            {/* ANDRÉS */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">ANDRÉS</h3>
              <p className="text-lg leading-relaxed">
                &quot;A pocos días de acabar el año, me faltaron 2 libros, no obstante, orgulloso porque me convertí en lector, gracias cabros por motivar a la gente a comenzar buenos hábitos&quot;
              </p>
            </div>

            {/* RO */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">RO</h3>
              <p className="text-lg leading-relaxed">
                &quot;Lo digo muy en serio: antes leía que había gente que hacía deporte
                todos los días y no podía creer que pudieran hacerlo.
              </p>
              <p className="text-lg leading-relaxed">
                Y ahora lo hago y es genial. (Todo gracias al desafío de la plancha jaja)&quot;
              </p>
            </div>

            {/* DIEGO */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">DIEGO</h3>
              <p className="text-lg leading-relaxed">
                &quot;Por acá misogi cumplido. Maratón completada 💪.
                Felicitaciones a todos los que se desafiaron hoy!&quot;
              </p>
            </div>

            {/* PAU */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">PAU</h3>
              <p className="text-lg leading-relaxed">
                &quot;Me uno a los agradecimientos. Este año ha tenido un crecimiento exponencial, que orgullo que hayamos mejorado tanto nuestros hábitos de lectura. Gracias Comunidad Animal!&quot;
              </p>
            </div>

            {/* JEAN PIERRE */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FDB813]">JEAN PIERRE</h3>
              <p className="text-lg leading-relaxed">
                &quot;Tengo una vida ordenada, un puestazo, carrera en el extranjero,
                familia y deporte, todo en orden...
              </p>
              <p className="text-lg leading-relaxed">
                Y los leo y cambiaría muchas cosas por ser parte de un proyecto como
                el de ustedes. Sigan así, es oro puro todo lo que hacen.&quot;
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="https://dvacapital.typeform.com/manada10" target="_blank" rel="noopener noreferrer" className="bg-[#FDB813] text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-[#FFD966] transition-colors inline-block text-center">
              Quiero Participar
            </Link>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="py-24 bg-[#1C1C1C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Garantía</h2>
          <div className="bg-[#2C2C2C] rounded-2xl p-8 sm:p-12">
            <p className="text-xl mb-6">
              Prueba las primeras 2 semanas completas.
            </p>
            <p className="text-xl mb-6">
              Asiste a las sesiones. Participa en el grupo.
            </p>
            <p className="text-xl mb-6">
              Implementa el sistema.
            </p>
            <p className="text-2xl font-bold text-[#FDB813] mb-8">
              Si después de 2 semanas no sientes que esto es diferente a todo
              lo que has intentado antes, te devolvemos el 100% sin preguntas.
            </p>
            <Link href="https://dvacapital.typeform.com/manada10" target="_blank" rel="noopener noreferrer" className="bg-[#FDB813] text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-[#FFD966] transition-colors inline-block text-center">
              Quiero Participar
            </Link>
          </div>
        </div>
      </section>

      {/* Costo del programa */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-[#1C1C1C]">
            Costo del programa
          </h2>
          <div className="bg-[#1C1C1C] text-white rounded-2xl p-8 sm:p-12">
            <p className="text-3xl font-bold mb-8 text-[#FDB813]">
              $200 USD/mes por 3 meses ($600 USD total)
            </p>
            <ul className="space-y-4 text-lg mb-8 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813]">✓</span>
                <span>12 sesiones en vivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813]">✓</span>
                <span>Acceso a comunidad privada por 3 meses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813]">✓</span>
                <span>Charlas con expertos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813]">✓</span>
                <span>Planillas y materiales para cada mes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FDB813]">✓</span>
                <span>Grabaciones de todas las sesiones</span>
              </li>
            </ul>
            <p className="text-xl text-white/90 mb-8">
              Pero lo que de verdad estás pagando, es un cambio de hábitos que va a ser un círculo virtuoso para que cambies distintas áreas de tu vida. Lo hemos visto (y lo vivimos nosotros).
            </p>
            <Link href="https://dvacapital.typeform.com/manada10" target="_blank" rel="noopener noreferrer" className="bg-[#FDB813] text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-[#FFD966] transition-colors inline-block text-center">
              Quiero Participar
            </Link>
          </div>
        </div>
      </section>

      {/* Mensaje de Cierre */}
      <section className="py-24 bg-[#1C1C1C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              P.D. Si llegaste hasta acá y todavía estás leyendo, sabes que necesitas este cambio.
            </p>
            <p>
              No hay mejor excusa que un nuevo año.
            </p>
            <p>
              Si este programa es un éxito, probablemente subamos los precios a futuro. Este es el precio más barato que tendrá.
            </p>
            <p className="text-xl font-semibold text-[#FDB813]">
              Esperamos verte adentro animal.
            </p>
          </div>
          <div className="mt-12">
            <Link href="https://dvacapital.typeform.com/manada10" target="_blank" rel="noopener noreferrer" className="bg-[#FDB813] text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-[#FFD966] transition-colors inline-block text-center">
              Quiero Participar
            </Link>
          </div>
        </div>
      </section>

      {/* Preguntas sensatas */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-[#1C1C1C]">
            Preguntas sensatas
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]">¿Cuánto tiempo necesito invertir?</h3>
              <p className="text-lg text-gray-700">
                Un par de horas para entender qué estamos haciendo, y dependiendo del hábito que elijas pueden ser un par de minutos (tomar más agua), o una hora al día (salir a caminar), por ejemplo.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]">¿Qué pasa si me atraso o pierdo una semana?</h3>
              <p className="text-lg text-gray-700">
                La vida pasa. Lo entendemos. Las sesiones quedan grabadas y el grupo te
                pone al día. La clave es volver, no ser perfecto. De eso se trata crear
                hábitos reales.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]">¿Es presencial u online?</h3>
              <p className="text-lg text-gray-700">
                100% online. Sesiones en vivo por Zoom + comunidad en WhatsApp.
                Puedes estar donde sea.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]">¿Hay horarios fijos?</h3>
              <p className="text-lg text-gray-700">
                Las sesiones en vivo serán en los mismos horarios todas las semanas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]">¿Necesito experiencia previa?</h3>
              <p className="text-lg text-gray-700">
                Cero. De hecho, es mejor si has fallado antes. Significa que sabes que
                hacerlo solo no funciona y estás listo para intentar algo diferente.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#1C1C1C]">¿Qué pasa después de los 3 meses?</h3>
              <p className="text-lg text-gray-700">
                Tenemos una sensación fuerte que los lazos que generemos en el grupo querrán seguir después de marzo. Probablemente hagamos algo al respecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

