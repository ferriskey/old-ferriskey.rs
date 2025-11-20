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
      href: "/docs",
    },
    {
      label: "Modules",
      items: [
        {
          label: "Trident",
          description:
            "Advanced multi-factor authentication and policy engine—secure every login and critical action.",
          href: "/products/trident",
        },
      ],
    },
  ],
  social: {
    github: {
      href: "https://github.com/ferriskey/ferriskey",
      icon: "mdi:github",
    },
  },
});
