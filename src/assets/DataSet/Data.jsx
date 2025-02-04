import { base_url as base } from "../../../config"

export const projects = [
    {
        title: 'Gruppeprosjekt',
        imageUrl: `${base}/images/project_sample1.svg`,
        backgroundColor: '#894141',
        url: 'https://suriya-kodehode.github.io/ViteNPM-prosjekt/',
    },
    {
        title: 'Restaurantmenyen',
        imageUrl: `${base}/images/project_sample2.svg`,
        backgroundColor: '#4A4292',
        url: 'https://suriya-kodehode.github.io/React-Oppgave-1-2---Restaurantmenyen/',
    },
    // {
    //     title: 'Placeholder, project nr. 3',
    //     imageUrl: '/Portfolio-forsettelse-oppgave/images/project_sample3.svg',
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