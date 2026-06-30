/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Copy, Check, ExternalLink, X, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ImageDetailModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  imageTitle: string | null;
  onClose: () => void;
}

export default function ImageDetailModal({
  isOpen,
  imageUrl,
  imageTitle,
  onClose,
}: ImageDetailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!imageUrl) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar link: ", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="image-detail-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-stone-800 bg-[#121413] shadow-2xl"
          >
            {/* Header */}
            <div id="modal-header" className="flex items-center justify-between border-b border-stone-800 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-950/50 text-emerald-400">
                  <ImageIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-stone-200">
                    {imageTitle || "Detalhes da Imagem"}
                  </h3>
                  <p className="font-mono text-2xs text-stone-500">Mídia Original do Projeto</p>
                </div>
              </div>
              <button
                id="modal-close-button"
                onClick={onClose}
                className="rounded-full p-1.5 text-stone-400 hover:bg-stone-800 hover:text-stone-200 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div id="modal-body" className="grid gap-6 p-6 md:grid-cols-12">
              {/* Image Preview Container */}
              <div className="relative flex min-h-[250px] items-center justify-center rounded-xl bg-stone-950/40 p-2 md:col-span-7">
                <img
                  id="modal-preview-image"
                  src={imageUrl}
                  alt={imageTitle || "Preview"}
                  className="max-h-[400px] w-auto max-w-full rounded-lg object-contain shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* URL and Actions Panel */}
              <div className="flex flex-col justify-between space-y-6 md:col-span-5">
                <div className="space-y-4">
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Acesso Direto ao HTML
                  </h4>
                  <p className="font-sans text-sm leading-relaxed text-stone-300">
                    Você pode utilizar este link direto de imagem no seu código HTML, nos relatórios ou compartilhar livremente. Ela está hospedada em nosso servidor público seguro.
                  </p>

                  <div className="space-y-2">
                    <label className="font-sans text-2xs font-medium text-stone-400">
                      URL Direta da Imagem (Tag HTML src)
                    </label>
                    <div className="flex items-center space-x-2 rounded-lg border border-stone-800 bg-[#1A1D1B] p-2.5">
                      <input
                        id="modal-image-url-input"
                        type="text"
                        readOnly
                        value={imageUrl}
                        className="w-full bg-transparent font-mono text-xs text-emerald-400 focus:outline-none"
                        onClick={(e) => (e.target as HTMLInputElement).select()}
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2.5">
                  <button
                    id="modal-copy-button"
                    onClick={handleCopy}
                    className="flex w-full items-center justify-center space-x-2 rounded-xl bg-emerald-600 px-4 py-3 font-sans text-sm font-medium text-white shadow-lg hover:bg-emerald-500 active:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Link Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copiar Link da Imagem</span>
                      </>
                    )}
                  </button>

                  <a
                    id="modal-open-link"
                    href={imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-2 rounded-xl border border-stone-800 bg-[#1A1D1B] px-4 py-3 font-sans text-sm font-medium text-stone-300 hover:bg-stone-800 active:bg-stone-900 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Abrir em Nova Aba</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div id="modal-footer" className="bg-stone-950/20 px-6 py-3 border-t border-stone-800 flex justify-between items-center text-3xs text-stone-500">
              <span>EcoStilo & Fios de Fé — Plataforma de Transparência de Mídia</span>
              <span>Hospedado via Google Usercontent</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
