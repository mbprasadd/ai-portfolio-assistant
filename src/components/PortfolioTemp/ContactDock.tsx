"use client";

import {
  Mail,
  MessageCircleMore,
//   Linkedin,
  Download,
} from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email Me",
    href: "mailto:bhanuprasadm23@gmail.com?subject=Frontend%20Developer%20Opportunity&body=Hi%20Bhanu,%0A%0AI%20came%20across%20your%20portfolio%20while%20searching%20for%20a%20Frontend%20Developer.%20I%20was%20impressed%20with%20your%20work%20and%20would%20love%20to%20connect%20with%20you%20to%20discuss%20a%20potential%20opportunity.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20Regards",
    color: "hover:bg-red-600",
  },
  {
    icon: MessageCircleMore,
    label: "WhatsApp",
    href: "https://wa.me/919030981779?text=Hi%20Bhanu!%20👋%0A%0AI%20came%20across%20your%20portfolio%20while%20searching%20for%20a%20Frontend%20Developer.%20I%20was%20impressed%20with%20your%20skills%20and%20projects.%20I%20would%20love%20to%20connect%20with%20you%20and%20discuss%20a%20potential%20opportunity.%0A%0ALooking%20forward%20to%20hearing%20from%20you!👋",
    color: "hover:bg-green-500",
    target: "_blank",
  },
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     href:
//       "https://linkedin.com/in/bhanuprasadmanthri707049256",
//     color: "hover:bg-blue-600",
//     target: "_blank",
//   },
  {
    icon: Download,
    label: "Resume",
    href: "https://drive.google.com/file/d/1-S-UF2FlWo2d6NY3JV251CzGqYsVbpVH/view",
    color: "hover:bg-[gray]",
    download: true,
    target: "_blank",
  },
];

export default function ContactDock() {
  return (
    <div className="fixed left-2 top-7/8 md:top-1/2  -translate-y-1/2 z-40 flex flex-col gap-1">
      {contacts.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.target}
            rel="noopener noreferrer"
            download={item.download}
            className="group relative flex items-center"
          >
            {/* Label */}

            <span
              className="
              absolute
              left-16
              whitespace-nowrap
              rounded-xl
              border
              border-white/10
              bg-zinc-900/95
              backdrop-blur-xl
              px-4
              py-2
              text-sm
              text-white
              opacity-0
              -translate-x-3
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-x-0
              pointer-events-none
            "
            >
              {item.label}
            </span>

            {/* Icon */}

            <div
              className={`
                h-10
                w-10
                rounded-2xl
                border
                border-white/10
                bg-zinc-900/80
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-white
                shadow-xl
                transition-all
                duration-300
                group-hover:scale-110
                ${item.color}
              `}
            >
              <Icon size={18} className="text-red-500 hover:text-black" />
            </div>
          </a>
        );
      })}
    </div>
  );
}