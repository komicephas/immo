"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import MaquetteScene from "@/components/MaquetteScene";

const slides = [
  {
    id: "cover",
    title: "COUR IMMO",
    subtitle: "Transformer les cours communes en logements modernes à Adidogomé",
    blocks: [
      "Business Plan Immobilier",
      "Lomé, Togo",
      "Nom du promoteur",
      "10 mars 2026",
    ],
    variant: "cover",
  },
  {
    id: "probleme",
    title: "Problème du logement à Lomé",
    blocks: [
      "Forte croissance démographique à Lomé",
      "Forte demande de logements pour étudiants et jeunes travailleurs",
      "Deux offres actuelles :",
      "Appartements modernes trop chers",
      "Cours communes souvent insalubres",
      "Conclusion : besoin d’un logement accessible, moderne et sécurisé",
    ],
  },
  {
    id: "solution",
    title: "Notre solution",
    blocks: [
      "COUR IMMO transforme des cours communes dégradées en studios modernes et fonctionnels.",
      "Concept :",
      "Rénovation de chambres existantes",
      "Aménagement en studios équipés",
      "Gestion professionnelle",
      "Service Label Cour Propre",
      "Résultat : logements modernes, loyers accessibles, valorisation du patrimoine local",
    ],
  },
  {
    id: "maquette",
    title: "Maquette 3D interactive",
    blocks: [
      "Modélisation immersive pour présenter l’architecture et les volumes.",
      "La maquette finale remplacera ce prototype dès réception du modèle 3D officiel.",
    ],
    variant: "visual",
  },
  {
    id: "offre",
    title: "Notre offre locative",
    blocks: [
      "Studio Standard — 25 000 FCFA",
      "Lit superposé",
      "Mini réfrigérateur",
      "Ventilateur",
      "Douche interne",
      "Cuisine équipée",
      "Studio Palette — 20 000 FCFA",
      "Lit palette design",
      "Ventilateur",
      "Équipements cuisine",
      "Douche interne",
    ],
  },
  {
    id: "label",
    title: 'Label "Cour Propre"',
    blocks: [
      "Services inclus :",
      "Nettoyage hebdomadaire",
      "Internet haut débit",
      "Gestion de l’eau",
      "Éclairage sécurisé",
      "Maintenance régulière",
      "Objectif : offrir un cadre de vie sain et sécurisé",
    ],
  },
  {
    id: "marche",
    title: "Marché cible",
    blocks: [
      "Zone : Adidogomé, Lomé",
      "Clients : étudiants (L3 / Master), jeunes travailleurs, primo-locataires",
      "Pourquoi ce marché ?",
      "Forte demande",
      "Loyers accessibles",
      "Proximité des écoles et entreprises",
    ],
  },
  {
    id: "positionnement",
    title: "Positionnement",
    blocks: [
      "COUR IMMO se situe entre deux offres du marché :",
      "Cours communes classiques — peu confortables",
      "Appartements modernes — trop chers",
      "Notre position : logement moderne à prix accessible",
    ],
  },
  {
    id: "business-model",
    title: "Business Model",
    blocks: [
      "1. Location d’une cour commune",
      "2. Rénovation et aménagement",
      "3. Location en studios équipés",
      "4. Gestion locative professionnelle",
      "Sources de revenus : loyers mensuels",
    ],
  },
  {
    id: "plan-action",
    title: "Mise en œuvre du projet",
    blocks: [
      "Phase 1 : Audit et rénovation (1 mois)",
      "Phase 2 : Équipement des studios",
      "Phase 3 : Commercialisation",
      "Phase 4 : Gestion locative continue",
    ],
  },
  {
    id: "organisation",
    title: "Organisation",
    blocks: [
      "Promoteur : stratégie, gestion financière, développement du projet",
      "Gestionnaire : relation locataires, collecte loyers, gestion maintenance",
      "Artisans partenaires : électriciens, plombiers, techniciens",
    ],
  },
  {
    id: "risques",
    title: "Risques et solutions",
    blocks: [
      "Vacance locative ? Liste d’attente",
      "Impayés ? Paiement Mobile Money",
      "Dégradation ? Caution 2 mois",
      "Pannes techniques ? Artisans partenaires",
    ],
  },
  {
    id: "investissement",
    title: "Investissement",
    blocks: [
      "Total : 2 847 000 FCFA",
      "Détail :",
      "Avance propriétaire : 1 500 000 FCFA",
      "Équipement : 1 047 000 FCFA",
      "Rénovation : 300 000 FCFA",
    ],
  },
  {
    id: "rentabilite",
    title: "Performance financière",
    blocks: [
      "Revenus mensuels : 270 000 FCFA",
      "Charges : 175 000 FCFA",
      "Profit net : 95 000 FCFA / mois",
    ],
  },
  {
    id: "vision",
    title: "Stratégie de croissance",
    blocks: [
      "Objectif : multiplier les unités COUR IMMO",
      "Rénover plusieurs cours communes",
      "Créer un réseau de logements étudiants",
      "Vision : devenir une référence du logement étudiant à Lomé",
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    blocks: [
      "COUR IMMO propose : solution rapide, investissement rentable, impact social fort",
      "Résultat : logement digne pour la jeunesse, valorisation du patrimoine local",
    ],
  },
];

export default function SlideDeck() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ids = useMemo(() => slides.map((slide) => slide.id), []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const bounded = Math.max(0, Math.min(slides.length - 1, index));
      const target = document.getElementById(ids[bounded]);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveIndex(bounded);
      }
    },
    [ids]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        scrollToIndex(activeIndex + 1);
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        scrollToIndex(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    const onScroll = () => {
      const positions = ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) {
          return { id, distance: Infinity };
        }
        const rect = el.getBoundingClientRect();
        return { id, distance: Math.abs(rect.top) };
      });
      const nearest = positions.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );
      const index = ids.indexOf(nearest.id);
      if (index !== -1) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return (
    <div className="relative min-h-screen">
      <aside className="pointer-events-none fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-3 rounded-full border border-white/40 bg-white/60 px-3 py-4 text-xs text-[color:var(--ink-2)] shadow-lg backdrop-blur">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`pointer-events-auto h-2.5 w-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-[color:var(--ink-1)]"
                  : "bg-[color:var(--ink-2)]/40 hover:bg-[color:var(--ink-1)]/70"
              }`}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      </aside>

      <div className="snap-container">
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            id={slide.id}
            className={`snap-slide ${
              slide.variant === "cover"
                ? "slide-cover"
                : slide.variant === "visual"
                ? "slide-visual"
                : "slide-standard"
            }`}
          >
            <div className="slide-inner">
              <div className="slide-meta">
                <span className="slide-chip">Slide {index + 1}</span>
                {slide.variant === "cover" ? (
                  <img
                    src="/logo.png"
                    alt="Cour Immo"
                    className="h-20 w-20 object-contain"
                  />
                ) : null}
                <h1 className="slide-title font-display">{slide.title}</h1>
                {slide.subtitle ? (
                  <p className="slide-subtitle">{slide.subtitle}</p>
                ) : null}
              </div>

              {slide.variant === "visual" ? (
                <div className="slide-visual-grid">
                  <div className="slide-copy">
                    {slide.blocks.map((block, blockIndex) => (
                      <p key={blockIndex} className="slide-text">
                        {block}
                      </p>
                    ))}
                  </div>
                  <div className="slide-visual-card">
                    <MaquetteScene />
                  </div>
                </div>
              ) : (
                <div className="slide-body">
                  {slide.blocks.map((block, blockIndex) => (
                    <p key={blockIndex} className="slide-text">
                      {block}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}


