"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  Star, Sparkles, Rocket, LayoutDashboard, Shield, Palette,
  Wand2, Code2, CheckCircle2, MoveRight, ArrowRight, Mail, Phone, MapPin,
  Github, Linkedin, Twitter, Instagram, ChevronRight, Heart, Camera,
  CreditCard, Leaf, Sun, Moon, Flame, Cloud, Cpu
} from "lucide-react";

/**
 * Full-Fledged Tailwind Styling Playground
 * -------------------------------------------------------------
 * ✅ Focus: CSS (Tailwind) & layout only; no functionality/logic
 * ✅ Built with React + TypeScript
 * ✅ Includes dozens of styled sections to learn modern UI patterns
 *
 * Tip: Use this as a playground. Duplicate sections, tweak classes,
 * swap palettes, and practice responsive design.
 */

// Simple helpers for reusable UI blocks (pure CSS + Tailwind)
const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative w-full py-20 md:py-28 ${className}`}>
    <div className="container mx-auto md:px-8 max-w-7xl">{children}</div>
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-medium uppercase tracking-wide text-white/90 backdrop-blur-sm">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={` rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_40px_-12px_rgba(0, 0, 0, 0.4)] backdrop-blur-xl ${className}`}>{children}</div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-pink-500/20 px-4 py-1.5 text-xs text-white ring-1 ring-white/10">
    <Star className="h-3.5 w-3.5" /> {children}
  </span>
);

const GradientDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
);

export default function TailwindMegaUI() {
  return (
    <main className="min-h-screen w-full text-white bg-[#0B0B12] selection:bg-fuchsia-500/30 selection:text-white">
      {/* ======= Global Background ======= */}
      <div aria-hidden className="pointer-events-none fixes inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(107,33,168,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(219,39,119,0.18),transparent)]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 40 V0 H40\' fill=\'none\' stroke=\'rgba(255,255,255,0.06)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23p)\'/%3E%3C/svg%3E')",
        }} />
      </div>

      {/* ======= Navbar ======= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B12]/60 backdroup-blur-xl">
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4 py-4 md:px-8">
          <div className="flex items-center gap-3" >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30">
              <Rocket className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm text-white/70">Strishop</p>
              <h1 className="text-lg font-semibold">Tailwind Playground</h1>
            </div>
          </div>
          <ul className="hiddin items-center gap-8 text-sm text-white/80 md:flex">
            {[
              ["Home", "#home"],
              ["Features", "#features"],
              ["Showcase", "#showcase"],
              ["Pricing", "#pricing"],
              ["Dashboard", "#dashboard"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a className="group inline-flex items-center gap-1 hover:text-white" href={href}>
                  {label}
                  <ChevronRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <a href="#pricing" className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-semibold text-[#0B0B12] shadow-[0_6px_24px_-4px_rgba(255,255,255,0.6)]">
              Explore UI <MoveRight className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 bg-white/5 text-sm">
            Menu
          </button>
        </div>
      </nav>

      {/* ======= Hero ======= */}
      <Section id="home" className="pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <Badge>Learn CSS by Styling</Badge>
            <Pill>React + TypeScript + Tailwind</Pill>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          >
            Build stunning interfaces with only <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Tailwind CSS</span>
          </motion.h2>
          <p className="mt-5 text-lg text-white/70">
            A mega playground packed with beautifully styled sections. Duplicate, remix, and master utility-first design.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#showcase" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full px-5 py-3 font-semibold shadow-lg shadow-indigo-500/30">
              Browse Components <ArrowRight className="" />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold">
              See Pricing Styles
            </a>
          </div>
          <div className="pointer-events-none relative mt-14">
            <div className="absolute -z-10 inset-0 blur-3xl" style={{
              background:
                "radial-gradient(40%_60%_at_50%_50%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(50%_50%_at_70%_40%, rgba(236,72,153,0.2), transparent 70%)",
            }} />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
              {["/", "/", "/", "/", "/", "/", "/", "/"].map((_, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-inner">
                  <img
                    src={`https://picsum.photos/seed/tw-${i}/800/600`}
                    alt="Showcase"
                    className="h-full w-full object-cover opacity-90 transition hover:scale-105 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ======= Feature Grid ======= */}
      <Section id="features" className="bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-white/90">Feature Patterns</h3>
          <p className="mt-2 text-white/60">Practice card layouts, icons, and responsive grids.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <LayoutDashboard className="h-6 w-6" />, title: "Glassmorphism", desc: "Frosted surfaces with soft borders and glow." },
            { icon: <Shield className="h-6 w-6" />, title: "Neumorphism", desc: "Subtle shadows for depth and tactile feel." },
            { icon: <Palette className="h-6 w-6" />, title: "Gradient Magic", desc: "Rich backgrounds and text gradients." },
            { icon: <Wand2 className="h-6 w-6" />, title: "Micro Animations", desc: "Hover, press, and reveal interactions." },
            { icon: <Code2 className="h-6 w-6" />, title: "Utility First", desc: "Compose complex UIs with small classes." },
            { icon: <Cpu className="h-6 w-6" />, title: "Responsive Grid", desc: "Mobile-first, scale up gracefully." },
          ].map((f, i) => (
            <Card key={i} className="group">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{f.title}</h4>
                  <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
              <GradientDivider />
              <div className="mt-3 flex items-center gap-2 text-sm text-white/60">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Try changing padding, radius, and gaps.
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ======= Split CTA ======= */}
      <Section className="pt-0">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="text-3xl font-bold">Design once, reuse everywhere</h3>
            <p className="mt-3 text-white/70">
              Study spacing scales, typographic rhythm, and how utilities combine.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-xl bg-white px-5 py-3 font-semibold text-[#0B0B12]">Primary</button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold">Secondary</button>
              <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3">Gradient</button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl  bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-pink-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img src="https://picsum.photos/seed/split/1200/800" className="h-full w-full object-cover" alt="Preview" />
            </div>
          </div>
        </div>
      </Section>

      {/* ======= Showcase (Masonry-like gallery) ======= */}
      <Section id="showcase" className="bg-white/[0.02]">
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-semibold">Showcase Grid</h3>
          <p className="mt-2 text-white/70">Mix aspect ratios, rounded corners, borders, and overlays.</p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]"><div className="space-y-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="break-inside-avoid">
              <div className="group relative overflow-hidden border border-white/10 bg-white/5 rounded-3xl">
                <img src={`https://picsum.photos/seed/m-${i}/1200/${600 + (i % 3) * 150}`} alt="gallery" className="w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-3 right-3 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 backdroup-blur">
                    <Camera className="h-4 w-4" /> Shot {i + 1}
                  </span>
                  <span className="rounded-full bg-white/20 px-2 py-1 text-sm">UI Pattern</span>
                </div>
              </div>
            </div>
          ))}
        </div></div>
      </Section>

      {/* ======= Stats + Logos ======= */}
      <Section className="py-16">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:grid-cols-3">
          {["3x Faster Styling", "100+ Utilities Used", "Pixel-Perfect Spacing"].map((label, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-extrabold">{i === 0 ? "3x" : i === 1 ? "100+" : "∞"}</div>
              <p className="mt-1 text-white/70">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 items-center gap-6 opacity-60 sm:grid-cols-3 md:grid-cols-6">
          {[Leaf, Sun, Moon, Flame, Cloud, Heart].map((Icon, i) => (
            <div key={i} className="flex items-center justify-center p-4 border border-white/10 bg-white/5 rounded-xl">
              <Icon className="h-6 w-6" />
            </div>
          ))}
        </div>
      </Section>

      {/* ======= Pricing ======= */}
      <Section id="pricing" className="bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold">Pricing Cards</h3>
          <p className="mt-2 text-white/70">Practice tiered layouts, ribbons, and emphasized CTA.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "Free", points: ["Basic components", "Community support", "Single page"] },
            { name: "Pro", price: "$19", points: ["All sections", "Premium gradients", "Priority styling tips"], featured: true },
            { name: "Studio", price: "$49", points: ["Everything in Pro", "Design audits", "Export templates"] },
          ].map((t, i) => (
            <Card key={i} className={`${t.featured ? "ring-2 ring-fuchsia-400 px-3 py-2" : "px-3 py-2"}`}>
              <div className="mb-4  items-center justify-between">
                <h4 className="text-xl font-semibold">{t.name}</h4>
                {t.featured && (
                  <span className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-2 py-1 text-xs font-semibold">Popular</span>
                )}
              </div>
              <div className="mb-4 text-4xl font-extrabold">{t.price}<span className="text-base font-medium text-white/60">/mo</span></div>
              <ul className="space-y-2 text-sm text-white/60">
                {t.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {p}</li>
                ))}
              </ul>
              <button className="mt-6 rounded-xl w-full bg-white py-2.5 font-semibold text-[#0B0B12]">Choose {t.name}</button>
            </Card>
          ))}
        </div>
      </Section>

      {/* ======= Dashboard Preview (pure CSS) ======= */}
      <Section id="dashboard" className="bg-white/[0.02]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Dashboard UI</h3>
            <p className="mt-1 text-white/70">Cards, table, and chart placeholders.</p>
          </div>
          <Pill>Layout Practice</Pill>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space--y-6 lg:col-span-2 px">
            <div className="grid gap-6 md:grid-cols-3">
              {["Revenue", "Users", "Sessions"].map((k, i) => (
                <Card key={i}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">{k}</span>
                    <Star className="h-4 w-4 text-yellow-300" />
                  </div>
                  <div className="mt-3 text-3xl font-bold">{i === 0 ? "$12,340" : i === 1 ? "2,918" : "8,120"}</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${i === 0 ? "w-4/5 bg-gradient-to-r from-indigo-500 to-fuchsia-500" : i === 1 ? "w-2/3 bg-gradient-to-r from-emerald-400 to-teal-500" : "w-3/4 bg-gradient-to-r from-amber-400 to-orange-500"}`} />
                  </div>
                </Card>
              ))}
            </div>
            <Card>
              <div className="mb-4  flex items-center justify-between">
                <h4 className="font-semibold">Traffic Overview</h4>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">Last 30 days</div>
              </div>
              {/* Chart placeholder */}
              <div className="h-56 rounded-xl bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_40px),repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_40px)]">
                <div className="h-full w-full bg-[linear-gradient(180deg,rgba(99,102,241,0.12),rgba(236,72,153,0.12))]" />
              </div>
            </Card>
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-semibold">Recent Orders</h4>
                <Pill>Table Styles</Pill>
              </div>
              <div className="overflow-x-auto">
                <table className="min-h-full text-left text-sm">
                  <thead>
                    <tr className="text-white/70">
                      {["#", "Customer", "Product", "Amount", "Status"].map((h) => (
                        <th key={h} className="border-b border-white/70 px-4 py-3 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <tr key={i} className="odd:bg-white/5">
                        <td className="px-4 py-3">#{101 + i}</td>
                        <td className="px-4 py-3">Alex Morgan</td>
                        <td className="px-4 py-3">Premium Tee</td>
                        <td className="px-4 py-3">$ {(24 + i).toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-2 py-1 text-xs ${i % 2 ? "bg-amber-500/20 text-amber-300" : "bg-emerald-500/20 text-emerald-300"}`}>
                            {i % 2 ? "Pending" : "Paid"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
          {/* Side column */}
          <div className="space-y-6">
            <Card>
              <div className="mb-3 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/20">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Payouts</h4>
                  <p className="text-sm text-white/70">Next in 2 days</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Total Balance</span>
                  <span className="font-semibold">$4,920.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>On Hold</span>
                  <span className="text-white/70">$310.00</span>
                </div>
                <GradientDivider />
                <button className="w-full bg-white rounded-xl py-2.5 text-[#0B0B12] font-semibold">Withdraw</button>
              </div>
            </Card>
            <Card>
              <h4 className="mb-2 font-semibold">Quick Tips</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm text-white/80">
                <li>Use <code className="rounded bg-black/30 px-1.5 py-0.5">space-x-*</code> and <code className="">gap-*</code> wisely.</li>
                <li>Prefer <em>max-w-*</em> with <em>container</em> for readable lines.</li>
                <li>Combine <em>border</em> + <em>bg-white/5</em> for glass cards.</li>
              </ul>
            </Card>
            <Card>
              <h4 className="mb-3 font-semibold">Palette</h4>
              <div className="grid grid-cols-5 gap-2">
                {["#6366F1", "#EC4899", "#22C55E", "#F59E0B", "#06B6D4"].map((c) => (
                  <div key={c} className="aspect-square rounded-xl border border-white/10" style={{ backgroundColor: c }} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* ======= Testimonials ======= */}
      <Section className="bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-semibold">Testimonials</h3>
          <p className="mt-2 text-white/70">Static cards with avatar, rating, and quote.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <div className="mb-3 flex items-center gap-3">
                <img className="h-10 w-10 rounded-full ring-2 ring-white/20" src={`https://i.pravatar.cc/100?img=${i + 11}`} alt="avatar" />
                <div>
                  <div className="font-semibold">Designer {i + 1}</div>
                  <div className="text-xs text-white/60">UI Specialist</div>
                </div>
              </div>
              <p className="text-sm text-white/80">
                “This Tailwind kit helped me understand spacing, shadows, and gradients like never before!”
              </p>
              <div className="mt-4 flex items-center gap-1">
{Array.from({ length: 5 }).map((_, s) => (
<Star key={s} className={`h-4 w-4 ${s < 5 ? "text-yellow-300" : "text-white/30"}`} />
))}
</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ======= Contact Form (styled only) ======= */}
      <Section id="contact" className="bg-white/[0.02]">
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="mt-2 text-white/70">Form styles: inputs, labels, focus states, and grid.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none ring-white/20 hover:ring-2" placeholder="Your name" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-white/70">Email</label>
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none ring-white/20 hover:ring-2" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Phone</label>
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none ring-white/20 hover:ring-2" placeholder="+91-XXXXXXXXXX" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Subject</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none ring-white/20 hover:ring-2" placeholder="What's up?" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Message</label>
                <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none ring-white/20 hover:ring-2" placeholder="Write something..." />
              </div>
              <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 font-semibold">Send Message</button>
            </div>
          </Card>
          <div className="space-y-6">
            <Card>
              <h4 className="mb-3 font-semibold">Contact Info</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> New Delhi, India</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@strishop.dev</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              </ul>
            </Card>
            <Card>
              <h4 className="mb-2 font-semibold">Social</h4>
              <div className="flex flex-wrap gap-3">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    <Icon className="h-4 w-4" /> Follow
                  </a>
                ))}
              </div>
            </Card>
            <Card>
              <h4 className="mb-2 font-semibold">FAQ (Static)</h4>
              <div className="space-y-3 text-sm">
                <details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:shadow-inner" open>
                  <summary className="cursor-pointer list-none">How do I practice Tailwind?</summary>
                  <p className="mt-2 text-white/70">Copy a section, tweak spacing, radius, and colors. Repeat for each breakpoint.</p>
                </details>
                <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
                  <summary className="cursor-pointer list-none">Can I change the theme?</summary>
                  <p className="mt-2 text-white/70">Yes, swap gradient colors and adjust backgrounds for a new vibe.</p>
                </details>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* ======= Footer ======= */}
      <footer className="border-t border-white/10 bg-[#0B0B12]/80">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4 md:px-8">
          <div className="col-span-1 md:col-span-2">
            <div className=" mb-3 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500">
                <Rocket className="h-5 w-5" />
              </div>
              <div className="text-lg font-semifold">Tailwind Playground</div>
            </div>
            <p className="text-sm text-white/70">Practice modern UI/UX patterns with pure utility classes.</p>
          </div>
          {[
            { title: "Product", links: ["Overview", "Components", "Templates", "Changelog"] },
            { title: "Resources", links: ["Docs", "Guides", "Playground", "Community"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          ].map((s, i) => (
            <div key={i}>
              <div className="mb-3 text-sm font-semifold uppercase tracking-wider text-white/70">{s.title}</div>
              <ul className="space-y-2 text-sm text-white/80">
                {s.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 text-sm text-white/60 md:px-8">
            <p>© {new Date().getFullYear()} Tailwind Playground. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
