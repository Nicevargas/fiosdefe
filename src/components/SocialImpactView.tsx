/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Heart, HeartHandshake, Users, Sparkles, Brain, Quote, ArrowRight, Link2 } from "lucide-react";
import { ARTISANS, BRAND_IMAGES } from "../data";
import ImageOverlay from "./ImageOverlay";
import { motion, AnimatePresence } from "motion/react";

interface SocialImpactViewProps {
  onNavigate: (tab: any) => void;
  onViewImageDetail: (url: string, title: string) => void;
}

export default function SocialImpactView({ onNavigate, onViewImageDetail }: SocialImpactViewProps) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  // Focus on 3 key pillars of social transformation
  const pillars = [
    {
      title: "Oficinas de Costura e Ofício",
      description: "Capacitação profissional técnica de alto nível no corte, costura e acabamento industrial de jeans, tornando-as preparadas para o mercado nacional ou empreendedorismo autônomo.",
      icon: Users,
      color: "bg-emerald-50 text-emerald-800"
    },
    {
      title: "Suporte e Acolhimento Emocional",
      description: "Oferecemos sessões semanais de terapia em grupo, dinâmicas de apoio familiar e aconselhamento espiritual para fortalecimento íntimo, superando traumas históricos de abandono e violência.",
      icon: Brain,
      color: "bg-purple-50 text-purple-800"
    },
    {
      title: "Emprego e Geração de Renda",
      description: "Remuneração justa direta pelas peças costuradas, permitindo independência financeira real e imediata. 100% do lucro das vendas é revertido no salário delas e expansão das bolsas sociais.",
      icon: HeartHandshake,
      color: "bg-amber-50 text-amber-800"
    }
  ];

  const currentArtisan = ARTISANS[activeStoryIdx];

  return (
    <div id="social-impact-view" className="space-y-24 py-6">
      {/* 1. Hero Title Section */}
      <section id="impact-hero" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center space-x-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-800">
            <Heart className="h-3.5 w-3.5" />
            <span>Fé, Trabalho &amp; Acolhimento</span>
          </div>
          <h1 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Tecendo Dignidade e{" "}
            <span className="text-emerald-800 font-serif italic">Resiliência Feminina</span>
          </h1>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-stone-600">
            Muito além do resgate ecológico do denim, nossa missão essencial é restaurar a dignidade humana. Acolhemos mulheres chefes de família, sobreviventes de violência doméstica e desempregadas de longa duração, envolvendo-as em um ciclo completo de carinho, capacitação produtiva e reconstrução social.
          </p>
        </div>
      </section>

      {/* 2. Three Pillars of Support */}
      <section id="pillars-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/50 bg-white p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-stone-900">{pillar.title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-stone-500">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Deep Dive Testimonial/Story with Selection Navigation */}
      <section id="testimonials-carousel" className="bg-stone-50/70 py-20 border-y border-stone-200/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="space-y-2">
              <h2 className="font-sans text-2xl font-extrabold text-stone-900">
                Histórias Reescritas pelas Mãos
              </h2>
              <p className="font-sans text-sm text-stone-600">
                Clique nos nomes para conhecer as trajetórias de reinvenção de nossas artesãs líderes.
              </p>
            </div>

            {/* Selection Buttons */}
            <div className="flex space-x-2 mt-4 md:mt-0">
              {ARTISANS.map((art, idx) => (
                <button
                  key={art.id}
                  id={`story-selector-${art.id}`}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`rounded-full px-4 py-2 font-sans text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                    idx === activeStoryIdx
                      ? "bg-stone-900 text-white"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  {art.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Story Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStoryIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid gap-12 lg:grid-cols-12 lg:items-center rounded-3xl border border-stone-200 bg-white p-8 md:p-12 shadow-md"
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-square sm:aspect-4/3 lg:aspect-4/5 overflow-hidden rounded-2xl border border-stone-100">
                  <ImageOverlay
                    src={currentArtisan.imageUrl}
                    alt={currentArtisan.name}
                    title={`Retrato de ${currentArtisan.name}`}
                    onViewImageDetail={onViewImageDetail}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-7 space-y-6">
                <span className="font-sans text-3xs font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-full">
                  {currentArtisan.role}
                </span>

                <h3 className="font-sans text-3xl font-extrabold text-stone-900">
                  {currentArtisan.name}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-stone-600">
                  {currentArtisan.bio}
                </p>

                {/* Big Quote Block */}
                <div className="relative border-l-4 border-emerald-800 bg-stone-50 p-6 rounded-r-2xl">
                  <Quote className="absolute right-4 top-4 h-12 w-12 text-stone-200/50 rotate-180 pointer-events-none" />
                  <p className="font-sans text-sm italic leading-relaxed text-stone-700 font-medium pr-8">
                    &ldquo;{currentArtisan.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Beautiful Call to Action */}
      <section id="impact-cta-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
            <HeartHandshake className="h-7 w-7" />
          </div>
          <h2 className="font-sans text-2xl font-extrabold text-stone-900 sm:text-3xl">
            Sua Doação Multiplica Esperança
          </h2>
          <p className="font-sans text-sm text-stone-600 leading-relaxed">
            Nós precisamos de tecido denim de descarte (calças velhas, retalhos, jaquetas) e doações financeiras voluntárias para expandir o atendimento psicológico semanal e comprar mais maquinário. Participe desta corrente!
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center space-x-2 rounded-full bg-stone-900 px-6 py-3 font-sans text-xs font-bold text-white shadow-md hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <span>Quero Ser Parceiro</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
