"use client";

import { useState } from "react";
import { SkillCategory } from "@/types/portfolio";
import {
  Wrench,
  Code,
  ShieldAlert,
  Cpu,
  Search,
  Check,
  TerminalSquare,
  Globe,
} from "lucide-react";

interface SkillsProps {
  skills: SkillCategory[];
}

export function Skills({ skills }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Security Tools":
        return <Wrench className="w-5 h-5 text-cyber-accent" />;
      case "Programming":
        return <Code className="w-5 h-5 text-cyber-accent" />;
      case "Cybersecurity Concepts":
        return <ShieldAlert className="w-5 h-5 text-cyber-accent" />;
      case "CS Fundamentals":
        return <Cpu className="w-5 h-5 text-cyber-accent" />;
      case "Web Development":
      case "Web & Portfolio Stack":
        return <Globe className="w-5 h-5 text-cyber-accent" />;
      default:
        return <TerminalSquare className="w-5 h-5 text-cyber-accent" />;
    }
  };

  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredCategories = skills
    .filter((cat) => {
      if (activeCategory === "All") return true;
      return cat.category === activeCategory;
    })
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchingItems = cat.items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      return {
        ...cat,
        items: matchingItems,
      };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <section
      id="skills"
      className="py-24 relative bg-cyber-surface/50 border-t border-cyber-border/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="font-mono text-sm text-cyber-accent font-semibold">
            02.
          </div>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-cyber-border flex-grow max-w-md" />
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md font-mono text-xs transition-all duration-200 focus:outline-none ${
                  activeCategory === cat
                    ? "bg-cyber-accent text-cyber-bg font-bold shadow-[0_0_12px_rgba(0,242,255,0.4)]"
                    : "bg-cyber-card border border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-accent/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-cyber-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g., Nmap, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cyber-card border border-cyber-border rounded-lg pl-9 pr-4 py-1.5 text-xs text-cyber-text placeholder:text-cyber-muted/60 focus:outline-none focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-cyber-muted hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/40 transition-all duration-300 group shadow-sm hover:shadow-[0_4px_25px_rgba(0,242,255,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center group-hover:border-cyber-accent/30 transition-colors">
                      {getCategoryIcon(category.category)}
                    </div>
                    <div>
                      <h3 className="font-mono text-base font-bold text-white group-hover:text-cyber-accent transition-colors">
                        {category.category}
                      </h3>
                      {category.description && (
                        <p className="text-xs text-cyber-muted mt-0.5">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-cyber-accent bg-cyber-accent/10 px-2 py-0.5 rounded border border-cyber-accent/20">
                    {category.items.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyber-surface border border-cyber-border text-xs font-mono text-cyber-text hover:border-cyber-accent hover:text-cyber-accent transition-all duration-200 cursor-default group/tag"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent/40 group-hover/tag:bg-cyber-accent transition-colors" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyber-border/40 flex items-center justify-between text-[11px] font-mono text-cyber-muted">
                <span>VERIFIED_STACK</span>
                <span className="text-cyber-accent inline-flex items-center gap-1">
                  <Check className="w-3 h-3" /> Ready for production & labs
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 border border-dashed border-cyber-border rounded-xl">
            <p className="font-mono text-sm text-cyber-muted">
              No skills found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-3 font-mono text-xs text-cyber-accent underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
