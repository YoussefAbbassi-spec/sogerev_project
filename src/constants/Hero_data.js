
import { ASSETS } from "../assets";

// ========== CONTACT INFO ==========
export const CONTACT_INFO = [
    {
        id: "phone",
        label: "Numéro de téléphone",
        value: "(+212) 6 60 34 35 55",
        href: "tel:+212660343555",
    },
    {
        id: "email",
        label: "E-mail ici",
        value: "contact@sogerev.com",
        href: "contact@sogerev.com",
    },
    {
        id: "address",
        label: "Adresse",
        value: "km 9 Route Moulay Thami, Casablanca 20250",
        href: "#",
    },
];

// ========== NAV LINKS ==========
export const NAV_LINKS = [
    { id: "home", label: "Accueil", href: "#" },
    { id: "about", label: "À propos", href: "#" },
    { id: "products", label: "Nos produits", href: "#" },
    { id: "services", label: "Nos services", href: "#" },
    { id: "contact", label: "Contactez-Nous", href: "#" },
];

// ========== CATALOGUES ==========
// Each catalogue links to a downloadable PDF from ASSETS.PDFS
export const CATALOGUES = [
    {
        id: "mdf-medelack",
        label: "MDF MEDELACK LOGIMAR",
        pdf: ASSETS.PDFS.MDF_MEDELACK, // replace null in assets/index.js with the PDF
    },
    {
        id: "mdf-color",
        label: "MDF COLOR",
        pdf: ASSETS.PDFS.MDF_COLOR,
    },
    {
        id: "mdf-logimar",
        label: "MDF LOGIMAR",
        pdf: ASSETS.PDFS.MDF_LOGIMAR,
    },
    {
        id: "new-mdf",
        label: "NEW MDF LOGIMAR",
        pdf: ASSETS.PDFS.NEW_MDF,
    },
];

// ========== HERO SLIDES ==========
export const SLIDES = [
    {
        id: 1,
        heroTitle: "ÉLEVEZ VOTRE ESPACE: PIERRE SCULPTÉE, MENUISERIE SUR MESURE ET AMÉNAGEMENT COMPLET, TOUT EN HARMONIE",
        heroSubTitle: "Chez Sogerev Inter, nous ne fournissons pas seulement de la pierre, nous fournissons des œuvres d'art sculptées par la nature.",
        heroImage: ASSETS.IMAGES.SLIDE_1, // replace null in assets/index.js with the image
    },
    {
        id: 2,
        heroTitle: "EXCELLENCE ET SAVOIR-FAIRE AU SERVICE DE VOS PROJETS",
        heroSubTitle: "Des solutions sur mesure pour transformer vos espaces en véritables œuvres d'art.",
        heroImage: ASSETS.IMAGES.SLIDE_2,
    },
    {
        id: 3,
        heroTitle: "LA PIERRE NATURELLE AU CŒUR DE CHAQUE RÉALISATION",
        heroSubTitle: "Découvrez notre collection exclusive de matériaux nobles pour sublimer votre intérieur.",
        heroImage: ASSETS.IMAGES.SLIDE_3,
    },
    {
        id: 4,
        heroTitle: "LA PIERRE NATURELLE AU CŒUR DE CHAQUE RÉALISATION",
        heroSubTitle: "Découvrez notre collection exclusive de matériaux nobles pour sublimer votre intérieur.",
        heroImage: ASSETS.IMAGES.SLIDE_4,
    },
    {
        id: 5,
        heroTitle: "LA PIERRE NATURELLE AU CŒUR DE CHAQUE RÉALISATION",
        heroSubTitle: "Découvrez notre collection exclusive de matériaux nobles pour sublimer votre intérieur.",
        heroImage: null,
    }
];

// ========== SOCIAL LINKS ==========
export const SOCIAL_LINKS = [
    { id: "instagram", href: "#" },
    { id: "facebook", href: "#" },
    { id: "tiktok", href: "#" },
    { id: "youtube", href: "#" },
    { id: "whatsapp", href: "#" },
];

// ========== HERO CTAS ==========
export const HERO_CTAS = [
    { id: "catalogues", label: "Voir nos catalogues", href: "#" },
    { id: "products", label: "Découvrir nos produits", href: "#" },
];

