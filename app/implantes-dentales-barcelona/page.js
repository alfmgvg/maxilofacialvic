export default function Page() {
  const appointmentUrl = 'https://citaweb.bayesconsultori.cat/#/login';
  const phoneHref = 'tel:+34938894404';
  const phoneDisplay = '938 89 44 04';
  const whatsappUrl = 'https://wa.me/34638338885';
  const whatsappDisplay = '638 33 88 85';
  const email = 'info@bayesdental.cat';

  return (
    <main className="min-h-screen bg-white pb-24 text-slate-900 selection:bg-emerald-100">
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm">
            Cirurgia Oral i Maxil·lofacial · Bayés Centre · Vic
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Implants dentals a Vic
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Els implants dentals permeten substituir dents perdudes mitjançant una arrel
            artificial de titani que s’integra a l’os. Sobre aquest implant s’hi col·loca
            posteriorment una corona dental que reprodueix la forma, la funció i l’estètica
            de la dent natural.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            A Bayés Centre, a Vic, valorem tant casos senzills com casos més complexos per
            a pacients de Vic i de tota la comarca d’Osona que necessiten recuperar funció,
            estabilitat i estètica dental.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Demanar visita
            </a>

            <a
              href={phoneHref}
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-50"
            >
              Trucar al {phoneDisplay}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-50"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            També ens pots escriure per WhatsApp al {whatsappDisplay} o al correu {email}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          Quan estan indicats?
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Pèrdua d’una o diverses dents</li>
          <li>• Dificultat per mastegar amb normalitat</li>
          <li>• Problemes estètics per absència dental</li>
          <li>• Rehabilitació parcial o completa de la dentició</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Planificació del tractament
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Abans de col·locar un implant dental es realitza un estudi clínic i radiològic
          complet. En molts casos utilitzem radiografies o TAC dental per avaluar la
          quantitat i la qualitat de l’os disponible i planificar la cirurgia amb precisió.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Implants en casos complexos
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Els cirurgians maxil·lofacials estan especialment formats per tractar situacions
          complexes com la pèrdua d’os, les dents incloses o les rehabilitacions completes
          que requereixen una planificació quirúrgica avançada i personalitzada.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Durada i manteniment
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Amb una correcta planificació quirúrgica, una bona higiene oral i revisions
          periòdiques, els implants dentals poden mantenir-se en bon estat durant molts
          anys. El seguiment adequat és fonamental per al seu èxit a llarg termini.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Valoració personalitzada a Vic
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Cada pacient necessita una valoració individualitzada. A la nostra consulta de
          cirurgia oral i maxil·lofacial a Vic estudiem cada cas per determinar quina és
          la millor opció de tractament segons l’estat de l’os, la posició de les dents i
          els objectius funcionals i estètics.
        </p>

        <div className="mt-12 rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Vols valorar un tractament amb implants dentals a Vic?
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            El nostre equip a Bayés Centre pot estudiar el teu cas i orientar-te tant en
            tractaments senzills com en situacions quirúrgiques més complexes. La consulta
            està ubicada a la 3a planta del centre.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Demanar visita online
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-100"
            >
              Escriure per WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
