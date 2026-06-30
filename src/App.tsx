/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ActiveTab } from "./types";
import { BRAND_IMAGES } from "./data";
import Navigation from "./components/Navigation";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import UpcyclingView from "./components/UpcyclingView";
import SocialImpactView from "./components/SocialImpactView";
import ContactView from "./components/ContactView";
import ImageDetailModal from "./components/ImageDetailModal";
import { Image as ImageIcon, Copy, Check, ExternalLink, ChevronDown, ChevronUp, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<ActiveTab>(ActiveTab.Home);

  // Global Image Detail Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);
  const [modalImageTitle, setModalImageTitle] = useState<string | null>(null);

  // Media Panel Drawer State
  const [isMediaPanelOpen, setIsMediaPanelOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const openImageDetail = (url: string, title: string) => {
    setModalImageUrl(url);
    setModalImageTitle(title);
    setIsModalOpen(true);
  };

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error("Erro ao copiar link: ", err);
    }
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case ActiveTab.Home:
        return <HomeView onNavigate={setCurrentTab} onViewImageDetail={openImageDetail} />;
      case ActiveTab.About:
        return <AboutView onViewImageDetail={openImageDetail} />;
      case ActiveTab.Upcycling:
        return <UpcyclingView onViewImageDetail={openImageDetail} />;
      case ActiveTab.Impact:
        return <SocialImpactView onNavigate={setCurrentTab} onViewImageDetail={openImageDetail} />;
      case ActiveTab.Contact:
        return <ContactView onViewImageDetail={openImageDetail} />;
      default:
        return <HomeView onNavigate={setCurrentTab} onViewImageDetail={openImageDetail} />;
    }
  };

  // Convert BRAND_IMAGES object to iterable array with beautiful labels
  const allImages = [
    { key: "logo", label: "Logotipo Oficial do Projeto", url: BRAND_IMAGES.logo },
    { key: "favicon", label: "Ícone/Favicon Oficial do Projeto", url: BRAND_IMAGES.favicon },
    { key: "denimBagHero", label: "Bolsa de Ombro Premium", url: BRAND_IMAGES.denimBagHero },
    { key: "socialIntegration", label: "Roda de Costura & Diálogo", url: BRAND_IMAGES.socialIntegration },
    { key: "fashionModelJeans", label: "Modelo Estilando Upcycled Jeans", url: BRAND_IMAGES.fashionModelJeans },
    { key: "tailoringSetup", label: "Mesa de Design & Alfaiataria", url: BRAND_IMAGES.tailoringSetup },
    { key: "smilingArtisans", label: "Equipe de Artesãs Líderes", url: BRAND_IMAGES.smilingArtisans },
    { key: "denimFabricStack", label: "Pilha de Tecidos Jeans Brutos", url: BRAND_IMAGES.denimFabricStack },
    { key: "creativeStudioSketch", label: "Esboços Criativos & Design", url: BRAND_IMAGES.creativeStudioSketch },
    { key: "patchworkJacket", label: "Jaqueta Patchwork Exclusiva", url: BRAND_IMAGES.patchworkJacket },
    { key: "supportGroupSharing", label: "Sessão de Terapia & Partilha", url: BRAND_IMAGES.supportGroupSharing },
    { key: "workshopHandsOn", label: "Oficina de Costura Industrial", url: BRAND_IMAGES.workshopHandsOn },
    { key: "handbagLayoutDetail", label: "Detalhes de Costura & Zíper", url: BRAND_IMAGES.handbagLayoutDetail },
    { key: "creativeTeamMeeting", label: "Reunião e Alinhamento Técnico", url: BRAND_IMAGES.creativeTeamMeeting },
    { key: "denimScissorsCloseUp", label: "Ferramentas de Corte & Costura", url: BRAND_IMAGES.denimScissorsCloseUp },
    { key: "modelsGroupCollection", label: "Desfile da Coleção EcoStilo", url: BRAND_IMAGES.modelsGroupCollection },
    { key: "detailedStitchingLogo", label: "Acabamento de Linha e Pesponto", url: BRAND_IMAGES.detailedStitchingLogo },
    { key: "ladiesHoldingProducts", label: "Artesãs Celebrando Peças Prontas", url: BRAND_IMAGES.ladiesHoldingProducts },
    { key: "flatlayPremiumProducts", label: "Flatlay de Produtos Acabados", url: BRAND_IMAGES.flatlayPremiumProducts },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-stone-900 selection:bg-emerald-800 selection:text-white">
      {/* 1. Main Responsive Navbar */}
      <Navigation
        currentTab={currentTab}
        onChangeTab={setCurrentTab}
        onViewImageDetail={openImageDetail}
      />

      {/* 2. Main content area with smooth page transitions */}
      <main id="main-content-wrapper" className="flex-grow pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Section */}
      <footer id="main-footer" className="border-t border-stone-200 bg-[#f6f7f9] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Left Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setCurrentTab(ActiveTab.Home);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={BRAND_IMAGES.logo}
                  alt="EcoStilo & Fios de Fé Logo"
                  className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-sans text-xs leading-relaxed text-stone-500 max-w-sm">
                Uma iniciativa independente de moda circular regenerativa que resgata descartes têxteis denim, capacitando e acolhendo emocionalmente mulheres em situação de vulnerabilidade periférica.
              </p>
              <p className="font-mono text-3xs text-stone-400">
                © {new Date().getFullYear()} EcoStilo &amp; Fios de Fé. Todos os direitos reservados.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-stone-800">
                Menu de Navegação
              </h4>
              <ul className="space-y-2.5">
                {[
                  { id: ActiveTab.Home, label: "Página Inicial" },
                  { id: ActiveTab.About, label: "Nossa História" },
                  { id: ActiveTab.Upcycling, label: "Sustentabilidade" },
                  { id: ActiveTab.Impact, label: "Impacto Social" },
                  { id: ActiveTab.Contact, label: "Como Ajudar" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        setCurrentTab(link.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="font-sans text-xs font-semibold text-stone-500 hover:text-emerald-800 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-stone-800">
                Sede Administrativa
              </h4>
              <p className="font-sans text-xs leading-relaxed text-stone-500">
                Rua dos Retalhos, 120 — Brás<br />
                São Paulo - SP, Brasil
              </p>
              <div className="space-y-1">
                <p className="font-sans text-xs text-stone-500">
                  <strong>E-mail:</strong> contato@ecostilofiosdefe.org.br
                </p>
                <p className="font-sans text-xs text-stone-500">
                  <strong>Telefone:</strong> +55 (11) 98765-4321
                </p>
              </div>
            </div>
          </div>

          {/* 4. Transparência de Mídia Drawer Section (User Direct Link to Images requirement) */}
          <div id="media-panel-container" className="mt-16 border-t border-stone-100 pt-8">
            <button
              id="media-panel-toggle"
              onClick={() => setIsMediaPanelOpen(!isMediaPanelOpen)}
              className="flex w-full items-center justify-between rounded-xl bg-stone-50 px-5 py-4 border border-stone-200/60 hover:bg-stone-100/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3 text-stone-700">
                <ImageIcon className="h-5 w-5 text-emerald-800" />
                <div className="text-left">
                  <p className="font-sans text-xs font-bold text-stone-800">
                    Painel de Transparência de Mídia (HTML Image Links)
                  </p>
                  <p className="font-sans text-[10px] text-stone-500">
                    Acesse todos os links diretos de imagens utilizados na plataforma para uso em tags HTML.
                  </p>
                </div>
              </div>
              {isMediaPanelOpen ? (
                <ChevronUp className="h-5 w-5 text-stone-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-stone-400" />
              )}
            </button>

            <AnimatePresence>
              {isMediaPanelOpen && (
                <motion.div
                  id="media-panel-grid-container"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-6">
                    {allImages.map((img) => (
                      <div
                        key={img.key}
                        id={`media-link-card-${img.key}`}
                        className="flex items-center space-x-3 rounded-xl border border-stone-200/60 bg-white p-3 shadow-3xs"
                      >
                        {/* Thumbnail */}
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-stone-50 border border-stone-100">
                          <img
                            src={img.url}
                            alt={img.label}
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Name and Copy link container */}
                        <div className="flex-grow min-w-0">
                          <p className="font-sans text-2xs font-bold text-stone-800 truncate">
                            {img.label}
                          </p>
                          <div className="flex items-center space-x-1.5 mt-1.5">
                            <button
                              onClick={() => handleCopyLink(img.url)}
                              className="flex items-center space-x-1 rounded-md bg-stone-50 border border-stone-200 px-2 py-1 text-4xs font-bold uppercase tracking-wider text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                            >
                              {copiedUrl === img.url ? (
                                <>
                                  <Check className="h-2.5 w-2.5 text-emerald-700" />
                                  <span className="text-emerald-800">Copiado</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-2.5 w-2.5 text-stone-400" />
                                  <span>Copiar Link</span>
                                </>
                              )}
                            </button>

                            <a
                              href={img.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 rounded-md bg-stone-50 border border-stone-200 px-2 py-1 text-4xs font-bold uppercase tracking-wider text-stone-600 hover:bg-stone-100 transition-colors"
                            >
                              <ExternalLink className="h-2.5 w-2.5 text-stone-400" />
                              <span>Abrir Link</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </footer>

      {/* 5. Global Image Detail Modal */}
      <ImageDetailModal
        isOpen={isModalOpen}
        imageUrl={modalImageUrl}
        imageTitle={modalImageTitle}
        onClose={() => {
          setIsModalOpen(false);
          setModalImageUrl(null);
          setModalImageTitle(null);
        }}
      />
    </div>
  );
}
