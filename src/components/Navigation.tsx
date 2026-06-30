/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, X, Leaf, Sparkles, HeartHandshake, HelpCircle, ArrowUpRight, Link2 } from "lucide-react";
import { ActiveTab } from "../types";
import { BRAND_IMAGES } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  currentTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
  onViewImageDetail: (url: string, title: string) => void;
}

export default function Navigation({
  currentTab,
  onChangeTab,
  onViewImageDetail,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: ActiveTab.Home, label: "Início", icon: Sparkles },
    { id: ActiveTab.About, label: "Sobre Nós", icon: HelpCircle },
    { id: ActiveTab.Upcycling, label: "Upcycling & Eco", icon: Leaf },
    { id: ActiveTab.Impact, label: "Impacto Social", icon: HeartHandshake },
    { id: ActiveTab.Contact, label: "Fios de Esperança", icon: ArrowUpRight },
  ];

  return (
    <nav
      id="main-navigation"
      className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f6f7f9] shadow-xs"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onChangeTab(ActiveTab.Home)}>
            {/* Horizontal Logo Typography - Larger */}
            <div className="relative group h-16 flex items-center">
              <img
                src={BRAND_IMAGES.logo}
                alt="EcoStilo & Fios de Fé Logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Direct link for Logo */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewImageDetail(BRAND_IMAGES.logo, "Logotipo Oficial EcoStilo & Fios de Fé");
                }}
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-stone-950/90 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white flex items-center justify-center shadow-md border border-stone-800"
                title="Ver Logotipo Completo"
              >
                <Link2 className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => onChangeTab(item.id)}
                  className="relative px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide text-stone-600 transition-colors hover:text-stone-900 cursor-pointer flex items-center space-x-1.5"
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-emerald-700" : "text-stone-400"}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-stone-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-stone-100 bg-white"
          >
            <div className="space-y-1.5 px-4 py-4">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => {
                      onChangeTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center space-x-3 rounded-xl px-4 py-3 font-sans text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? "bg-emerald-50/70 text-emerald-900"
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-emerald-700" : "text-stone-400"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
