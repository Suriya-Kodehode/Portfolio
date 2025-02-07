import { base_url as base } from "../../../config"

export const projects = [
    {
        title: 'Gruppeprosjekt',
        imageUrl: `${base}/images/project_sample1.svg`,
        backgroundColor: '#ddeeff30',
        url: 'https://suriya-kodehode.github.io/ViteNPM-prosjekt/',
        description: 'En gruppeoppgave som jeg har jobbet med andre studenter, målet var å bruke NPM pakke i React. Jeg brukte Cheerio for analysere og Axios for å hente HTML info på andre nettside, info ble lagt inn på prosjektsiden med noe redigering for lesbarhet',
    },
    {
        title: 'Restaurantmenyen',
        imageUrl: `${base}/images/project_sample2.svg`,
        backgroundColor: '#85ca4555',
        url: 'https://suriya-kodehode.github.io/React-Oppgave-1-2---Restaurantmenyen/',
        description: 'Laget mat menyer ved bruk av grid-layout i React, og sorterte etter mat kategori',
    },
    // {
    //     title: 'Placeholder, project nr. 3',
    //     imageUrl: `${base}/images/project_sample3.svg`,
    //     backgroundColor: '#125754',
    //     url: 'blank',
    // },
]

export const linkBox = [
    {
        text: 'Github',
        iconLight: `${base}/images/Icon=GitIcon, Color=White.svg`,
        iconDark: `${base}/images/Icon=GitIcon, Color=Black.svg`,
        textTitleLight: 'Git icon lightmode',
        textTitleDark: 'Git icon darkmode',
        url: 'https://github.com/Suriya-Kodehode',
    },
    {
        text: 'Last ned CV',
        iconLight: `${base}/images/Icon=Download, Color=White.svg`,
        iconDark: `${base}/images/Icon=Download, Color=Black.svg`,
        textTitleLight: 'Download icon lightmode',
        textTitleDark: 'Download icon darkmode',
        url: `${base}/CV-Suriya 2025.pdf`,
    }
]

export const courseSkills = [
    {
        text: 'HTML',
        icon: `${base}/images/HTML icon.svg`,
    },
    {
        text: 'CSS',
        icon: `${base}/images/CSS icon.svg`,
    },
    {
        text: 'JavaScript',
        icon: `${base}/images/JavaScript icon.svg`,
    },
    {
        text: 'Figma',
        icon: `${base}/images/Figma icon.svg`,
    },
    {
        text: 'React',
        icon: `${base}/images/React icon.svg`,
    },
]
export const otherSkills = [
    {
        text: 'Unity',
        icon: `${base}/images/Unity icon.svg`,
    },
    {
        text: 'C#',
        icon: `${base}/images/CSharp icon.svg`,
    },
    {
        text: 'Microsoft Certified: Azure Fundamentals',
        icon: null,
    },
    {
        text: 'Microsoft 365 Certified: Fundamentals',
        icon: null,
    },
    {
        text: 'Microsoft Office',
        icon: `${base}/images/Microsoft Office icon.svg`,
    }, 
]
export const selvTaughtSkills = [
    {
        text: 'GIMP',
        icon: `${base}/images/GIMP icon.svg`,
    },
    {
        text: 'Inkscape',
        icon: `${base}/images/Inkscape icon.svg`
    },
    {
        text: 'DaVinci Resolve',
        icon: `${base}/images/DaVinci Resolve icon.svg`
    },
]