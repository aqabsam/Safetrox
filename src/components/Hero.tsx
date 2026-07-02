import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import homeImage from "../assets/home.jpeg";

const heroServices = [
  "Corporate HSE Training",
  "Safety Consultancy",
  "ISO Audits",
  "NEBOSH Preparation",
  "Industrial Safety Solutions",
];

const founderCredentials = [
  "M.Sc. in Occupational Health and Safety",
  "NEBOSH International Diploma (IDipNEBOSH)",
  "ISO 45001 Lead Auditor",
  "IOSH Certified Professional",
];

export default function Hero() {
  return (
    <section className="grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_.75fr]">

      {/* LEFT */}

      <div>

        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-500">
          HSE Training & Consultancy
        </p>

        <h1 className="max-w-3xl text-5xl font-black leading-none text-slate-900 lg:text-7xl">
          Empowering Safety Professionals For Safety Tomorrow
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Learn from an internationally certified HSE expert with 9+
          years of industry experience across Oil & Gas,
          Petrochemical, Construction and Industrial sectors in
          UAE and India.
        </p>

        {/* Services */}

        <div className="mt-8 flex flex-wrap gap-3">

          {heroServices.map((service) => (
            <span
              key={service}
              className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
            >
              {service}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1"
          >
            Book Training
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow transition hover:bg-slate-50"
          >
            Contact
          </Link>

          <Link
            to="/about"
            className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow transition hover:bg-slate-50"
          >
            About
          </Link>

        </div>

      </div>

      {/* RIGHT */}

      <div
        className="relative overflow-hidden rounded-[32px] border border-white/30 bg-cover bg-center p-8 text-white shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(4,25,23,.78),rgba(4,25,23,.55)),url(${homeImage})`,
        }}
      >
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-teal-400/20 blur-3xl"></div>

        <div className="relative">

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
            <ShieldCheck size={42} />
          </div>

          <div className="mb-6 flex items-start justify-between">

            <div>
              <p className="text-sm text-slate-200">
                Founder & Lead Trainer
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                Mohammad Shadab Sami
              </h2>
            </div>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              CSP
            </span>

          </div>

          <div className="space-y-3">

            {founderCredentials.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur"
              >
                <CheckCircle2
                  size={18}
                  className="text-emerald-300"
                />

                <span>{item}</span>
              </div>
            ))}

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <Card
              icon={<Award size={22} />}
              title="ADNOC Approved"
              subtitle="HSE Professional"
            />

            <Card
              icon={<Globe2 size={22} />}
              title="UAE & India"
              subtitle="Project Exposure"
            />

            <Card
              icon={<ClipboardCheck size={22} />}
              title="ISO Audits"
              subtitle="45001 Systems"
            />

            <Card
              icon={<Users size={22} />}
              title="Corporate Teams"
              subtitle="Training Delivery"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Card({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
      <div className="text-emerald-300">{icon}</div>

      <h3 className="mt-4 font-bold">
        {title}
      </h3>

      <p className="text-sm text-slate-200">
        {subtitle}
      </p>
    </div>
  );
}