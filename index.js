"use client"; // obligatoire en Next.js App Router pour hooks & framer-motion

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ArrowRight,
  Languages,
  Award,
} from "lucide-react";

// 🎯 Profil complet (à adapter si besoin)
const profile = {
  name: "Chris Bryan Fotso Tala",
  role: "Data Engineer • Backend • MLOps",
  location: "Toulouse, France",
  email: "chrisfotso@icloud.com",
  phone: "+33 7 72 25 76 34",
  about:
    "Data Engineer passionné par la construction de pipelines robustes, la qualité des données et la mise en production (tests, CI/CD, observabilité).",
  socials: {
    github: "https://github.com/BryanFotso",
    linkedin: "https://linkedin.com/in/chris-fotso",
  },
  resumeUrl: "/Data_engineer_FR.pdf",
  skills: [
    "Python",
    "SQL",
    "FastAPI",
    "Docker",
    "dbt",
    "Airflow",
    "SQLAlchemy",
    "Pydantic",
    "Pytest",
    "Power BI",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
  ],
  experiences: [
    {
      title: "Consultant Data (Alternance)",
      company: "Capgemini-Sogeti",
      period: "09/2024 – Présent",
      bullets: [
        "Backend FastAPI et moteur de recommandation (similarité textuelle)",
        "API REST pour service ML, conteneurisation Docker",
        "Tests unitaires (~85% couv.) et CI/CD",
        "Migration ADF → dbt, ateliers internes",
      ],
      tech: ["Python", "FastAPI", "Docker", "dbt", "PostgreSQL", "Pytest"],
    },
    {
      title: "Ingénieur Base de Données (Stage)",
      company: "Gautier Semences",
      period: "04/2024 – 08/2024",
      bullets: [
        "Administration BDD, requêtes SQL",
        "Développements spécifiques NAV",
        "Préparation migration vers Sage X3",
      ],
      tech: ["SQL", "MySQL", "SQL Server", "VBA"],
    },
    {
      title: "Informaticien (Stage)",
      company: "FOTAGI",
      period: "06/2022 – 08/2022",
      bullets: [
        "Automatisation d'indicateurs (Python/VBA)",
        "Outil interne de gestion de stock (traçabilité)",
        "Migration de dashboards Excel → Power BI",
      ],
      tech: ["Python", "VBA", "Power BI"],
    },
  ],
  projects: [
    {
      name: "Data Platform (Olist)",
      description:
        "Ingestion Airbyte, orchestration Airflow, modélisation dbt, stockage PostgreSQL, KPI Superset.",
      tags: ["Airbyte", "Airflow", "dbt", "PostgreSQL", "Superset", "Docker"],
      link: "#",
    },
  ],
  education: [
    {
      degree: "Master / Ingénierie Informatique (Data)",
      school: "—",
      period: "2023 – 2025",
      details: ["Data Engineering, DevOps, Cloud, MLOps"],
    },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Avancé (C1)" },
  ],
  certifications: ["DP-900", "(DP-203) en cours", "TOEIC"],
};

// 🖼️ Icônes des technos (CDN devicon) — fallback si indispo
const skillIcons: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  dbt: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbt/dbt-plain.svg",
  Airflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",
  SQLAlchemy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
  Pydantic: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pydantic/pydantic-original.svg",
  Pytest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
  "Power BI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
};

const SkillBadge = ({ name }: { name: string }) => (
  <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 border border-white/10">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={skillIcons[name] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg"}
      alt={name}
      width={18}
      height={18}
      className="inline-block opacity-90"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src =
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg";
      }}
    />
    <span className="text-sm">{name}</span>
  </div>
);

// 🎨 Palette
const palette = {
  bg: "from-indigo-950 via-slate-950 to-indigo-950",
  title: "from-indigo-400 to-cyan-300",
};

// ✨ Animations
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 120 },
  }),
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 py-16">
    <motion.h2
      className={`text-3xl font-bold mb-8 bg-gradient-to-r ${palette.title} bg-clip-text text-transparent`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

export default function Portfolio() {
  const [message, setMessage] = useState("");

  return (
    <div className={`min-h-screen relative text-white bg-gradient-to-b ${palette.bg}`}>
      {/* HEADER */}
      <header className="sticky top-0 z-40">
        <nav className="backdrop-blur bg-black/60 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">
              {profile.name.split(" ")[0]}<span className="opacity-60">.</span>
            </a>
            <div className="hidden sm:flex gap-6 text-sm">
              <a href="#experience" className="hover:opacity-80">Expérience</a>
              <a href="#projects" className="hover:opacity-80">Projets</a>
              <a href="#skills" className="hover:opacity-80">Compétences</a>
              <a href="#education" className="hover:opacity-80">Formation</a>
              <a href="#languages" className="hover:opacity-80">Langues</a>
              <a href="#certifications" className="hover:opacity-80">Certifications</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="h-8" asChild>
                <a href={profile.resumeUrl} download>
                  <Download className="w-4 h-4 mr-2" /> Télécharger CV
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              className={`text-5xl font-extrabold mb-3 bg-gradient-to-r ${palette.title} bg-clip-text text-transparent`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {profile.name}
            </motion.h1>
            <p className="text-lg text-white/80">{profile.role}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm hover:opacity-80"><Mail className="w-4 h-4" /> {profile.email}</a>
              <span className="inline-flex items-center gap-2 text-sm text-white/70"><Phone className="w-4 h-4" /> {profile.phone}</span>
              <span className="inline-flex items-center gap-2 text-sm text-white/70"><MapPin className="w-4 h-4" /> {profile.location}</span>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <a href="#contact">Me contacter <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button variant="outline" asChild>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={profile.socials.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4 mr-2" />GitHub</a>
              </Button>
            </div>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <p className="text-sm text-white/70">À propos</p>
              <p className="mt-2 leading-relaxed">{profile.about}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Expérience">
        <div className="grid md:grid-cols-2 gap-6">
          {profile.experiences.map((xp, idx) => (
            <motion.div key={idx} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{xp.title}</h3>
                    <span className="text-xs text-white/60">{xp.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{xp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {xp.bullets.map((b: string, i: number) => (
                      <li key={i} className="text-sm leading-relaxed list-disc list-inside text-white/90">{b}</li>
                    ))}
                  </ul>
                  {xp.tech && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {xp.tech.map((t: string) => (
                        <Badge key={t} variant="outline" className="text-xs border-white/20 text-white/90">{t}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projets">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((p, idx) => (
            <motion.a
              href={p.link}
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group block"
            >
              <Card className="h-full transition-transform group-hover:-translate-y-1 bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    <Globe className="w-4 h-4 opacity-60" />
                  </div>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t: string) => (
                      <Badge key={t} variant="outline" className="text-xs border-white/20 text-white/90">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Formation">
        <div className="grid md:grid-cols-2 gap-6">
          {profile.education.map((e, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{e.degree}</h3>
                    <span className="text-xs text-white/60">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{e.school}</p>
                  {e.details?.length ? (
                    <ul className="mt-4 space-y-2">
                      {e.details.map((d: string, i: number) => (
                        <li key={i} className="text-sm leading-relaxed list-disc list-inside text-white/90">{d}</li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* LANGUAGES */}
      <Section id="languages" title="Langues">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Languages className="w-4 h-4" /> Langues</h3>
            <ul className="space-y-2">
              {profile.languages.map((l, i) => (
                <li key={i} className="text-sm text-white/85 flex items-center justify-between">
                  <span>{l.name}</span>
                  <span className="opacity-70">{l.level}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" title="Certifications">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Award className="w-4 h-4" /> Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {profile.certifications.map((c) => (
                <Badge key={c} variant="outline" className="text-xs border-white/20 text-white/90">{c}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Compétences">
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s, i) => (
            <motion.div
              key={s + i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.015 }}
            >
              <SkillBadge name={s} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = encodeURIComponent("Contact via portfolio");
                  const body = encodeURIComponent(message);
                  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
                }}
                className="space-y-3"
              >
                <Input placeholder="Votre email" type="email" required className="bg-white/10 border-white/10 text-white placeholder:text-white/60" />
                <Textarea
                  placeholder="Votre message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/60"
                />
                <Button type="submit" className="w-full">Envoyer</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-3 text-sm">
            <a className="flex items-center gap-2 hover:opacity-80" href={`mailto:${profile.email}`}>
              <Mail className="w-4 h-4" /> {profile.email}
            </a>
            <p className="flex items-center gap-2 text-white/80">
              <Phone className="w-4 h-4" /> {profile.phone}
            </p>
            <p className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" /> {profile.location}
            </p>
            <div className="flex gap-3 pt-1">
              <Button variant="outline" asChild>
                <a href={profile.socials.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4 mr-2" />GitHub</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-white/60">
          <p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-3">
            <a href={profile.socials.github} className="hover:opacity-80">GitHub</a>
            <a href={profile.socials.linkedin} className="hover:opacity-80">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
