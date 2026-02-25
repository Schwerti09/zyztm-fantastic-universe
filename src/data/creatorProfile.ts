export interface SocialPlatform {
  name: string          // "YouTube", "Twitch", "TikTok" etc.
  handle: string        // "@zyztm"
  url: string           // volle Link
  color: string         // Tailwind Farbe für Neon-Glow
}

export interface CreatorProfile {
  name: string
  tagline: string
  bio: string
  avatar: string        // später Cloudinary oder public/avatar.png
  banner: string        // später public/banner.jpg
  liveStatus: boolean
  currentStreamUrl?: string
  followers: number
  socials: SocialPlatform[]
}

// ──────────────────────────────────────────────────────────────
// Zentrales Profil – DU ÄNDERST HIER ALLES SPÄTER EINMAL
// ──────────────────────────────────────────────────────────────
export const creatorProfile: CreatorProfile = {
  name: "Zyztm",
  tagline: "NEXUS 2026",
  bio: "Erste vollautomatisierte KI-gesteuerte Streamer-Fan-Plattform. Alle Accounts. Alle Drops. Ein Klick.",
  avatar: "/avatar.png",           // erstmal Platzhalter – wir fügen später echtes Bild ein
  banner: "/banner.jpg",
  liveStatus: false,               // wird später automatisch von APIs gefüllt
  currentStreamUrl: undefined,
  followers: 12400,
  socials: [
    {
      name: "YouTube",
      handle: "@zyztm",
      url: "https://youtube.com/@zyztm",
      color: "neonCyan",
    },
    {
      name: "Twitch",
      handle: "zyztm",
      url: "https://twitch.tv/zyztm",
      color: "purple-500",
    },
    {
      name: "TikTok",
      handle: "@zyztm",
      url: "https://tiktok.com/@zyztm",
      color: "pink-500",
    },
    {
      name: "X",
      handle: "@zyztm",
      url: "https://x.com/zyztm",
      color: "neonMagenta",
    },
    {
      name: "Discord",
      handle: "zyztm.gg",
      url: "https://discord.gg/zyztm",
      color: "indigo-500",
    },
  ],
}
