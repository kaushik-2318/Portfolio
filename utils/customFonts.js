import localfont from "next/font/local"

const Vonique = localfont({
    src: [
        { path: "../fonts/Vonique.otf" }
    ],
    variable: "--font-vonique",
})
const Decomart = localfont({
    src: [
        { path: "../fonts/Decomart.otf" }
    ],
    variable: "--font-Decomart",
})
const Varino = localfont({
    src: [
        { path: "../fonts/Varino.otf" }
    ],
    variable: "--font-Varino",
})
const Syne = localfont({
    src: [
        {
            path: "../fonts/Syne-Bold.ttf",
            weight: "700"
        },
        {
            path: "../fonts/Syne-ExtraBold.ttf",
            weight: "800",
        }
    ],
    variable: "--font-Syne",
})
const MonaSansExpandedBold = localfont({
    src: [
        { path: "../fonts/MonaSansExpanded-Bold.ttf" }
    ],
    variable: "--font-MonaSansExpandedBold",
})
const Montserrat = localfont({
    src: [
        { path: "../fonts/MontserratAlternates-Regular.ttf" }
    ],
    variable: "--font-Montserrat"
})
const Lora = localfont({
    src: [
        { path: "../fonts/Lora-MediumItalic.ttf" }
    ],
    variable: "--font-Lora"
})

export { Vonique, Decomart, Varino, Syne, MonaSansExpandedBold, Montserrat, Lora };