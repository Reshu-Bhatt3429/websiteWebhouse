import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clapperboard,
  ExternalLink,
  Github,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Monitor,
  Palette,
  Phone,
  Send,
  Sparkles,
  Star,
  TrendingUp,
  Wand2,
  Zap,
} from "lucide-react";

/* ── DATA ───────────────────────────────────────────────── */

type Project = {
  title: string;
  category: string;
  format: string;
  role: string;
  outcome: string;
  accent: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Velocity Drop Campaign",
    category: "Campaign Design",
    format: "Paid social set",
    role: "Art direction, ad layout, offer hierarchy",
    outcome: "3× creative routes for faster A/B testing",
    accent: "#ff6a5b",
    gradient: "linear-gradient(135deg, #ff6a5b 0%, #ff3366 50%, #9b59b6 100%)",
  },
  {
    title: "Creator Reel Sprint",
    category: "Motion / Video",
    format: "Vertical reels",
    role: "Edit, captions, hooks, music pacing",
    outcome: "2.4× engagement lift on short-form cuts",
    accent: "#00d4ff",
    gradient: "linear-gradient(135deg, #00d4ff 0%, #7b2fef 50%, #ff2e7e 100%)",
  },
  {
    title: "GlowCart Festive Pack",
    category: "Brand Systems",
    format: "Launch campaign",
    role: "Key visual, banners, story frames, carousel",
    outcome: "Reusable sale system for full campaign period",
    accent: "#ffd700",
    gradient: "linear-gradient(135deg, #ffd700 0%, #ff6a1a 50%, #ff2e7e 100%)",
  },
  {
    title: "Product Explainer Cut",
    category: "Motion / Video",
    format: "Explainer edit",
    role: "UI callouts, feature beats, CTA sequence",
    outcome: "48% higher completion rate vs previous",
    accent: "#12b76a",
    gradient: "linear-gradient(135deg, #12b76a 0%, #00d4ff 50%, #3a2de8 100%)",
  },
  {
    title: "Pitch Deck Refresh",
    category: "Static Design",
    format: "Presentation system",
    role: "Slide design, visual hierarchy, icon system",
    outcome: "Cleaner pitch story for client meetings",
    accent: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #3a2de8 100%)",
  },
  {
    title: "Food Brand Launch Grid",
    category: "Brand Systems",
    format: "Instagram launch",
    role: "Grid, promos, menus, story templates",
    outcome: "Consistent organic + paid social presence",
    accent: "#ff9500",
    gradient: "linear-gradient(135deg, #ff9500 0%, #ff5722 50%, #e91e63 100%)",
  },
];

const services = [
  {
    title: "Static Design",
    icon: Palette,
    text: "Social posts, ads, carousels, banners, decks, thumbnails — crafted for clarity and impact.",
    features: ["Social Media", "Ad Campaigns", "Presentations", "Thumbnails"],
  },
  {
    title: "Video Editing",
    icon: Clapperboard,
    text: "Reels, product videos, explainers, agenda edits — engineered to hold attention and convert.",
    features: ["Reels & Shorts", "Product Videos", "Explainers", "Motion Graphics"],
  },
  {
    title: "Campaign Systems",
    icon: Wand2,
    text: "Multi-format launch visuals with one consistent direction — scale without losing quality.",
    features: ["Brand Kits", "Launch Systems", "Template Packs", "Style Guides"],
  },
];

const stats = [
  { value: "50+", label: "Projects delivered", icon: Layers },
  { value: "98%", label: "Client satisfaction", icon: Star },
  { value: "3×", label: "Avg engagement lift", icon: TrendingUp },
  { value: "24hr", label: "Response time", icon: Zap },
];

const tools = ["Photoshop", "Illustrator", "Figma", "Premiere Pro", "After Effects", "CapCut"];

const socials = [
  { label: "Phone", href: "tel:+917351530588", icon: Phone },
  { label: "WhatsApp", href: "https://wa.me/917351530588", icon: MessageCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adwait-dabral-76b0a5304", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/yourhandle", icon: Instagram },
  { label: "GitHub", href: "https://github.com/yourhandle", icon: Github },
  { label: "Email", href: "mailto:hello@yourname.com", icon: Mail },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, GlowCart",
    text: "The campaign visuals were absolutely stunning. Our social engagement tripled within the first week of launch.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Lead, TechNova",
    text: "Incredible turnaround time and the quality exceeded our expectations every single time. A true professional.",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "CEO, FreshBites",
    text: "The brand system they created gave us complete consistency across all channels. Game changer for our business.",
    avatar: "RV",
  },
];

/* ── MAIN APP ───────────────────────────────────────────── */

function App() {
  return (
    <div className="portfolio">
      <Navigation />
      <Hero />
      <StatsBar />
      <WorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ── NAVIGATION ─────────────────────────────────────────── */

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} id="nav">
      <div className="nav__wrap">
        <a className="nav__logo" href="#" aria-label="Adwait Creative">
          <span className="nav__mark">A</span>
          <span className="nav__name">Adwait</span>
        </a>
        <div className={`nav__links ${mobileOpen ? "nav__links--open" : ""}`}>
          <a href="#work" onClick={() => setMobileOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)}>Testimonials</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#contact" className="nav__cta" onClick={() => setMobileOpen(false)}>
            Let's Talk
            <ArrowRight size={16} />
          </a>
        </div>
        <button
          className={`nav__burger ${mobileOpen ? "nav__burger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

/* ── HERO ────────────────────────────────────────────────── */

function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid-overlay" />
      </div>
      <div className="hero__wrap">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <Sparkles size={14} />
            <span>Creative Designer & Video Editor</span>
          </div>
          <h1 className="hero__title">
            I design visuals
            <br />
            <span className="hero__italic-text">that make people</span>
            <br />
            stop scrolling.
          </h1>
          <p className="hero__sub">
            I craft sharp visual systems, social campaigns, and video edits that help brands
            stand out, convert faster, and look undeniably premium.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              <Send size={18} />
              Start a project
            </a>
            <a className="btn btn--glass" href="#work">
              <ExternalLink size={18} />
              View work
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card hero__card--1">
            <div className="hero__card-inner" style={{ background: projects[0].gradient }}>
              <span>{projects[0].category}</span>
              <strong>{projects[0].title}</strong>
            </div>
          </div>
          <div className="hero__card hero__card--2">
            <div className="hero__card-inner" style={{ background: projects[1].gradient }}>
              <span>{projects[1].category}</span>
              <strong>{projects[1].title}</strong>
            </div>
          </div>
          <div className="hero__card hero__card--3">
            <div className="hero__card-inner" style={{ background: projects[2].gradient }}>
              <span>{projects[2].category}</span>
              <strong>{projects[2].title}</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── STATS BAR ──────────────────────────────────────────── */

function StatsBar() {
  return (
    <section className="stats">
      <div className="stats__wrap">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div className="stats__item" key={stat.label}>
              <Icon size={20} className="stats__icon" />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── WORK SECTION ───────────────────────────────────────── */

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="work" id="work">
      <div className="work__wrap">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles size={14} />
            <span>Selected Work</span>
          </div>
          <h2 className="section-header__title">Projects that speak volumes</h2>
          <p className="section-header__sub">
            A curated selection of campaign design, motion work, and brand systems — each crafted to deliver measurable results.
          </p>
        </div>
        <div className="work__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`work__filter ${activeFilter === cat ? "work__filter--active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="work__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`pcard ${hovered ? "pcard--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pcard__visual" style={{ background: project.gradient }}>
        <div className="pcard__overlay" />
        <div className="pcard__mock">
          <div className="pcard__mock-bar">
            <span /><span /><span />
          </div>
          <div className="pcard__mock-content">
            <div className="pcard__mock-block pcard__mock-block--1" />
            <div className="pcard__mock-block pcard__mock-block--2" />
            <div className="pcard__mock-block pcard__mock-block--3" />
          </div>
        </div>
        <div className="pcard__category">
          <Monitor size={12} />
          {project.category}
        </div>
      </div>
      <div className="pcard__info">
        <h3>{project.title}</h3>
        <p className="pcard__format">{project.format}</p>
        <p className="pcard__outcome">
          <CheckCircle2 size={14} />
          {project.outcome}
        </p>
        <div className="pcard__role">
          <span>Role:</span> {project.role}
        </div>
      </div>
    </article>
  );
}

/* ── SERVICES SECTION ───────────────────────────────────── */

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="services__wrap">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles size={14} />
            <span>What I Do</span>
          </div>
          <h2 className="section-header__title">End-to-end creative services</h2>
          <p className="section-header__sub">
            From a single social post to a full campaign system — everything built with precision, delivered fast.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article className="scard" key={service.title}>
                <div className="scard__number">{String(i + 1).padStart(2, "0")}</div>
                <div className="scard__icon-wrap">
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="scard__features">
                  {service.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ───────────────────────────────────────── */

function TestimonialsSection() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__wrap">
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles size={14} />
            <span>Client Love</span>
          </div>
          <h2 className="section-header__title">What they're saying</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article className="tcard" key={t.name}>
              <div className="tcard__stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote>{t.text}</blockquote>
              <div className="tcard__author">
                <div className="tcard__avatar">{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT SECTION ──────────────────────────────────────── */

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about__wrap">
        <div className="about__content">
          <div className="section-header">
            <div className="section-header__eyebrow">
              <Sparkles size={14} />
              <span>About Me</span>
            </div>
            <h2 className="section-header__title">The creative behind the pixels</h2>
          </div>
          <p className="about__text">
            I'm a graphic designer & video editor specializing in social-first campaigns. I help
            brands, founders, and product teams turn rough ideas into polished posts, ads, reels,
            explainers, and complete campaign systems.
          </p>
          <p className="about__text">
            Every project I take on follows one principle: <strong>clarity over complexity</strong>.
            Clean design, sharp messaging, and intentional motion — that's the formula.
          </p>
          <div className="about__tools">
            <span className="about__tools-label">Tools I work with</span>
            <div className="about__tool-list">
              {tools.map((tool) => (
                <span className="about__tool" key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="about__visual">
          <div className="about__card">
            <div className="about__card-gradient" />
            <div className="about__card-content">
              <div className="about__initials">AC</div>
              <h3>Adwait</h3>
              <span>Creative Designer & Editor</span>
              <div className="about__card-stats">
                <div><strong>50+</strong><span>Projects</span></div>
                <div><strong>3+</strong><span>Years</span></div>
                <div><strong>25+</strong><span>Clients</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT SECTION ────────────────────────────────────── */

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Creative inquiry: ${data.get("projectType") || "New project"}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Project type: ${data.get("projectType") || ""}`,
        "",
        `Brief: ${data.get("brief") || ""}`,
      ].join("\n"),
    );
    window.location.href = `mailto:hello@yourname.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__wrap">
        <div className="contact__info">
          <div className="section-header">
            <div className="section-header__eyebrow">
              <Sparkles size={14} />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-header__title">Let's create something incredible</h2>
          </div>
          <p className="contact__text">
            Ready to elevate your brand's visual presence? Send me a brief and I'll get back
            to you within 24 hours with a tailored approach.
          </p>
          <div className="contact__channels">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact__channel">
                  <Icon size={20} />
                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <form
          className={`contact__form ${submitted ? "contact__form--sent" : ""}`}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="contact__form-header">
            <BriefcaseBusiness size={22} />
            <span>Project Inquiry</span>
          </div>
          <label>
            <span>Name</span>
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>
          <label>
            <span>Project type</span>
            <select name="projectType" defaultValue="Social media creatives">
              <option>Social media creatives</option>
              <option>Ad campaign design</option>
              <option>Reel editing</option>
              <option>Product video</option>
              <option>Explainer video</option>
              <option>Pitch deck / presentation</option>
              <option>Complete brand system</option>
              <option>Custom requirement</option>
            </select>
          </label>
          <label>
            <span>Project brief</span>
            <textarea name="brief" placeholder="Goal, deadline, references, deliverables..." required />
          </label>
          <button type="submit" className="btn btn--primary btn--full">
            <Send size={18} />
            {submitted ? "Brief sent!" : "Send brief"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ── FOOTER ─────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__brand">
          <a className="nav__logo" href="#" aria-label="Adwait Creative">
            <span className="nav__mark">A</span>
            <span className="nav__name">Adwait</span>
          </a>
          <p>Designs that command attention. Built for brands that refuse to blend in.</p>
        </div>
        <div className="footer__links">
          <div>
            <h4>Navigation</h4>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Static Design</a>
            <a href="#services">Video Editing</a>
            <a href="#services">Campaign Systems</a>
          </div>
          <div>
            <h4>Connect</h4>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Adwait Creative. All rights reserved.</span>
          <span>Crafted with precision ✦</span>
        </div>
      </div>
    </footer>
  );
}

export default App;
