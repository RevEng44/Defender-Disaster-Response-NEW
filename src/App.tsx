/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Waves, 
  Droplets, 
  Construction, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Upload,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Briefcase
} from 'lucide-react';

// Color Palette based on Logo:
// Primary: #000000 (Black)
// Accent: #5d7f3a (Brand Green)
// Secondary: #cbd5e1 (Slate/Silver)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-green rounded overflow-hidden flex items-center justify-center">
              <img src="/defender-logo.png" alt="Defender Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-white font-bold text-xl tracking-tighter uppercase">Defender</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-brand-green transition-colors text-sm font-medium uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-green hover:opacity-90 text-white px-6 py-2 rounded font-bold text-sm uppercase tracking-wider transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-brand-green border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img 
            src="/hero-flood.jpg" 
            alt="Flood background" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 border border-brand-green/50 text-brand-green text-xs font-bold tracking-[0.3em] uppercase rounded-full bg-brand-green/10">
            Professional Disaster Response
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            Protecting <br />
            <span className="text-brand-green">Communities</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Defender Disaster Response Ltd. provides world-class flood mitigation, water diversion, and environmental protection services across North America.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-brand-green hover:opacity-90 text-white px-10 py-4 rounded font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2">
              Our Capabilities <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="border border-white/20 hover:border-brand-green text-white px-10 py-4 rounded font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center">
              Get Assessment
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-brand-green to-transparent rounded-full" />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Pre-Planned Prevention is the <span className="italic font-serif">Key to Resilience</span>
            </h3>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              Defender Disaster Response Ltd. provides comprehensive flood mitigation, water diversion, and environmental protection services, delivering engineered solutions to safeguard communities, agencies, and corporations from the devastating impacts of water-related disasters. With over 8 years of experience, our team is dedicated to educating, informing, and protecting the public through innovative technology and rapid response capabilities.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">8+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">20+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Year Product Life</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green w-6 h-6 shrink-0" />
                <p className="text-slate-300">Engineered property assessments for tailored defense.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green w-6 h-6 shrink-0" />
                <p className="text-slate-300">Rapid deployment: 200 linear feet per hour with a crew of 6.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/flood-barrier-installation.jpg" 
                alt="Flood barrier installation" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-green p-6 rounded-xl hidden md:block shadow-2xl">
              <img src="/defender-logo.png" alt="Defender Logo" className="w-16 h-16 object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Team Bios */}
        <div className="mt-32">
          <h3 className="text-center text-3xl font-bold mb-16 uppercase tracking-widest">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dean Sininger",
                role: "President / CEO",
                bio: "42 years of Management in the Energy Industry. Dean has spent the last 8 years developing Water management, Flood prevention & Environmental protection business across North America."
              },
              {
                name: "Carl Michaelson",
                role: "Operations Manager / Canada East",
                bio: "Based out of Montreal, Carl brings several years of business development and flood mitigation experience. A key factor in founding Defender Disaster Response Ltd."
              }
            ].map((member) => (
              <div key={member.name} className="bg-zinc-900/80 border border-white/10 p-8 rounded-2xl hover:border-brand-green/50 transition-all group shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Users className="text-brand-green group-hover:text-black w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-brand-green text-sm font-medium uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed italic">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceCapabilities = [
    {
      title: 'Emergency Flood Defence',
      desc: 'When permanent defences are overwhelmed, Defender deploys temporary systems to limit damage. Equipment is stockpiled centrally and mobilized within hours to address surface runoff, river flooding, storm surge, and erosion.'
    },
    {
      title: 'Temporary Flood Walls',
      desc: 'A practical alternative to costly permanent installations, offering 75–90% water-tight protection. Rapidly deployed and removed without a trace, ideal for critical infrastructure, commercial buildings, and transit systems.'
    },
    {
      title: 'Water Management for Construction',
      desc: 'Diversion and site isolation for culvert repairs, bridge installs, and pipeline integrity. We utilize Muscle Wall for flow diversion and Eco-Dam for isolation, with pumping systems for dewatering in extreme conditions down to -20°C.'
    },
    {
      title: 'Flood Kit Prevention Packages',
      desc: 'Fully customized, weatherproof, and rodent-proof containers pre-loaded with prescribed systems, pumps, and deployment guides. Includes annual inspections, exercises, and multi-year deployment contracts.'
    }
  ];

  const productPortfolio = [
    { name: 'Eco-Dam', type: 'Water-filled bladder (PVC)', height: "2' – 8'", best: 'Large area coverage, low-flow / standing water, rapid deployment via Hydra spooler' },
    { name: 'Muscle Wall', type: 'Interlocking hard plastic, water-filled', height: "2' – 8'", best: 'Turbulent water, debris-heavy conditions; creates impenetrable wall with geotextile liner' },
    { name: 'Rapid H2O', type: 'Compact barrier system', height: "Up to 3'", best: 'Tight spaces, rapid setup; hurricane-tested' },
    { name: 'Boxwall', type: 'Lightweight lock-together panels', height: 'Modular step-up', best: 'Non-turbulent water; no liner required; ground-seal system' },
    { name: 'Acquastop', type: 'Engineered aluminum systems', height: 'Custom', best: 'Permanent door, window, and entryway protection for buildings' },
  ];

  return (
    <section id="services" className="py-24 text-white relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] mb-4">Services & Products</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Service Capabilities</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {serviceCapabilities.map((service) => (
            <div key={service.title} className="p-8 bg-zinc-900/80 border border-white/10 rounded-xl hover:border-brand-green/50 transition-all group shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-brand-green uppercase tracking-wider">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">Product Portfolio</h3>
              <p className="text-slate-400 max-w-2xl text-sm">
                All Defender products are independently tested and vetted for real-world performance. All systems are reusable and can last 20+ years with proper maintenance.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-xl bg-zinc-900/30 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-green text-black uppercase text-xs font-black tracking-widest">
                  <th className="p-4 border-r border-black/10">Product</th>
                  <th className="p-4 border-r border-black/10">Type</th>
                  <th className="p-4 border-r border-black/10">Height Range</th>
                  <th className="p-4">Best For</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {productPortfolio.map((product, idx) => (
                  <tr key={product.name} className={idx % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                    <td className="p-4 font-bold border-r border-white/5">{product.name}</td>
                    <td className="p-4 text-slate-300 border-r border-white/5">{product.type}</td>
                    <td className="p-4 text-slate-300 border-r border-white/5">{product.height}</td>
                    <td className="p-4 text-slate-400 leading-relaxed">{product.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deployment Process */}
        <div className="mt-32 p-12 bg-brand-green rounded-3xl text-black">
          <h3 className="text-3xl font-black mb-4 uppercase text-center">The Defender Flood Kit System</h3>
          <p className="text-center font-bold mb-12 max-w-3xl mx-auto opacity-80">
            A comprehensive, turnkey solution designed for rapid response and long-term resilience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { step: '01', title: 'Site Assessment', text: 'Professional engineered assessment of your property\'s specific flood risks.' },
              { step: '02', title: 'Custom Prescription', text: 'Expert review to determine the best defense systems for your unique conditions.' },
              { step: '03', title: 'Comprehensive Quote', text: 'Detailed pricing for a full protection package with assessment insights.' },
              { step: '04', title: 'Kit Delivery', text: 'Delivery of a brand-new, weatherproof "Defender Flood Kit" to your property.' },
              { step: '05', title: 'Full Emergency Gear', text: 'Includes dam systems, pumps, hoses, and a laminated deployment layout.' },
              { step: '06', title: 'Crew Dispatch', text: 'Professional crews dispatched to assist or exclusively manage deployment.' },
              { step: '07', title: 'Servicing & Repack', text: 'Post-flood removal, servicing, and repacking to ensure future readiness.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-black opacity-20 absolute -top-6 -left-4">{item.step}</span>
                <h4 className="text-lg font-bold mb-2 relative z-10 leading-tight">{item.title}</h4>
                <p className="text-sm font-medium opacity-80 leading-relaxed">{item.text}</p>
              </div>
            ))}
            <div className="flex items-center">
              <p className="text-xs font-bold uppercase tracking-wider leading-relaxed border-l-2 border-black/20 pl-4">
                Our in-house Response Team and national network of trained subcontractors provide storage, annual exercises, and inspections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Montreal-Area Municipal Flood Protection",
      location: "Quebec",
      year: "2020",
      client: "flood protection",
      challenge: "Recurring flood risk to municipal properties and residential areas across several Montreal-area boroughs required a pre-positioned, professionally managed flood defence capability.",
      solution: "Custom-engineered Defender Flood Kit packages utilizing Eco-Dam and Muscle Wall systems were delivered to each site with five-year deployment contracts. Defender East manages annual inspections, exercises, and active flood response.",
      outcome: "Turnkey flood protection systems in place at multiple municipal locations. Three active five-year deployment contracts secured."
    },
    {
      title: "Vernon Regional Airport",
      location: "British Columbia",
      year: "2017",
      client: "flood response",
      challenge: "Severe flooding caused a runway washout, requiring site isolation for bank re-stabilization and sub-base reconstruction without causing further environmental damage.",
      solution: "Eco-Dam deployed for full site isolation, creating a stable work envelope for bank re-stabilization and reconstruction crews.",
      outcome: "Runway infrastructure restored. Site isolation maintained with minimal environmental footprint."
    },
    {
      title: "Fort McMurray Ice Jam Flood Protection",
      location: "Alberta",
      year: "2020",
      client: "flood response",
      challenge: "Post-ice-jam flooding threatened residential and commercial areas. A large-scale proactive deployment was required before flood waters arrived.",
      solution: "Eco-Dam water-filled systems deployed proactively across exposed areas, providing stabilization against low-flow, standing, and fast-rising water conditions simultaneously.",
      outcome: "Properties protected ahead of the flood event. Deployment confirmed Eco-Dam's versatility across the full range of water rise scenarios."
    },
    {
      title: "Construction Site Dewatering",
      location: "Red Deer, Alberta",
      year: "2018",
      client: "Construction — concrete outcropping installation",
      challenge: "The work area required continuous dewatering over a 30-day period to enable a concrete outcropping installation project.",
      solution: "Muscle Wall deployed for flow diversion; Eco-Dam used for site isolation; continuous pumping maintained for dewatering in porous substrate conditions.",
      outcome: "Dry work area maintained for the full 30-day project duration. Work completed on schedule."
    },
    {
      title: "Winter Pipeline Repair",
      location: "Battle River, Wainwright, Alberta",
      year: "N/A",
      client: "pipeline",
      challenge: "A full river diversion was required for a pipeline repair in -20°C winter conditions, with all work required to be completed within 30 days.",
      solution: "Muscle Wall and Eco-Dam deployed in combination, with a closed-loop glycol circulating system used to insulate all dams and pumps against freezing throughout the project.",
      outcome: "Full river diversion completed in under 30 days with minimal environmental impact. Defender's cold-weather operating capability confirmed under demanding field conditions."
    },
    {
      title: "Pipeline Integrity Dig in Protected Wetlands",
      location: "Barrhead, Alberta",
      year: "2017",
      client: "pipeline",
      challenge: "A pipeline integrity excavation in environmentally protected wetlands required full site isolation and dewatering without disturbing the surrounding ecosystem.",
      solution: "Aqua-Barrier systems deployed to isolate the dig site with continuous dewatering maintained throughout. Equipment placement coordinated to meet all environmental protection requirements.",
      outcome: "Integrity dig completed in full environmental compliance. Wetland ecosystem undisturbed."
    },
    {
      title: "Wetland Flood Mitigation and Creek Diversion",
      location: "Airdrie, Alberta",
      year: "2019",
      client: "Municipal / environmental — flood mitigation infrastructure",
      challenge: "Vegetation accumulation in local wetlands was restricting water volume capacity, increasing flood risk. Work was required in December conditions at -29°C.",
      solution: "Eco-Dam systems installed with glycol circulating units to maintain operability at -29°C. Full creek diversion executed to support dredging operations clearing vegetation obstruction.",
      outcome: "Creek diversion and dredging completed in extreme cold. Wetland water volume capacity restored, reducing downstream flood risk during spring thaw and heavy rainfall events."
    }
  ];

  return (
    <section id="projects" className="py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Project Highlights</h3>
        </div>

        <div className="grid gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/30 transition-all group shadow-xl"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-8">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-brand-green text-sm font-bold uppercase tracking-widest">
                      {project.location} {project.year !== "N/A" && `| ${project.year}`}
                    </p>
                  </div>
                  <div className="bg-brand-green/10 border border-brand-green/20 px-4 py-2 rounded text-xs font-bold text-brand-green uppercase tracking-widest h-fit">
                    {project.client.split('—')[0].trim()}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-1">
                    <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">The Challenge</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">The Solution</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">The Outcome</h5>
                    <p className="text-brand-green/90 text-sm leading-relaxed font-medium">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Careers = () => {
  return (
    <section id="careers" className="py-24 text-white relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] mb-4">Join The Team</h2>
            <h3 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Build Your Career in <br />Disaster Response</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We are always looking for dedicated individuals to join our response teams across Canada and the USA. If you are hardworking, reliable, and want to make a difference in community resilience, we want to hear from you.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h4 className="text-xl font-bold mb-6 uppercase tracking-widest">Application Form</h4>
            <form action="https://formsubmit.co/your-email@example.com" method="POST" encType="multipart/form-data" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  required 
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none transition-all"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none transition-all"
                />
              </div>
              <input 
                type="text" 
                name="position" 
                placeholder="Position Interested In" 
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none transition-all"
              />
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block">Upload Resume (PDF/DOC)</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    name="resume" 
                    accept=".pdf,.doc,.docx"
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3 group-hover:border-brand-green transition-all">
                    <Upload className="w-5 h-5 text-brand-green" />
                    <span className="text-slate-400 text-sm">Choose file...</span>
                  </div>
                </div>
              </div>
              <textarea 
                name="message" 
                placeholder="Tell us about your experience..." 
                rows={4} 
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none transition-all"
              />
              <button type="submit" className="w-full bg-brand-green hover:opacity-90 text-white font-black py-4 rounded-lg uppercase tracking-widest transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-white relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-brand-green p-12 rounded-3xl text-black shadow-2xl">
            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">Get In Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Emergency Line</p>
                  <p className="text-xl font-black">403-352-2476</p>
                  <p className="text-sm opacity-80">Dean Sininger (President/CEO)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Canada East Operations</p>
                  <p className="text-xl font-black">514-607-2431</p>
                  <p className="text-sm opacity-80">Carl Michaelson (Operations Manager)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Headquarters</p>
                  <p className="text-xl font-black">Red Deer, Alberta</p>
                  <p className="text-sm opacity-80">Serving all of North America</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-8 uppercase tracking-widest">Send a Message</h4>
            <form action="https://formsubmit.co/your-email@example.com" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                  <input type="text" name="name" required className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" name="email" required className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                <select name="subject" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none">
                  <option>Flood Assessment</option>
                  <option>Emergency Deployment</option>
                  <option>Construction Project</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea name="message" rows={5} required className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-green outline-none" />
              </div>
              <button type="submit" className="w-full border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-black font-black py-4 rounded-lg uppercase tracking-widest transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-600 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/defender-logo.png" alt="Defender Logo" className="w-8 h-8 object-contain" />
            <span className="text-black font-bold text-lg tracking-tighter uppercase">Defender Disaster Response</span>
          </div>
          <div className="text-zinc-900 text-xs uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Defender Disaster Response Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-900 hover:text-black transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-900 hover:text-black transition-colors"><Phone className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-brand-green selection:text-black">
      <Navbar />
      <main className="bg-linear-to-b from-black via-zinc-900 to-zinc-600">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
