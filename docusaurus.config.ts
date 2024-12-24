import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'HDTM',
    tagline: 'Where leaders are made',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://seonwkim.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/hdtm-document/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'seonWKim', // Usually your GitHub org/user name.
    projectName: 'hdtm-document', // Usually your repo name.
    deploymentBranch: "gh-pages",

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        require.resolve('docusaurus-lunr-search')
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/toastmaster.jpg',
        navbar: {
            title: 'HDTM',
            logo: {
                alt: 'HDTM Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Tutorial',
                },
                {
                    href: 'https://www.instagram.com/hongdaetoastmasters/',
                    label: 'Instagram',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Kakao',
                            href: 'https://open.kakao.com/o/ggM3CWFb',
                        },
                        {
                            label: 'Instagram',
                            href: 'https://www.instagram.com/hongdaetoastmasters/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            "label": "Meeting Location - Aank Hotel Hongdae (B1)",
                            "href": "https://www.google.com/maps/place/%EC%95%84%EB%8A%91%ED%98%B8%ED%85%94+%ED%99%8D%EB%8C%80%EC%A0%90/data=!3m1!4b1!4m9!3m8!1s0x357c98dc98502d37:0x30914c6d11b603df!5m2!4m1!1i2!8m2!3d37.5555353!4d126.920378!16s%2Fg%2F11s911n39m?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                        },
                        {
                            label: 'Toastmaster International',
                            href: 'https://www.toastmasters.org/',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/seonWKim/hdtm-document',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} HDTM, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
