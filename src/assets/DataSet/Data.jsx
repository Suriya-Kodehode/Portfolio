import path from "./FileManager"

const icons = path("icons", [{ 
    csharp: "CSharp icon.svg",
    css: "CSS icon.svg", 
    davinci: "DaVinci Resolve icon.svg", 
    figma: "Figma icon.svg", 
    gimp: "GIMP icon.svg", 
    html: "HTML icon.svg", 
    inkscape: "Inkscape icon.svg", 
    javascript: "JavaScript icon.svg", 
    moffice: "Microsoft Office icon.svg", 
    react: "React icon.svg", 
    unity: "Unity icon.svg", 
    scircle: "S circle.svg", 
    sunlight: "sun-light.svg", 
    moondarkpng: "moon-dark.png", 
    moondarksvg: "moon-dark.svg", 
    downloaddark:"Icon=Download, Color=Black.svg", 
    downloadlight: "Icon=Download, Color=White.svg", 
    gitdark: "Icon=GitIcon, Color=Black.svg", 
    gitlight: "Icon=GitIcon, Color=White.svg"
}]);
const image = path("images", [{
    project1: "project_sample1.svg",
    project2: "project_sample2.svg",
    project3: "project_sample3.svg",
    me: "Me2024.svg",
}])
const download = path("downloads", [{ 
    mycv: "CV-Suriya 2025.pdf",
}])

export const projects = [
    {
        title: 'Gruppeprosjekt',
        imageUrl: image.project1,
        url: 'https://suriya-kodehode.github.io/ViteNPM-prosjekt/',
        description: 'En gruppeoppgave som jeg har jobbet med andre studenter, målet var å bruke NPM pakke i React. Jeg brukte Cheerio for analysere og Axios for å hente HTML info på andre nettside, info ble lagt inn på prosjektsiden med noe redigering for lesbarhet',
    },
    {
        title: 'Restaurantmenyen',
        imageUrl: image.project2,
        url: 'https://suriya-kodehode.github.io/React-Oppgave-1-2---Restaurantmenyen/',
        description: 'Laget mat menyer ved bruk av grid-layout i React, og sorterte etter mat kategori',
    },
    // {
    //     title: 'Placeholder, project nr. 3',
    //     imageUrl: `${base}/images/project_sample3.svg`,
    //     url: 'blank',
    // },
]

export const linkBox = [
    {
        text: 'Github',
        iconLight: icons.gitlight,
        iconDark: icons.gitdark,
        textTitleLight: 'Git icon lightmode',
        textTitleDark: 'Git icon darkmode',
        url: 'https://github.com/Suriya-Kodehode',
    },
    {
        text: 'Last ned CV',
        iconLight: icons.downloadlight,
        iconDark: icons.downloaddark,
        textTitleLight: 'Download icon lightmode',
        textTitleDark: 'Download icon darkmode',
        url: download.mycv,
    }
]

export const courseSkills = [
    {
        text: 'HTML',
        icon: icons.html,
    },
    {
        text: 'CSS',
        icon: icons.css,
    },
    {
        text: 'JavaScript',
        icon: icons.javascript,
    },
    {
        text: 'Figma',
        icon: icons.figma,
    },
    {
        text: 'React',
        icon: icons.react,
    },
]
export const otherSkills = [
    {
        text: 'Unity',
        icon: icons.unity,
    },
    {
        text: 'C#',
        icon: icons.csharp,
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
        icon: icons.moffice,
    }, 
]
export const selvTaughtSkills = [
    {
        text: 'GIMP',
        icon: icons.gimp,
    },
    {
        text: 'Inkscape',
        icon: icons.inkscape
    },
    {
        text: 'DaVinci Resolve',
        icon: icons.davinci
    },
]