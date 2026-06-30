/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { HelpCircle, Recycle, HeartHandshake, Sparkles, Palette, Quote, Link2 } from "lucide-react";
import { ARTISANS, TIMELINE, VALUES, BRAND_IMAGES } from "../data";
import ImageOverlay from "./ImageOverlay";
import { motion } from "motion/react";

interface AboutViewProps {
  onViewImageDetail: (url: string, title: string) => void;
}

export default function AboutView({ onViewImageDetail }: AboutViewProps) {
  // Map icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Recycle":
        return Recycle;
      case "HeartHandshake":
        return HeartHandshake;
      case "Sparkles":
        return Sparkles;
      case "Palette":
        return Palette;
      default:
        return HelpCircle;
    }
  };

  return (
    <div id="about-view" className="space-y-24 py-6">
      {/* 1. Hero / History Section */}
      <section id="about-hero" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Text */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center space-x-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Nossa Origem</span>
            </div>

            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              Tecendo recomeços, preservando o futuro e despertando a força de{" "}
              <span className="text-emerald-800 font-serif italic">cada mulher</span>.
            </h1>

            <div className="space-y-4 font-sans text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                O <strong>EcoStilo &amp; Fios de Fé</strong> nasceu do encontro entre a urgência ecológica e a necessidade de resgate social. Fundado em uma pequena comunidade periférica, percebemos que o denim — um dos tecidos mais poluentes e abundantes do mundo — possui uma resistência incrível, muito semelhante à força das mulheres que enfrentam realidades vulneráveis.
              </p>
              <p>
                Nossa missão é dupla: retirar das ruas toneladas de materiais têxteis que seriam queimados ou enterrados, e capacitar mulheres chefes de família no ramo da costura industrial de luxo. Proporcionamos não apenas o treinamento técnico, mas também um espaço seguro de acolhimento psicológico, desenvolvimento pessoal e incentivo à fé e à autonomia econômica.
              </p>
              <p className="font-medium text-stone-800">
                Aqui, cada fio costurado reconstrói o meio ambiente e reescreve uma nova narrativa de esperança.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="aspect-4/5 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-lg">
              <ImageOverlay
                src={BRAND_IMAGES.socialIntegration}
                alt="Mulheres reunidas costurando no workshop"
                title="Roda de Costura &amp; Diálogo"
                onViewImageDetail={onViewImageDetail}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values Grid */}
      <section id="values-section" className="bg-stone-50/70 py-20 border-y border-stone-200/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900">
              Nossos Valores Fundamentais
            </h2>
            <p className="font-sans text-sm text-stone-600">
              Guiados pela sustentabilidade real, respeito à vida humana e a busca contínua por inovação e fé.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((val, idx) => {
              const Icon = getIcon(val.icon);
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200/50 bg-white p-6 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-800 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-stone-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed text-stone-500">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Timeline */}
      <section id="timeline-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900">
            Nossa Jornada
          </h2>
          <p className="font-sans text-sm text-stone-600">
            Acompanhe o crescimento e o impacto do projeto ao longo dos anos.
          </p>
        </div>

        <div className="relative border-l border-stone-200 ml-4 md:ml-32">
          {TIMELINE.map((milestone, idx) => (
            <div key={idx} className="relative pl-8 pb-12 last:pb-0">
              {/* Dot marker */}
              <div className="absolute -left-2 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-800 bg-white shadow-xs" />

              {/* Content */}
              <div className="grid gap-2 md:grid-cols-12 md:gap-8">
                {/* Year tag */}
                <div className="md:col-span-2">
                  <span className="font-serif text-2xl font-bold italic text-emerald-800 leading-none">
                    {milestone.year}
                  </span>
                </div>
                {/* Text details */}
                <div className="md:col-span-10 space-y-1">
                  <h3 className="font-sans text-base font-bold text-stone-900">
                    {milestone.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-stone-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Artisans Leaders Spotlight */}
      <section id="artisans-spotlight" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900">
            Mãos que Tecem Esperança
          </h2>
          <p className="font-sans text-sm text-stone-600">
            Conheça as histórias das nossas artesãs líderes que transformam retalhos em pura poesia vestível.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {ARTISANS.map((artisan) => (
            <div
              key={artisan.id}
              id={`artisan-profile-${artisan.id}`}
              className="flex flex-col md:flex-row gap-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Profile Image Overlay */}
              <div className="w-full md:w-48 shrink-0 aspect-square md:aspect-4/5 overflow-hidden rounded-xl border border-stone-100">
                <ImageOverlay
                  src={artisan.imageUrl}
                  alt={artisan.name}
                  title={artisan.name}
                  onViewImageDetail={onViewImageDetail}
                  className="w-full h-full"
                />
              </div>

              {/* Story Details */}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="font-sans text-3xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {artisan.role}
                  </span>
                  <h3 className="font-sans text-lg font-bold text-stone-900">{artisan.name}</h3>
                  <p className="font-sans text-xs leading-relaxed text-stone-500">{artisan.bio}</p>
                </div>

                {/* Quote Box */}
                <div className="relative border-l-2 border-stone-200 bg-stone-50/50 p-3 rounded-r-lg">
                  <Quote className="absolute right-3 top-2 h-6 w-6 text-stone-200 rotate-180 pointer-events-none" />
                  <p className="font-sans text-[11px] italic leading-relaxed text-stone-600 pr-4">
                    &ldquo;{artisan.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
