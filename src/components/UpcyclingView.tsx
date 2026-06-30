/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Leaf, Droplet, Archive, Sparkles, Scissors, Layers, Heart, Info } from "lucide-react";
import { UPCYCLING_STEPS } from "../data";
import ImageOverlay from "./ImageOverlay";
import { motion, AnimatePresence } from "motion/react";

interface UpcyclingViewProps {
  onViewImageDetail: (url: string, title: string) => void;
}

export default function UpcyclingView({ onViewImageDetail }: UpcyclingViewProps) {
  // 1. Process Step State
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  // 2. Eco Calculator State
  const [jeansCount, setJeansCount] = useState(2);
  const [shirtCount, setShirtCount] = useState(1);
  const [jacketCount, setJacketCount] = useState(1);

  // Constants for calculations
  const WATER_PER_JEANS = 10000; // liters
  const WASTE_PER_JEANS = 650; // grams

  const WATER_PER_SHIRT = 7000;
  const WASTE_PER_SHIRT = 350;

  const WATER_PER_JACKET = 12000;
  const WASTE_PER_JACKET = 900;

  // Total Calculations
  const totalWaterSaved =
    jeansCount * WATER_PER_JEANS + shirtCount * WATER_PER_SHIRT + jacketCount * WATER_PER_JACKET;

  const totalWasteDiverted =
    jeansCount * WASTE_PER_JEANS + shirtCount * WASTE_PER_SHIRT + jacketCount * WASTE_PER_JACKET;

  // Convert waste to kilograms for better readability
  const wasteInKg = (totalWasteDiverted / 1000).toFixed(2);

  // Dynamic Step Icons mapping
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Archive":
        return Archive;
      case "Sparkles":
        return Sparkles;
      case "Scissors":
        return Scissors;
      case "Layers":
        return Layers;
      case "Heart":
        return Heart;
      default:
        return Leaf;
    }
  };

  const activeStep = UPCYCLING_STEPS[activeStepIdx];
  const StepIcon = getStepIcon(activeStep.iconName);

  return (
    <div id="upcycling-view" className="space-y-24 py-6">
      {/* 1. Hero Introduction */}
      <section id="upcycling-hero" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center space-x-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            <Leaf className="h-3.5 w-3.5" />
            <span>Circularidade Concreta</span>
          </div>
          <h1 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Tecendo Esperança com{" "}
            <span className="text-emerald-800 font-serif italic">Fios Esquecidos</span>
          </h1>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-stone-600">
            A indústria da moda tradicional é uma das mais poluentes do planeta, consumindo recursos hídricos brutais e gerando descartes contínuos de peças viáveis. No EcoStilo, redesenhamos este fluxo: cada peça jeans descartada é um recurso valioso que passa por desconstrução cirúrgica para ganhar uma nova vida requintada e artesanal.
          </p>
        </div>
      </section>

      {/* 2. Interactive Step-by-Step Workflow */}
      <section id="workflow-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: List of Steps */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="font-sans text-2xl font-extrabold text-stone-900 mb-6">
              Nossos 5 Fios do Processo
            </h2>
            <div className="space-y-3">
              {UPCYCLING_STEPS.map((step, idx) => {
                const IsActive = idx === activeStepIdx;
                const IconComponent = getStepIcon(step.iconName);
                return (
                  <button
                    key={step.number}
                    id={`step-selector-button-${step.number}`}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`flex w-full items-center space-x-4 rounded-xl border p-4 text-left transition-all cursor-pointer ${
                      IsActive
                        ? "border-emerald-800/80 bg-emerald-50/40 shadow-xs"
                        : "border-stone-200/60 bg-white hover:border-stone-300"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-sans text-sm font-bold transition-colors ${
                        IsActive ? "bg-emerald-800 text-white" : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="truncate">
                      <p
                        className={`font-sans text-sm font-bold transition-colors ${
                          IsActive ? "text-emerald-900" : "text-stone-800"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="font-sans text-2xs text-stone-500 mt-0.5 truncate">
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Step Detail Card with Image and Animations */}
          <div className="lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md flex flex-col justify-between h-full min-h-[480px]"
              >
                {/* Step Image */}
                <div className="aspect-16/10 border-b border-stone-100">
                  <ImageOverlay
                    src={activeStep.imageUrl}
                    alt={activeStep.title}
                    title={`Passo ${activeStep.number}: ${activeStep.title}`}
                    onViewImageDetail={onViewImageDetail}
                    className="w-full h-full"
                  />
                </div>

                {/* Step Text Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                      <StepIcon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-sans text-3xs font-bold uppercase tracking-wider text-emerald-800">
                      PASSO {activeStep.number} DE 5
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-extrabold text-stone-900">
                    {activeStep.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-stone-600">
                    {activeStep.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Eco Impact Simulator / Calculator */}
      <section id="eco-calculator-section" className="bg-[#F4F3EF] py-20 border-y border-stone-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Calculator Inputs */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <h2 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900">
                  Simulador de Impacto Ecológico
                </h2>
                <p className="font-sans text-sm text-stone-600">
                  Ajuste a quantidade de jeans que você ou sua confecção podem doar para ver o impacto exato em preservação de água e resgate de resíduos.
                </p>
              </div>

              <div className="space-y-6">
                {/* Input 1: Jeans */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-sans text-sm font-bold text-stone-800 flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      <span>Calças Jeans Desgastadas</span>
                    </label>
                    <span className="font-sans text-xs font-extrabold text-stone-700 bg-white px-2.5 py-1 rounded-md border border-stone-200">
                      {jeansCount} un.
                    </span>
                  </div>
                  <input
                    id="calculator-jeans-range"
                    type="range"
                    min="0"
                    max="50"
                    value={jeansCount}
                    onChange={(e) => setJeansCount(parseInt(e.target.value) || 0)}
                    className="w-full accent-emerald-800 cursor-pointer"
                  />
                </div>

                {/* Input 2: Shirts */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-sans text-sm font-bold text-stone-800 flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-400" />
                      <span>Camisas Jeans Sobressalentes</span>
                    </label>
                    <span className="font-sans text-xs font-extrabold text-stone-700 bg-white px-2.5 py-1 rounded-md border border-stone-200">
                      {shirtCount} un.
                    </span>
                  </div>
                  <input
                    id="calculator-shirts-range"
                    type="range"
                    min="0"
                    max="50"
                    value={shirtCount}
                    onChange={(e) => setShirtCount(parseInt(e.target.value) || 0)}
                    className="w-full accent-emerald-800 cursor-pointer"
                  />
                </div>

                {/* Input 3: Jackets */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-sans text-sm font-bold text-stone-800 flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-stone-500" />
                      <span>Jaquetas Antigas de Algodão</span>
                    </label>
                    <span className="font-sans text-xs font-extrabold text-stone-700 bg-white px-2.5 py-1 rounded-md border border-stone-200">
                      {jacketCount} un.
                    </span>
                  </div>
                  <input
                    id="calculator-jackets-range"
                    type="range"
                    min="0"
                    max="50"
                    value={jacketCount}
                    onChange={(e) => setJacketCount(parseInt(e.target.value) || 0)}
                    className="w-full accent-emerald-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Calculator Outputs / Display */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-lg space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-40 w-40 rounded-full bg-emerald-50 opacity-40 pointer-events-none" />

                <h3 className="font-sans text-base font-bold text-stone-900 border-b border-stone-100 pb-4">
                  Seu Impacto Coletivo Estimado
                </h3>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Output 1: Water */}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-blue-600">
                      <Droplet className="h-5 w-5" />
                      <span className="font-sans text-2xs font-bold uppercase tracking-wider text-stone-500">
                        Água Poupada
                      </span>
                    </div>
                    <p className="font-sans text-3xl font-black text-stone-900 tracking-tight">
                      {totalWaterSaved.toLocaleString()} L
                    </p>
                    <p className="font-sans text-[11px] leading-relaxed text-stone-500 mt-1">
                      Equivale a mais de{" "}
                      <strong>{Math.round(totalWaterSaved / 150)} chuveiros ligados</strong> por 15
                      minutos.
                    </p>
                  </div>

                  {/* Output 2: Waste */}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-emerald-600">
                      <Leaf className="h-5 w-5" />
                      <span className="font-sans text-2xs font-bold uppercase tracking-wider text-stone-500">
                        Lixo Têxtil Desviado
                      </span>
                    </div>
                    <p className="font-sans text-3xl font-black text-stone-900 tracking-tight">
                      {wasteInKg} kg
                    </p>
                    <p className="font-sans text-[11px] leading-relaxed text-stone-500 mt-1">
                      Material resistente que passa a rodar na <strong>Economia Circular</strong> de luxo.
                    </p>
                  </div>
                </div>

                {/* Helpful note */}
                <div className="flex items-start space-x-3 rounded-xl bg-stone-50 p-4 border border-stone-100">
                  <Info className="h-5 w-5 text-stone-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-[11px] leading-relaxed text-stone-500">
                    A indústria têxtil consome em média 10.000 litros de água para a confecção de um único par de calças jeans convencionais. O upcycling elimina 100% desta pegada hídrica de plantio e fiação!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
