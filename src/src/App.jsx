import React from "react";

const Icon = ({ children }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-2xl ring-1 ring-emerald-400/20">
    {children}
  </div>
);

const Button = ({ children, variant = "primary", className = "" }) => {
  const styles =
    variant === "outline"
      ? "border border-stone-600 bg-white/5 text-white hover:bg-white/10"
      : variant === "white"
      ? "bg-white text-stone-950 hover:bg-stone-100"
      : "bg-emerald-500 text-stone-950 hover:bg-emerald-400";

  return (
    <button className={`rounded-2xl px-6 py-4 font-bold transition ${styles} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl ${className}`}>
    {children}
  </div>
);

export default function PineHomeSecurityWebsite() {
  const services = [
    {
      icon: "📹",
      title: "Security Camera Systems",
      text: "Custom camera systems for homes, cabins, shops, ranches, equipment yards, and businesses.",
    },
    {
      icon: "🚪",
      title: "Security Gates & Access Control",
      text: "Automatic gates, keypad entry, smart access, ranch gates, and commercial gate systems.",
    },
    {
      icon: "📡",
      title: "Internet & Networking",
      text: "Reliable internet setup, Wi-Fi coverage, remote viewing, and network troubleshooting for mountain properties.",
    },
    {
      icon: "🔐",
      title: "Smart Locks & Remote Access",
      text: "Control doors, gates, cameras, and access from your phone, wherever you are.",
    },
    {
      icon: "🛰️",
      title: "Remote Property Monitoring",
      text: "Keep an eye on your property, driveway, equipment, cabin, or business when you are away.",
    },
    {
      icon: "🔧",
      title: "Service & Maintenance",
      text: "Local support, repairs, upgrades, and system checks from a company that understands mountain properties.",
    },
  ];

  const packages = [
    {
      title: "Cabin Watch Package",
      items: ["Camera system", "Remote viewing", "Smart lock option", "Internet integration", "Property check add-on"],
    },
    {
      title: "Mountain Estate Package",
      items: ["Full camera coverage", "Smart security gate", "Access control", "Remote monitoring", "Network setup"],
    },
    {
      title: "Equipment Yard Protection",
      items: ["Security gate", "License plate cameras", "Motion alerts", "Remote access", "Commercial monitoring"],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-stone-950 to-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-2xl ring-1 ring-emerald-400/30">
              🌲
            </div>
            <div>
              <div className="text-lg font-bold tracking-wide">Pine Home & Security</div>
              <div className="text-xs text-stone-300">Conifer, Colorado</div>
            </div>
          </div>
          <Button className="hidden sm:block">Get a Free Consultation</Button>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
              🛡️ Mountain Property Security Done Right
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Protect your home before trouble reaches the driveway.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Custom security systems, cameras, security gates, internet integration, smart locks, and remote monitoring built for Colorado mountain homes, cabins, ranches, and businesses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Schedule a Property Walkthrough</Button>
              <Button variant="outline">View Services</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-300">
              <span>✅ Local Service</span>
              <span>✅ No Big-Company Headaches</span>
              <span>✅ Built for Mountain Living</span>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur">
              <div className="relative h-[520px] bg-gradient-to-br from-stone-800 to-emerald-950 p-8">
                <div className="absolute inset-x-8 top-8 rounded-3xl border border-emerald-300/20 bg-black/30 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-stone-300">Live Property View</div>
                      <div className="text-xl font-bold">Driveway Gate • Online</div>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-emerald-300" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-black/35 p-5 ring-1 ring-white/10">
                    <div className="mb-4 text-4xl">🏔️</div>
                    <div className="font-bold">Mountain Ready</div>
                    <p className="mt-2 text-sm text-stone-300">Designed for long driveways, tough weather, and remote locations.</p>
                  </div>
                  <div className="rounded-3xl bg-black/35 p-5 ring-1 ring-white/10">
                    <div className="mb-4 text-4xl">📱</div>
                    <div className="font-bold">Control Anywhere</div>
                    <p className="mt-2 text-sm text-stone-300">View cameras, open gates, and manage access from your phone.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500/20 text-6xl ring-1 ring-emerald-300/30">
                  🛡️
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Services</div>
          <h2 className="text-4xl font-black md:text-5xl">Complete security for mountain properties.</h2>
          <p className="mt-5 text-lg leading-8 text-stone-300">
            From the gate to the garage, we design practical systems that work in real Colorado conditions.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <div className="p-7">
                <Icon>{service.icon}</Icon>
                <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-stone-300">{service.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-stone-900/70 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Why Pine</div>
            <h2 className="text-4xl font-black md:text-5xl">Local, reliable, and built for the mountains.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Big security companies are not built for long driveways, spotty service, snow, remote cabins, ranch entrances, and mountain networking problems. Pine Home & Security is.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Colorado mountain property experience",
              "Custom systems instead of cookie-cutter installs",
              "Security gates, cameras, networking, and access control",
              "Local support when something needs attention",
              "Residential, ranch, equipment yard, and commercial options",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                <div className="mt-1 text-emerald-300">✅</div>
                <div className="text-lg font-semibold text-stone-100">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Packages</div>
          <h2 className="text-4xl font-black md:text-5xl">Starter packages that can be customized.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pack) => (
            <Card key={pack.title} className="rounded-[2rem]">
              <div className="p-8">
                <h3 className="text-2xl font-black text-white">{pack.title}</h3>
                <div className="mt-6 space-y-4">
                  {pack.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-stone-300">
                      <span className="text-emerald-300">✅</span> {item}
                    </div>
                  ))}
                </div>
                <Button className="mt-8 w-full">Request Estimate</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-700 to-stone-950 p-10 shadow-2xl md:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">Ready to secure your property?</h2>
              <p className="mt-5 text-lg leading-8 text-emerald-50/90">
                Schedule a walkthrough for your home, cabin, ranch, shop, or equipment yard. We’ll look at access points, internet, power, cameras, gates, and monitoring options.
              </p>
            </div>
            <Card className="rounded-[2rem] bg-black/25">
              <div className="space-y-5 p-8">
                <div className="text-lg font-bold text-white">📍 Serving Conifer, Bailey, Evergreen & surrounding mountain communities</div>
                <div className="text-lg font-bold text-white">📞 Call for a free consultation</div>
                <Button variant="white" className="w-full">Contact Pine Home & Security</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-stone-400">
        © 2026 Pine Home & Security. Mountain property security, gates, cameras, networking, and monitoring.
      </footer>
    </div>
  );
}
