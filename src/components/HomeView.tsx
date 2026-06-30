/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowRight, Recycle, Users, Heart, Droplet, Sparkles, Check, ChevronRight } from "lucide-react";
import { ActiveTab, Product } from "../types";
import { PRODUCTS, BRAND_IMAGES } from "../data";
import ImageOverlay from "./ImageOverlay";
import { motion } from "motion/react";

interface HomeViewProps {
  onNavigate: (tab: ActiveTab) => void;
  onViewImageDetail: (url: string, title: string) => void;
}

export default function HomeView({ onNavigate, onViewImageDetail }: HomeViewProps) {
  // Before & After Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = document.getElementById("before-after-slider");
    if (!container) return;
    const rect = container.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.type === "mousemove") return;
    const container = document.getElementById("before-after-slider");
    if (!container) return;
    const rect = container.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  // Featured items (pick first 3)
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div id="home-view" className="space-y-24 py-6">
      {/* 1. Hero Section */}
      <section id="hero-section" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Text Column */}
          <div className="space-y-6 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
            >
              <Recycle className="h-3.5 w-3.5" />
              <span>Moda Sustentável &amp; Upcycling Social</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
            >
              Moda Sustentável, Resgate e{" "}
              <span className="text-emerald-800 font-serif italic">Transformação Feminina</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base leading-relaxed text-stone-600 sm:text-lg"
            >
              Unimos a preservação do meio ambiente ao empoderamento de mulheres em vulnerabilidade social. 
              No <strong>EcoStilo &amp; Fios de Fé</strong>, calças jeans descartadas e retalhos industriais 
              são desconstruídos e ressignificados pelas mãos de nossas talentosas artesãs em bolsas exclusivas e peças de alta costura.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                id="hero-cta-catalog"
                onClick={() => onNavigate(ActiveTab.Upcycling)}
                className="flex items-center space-x-2 rounded-full bg-stone-900 px-6 py-3 font-sans text-sm font-semibold text-white shadow-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <span>Conhecer Processo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-cta-contact"
                onClick={() => onNavigate(ActiveTab.Contact)}
                className="flex items-center space-x-2 rounded-full border border-stone-200 bg-white px-6 py-3 font-sans text-sm font-semibold text-stone-700 shadow-xs hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <span>Como Ajudar</span>
              </button>
            </motion.div>
          </div>

          {/* Right Image Column with Premium Custom ImageOverlay */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="aspect-4/3 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-xl">
                <ImageOverlay
                  src={BRAND_IMAGES.denimBagHero}
                  alt="Bolsa upcycled premium EcoStilo"
                  title="Bolsa de Ombro Denim Upcycling"
                  onViewImageDetail={onViewImageDetail}
                  className="w-full h-full"
                />
              </div>

              {/* Highlighting Card Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-stone-100 bg-white p-4 shadow-lg hidden sm:flex items-center space-x-3 max-w-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                  <Droplet className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-sans text-2xs font-semibold text-stone-500 uppercase tracking-wide">
                    Consumo Consciente
                  </p>
                  <p className="font-sans text-xs font-bold text-stone-800">
                    -8.500 Litros de água por bolsa criada
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Impact Metrics Summary */}
      <section id="metrics-section" className="bg-[#FAF9F6] py-16 border-y border-stone-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Metric 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Recycle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-sans text-3xl font-extrabold text-stone-900 tracking-tight">
                  +5 Toneladas
                </p>
                <p className="font-sans text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                  Jeans Reutilizados
                </p>
                <p className="font-sans text-2xs text-stone-500 mt-1">
                  Desviados diretamente de aterros.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <Droplet className="h-6 w-6" />
              </div>
              <div>
                <p className="font-sans text-3xl font-extrabold text-stone-900 tracking-tight">
                  12M Litros
                </p>
                <p className="font-sans text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                  Água Preservada
                </p>
                <p className="font-sans text-2xs text-stone-500 mt-1">
                  Evitada pela não-produção de denim virgem.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="font-sans text-3xl font-extrabold text-stone-900 tracking-tight">
                  120+ Mulheres
                </p>
                <p className="font-sans text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                  Artesãs Formadas
                </p>
                <p className="font-sans text-2xs text-stone-500 mt-1">
                  Geração de renda e autonomia feminina.
                </p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-800">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <p className="font-sans text-3xl font-extrabold text-stone-900 tracking-tight">
                  100% Amor &amp; Fé
                </p>
                <p className="font-sans text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                  Histórias Reescritas
                </p>
                <p className="font-sans text-2xs text-stone-500 mt-1">
                  Reinserção e resgate da autoestima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Before/After Upcycling Slider */}
      <section id="before-after-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            A Arte da Reconstrução
          </h2>
          <p className="font-sans text-sm text-stone-600 sm:text-base">
            Arraste a barra central para comparar o material bruto (descarte têxtil acumulado) com o produto final de alto design costurado pelas nossas artesãs.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          id="before-after-slider"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          className="relative mx-auto aspect-16/9 w-full max-w-4xl select-none overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-xl cursor-ew-resize"
        >
          {/* Before Image (Left Side) */}
          <div className="absolute inset-0">
            <img
              src={BRAND_IMAGES.denimFabricStack}
              alt="Material Jeans Descartado"
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Label Before */}
            <div className="absolute top-4 left-4 rounded-md bg-stone-900/80 px-2.5 py-1 text-3xs font-bold text-stone-200 tracking-wider uppercase backdrop-blur-xs">
              Antes: Tecido Esquecido
            </div>
          </div>

          {/* After Image (Right Side, clipped based on sliderPosition) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          >
            <img
              src={BRAND_IMAGES.flatlayPremiumProducts}
              alt="Produto Upcycled EcoStilo"
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Label After */}
            <div className="absolute top-4 right-4 rounded-md bg-emerald-900/80 px-2.5 py-1 text-3xs font-bold text-white tracking-wider uppercase backdrop-blur-xs">
              Depois: Design &amp; Fé
            </div>
          </div>

          {/* Slider Line Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-md"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-800 shadow-xl border border-stone-200">
              <Recycle className="h-4 w-4 text-emerald-800 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Small Buttons to view direct images of the comparison */}
        <div className="flex justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6 flex-wrap">
          <button
            onClick={() => onViewImageDetail(BRAND_IMAGES.denimFabricStack, "Antes: Tecido Jeans Descartado")}
            className="inline-flex items-center space-x-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 font-sans text-2xs font-semibold text-stone-600 shadow-xs hover:bg-stone-50 cursor-pointer"
          >
            <Sparkles className="h-3 w-3 text-emerald-700" />
            <span>Link Direto: Tecido Bruto</span>
          </button>
          <button
            onClick={() => onViewImageDetail(BRAND_IMAGES.flatlayPremiumProducts, "Depois: Produto Final EcoStilo")}
            className="inline-flex items-center space-x-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 font-sans text-2xs font-semibold text-stone-600 shadow-xs hover:bg-stone-50 cursor-pointer"
          >
            <Sparkles className="h-3 w-3 text-emerald-700" />
            <span>Link Direto: Produto Final</span>
          </button>
        </div>
      </section>

      {/* 4. Destaques da Coleção */}
      <section id="collection-highlights" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="space-y-2">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Nossos Fios de Criação
            </h2>
            <p className="font-sans text-sm text-stone-600">
              Peças autorais tecidas individualmente, unindo ética, beleza e resistência.
            </p>
          </div>
          <button
            id="view-all-process"
            onClick={() => onNavigate(ActiveTab.Upcycling)}
            className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 font-sans text-sm font-bold text-emerald-800 hover:text-emerald-700 cursor-pointer transition-colors"
          >
            <span>Ver todo o processo de upcycling</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/60 bg-white shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Product Image via ImageOverlay */}
              <div className="aspect-square bg-stone-50 border-b border-stone-100">
                <ImageOverlay
                  src={product.imageUrl}
                  alt={product.title}
                  title={product.title}
                  onViewImageDetail={onViewImageDetail}
                  className="w-full h-full"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-2xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {product.category === "bags" ? "Bolsas" : product.category === "jackets" ? "Jaquetas" : "Acessórios"}
                    </span>
                    <span className="font-sans text-xs font-bold text-stone-900">{product.price}</span>
                  </div>
                  <h3 className="font-sans text-base font-bold text-stone-900 leading-snug">
                    {product.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed text-stone-500">
                    {product.description}
                  </p>
                </div>

                {/* Micro Metrics & Action */}
                <div className="mt-6 border-t border-stone-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-stone-500">
                    <Droplet className="h-3.5 w-3.5 text-blue-500" />
                    <span className="font-sans text-2xs font-bold text-stone-600">
                      -{product.impactMetrics.waterSaved.toLocaleString()}L de água
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate(ActiveTab.Contact)}
                    className="inline-flex h-7 items-center justify-center rounded-md bg-stone-900 px-3 font-sans text-2xs font-semibold text-white hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    Encomendar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mission Statement Hero with Background overlay */}
      <section id="social-hero-statement" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-950 px-6 py-20 shadow-xl sm:px-12 md:py-24">
          {/* Subtle geometric lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Fios de Fé que Transformam Vidas
            </h2>
            <p className="font-sans text-base leading-relaxed text-emerald-100 sm:text-lg">
              &ldquo;Antes, eu me via como aquele pedaço de pano rasgado na gaveta. Hoje, olhando para as bolsas que costuro, percebi que qualquer vida pode ser reconstruída e brilhar novamente.&rdquo;
            </p>
            <p className="font-sans text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              — Maria das Dores, Artesã EcoStilo
            </p>
            <div className="pt-4 flex justify-center space-x-4">
              <button
                onClick={() => onNavigate(ActiveTab.Impact)}
                className="rounded-full bg-white px-6 py-3 font-sans text-xs font-bold text-emerald-950 shadow-md hover:bg-stone-50 transition-colors cursor-pointer flex items-center space-x-1.5"
              >
                <span>Conhecer Projetos Sociais</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
