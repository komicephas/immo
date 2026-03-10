import MaquetteScene from "@/components/MaquetteScene";

export default function Home() {
  return (
    <div className="min-h-screen text-[color:var(--ink-1)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[rgba(176,122,74,0.18)] blur-3xl" />
        <div className="absolute top-40 right-[-12rem] h-80 w-80 rounded-full bg-[rgba(107,122,86,0.22)] blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[color:var(--ink-1)] text-[color:var(--sand-1)] grid place-items-center text-sm font-semibold">
            CI
          </div>
          <div>
            <p className="font-display text-lg tracking-wide">Cour Immo</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-2)]">
              Projet Immobilier
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--ink-2)] md:flex">
          <a className="transition-colors hover:text-[color:var(--ink-1)]" href="#projet">
            Le projet
          </a>
          <a className="transition-colors hover:text-[color:var(--ink-1)]" href="#maquette">
            Maquette 3D
          </a>
          <a className="transition-colors hover:text-[color:var(--ink-1)]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-[color:var(--ink-1)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[color:var(--ink-1)] hover:text-[color:var(--sand-1)]"
        >
          Réserver une visite
        </a>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center gap-6">
            <span className="w-fit rounded-full border border-[color:var(--ink-2)]/30 px-4 py-1 text-xs uppercase tracking-[0.4em] text-[color:var(--ink-2)]">
              Présentation officielle
            </span>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">
              Cour Immo, une signature architecturale tournée vers l’élégance durable.
            </h1>
            <p className="text-base leading-relaxed text-[color:var(--ink-2)] md:text-lg">
              Un ensemble résidentiel pensé comme une cour-jardin contemporaine. Volumes
              chaleureux, matériaux nobles et circulation douce créent un lieu de vie à
              forte valeur patrimoniale.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#maquette"
                className="rounded-full bg-[color:var(--ink-1)] px-6 py-3 text-sm font-semibold text-[color:var(--sand-1)] transition-transform hover:-translate-y-0.5"
              >
                Explorer la maquette 3D
              </a>
              <a
                href="#projet"
                className="rounded-full border border-[color:var(--ink-1)]/30 px-6 py-3 text-sm font-semibold text-[color:var(--ink-1)] transition-colors hover:border-[color:var(--ink-1)]"
              >
                Découvrir le projet
              </a>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-2)]">
                  Livraison
                </p>
                <p className="font-display text-xl">Q4 2026</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-2)]">
                  Lots
                </p>
                <p className="font-display text-xl">36 unités</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-2)]">
                  Surface moyenne
                </p>
                <p className="font-display text-xl">92 m²</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -top-6 right-6 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-2)] shadow-sm backdrop-blur">
              maquette interactive
            </div>
            <div className="float-slow h-[420px] w-full overflow-hidden rounded-[32px] border border-white/80 bg-white/60 shadow-[0_30px_80px_rgba(34,28,16,0.2)] backdrop-blur">
              <MaquetteScene />
            </div>
          </div>
        </section>

        <section id="projet" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-white/70 bg-white/60 p-8 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink-2)]">
                Le concept Cour Immo
              </p>
              <h2 className="mt-4 font-display text-3xl">Une cour centrale qui devient un jardin habité.</h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-2)]">
                Cour Immo s’inspire des demeures traditionnelles et les réinterprète avec
                des lignes contemporaines. Chaque bâtiment est orienté pour maximiser la
                lumière naturelle et préserver l’intimité des résidents.
              </p>
              <div className="mt-6 grid gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--copper)]" />
                  <p className="text-sm text-[color:var(--ink-2)]">
                    Espaces communs généreux, circulation piétonne et zones de détente végétalisées.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--copper)]" />
                  <p className="text-sm text-[color:var(--ink-2)]">
                    Matériaux durables, façades texturées, et isolation thermique optimisée.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--copper)]" />
                  <p className="text-sm text-[color:var(--ink-2)]">
                    Accompagnement complet : financement, personnalisation, suivi de chantier.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-2)]">
                  Points forts
                </p>
                <h3 className="mt-4 font-display text-2xl">Une expérience résidentielle premium.</h3>
                <div className="mt-4 grid gap-4">
                  <div className="rounded-2xl border border-[color:var(--ink-1)]/10 bg-white/80 p-4">
                    <p className="text-sm font-semibold">Architecture signature</p>
                    <p className="text-sm text-[color:var(--ink-2)]">
                      Façades sculptées, jeux de volumes et finitions haut de gamme.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--ink-1)]/10 bg-white/80 p-4">
                    <p className="text-sm font-semibold">Espaces extérieurs privés</p>
                    <p className="text-sm text-[color:var(--ink-2)]">
                      Terrasses, patios et balcons pensés comme des pièces à vivre.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--ink-1)]/10 bg-white/80 p-4">
                    <p className="text-sm font-semibold">Services sur-mesure</p>
                    <p className="text-sm text-[color:var(--ink-2)]">
                      Conciergerie, sécurité, et gestion locative intégrée.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-[color:var(--ink-1)]/10 bg-[color:var(--ink-1)] p-6 text-[color:var(--sand-1)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand-1)]/70">
                  Signature Cour Immo
                </p>
                <p className="mt-3 font-display text-2xl">
                  “Concevoir un patrimoine vivant, élégant aujourd’hui et encore plus précieux demain.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="maquette" className="mx-auto w-full max-w-6xl px-6 pb-8">
          <div className="grid gap-8 rounded-[32px] border border-white/70 bg-white/60 p-8 shadow-sm backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-2)]">
                Maquette 3D
              </p>
              <h2 className="mt-4 font-display text-3xl">
                Visualisez l’ensemble en temps réel.
              </h2>
              <p className="mt-4 text-base text-[color:var(--ink-2)]">
                Utilisez la maquette interactive pour explorer les volumes, l’implantation
                des bâtiments et les zones paysagées. Cette version est un exemple — elle
                peut être remplacée par votre véritable modèle 3D.
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-[color:var(--ink-1)]/10 bg-white/80 p-4">
                  <p className="text-sm font-semibold">Interaction intuitive</p>
                  <p className="text-sm text-[color:var(--ink-2)]">
                    Rotation, zoom et points de vue pré-définis pour les investisseurs.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color:var(--ink-1)]/10 bg-white/80 p-4">
                  <p className="text-sm font-semibold">Prêt pour le réel</p>
                  <p className="text-sm text-[color:var(--ink-2)]">
                    Import d’une maquette Cour Immo en `.glb` ou `.gltf` dès qu’elle est prête.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[360px] overflow-hidden rounded-[28px] border border-white/80 bg-white/70 shadow-lg">
              <MaquetteScene />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/70 bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-2)]">
                Localisation
              </p>
              <p className="mt-3 font-display text-2xl">Quartier Cour Immo</p>
              <p className="mt-2 text-sm text-[color:var(--ink-2)]">
                À proximité immédiate des services, commerces et axes principaux.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/70 bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-2)]">
                Financement
              </p>
              <p className="mt-3 font-display text-2xl">Plans flexibles</p>
              <p className="mt-2 text-sm text-[color:var(--ink-2)]">
                Plusieurs formules d’investissement et échéanciers adaptés.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/70 bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-2)]">
                Accompagnement
              </p>
              <p className="mt-3 font-display text-2xl">Équipe dédiée</p>
              <p className="mt-2 text-sm text-[color:var(--ink-2)]">
                De la réservation à la remise des clés, un suivi premium.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="relative overflow-hidden rounded-[32px] bg-[color:var(--ink-1)] p-10 text-[color:var(--sand-1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,122,74,0.35),_transparent_60%)]" />
            <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sand-1)]/70">
                  Prenons rendez-vous
                </p>
                <h2 className="mt-4 font-display text-3xl">
                  Prêt à découvrir Cour Immo en détail ?
                </h2>
                <p className="mt-4 text-sm text-[color:var(--sand-1)]/80">
                  Demandez une présentation personnalisée, recevez la brochure complète et
                  la maquette 3D finale dès validation.
                </p>
              </div>
              <div className="grid gap-4 text-sm">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand-1)]/70">
                    Email
                  </p>
                  <p className="mt-2 font-semibold">contact@courimmo.com</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand-1)]/70">
                    Téléphone
                  </p>
                  <p className="mt-2 font-semibold">+228 90 00 00 00</p>
                </div>
                <a
                  href="mailto:contact@courimmo.com"
                  className="rounded-full bg-[color:var(--sand-1)] px-6 py-3 text-center text-sm font-semibold text-[color:var(--ink-1)] transition-transform hover:-translate-y-0.5"
                >
                  Demander la brochure
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

