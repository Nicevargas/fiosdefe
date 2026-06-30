/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, HeartHandshake, Sparkles, AlertCircle } from "lucide-react";
import { BRAND_IMAGES } from "../data";
import ImageOverlay from "./ImageOverlay";

interface ContactViewProps {
  onViewImageDetail: (url: string, title: string) => void;
}

export default function ContactView({ onViewImageDetail }: ContactViewProps) {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contributionType, setContributionType] = useState("materials");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Micro-Sponsorship state
  const [sponsorshipAmount, setSponsorshipAmount] = useState<number>(50);

  const handleSponsorshipChoice = (amount: number) => {
    setSponsorshipAmount(amount);
  };

  const getSponsorshipImpact = (amount: number) => {
    if (amount <= 20) {
      return {
        title: "Suprimento de Costura Diário",
        description: "Garante linhas 100% orgânicas de algodão reciclado e cursores de zíper reforçados para 2 alunas durante uma semana inteira de aprendizado prático.",
        impactBadge: "Insumos Garantidos"
      };
    } else if (amount <= 50) {
      return {
        title: "Apoio Psicológico Especializado",
        description: "Financia uma sessão completa de terapia em grupo semanal conduzida por psicólogos voluntários para acolher e reerguer a auto-estima de uma artesã.",
        impactBadge: "Saúde Mental & Fortalecimento"
      };
    } else if (amount <= 150) {
      return {
        title: "Manutenção de Máquinas Industriais",
        description: "Garante a revisão mecânica, troca de agulhas e lubrificação completa de 1 máquina de costura industrial doada por parceiros, permitindo o trabalho contínuo.",
        impactBadge: "Equipamento Operacional"
      };
    } else {
      return {
        title: "Micro-Bolsa de Liderança",
        description: "Contribui diretamente para o pagamento justo de uma semana de coordenação de turmas periféricas por Maria das Dores, nossa mestre artesã líder.",
        impactBadge: "Liderança Feminina Direta"
      };
    }
  };

  const activeImpact = getSponsorshipImpact(sponsorshipAmount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  return (
    <div id="contact-view" className="space-y-24 py-6">
      {/* 1. Hero Introduction */}
      <section id="contact-hero" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center space-x-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            <HeartHandshake className="h-3.5 w-3.5" />
            <span>Tecer a Corrente</span>
          </div>
          <h1 className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Semeando Fios de{" "}
            <span className="text-emerald-800 font-serif italic">Esperança e Futuro</span>
          </h1>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-stone-600">
            Cada nova colaboração é o início de um novo recomeço. Seja doando matérias-primas jeans, apoiando financeiramente o projeto de acolhimento social, ou adquirindo as nossas peças, você se torna parte viva da história de reabilitação destas mulheres e preservação de nosso ecossistema.
          </p>
        </div>
      </section>

      {/* 2. Interactive Micro-Sponsorship Simulator */}
      <section id="micro-sponsorship" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 md:p-12 shadow-md grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Simulator Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <span className="font-sans text-3xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Simulador de Solidariedade
              </span>
              <h2 className="font-sans text-2xl font-extrabold tracking-tight text-stone-900">
                Apoie um Fio de Esperança
              </h2>
              <p className="font-sans text-xs text-stone-500">
                Selecione um valor simbólico de apadrinhamento e veja instantaneamente como ele se converte em impacto humano e técnico real nas oficinas.
              </p>
            </div>

            {/* Quick buttons */}
            <div className="flex gap-2.5 flex-wrap">
              {[20, 50, 100, 250].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleSponsorshipChoice(amt)}
                  className={`rounded-xl px-5 py-3 font-sans text-sm font-bold tracking-tight border cursor-pointer transition-all ${
                    sponsorshipAmount === amt
                      ? "bg-emerald-800 border-emerald-800 text-white shadow-xs"
                      : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  R$ {amt}
                </button>
              ))}
            </div>

            {/* Range slider for Custom values */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <label className="font-sans text-2xs font-bold text-stone-500 uppercase tracking-wide">
                  Contribuição Personalizada
                </label>
                <span className="font-sans text-sm font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                  R$ {sponsorshipAmount}
                </span>
              </div>
              <input
                id="sponsorship-custom-range"
                type="range"
                min="10"
                max="500"
                step="5"
                value={sponsorshipAmount}
                onChange={(e) => setSponsorshipAmount(parseInt(e.target.value) || 10)}
                className="w-full accent-emerald-800 cursor-pointer"
              />
            </div>
          </div>

          {/* Simulator Display Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-dashed border-emerald-800/30 bg-emerald-50/20 p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-emerald-800/10 pointer-events-none">
                <Sparkles className="h-24 w-24" />
              </div>

              <div className="space-y-4">
                <span className="font-sans text-2xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                  {activeImpact.impactBadge}
                </span>

                <h3 className="font-sans text-xl font-bold text-stone-900">
                  {activeImpact.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-stone-600">
                  {activeImpact.description}
                </p>
              </div>

              <div className="border-t border-emerald-800/10 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-2xs text-stone-500">
                <p>
                  *Sua doação será fictícia neste protótipo, mas simula o modelo real de suporte.
                </p>
                <a
                  href="#contact-form-section"
                  className="font-sans font-bold text-emerald-800 hover:text-emerald-700 underline shrink-0"
                >
                  Entrar em contato para doar real
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Info and Form Section */}
      <section id="contact-form-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="font-sans text-2xl font-extrabold tracking-tight text-stone-900">
                Canais de Atendimento
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Você pode nos contatar diretamente por e-mail, telefone, ou vir pessoalmente visitar a nossa oficina em São Paulo para trazer sua caixa de jeans usados ou tomar um café com as nossas artesãs.
              </p>
            </div>

            <div className="space-y-5">
              {/* Contact item 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-600 border border-stone-200">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-sans text-2xs font-bold uppercase tracking-wider text-stone-400">
                    E-mail Oficial
                  </p>
                  <a
                    href="mailto:contato@ecostilofiosdefe.org.br"
                    className="font-sans text-sm font-semibold text-stone-800 hover:text-emerald-800 underline transition-colors"
                  >
                    contato@ecostilofiosdefe.org.br
                  </a>
                </div>
              </div>

              {/* Contact item 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-600 border border-stone-200">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-sans text-2xs font-bold uppercase tracking-wider text-stone-400">
                    WhatsApp &amp; Telefone
                  </p>
                  <a
                    href="tel:+5511987654321"
                    className="font-sans text-sm font-semibold text-stone-800 hover:text-emerald-800 underline transition-colors"
                  >
                    +55 (11) 98765-4321
                  </a>
                </div>
              </div>

              {/* Contact item 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-600 border border-stone-200">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-sans text-2xs font-bold uppercase tracking-wider text-stone-400">
                    Sede da Oficina Social
                  </p>
                  <p className="font-sans text-sm font-semibold text-stone-800">
                    Rua dos Retalhos, 120 — Brás, São Paulo - SP
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Location Map container with direct image link capability */}
            <div className="aspect-16/9 overflow-hidden rounded-xl border border-stone-200 bg-stone-50 shadow-xs">
              <ImageOverlay
                src={BRAND_IMAGES.tailoringSetup}
                alt="Mapa da Oficina EcoStilo"
                title="Interior de nossa Oficina Oficial (Brás - SP)"
                onViewImageDetail={onViewImageDetail}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-stone-900">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="font-sans text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Agradecemos imensamente o seu contato. Nossa equipe de acolhimento e a liderança de Maria das Dores responderá o seu e-mail ou WhatsApp em até 24 horas úteis.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="inline-flex items-center space-x-1.5 font-sans text-xs font-bold text-emerald-800 hover:text-emerald-700 underline mt-4 cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-sans text-lg font-bold text-stone-900">
                    Registre Sua Intenção de Doação / Parceria
                  </h3>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-stone-700">
                        Seu Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Clara Silva"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-800 placeholder-stone-400 focus:border-emerald-800 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-stone-700">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: clara@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-800 placeholder-stone-400 focus:border-emerald-800 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contribution Type */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-stone-700">
                      Como deseja apoiar?
                    </label>
                    <select
                      value={contributionType}
                      onChange={(e) => setContributionType(e.target.value)}
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-800 focus:border-emerald-800 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="materials">Doação de Jeans Usados / Retalhos</option>
                      <option value="sponsorship">Apadrinhamento Financeiro de Famílias</option>
                      <option value="volunteer">Trabalho Voluntário (Psicologia, Design, Vendas)</option>
                      <option value="retail">Parceria Comercial (Revenda de Bolsas)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-stone-700">
                      Descreva sua doação / mensagem
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descreva a quantidade aproximada de calças, sua disponibilidade, ou sua proposta..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-800 placeholder-stone-400 focus:border-emerald-800 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center space-x-2 rounded-xl bg-stone-900 px-4 py-3 font-sans text-sm font-bold text-white shadow-md hover:bg-stone-800 active:bg-stone-950 transition-colors cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Enviar Intenção de Ajuda</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
