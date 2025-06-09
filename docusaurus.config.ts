import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Learn & Code Weekly",
  tagline:
    "Join me every week as I share my journey through the world of tech, coding, life lessons & interesting facts!",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },

  url: "https://learn-code-weekly.vercel.app/",
  baseUrl: "/",
  organizationName: "facebook",
  projectName: "Learn & Code Weekly",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, locale, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({
              content,
              locale,
              options: { wordsPerMinute: 300 },
            }),
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          blogSidebarCount: 5,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.png",
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    metadata: [
      {
        name: "keywords",
        content:
          "Learn & Code Weekly, tech newsletter, software engineering, coding, web development, distributed systems, cloud architecture, tech writing",
      },
      {
        name: "description",
        content:
          "Join me every week as I share my journey through the world of tech, coding, life lessons & interesting facts!",
      },
    ],

    navbar: {
      title: "Learn & Code Weekly",
      logo: {
        alt: "Site Logo",
        src: "img/icon.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Weekly Newsletters",
        },
        { to: "/blog", label: "Articles", position: "left" },
        {
          href: "/about",
          label: "About Me",
          position: "right",
        },
        {
          href: "/donate",
          label: "Donate",
          position: "right",
        },
        {
          href: "https://github.com/Sumonta056/Learn-Code-Weekly",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/newsletters/learn-code-weekly-7309186050084544512/",
          label: "Subscribe",
          position: "right",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Newsletters",
              to: "/docs/intro",
            },
            {
              label: "Articles",
              to: "/blog",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/sumontasaha/",
            },
            {
              label: "GitHub",
              href: "https://github.com/sumonta056",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/yourusername",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sumonta Saha Mridul. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],
};

export default config;
