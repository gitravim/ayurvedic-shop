import { Leaf, Shield, MapPin, Recycle, FlaskConical, Users, CheckCircle } from 'lucide-react';

const certifications = [
  'USDA Certified Organic',
  'ISO 17025 Accredited Lab Testing',
  'Non-GMO Verified',
  'Heavy Metal Tested — Below USP Limits',
  'Pesticide Residue Screened',
  'California Prop 65 Compliant',
];

const supplyChainSteps = [
  {
    step: '01',
    icon: MapPin,
    title: 'Farm Selection',
    body:
      'Every herb partner holds valid organic certification from a USDA-recognised certifying body. We conduct on-site farm audits annually, reviewing soil records, irrigation sources, and pesticide registers. Farms that fail — even on a single input — are delisted immediately.',
  },
  {
    step: '02',
    icon: Leaf,
    title: 'Wildcrafting & Harvest',
    body:
      'For wildcrafted herbs (such as Amalaki and Haritaki), we work with licensed wildcraft co-operatives in Uttarakhand and Kerala. Harvests are timed to traditional lunar calendars — a practice supported by emerging phytochemical research on harvest-time alkaloid concentration.',
  },
  {
    step: '03',
    icon: FlaskConical,
    title: 'Third-Party Lab Testing',
    body:
      'Every incoming batch is sent to an ISO 17025-accredited independent laboratory before it is accepted into our facility. The panel includes: identity verification (HPTLC), microbial load, pesticide residue screening (400+ compounds), and a full heavy metal panel — arsenic, lead, cadmium, and mercury — verified free of contamination against USP <2232> limits.',
  },
  {
    step: '04',
    icon: Shield,
    title: 'In-House Quality Control',
    body:
      'Accepted batches are logged with a unique Batch ID tied to the original farm, harvest date, and COA (Certificate of Analysis). Every product page carries its current Batch ID so you can request the full COA at any time — no questions asked.',
  },
  {
    step: '05',
    icon: Recycle,
    title: 'Packaging & Fulfilment',
    body:
      'We use amber glass bottles (UV-protective, infinitely recyclable), seed-paper inserts printed with soy ink, and corrugated cardboard outer packaging. We are working toward 100% plastic-free operations by end of 2025.',
  },
  {
    step: '06',
    icon: Users,
    title: 'Fair Trade & Farmer Wellbeing',
    body:
      'We pay above fair-trade floor prices on every contract and share 1% of revenue with the Vaidya Farmer Fund — a direct-transfer programme supporting organic certification costs for smallholder farms in India.',
  },
];

const heavyMetals = [
  { metal: 'Arsenic (As)', limit: '< 10 µg/day', standard: 'USP <2232>' },
  { metal: 'Lead (Pb)', limit: '< 5 µg/day', standard: 'USP <2232>' },
  { metal: 'Cadmium (Cd)', limit: '< 4.1 µg/day', standard: 'USP <2232>' },
  { metal: 'Mercury (Hg)', limit: '< 2 µg/day', standard: 'USP <2232>' },
];

export default function SourceEthicsPage() {
  return (
    <main>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative bg-sepia text-parchment py-20 md:py-28 overflow-hidden woodcut-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-sepia-dark/60 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-parchment/10 mb-6">
            <Leaf size={26} className="text-amber" />
          </div>
          <p className="text-xs font-body uppercase tracking-[0.2em] text-parchment/50 mb-3">
            Transparency Report
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-parchment leading-tight">
            Source &amp; Ethics
          </h1>
          <p className="font-body text-lg text-parchment/70 mt-5 max-w-2xl mx-auto leading-relaxed">
            Ayurveda's efficacy is inseparable from the integrity of its inputs. Every herb we use
            is <strong className="text-parchment font-semibold">certified organic</strong> and{' '}
            <strong className="text-parchment font-semibold">
              verified free of heavy metal contamination
            </strong>{' '}
            by an independent ISO-accredited laboratory before it enters our facility.
          </p>
        </div>
      </section>

      {/* ── Core Commitment Banner ───────────────────────── */}
      <section className="bg-amber/20 border-b border-amber/30 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-forest shrink-0" />
                <span className="font-body text-sm font-medium text-sepia">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heavy Metal Testing ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-2">
              Non-Negotiable
            </p>
            <h2 className="section-heading mb-5">
              Heavy Metal Testing —<br />Every Batch, No Exceptions
            </h2>
            <p className="font-body text-sepia/75 leading-relaxed mb-4">
              Heavy metal contamination is the most serious and most overlooked risk in the herbal
              supplement industry. Soils in certain herb-growing regions carry elevated arsenic,
              lead, and cadmium from both natural geology and historical agricultural inputs.
            </p>
            <p className="font-body text-sepia/75 leading-relaxed mb-4">
              We test every single incoming batch — not by category, not by supplier, not annually
              — <em>every batch</em>. Results are verified against the{' '}
              <strong className="text-sepia">USP &lt;2232&gt;</strong> standard, which sets
              maximum permissible daily exposure limits for botanical dietary supplements.
            </p>
            <p className="font-body text-sepia/75 leading-relaxed">
              If a batch exceeds limits on any single metal, it is rejected and destroyed. It does
              not enter our warehouse. Period.
            </p>
          </div>

          {/* Metal limits table */}
          <div className="frame-card overflow-hidden">
            <div className="bg-sepia/5 border-b border-sepia/15 px-5 py-4">
              <h3 className="font-display text-base font-semibold text-sepia">
                Our Heavy Metal Limits
              </h3>
              <p className="font-body text-xs text-sepia/50 mt-0.5">
                All products tested per USP &lt;2232&gt; dietary supplement specifications
              </p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-sepia/10">
                  <th className="text-left px-5 py-3 font-body text-xs font-semibold text-sepia/60 uppercase tracking-wide">Metal</th>
                  <th className="text-left px-5 py-3 font-body text-xs font-semibold text-sepia/60 uppercase tracking-wide">Max Daily Limit</th>
                  <th className="text-left px-5 py-3 font-body text-xs font-semibold text-sepia/60 uppercase tracking-wide">Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sepia/10">
                {heavyMetals.map(({ metal, limit, standard }) => (
                  <tr key={metal} className="hover:bg-sepia/3 transition-colors">
                    <td className="px-5 py-3.5 font-body text-sm font-medium text-sepia">{metal}</td>
                    <td className="px-5 py-3.5 font-body text-sm text-sepia/75">{limit}</td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs font-body font-medium bg-forest/10 text-forest border border-forest/20 px-2 py-0.5 rounded-full">
                        {standard}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-4 bg-forest/5 border-t border-forest/20">
              <p className="font-body text-xs text-forest font-medium flex items-start gap-1.5">
                <CheckCircle size={13} className="shrink-0 mt-0.5" />
                Certificates of Analysis available on request for any product batch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="etched-divider max-w-6xl mx-auto px-4 sm:px-6" />

      {/* ── Supply Chain Steps ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-2">
            Seed to Shelf
          </p>
          <h2 className="section-heading">Our Supply Chain</h2>
          <p className="font-body text-sepia/65 mt-3 max-w-xl mx-auto leading-relaxed">
            Full transparency, from the farm that grew the herb to the bottle in your hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supplyChainSteps.map(({ step, icon: Icon, title, body }) => (
            <div key={step} className="frame-card p-6 flex gap-5">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-sepia/10 flex items-center justify-center">
                  <Icon size={18} className="text-sepia" />
                </div>
                <div className="font-display text-xs text-sepia/30 font-semibold text-center mt-1">
                  {step}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-sepia mb-2">{title}</h3>
                <p className="font-body text-sm text-sepia/70 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COA Request CTA ─────────────────────────────── */}
      <section className="bg-sepia/5 border-y border-sepia/15 py-14 woodcut-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <FlaskConical size={28} className="text-sepia mx-auto mb-4" />
          <h2 className="section-heading text-2xl md:text-3xl mb-3">
            Request a Certificate of Analysis
          </h2>
          <p className="font-body text-sepia/70 leading-relaxed mb-6">
            Every product ships with a Batch ID. Send us that ID and we will return the full
            third-party COA — including heavy metal results, microbial counts, and identity
            verification — within 24 hours.
          </p>
          <a
            href="mailto:coa@vaidyaco.com"
            className="btn-primary inline-flex items-center gap-2 py-3.5 px-8 text-base"
          >
            Request COA by Email
          </a>
          <p className="font-body text-xs text-sepia/40 mt-3">coa@vaidyaco.com · Free · No account required</p>
        </div>
      </section>
    </main>
  );
}
