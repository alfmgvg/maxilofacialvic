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
            Extracció de queixals del seny a Vic
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Els queixals del seny són les darreres molars a aparèixer. En alguns pacients
            erupcionen correctament, però en d’altres queden retinguts, parcialment
            erupcionats o sense prou espai, fet que pot provocar dolor, inflamació,
            infeccions repetides o afectació de les dents veïnes.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            A Bayés Centre, a Vic, valorem de manera individualitzada cada cas per oferir
            un tractament segur, precís i adaptat a cada pacient, tant de Vic com de la
            resta de la comarca d’Osona.
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
            També ens pots escriure per WhatsApp al {whatsappDisplay} o al correu {email}{' '}
            per resoldre dubtes o sol·licitar una primera valoració.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          Quan convé valorar-ne l’extracció?
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Dolor o inflamació a la part posterior de la boca</li>
          <li>• Infeccions repetides al voltant del queixal del seny</li>
          <li>• Falta d’espai o pressió sobre la dent del costat</li>
          <li>• Queixals del seny inclosos o mal posicionats</li>
          <li>• Dificultat per mantenir una higiene correcta de la zona</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Valoració i planificació
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Abans d’indicar l’extracció, fem una exploració clínica i un estudi radiològic
          complet. En alguns casos es demana un TAC dental per conèixer amb precisió la
          posició del queixal i la seva relació amb estructures anatòmiques properes, fet
          que permet planificar la cirurgia de manera més segura.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Extracció de queixals del seny complexos
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Els cirurgians maxil·lofacials estan especialment formats per tractar queixals
          del seny inclosos, dents amb posicions complexes o situacions que requereixen
          una cirurgia més avançada. L’objectiu és fer un tractament precís, segur i
          adaptat a cada pacient.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Recuperació després de la cirurgia
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Després de l’extracció pot aparèixer inflamació, molèsties o certa limitació
          per obrir la boca durant els primers dies. En la majoria dels casos l’evolució
          és favorable amb medicació, fred local i seguint les recomanacions
          postoperatòries. Un seguiment adequat ajuda a una recuperació més còmoda i
          segura.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Atenció especialitzada a Vic
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          A la nostra consulta de cirurgia oral i maxil·lofacial a Vic atenem pacients
          amb queixals del seny dolorosos, inclosos o de difícil extracció. Valorem cada
          situació de manera individualitzada per decidir si cal cirurgia i quin és el
          moment més adequat per fer-la.
        </p>

        <div className="mt-12 rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Vols valorar l’extracció d’un queixal del seny a Vic?
          </h3>
          <p className="mt-3 leading-7 text-slate-700">
            El nostre equip a Bayés Centre pot estudiar el teu cas i orientar-te sobre la
            necessitat d’extracció, el tipus de procediment i la recuperació esperable.
            La consulta està ubicada a la 3a planta del centre.
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
