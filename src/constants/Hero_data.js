
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

export const CATALOGUES = [
    {
        id: "mdf-medelack",
        label: "MDF MEDELACK LOGIMAR",
        pdf: ASSETS.PDFS.MDF_MEDELACK,
        image: ASSETS.IMAGES.poster1
    },
    {
        id: "mdf-color",
        label: "MDF COLOR",
        pdf: ASSETS.PDFS.MDF_COLOR,
        image: ASSETS.IMAGES.poster1
    },
    {
        id: "mdf-logimar",
        label: "MDF LOGIMAR",
        pdf: ASSETS.PDFS.MDF_LOGIMAR,
        image: ASSETS.IMAGES.poster1
    },
    {
        id: "new-mdf",
        label: "NEW MDF LOGIMAR",
        pdf: ASSETS.PDFS.NEW_MDF,
        image: ASSETS.IMAGES.poster1
    },
    {
        id: "marbre-granite",
        label: "Marbre & granite",
        pdf: ASSETS.PDFS.MARBRE_GRANITE,
        image: ASSETS.IMAGES.poster1
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

// ========== ABOUTSection SLIDER CARDS ==========
export const SLIDER_CARDS = [
    {
        id: 0, src: "/videos/test.mp4", poster: ASSETS.IMAGES.poster1,
        title: "VOTRE CUISINE\nSUR MESURE",
        subtitle: "De l'idée à la réalisation, nous faisons vivre votre projet.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 1, src: "/videos/test.mp4", poster: ASSETS.IMAGES.poster2,
        title: "VOTRE SALLE DE BAIN\nSUR MESURE",
        subtitle: "De l'idée à la réalisation, nous faisons vivre votre projet.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2, src: "/videos/test.mp4", poster: ASSETS.IMAGES.poster1,
        title: "VOS ESPACES\nSUR MESURE",
        subtitle: "De l'idée à la réalisation, nous faisons vivre votre projet.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3, src: "/videos/test.mp4", poster: ASSETS.IMAGES.poster2,
        title: "VOTRE SALON\nSUR MESURE",
        subtitle: "De l'idée à la réalisation, nous faisons vivre votre projet.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];

// ========== SERVICES ==========
export const SERVICES = [
    {
        id: 0,
        image: ASSETS.IMAGES["service1"],
        title: "CONCEPTION INTÉRIEURE",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. vivamus euismod, justo at tincidunt tristique, ligula nisi volutpat elit, at luctus nunc eros a est.",
    },
    {
        id: 1,
        image: ASSETS.IMAGES["service1"],
        title: "REVÊTEMENTS EN PIERRE",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. vivamus euismod, justo at tincidunt tristique, ligula nisi volutpat elit, at luctus nunc eros a est.",
    },
    {
        id: 2,
        image: ASSETS.IMAGES["service1"],
        title: "MENUISERIE SUR MESURE",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. vivamus euismod, justo at tincidunt tristique, ligula nisi volutpat elit, at luctus nunc eros a est.",
    },
    {
        id: 3,
        image: ASSETS.IMAGES["service1"],
        title: "AMÉNAGEMENT COMPLET",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. vivamus euismod, justo at tincidunt tristique, ligula nisi volutpat elit, at luctus nunc eros a est.",
    },
    {
        id: 4,
        image: ASSETS.IMAGES["service1"],
        title: "IMPORT DE MATÉRIAUX",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. vivamus euismod, justo at tincidunt tristique, ligula nisi volutpat elit, at luctus nunc eros a est.",
    },
];

// ========== CATEGORIES DATA  ==========
export const CATEGORIES = [
    {
        id: "marbre",
        label: "Marbre",
        products: [
            { id: 1, name: "Marbre Taza Beige Bouchardé", image: ASSETS.IMAGES.produit1 },
            { id: 2, name: "Marbre Taza Gris Bouchardé", image: ASSETS.IMAGES.produit2 },
            { id: 3, name: "Marbre Marron Imperial", image: ASSETS.IMAGES.produit3 },
            { id: 4, name: "Marbre Blanc Marmara", image: ASSETS.IMAGES.produit4 },
            { id: 5, name: "Marbre Noir Marquina", image: ASSETS.IMAGES.produit1 },
            { id: 6, name: "Marbre Crema Marfil", image: ASSETS.IMAGES.produit2 },
        ],
    },
    {
        id: "granite",
        label: "Granite",
        products: [
            { id: 1, name: "Granite Noir Zimbabwe", image: ASSETS.IMAGES.produit1 },
            { id: 2, name: "Granite Gris Perle", image: ASSETS.IMAGES.produit2 },
            { id: 3, name: "Granite Beige Cachemire", image: ASSETS.IMAGES.produit3 },
            { id: 4, name: "Granite Rouge Multicolore", image: ASSETS.IMAGES.produit4 },
            { id: 5, name: "Granite Bleu Bahia", image: ASSETS.IMAGES.produit1 },
            { id: 6, name: "Granite Vert Ubatuba", image: ASSETS.IMAGES.produit2 },
        ],
    },
    {
        id: "mdf-medelack",
        label: "Mdf Medelack",
        products: [
            { id: 1, name: "MDF Medelack Blanc", image: ASSETS.IMAGES.produit1 },
            { id: 2, name: "MDF Medelack Noir", image: ASSETS.IMAGES.produit2 },
            { id: 3, name: "MDF Medelack Chêne", image: ASSETS.IMAGES.produit3 },
            { id: 4, name: "MDF Medelack Noyer", image: ASSETS.IMAGES.produit4 },
            { id: 5, name: "MDF Medelack Gris", image: ASSETS.IMAGES.produit1 },
            { id: 6, name: "MDF Medelack Wengé", image: ASSETS.IMAGES.produit2 },
        ],
    },
    {
        id: "mdf-color",
        label: "Mdf Color",
        products: [
            { id: 1, name: "MDF Color Rouge", image: ASSETS.IMAGES.produit1 },
            { id: 2, name: "MDF Color Bleu", image: ASSETS.IMAGES.produit2 },
            { id: 3, name: "MDF Color Vert", image: ASSETS.IMAGES.produit3 },
            { id: 4, name: "MDF Color Jaune", image: ASSETS.IMAGES.produit4 },
            { id: 5, name: "MDF Color Orange", image: ASSETS.IMAGES.produit1 },
            { id: 6, name: "MDF Color Violet", image: ASSETS.IMAGES.produit2 },
        ],
    },
    {
        id: "mdf-logimar",
        label: "Mdf Logimar",
        products: [
            { id: 1, name: "MDF Logimar Classic", image: ASSETS.IMAGES.produit1 },
            { id: 2, name: "MDF Logimar Premium", image: ASSETS.IMAGES.produit2 },
            { id: 3, name: "MDF Logimar Elite", image: ASSETS.IMAGES.produit3 },
            { id: 4, name: "MDF Logimar Ultra", image: ASSETS.IMAGES.produit4 },
            { id: 5, name: "MDF Logimar Pro", image: ASSETS.IMAGES.produit1 },
            { id: 6, name: "MDF Logimar Max", image: ASSETS.IMAGES.produit2 },
        ],
    },
];
