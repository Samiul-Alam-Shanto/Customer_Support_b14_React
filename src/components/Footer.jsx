import { X, MessageSquare, UsersRound, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Our Mission", href: "#mission" },
      { label: "Contact Sales", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Products & Services", href: "#services" },
      { label: "Customer Stories", href: "#stories" },
      { label: "Download Apps", href: "#apps" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Join Us", href: "#careers" },
    ],
  },
];

const socialLinks = [
  {
    label: "@CS — Ticket System",
    href: "#twitter",
    icon: X,
  },
  {
    label: "@CS — Ticket System",
    href: "#community",
    icon: MessageSquare,
  },
  {
    label: "@CS — Ticket System",
    href: "#social",
    icon: UsersRound,
  },
  {
    label: "support@cst.com",
    href: "mailto:support@cst.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="w-full p-3 container mx-auto bg-black px-6 py-10 text-[#8aaccd] sm:px-8 lg:px-[3.125rem]">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-7 lg:gap-y-12">
        {/* Brand description */}
        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="mb-6 text-2xl font-bold leading-tight text-white">
            CS — Ticket System
          </h2>

          <p className="max-w-[550px] text-[17px] leading-[1.45] sm:text-lg">
            We are a simple and powerful platform for managing customer support
            requests. We help businesses track, organize, and resolve issues
            efficiently, ensuring customer satisfaction. Our goal is to make
            support easy, transparent, and effective for both teams and
            customers.
          </p>
        </div>

        {/* Navigation columns */}
        {footerLinks.map((section) => (
          <div key={section.title} className="lg:col-span-2">
            <h3 className="mb-6 text-2xl font-bold leading-tight text-white">
              {section.title}
            </h3>

            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[17px] leading-snug transition-colors duration-200 hover:text-white sm:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social links */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h3 className="mb-6 text-2xl font-bold leading-tight text-white">
            Social Links
          </h3>

          <ul className="space-y-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  className="group flex items-center gap-3 text-[17px] leading-snug transition-colors duration-200 hover:text-white sm:text-lg"
                >
                  <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:scale-105">
                    <Icon size={18} strokeWidth={2} />
                  </span>

                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-[#8aaccd]/60 pt-8 sm:mt-12">
        <p className="text-center text-base leading-relaxed text-white sm:text-xl">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
