export default function LandingMaxilofacialVic() {
  const siteUrl = 'https://maxilofacialvic.cat';
  const appointmentUrl = 'https://citaweb.bayesconsultori.cat/#/login';
  const phoneHref = 'tel:+34938894404';
  const phoneDisplay = '938 89 44 04';
  const whatsappUrl = 'https://wa.me/34638338885';
  const whatsappDisplay = '638 33 88 85';
  const email = 'info@bayesdental.cat';
  const emailHref = 'mailto:info@bayesdental.cat';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Cirurgia Oral i Maxil·lofacial - Bayés Centre',
    description:
      'Consulta de cirurgia oral i maxil·lofacial a Vic, al Bayés Centre. Especialistes en queixals del seny, implants dentals, dents incloses i cirurgia oral complexa per a pacients de Vic i Osona.',
    telephone: '+34 938 89 44 04',
    email: email,
    url: siteUrl,
    image: `${siteUrl}/logo-bayes-centre.png`,
    medicalSpecialty: 'Oral and Maxillofacial Surgery',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer de Sant Just, 1',
      addressLocality: 'Vic',
      addressRegion: 'Barcelona',
      postalCode: '08500',
      addressCountry: 'ES',
    },
    areaServed: [
      'Vic',
      'Osona',
      'Manlleu',
      'Torelló',
      'Centelles',
      'Tona',
      'Taradell',
      'Roda de Ter',
      'Gurb',
      'Sant Hipòlit de Voltregà',
    ],
    sameAs: ['https://bayesconsultori.cat/', appointmentUrl],
  };

  const treatments = [
    {
      title: 'Queixals del seny',
      text: 'Valoració i extracció de queixals del seny inclosos, semiinclosos o complexos amb una planificació segura i personalitzada.',
    },
    {
      title: 'Implants dentals',
      text: 'Tractaments amb implants dentals en casos senzills i complexos, amb enfocament funcional, estètic i quirúrgic.',
    },
    {
      title: 'Cirurgia oral',
      text: 'Tractament de dents incloses, quists maxil·lars, infeccions, patologia oral i altres procediments de cirurgia oral i maxil·lofacial.',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Alfonso Mogedas Vegara',
      role: 'Cirurgià oral i maxil·lofacial',
      img: '/doctors/mogedas.jpg',
      position: 'center 32%',
      bio: 'Llicenciat en Medicina i Cirurgia per la UMH d’Alacant. Especialista en Cirurgia Oral i Maxil·lofacial via MIR a l’Hospital Vall d’Hebron. Doctor en Medicina i Cirurgia Cum Laude per la UAB i Fellow of the European Board of Oral and Maxillofacial Surgery. Actualment combina l’activitat hospitalària i privada amb una dedicació especial a la cirurgia oral, els queixals del seny complexos i els implants dentals.',
    },
    {
      name: 'Dra. Lídia Darder',
      role: 'Cirurgiana oral i maxil·lofacial',
      img: '/doctors/lidia-darder.jpg',
      position: 'center 18%',
      bio: 'Especialista en Cirurgia Oral i Maxil·lofacial. Desenvolupa la seva activitat assistencial amb un enfocament proper, rigorós i orientat al tractament personalitzat de cada pacient. Té especial dedicació a la cirurgia oral, els queixals del seny, les dents incloses i els tractaments implantològics.',
    },
  ];

  const nearbyCities = [
    'Vic',
    'Manlleu',
    'Torelló',
    'Tona',
    'Taradell',
    'Centelles',
    'Roda de Ter',
    'Gurb',
    'Sant Julià de Vilatorta',
    'Osona',
  ];

  function TeamMemberCard({ doctor }) {
    return (
      <article className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="mb-4 h-80 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="block h-full w-full object-cover"
            style={{ objectPosition: doctor.position || 'center 30%' }}
            loading="lazy"
          />
        </div>

        <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-emerald-700">{doctor.role}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{doctor.bio}</p>
      </article>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo-bayes-centre.png"
              alt="Bayés Centre"
              className="h-14 w-auto"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Bayés Centre · Vic
              </p>
              <p className="text-sm font-medium text-slate-600">
                Cirurgia oral i maxil·lofacial
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Demanar visita
            </a>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-white pb-24 text-slate-900 selection:bg-emerald-100">
        <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-sm font-medium text-slate-700">
                Cirurgia oral i maxil·lofacial · Bayés Centre · Vic
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Cirurgia maxil·lofacial a Vic per a pacients d’Osona
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                A Bayés Centre, a Vic, atenem pacients que necessiten extracció de
                queixals del seny, tractament de dents incloses, cirurgia oral i
                implants dentals. Oferim una atenció propera, especialitzada i
                personalitzada per a Vic i tota la comarca d’Osona.
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

                <a
                  href={emailHref}
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-50"
                >
                  Correu electrònic
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                També ens pots escriure per WhatsApp al {whatsappDisplay} o a {email}{' '}
                per demanar informació o sol·licitar visita.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Tractaments destacats
                </p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• Extracció de queixals del seny complexos</li>
                  <li>• Dents incloses i dents retingudes</li>
                  <li>• Quists maxil·lars i cirurgia oral</li>
                  <li>• Implants dentals unitaris i múltiples</li>
                  <li>• Valoració de casos quirúrgics complexos</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">Vic</p>
                <p className="mt-2 text-slate-600">
                  Atenció especialitzada al nou Bayés Centre
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-slate-900">3a planta</p>
                <p className="mt-2 text-slate-600">Consulta de cirurgia maxil·lofacial</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              A qui va dirigida aquesta pàgina?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              A persones que busquen un cirurgià maxil·lofacial a Vic per resoldre
              problemes com queixals del seny inclosos, dolor o infecció dental,
              dents retingudes, quists dels maxil·lars o la necessitat de col·locar
              implants dentals. Atenció especialitzada, propera i orientada a la
              cirurgia oral i maxil·lofacial a Osona.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyCities.map((city) => (
              <span
                key={city}
                className="rounded-full bg-emerald-100 px-4 py-2 text-sm text-slate-700"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-emerald-50/60">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Què tractem
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Tractem patologia habitual i complexa de cirurgia oral i
                maxil·lofacial, amb especial dedicació als queixals del seny, la
                cirurgia oral avançada i els implants dentals.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {treatments.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Equip de cirurgia maxil·lofacial
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                Equip format pel Dr. Alfonso Mogedas Vegara i la Dra. Lídia Darder,
                especialistes en cirurgia oral i maxil·lofacial. Atenció a pacients
                amb queixals del seny inclosos, cirurgia oral i tractaments amb
                implants dentals a Vic.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {doctors.map((doctor) => (
                  <TeamMemberCard key={doctor.name} doctor={doctor} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                On som
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Bayés Centre
                <br />
                Carrer de Sant Just, 1
                <br />
                08500 Vic, Barcelona
                <br />
                3a planta
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Carrer+de+Sant+Just,+1,+Vic&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Bayés Centre Vic"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Sant+Just,+1,+Vic"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Com arribar amb Google Maps
              </a>

              <div className="mt-8 space-y-3 text-slate-700">
                <p>
                  <span className="font-semibold">Telèfon:</span> {phoneDisplay}
                </p>
                <p>
                  <span className="font-semibold">WhatsApp:</span> {whatsappDisplay}
                </p>
                <p>
                  <span className="font-semibold">Correu:</span> {email}
                </p>
                <p>
                  <span className="font-semibold">Consulta:</span> 3a planta
                </p>
                <p>
                  <span className="font-semibold">Centre:</span> Bayés Centre, Vic
                </p>
                <p>
                  <span className="font-semibold">Demanar visita:</span>{' '}
                  <a
                    href={appointmentUrl}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cita online
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Extracció de queixals del seny a Vic
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Els queixals del seny poden provocar dolor, infeccions repetides,
              inflamació de la geniva o afectació de les dents del costat. A la
              nostra consulta de Vic estem especialitzats en l’extracció de
              queixals del seny inclosos o complexos, amb una planificació
              individualitzada per a cada pacient.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Valorem cada cas amb radiografies o TAC dental quan cal, per determinar
              la posició exacta de la dent i planificar la cirurgia amb la màxima
              precisió.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-emerald-50/60">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Implants dentals a Vic
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Els implants dentals permeten substituir dents perdudes recuperant la
                funció masticatòria i l’estètica. A Bayés Centre realitzem tant
                implants unitaris com rehabilitacions més complexes.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                També valorem casos amb pèrdua d’os, dents incloses o situacions
                quirúrgiques complexes que requereixen l’opinió d’un cirurgià
                maxil·lofacial.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Cirurgia oral i maxil·lofacial a Vic i Osona
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              La nostra consulta està orientada al diagnòstic i al tractament
              quirúrgic de patologies de la cavitat oral i dels maxil·lars. Atenem
              pacients de Vic i de tota la comarca d’Osona que necessiten cirurgia
              oral especialitzada.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Entre els tractaments més freqüents hi ha l’extracció de queixals del
              seny complexos, el tractament de dents incloses, la cirurgia de quists
              maxil·lars i la col·locació d’implants dentals.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              El nostre objectiu és oferir una atenció mèdica propera, segura i
              personalitzada, amb una valoració rigorosa i una explicació clara de
              cada tractament.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Preguntes freqüents
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Quan cal treure els queixals del seny?
              </h3>
              <p className="mt-2">
                L’extracció se sol recomanar quan provoquen dolor, infeccions
                repetides, inflamació de la geniva, càries a la dent del costat o
                quan romanen retinguts dins l’os. Cada cas s’ha de valorar amb
                exploració clínica i radiografies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Fa mal treure un queixal del seny?
              </h3>
              <p className="mt-2">
                La intervenció es realitza habitualment amb anestèsia local i, en
                alguns casos, amb sedació. Durant el procediment el pacient no nota
                dolor. Després de la cirurgia pot aparèixer inflamació o molèsties
                lleus, que normalment es controlen amb medicació i cures
                postoperatòries.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Quant temps dura la recuperació?
              </h3>
              <p className="mt-2">
                La recuperació acostuma a ser ràpida. La majoria de pacients poden
                reprendre les seves activitats habituals en pocs dies. La inflamació
                disminueix progressivament durant la primera setmana seguint les
                indicacions del cirurgià.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Quan és recomanable col·locar un implant dental?
              </h3>
              <p className="mt-2">
                Els implants dentals estan indicats quan s’ha perdut una o diverses
                dents i es vol recuperar la funció masticatòria i l’estètica. Abans
                del tractament s’avalua la quantitat i la qualitat de l’os amb
                radiografies o TAC dental.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Quant dura un implant dental?
              </h3>
              <p className="mt-2">
                Amb una bona planificació quirúrgica i una higiene oral adequada, els
                implants dentals poden mantenir-se en bon estat durant molts anys.
                Les revisions periòdiques i el manteniment són fonamentals per al seu
                èxit a llarg termini.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Informació ampliada sobre tractaments
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Per als pacients que volen conèixer millor els tractaments més habituals
            de cirurgia oral, prepararem pàgines específiques amb informació més
            detallada.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/queixals-del-seny-vic"
              className="block rounded-3xl border border-slate-200 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                Queixals del seny a Vic
              </h3>
              <p className="mt-3 text-slate-700">
                Informació sobre queixals del seny inclosos, símptomes, quan és
                recomanable l’extracció i com és la recuperació.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">
                Veure informació completa →
              </span>
            </a>

            <a
              href="/implants-dentals-vic"
              className="block rounded-3xl border border-slate-200 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                Implants dentals a Vic
              </h3>
              <p className="mt-3 text-slate-700">
                Explicació completa del tractament amb implants dentals, planificació
                quirúrgica i valoració de casos complexos.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">
                Veure informació completa →
              </span>
            </a>
          </div>
        </section>

        <section
          className="bg-gradient-to-r from-emerald-800 to-teal-600 text-white"
          id="contacte"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Tens dolor per un queixal del seny o necessites valorar implants?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
              El nostre equip de cirurgia oral i maxil·lofacial a Vic et pot ajudar a
              valorar el cas i orientar-te sobre el tractament més adequat.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:opacity-90"
              >
                Demanar visita online
              </a>

              <a
                href={phoneHref}
                className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Trucar ara
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Escriure per WhatsApp
              </a>
            </div>
          </div>
        </section>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escriure per WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
        >
          <span className="text-lg">💬</span>
          WhatsApp
        </a>

        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl gap-3">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-2xl bg-emerald-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Cita online
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
