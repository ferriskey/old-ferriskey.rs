import { defineExplainerConfig } from "@/lib/utils";

export default defineExplainerConfig({
  meta: {
    title: "FerrisKey",
    description:
      "FerrisKey is an open-source IAM (Identity and Access Management) solution designed for modern cloud-native environments. ",
    thumbnail: "/logo_ferriskey.png",
  },
  urls: {
    github: "https://github.com/ferriskey/ferriskey",
    getStarted: "/docs/welcome/introduction",
    documentation: "/docs/welcome/installation",
  },
  docs: {
    welcome: {
      icon: "lucide:pencil-line",
      label: "Welcome",
      href: "/docs/welcome/introduction",
      baseUrl: "/docs/welcome",
    },
    concepts: {
      icon: "lucide:book",
      label: "Concepts",
      href: "/docs/concepts/overview",
      baseUrl: "/docs/concepts",
    },
    modules: {
      icon: "lucide:code",
      label: "Modules",
      href: "/docs/modules/trident",
      baseUrl: "/docs/modules",
    },
    tutorials: {
      icon: "lucide:graduation-cap",
      label: "Tutorials",
      href: "/docs/tutorials/deploy-on-k8s",
      baseUrl: "/docs/tutorials",
    },
    // reference: {
    //   icon: "lucide:braces",
    //   label: "Reference",
    //   href: "/docs/reference/helm-chart",
    //   baseUrl: "/docs/reference",
    // },
  },
  blog: {
    defaults: {
      thumbnail: "https://placehold.co/1200x630",
    },
    authors: {
      leadcode_dev: {
        name: "LeadcodeDev",
        avatar: "https://avatars.githubusercontent.com/u/8946317?v=4",
        href: "https://github.com/LeadcodeDev",
      },
      nathael: {
        name: "Nathael",
        avatar: "https://avatars.githubusercontent.com/u/64804778?v=4",
        href: "https://github.com/nathaelb",
      },
    },
  },
  navbar: [
    {
      label: "Documentation",
      items: [
        {
          label: "Getting started",
          description:
            "A quick introduction to FerrisKey and how to get started with installation and basic usage.",
          href: "/docs/welcome/introduction",
        },
        {
          label: "Concepts",
          description:
            "Discover the philosophie, architecture and core concepts of FerriseKey.",
          href: "/docs/concepts/overview",
        },
        {
          label: "Tutorials",
          description:
            "Step-by-step guides to help you deploy, configure, and use FerrisKey in real-world scenarios.",
          href: "/docs/tutorials/deploy-on-k8s",
        },
        {
          label: "Modules",
          description:
            "Explore the different modules that make up FerrisKey and learn how they work together.",
          href: "/docs/modules/trident",
        },
      ],
    },
    {
      label: "Modules",
      items: [
        {
          label: "Trident",
          description:
            "Advanced multi-factor authentication and policy engine—secure every login and critical action.",
          href: "/docs/modules/trident",
        },
        {
          label: "Webhooks",
          description:
            "Integrate external systems and automate workflows with FerrisKey's flexible webhook support.",
          href: "/docs/modules/webhooks",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  social: {
    github: {
      href: "https://github.com/ferriskey/ferriskey",
      icon: "mdi:github",
    },
  },
});
