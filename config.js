/* =========================================================
   KITORZ PORTFOLIO — EASY EDIT CONFIG
   Change everything about your site's content here.
   You almost never need to touch the other files!
========================================================= */

const SITE = {
  name: "Kitorz",

  // ---- YOUTUBE DATA API (for live sub counts + profile pics) ----
  // 1. Go to https://console.cloud.google.com/
  // 2. Create a project -> enable "YouTube Data API v3"
  // 3. Create an API key (Credentials tab) and paste it below.
  // If you leave this empty, the "fallback" numbers/pics below are used instead.
  youtubeApiKey: "",

  // ---- VIDEO SHOWCASES (YouTube Shorts) ----
  showcaseVideos: [
    "JRIIbTsHyFU",
    "3ZHO0rPN8Mg",
    "dLX4wpP75Bg",
    "RLSlqg3E4MU"
  ],

  // ---- BIG CREATOR COLLABS ----
  collabs: [
    {
      handle: "MrBaconyt0",          // without the @
      displayName: "MrBacon",
      fallbackSubs: "61K",          // shown if API key is not set
      fallbackPfp: "mrbacon.jpg"
    },
    {
      handle: "Bauix",
      displayName: "Bauix",
      fallbackSubs: "1K",
      fallbackPfp: "bauix.jpg"
    }
  ],

  // ---- PRICING (EDITING PAGE) ----
  editingPricing: [
    {
      title: "Longform Edit",
      price: "$5",
      unit: "per edited minuted",
      features: [
        "Clean cuts & pacing",
        "Color correction",
        "Synced sound design",
        "Smooth transitions"
      ]
    },
    {
      title: "Shorts / TikToks",
      price: "$10",
      unit: "per short",
      features: [
        "Fast, scroll-stopping pacing",
        "Captions & sound effects",
        "Trend-aware editing",
        "Delivered within 24 hours"
      ]
    }
  ],

  // ---- PRICING (DEVELOPMENT PAGE) ----
  devPricing: [
    {
      title: "Roblox Lua Scripting",
      price: "Contact for Price",
      unit: "based on project scope",
      features: [
        "Game systems & mechanics",
        "GUIs & UI scripting",
        "Data saving (DataStores)",
        "Optimization & bug fixes"
      ]
    }
  ],

  // ---- REVIEWS ----
  reviews: [
    {
      name: "Mrbacon",
      text: "Insanely fast turnaround and the edit pacing was perfect for shorts."
    }
  ],

  // ---- RULES ----
  // icon options: "ban", "x", "warning"
  rules: [
    { icon: "ban", text: "No scamming." },
    { icon: "x", text: "No refunds." },
    { icon: "warning", text: "In case of any emergency, I have the right to cancel any order." }
  ],

  // ---- CONTACT ----
  contact: {
    discord: "devkitorz",
    email: "kitorzroblox@gmail.com"
  }
};
