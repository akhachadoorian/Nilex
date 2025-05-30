
import WhiteLogo from "../WhiteLogo.svg"
import Logo from "../images/Logo.png"

import HeroBackground from "../images/HeroBg.png"
import HeroBackgroundMobile from "../images/HeroMobile.png"

import IndustrialPic from "../images/Industrial.png"
import LightbulbWhite from "../images/Lightbulb-White.svg"
import HelmetWhite from "../images/Helmet-White.svg"
import GloveWhite from "../images/Glove-White.svg"

import OrangeMail from "../images/OrangeEmail.svg"
import OrangePhone from "../images/OrangePhone.svg"
import OrangePen from "../images/OrangePen.svg"
import LightMail from "../images/LightMail.svg"
import LightPhone from "../images/LightPhone.svg"
import LightPen from "../images/LightPen.svg"

import WhitePhone from "../images/Phone-White.svg"
import WhiteEmail from "../images/Email-White.svg"
import WhitePen from "../images/WhitePen.svg"

export const navigation = {
    logo: Logo,
    links: [
        {
            name: 'About',
            id: 'About'
        },
        {
            name: 'Products',
            id: 'Products'
        },
        {
            name: 'Contact',
            id: 'Contact'
        },
    ]
}

export const footer = {
    logo: Logo,
    footerText: [
        {
            text: 'Copyright 2025 by Nilex Industrial',
            link: ' ',
        },
        {
            text: 'Privacy Statement',
            link: ' ',
        },
        {
            text: 'Designed & Developed By Alex Khachadoorian',
            link: ' ',
        },
    ],
    contactButtons: [
        {
            icon: {
                svg: WhitePhone,
                altText: 'Phone icon'
            },
            fa_icon: "phone",
            text: '(251) 458-9718',
            link: 'tel:2514589718',
            target: '',
        },
        {
            icon: {
                svg: WhiteEmail,
                altText: 'Email icon'
            },
            fa_icon: "envelope",
            text: '',
            link: 'mailto:mark@nilexindustrical.com',
            target: '',
        },
        // {
        //     icon: {
        //         svg: WhitePen,
        //         altText: 'Phone icon'
        //     },
        //     text: '',
        //     link: '',
        //     target: '',
        // },
    ],
}

export const hero = {
    header: 'Small Business, Big Safety',
    bodyText: 'As a family-run business, we take pride in keeping your workplace safe with reliable, high-quality safety and industrial supplies.',
    logo: WhiteLogo,
    logoAltText: 'Nilex Logo in white',
    backgroundImage: HeroBackground,
    mobileBackgroundImage: HeroBackgroundMobile
}

export const about = {
    eyebrow: 'About Nilex',
    header: "Trusted Safety and Industrial Solutions Since 2012",
    bodyText: "<p>Founded in 2012, Nilex Industrial and Safety Supplies is a proud woman-owned small business committed to providing top-quality industrial and safety products. As a family-run company, we prioritize reliability, exceptional service, and workplace safety, ensuring businesses have the essential supplies they need to protect their workforce.</p><p>At the heart of our company is Mark Khachadoorian, Owner and Vice-President of Sales, who leads our team with expertise and dedication to customer satisfaction.</p>",
    media: IndustrialPic,
    mediaAltText: 'Guy using an electric saw or grinder on a piece of metal with sparks flying out',
    subsections: [
        {
            subheader: 'Family-Driven Values',
            subtext: 'Built on a foundation of Family-Driven Values, we believe in treating our customers, employees, and partners with trust, respect, and integrity.'
        },
        {
            subheader: 'Community & Small Business Commitment',
            subtext: 'We are deeply committed to supporting our local communities and fellow small businesses, fostering growth and collaboration in the industries we serve. '
        },
        {
            subheader: 'Building Lasting Partnerships ',
            subtext: 'At Nilex, building lasting partnerships is at the core of what we do. We go beyond transactions to cultivate strong, long-term relationships with our customers, offering personalized service, and unwavering reliability. '
        },
    ]
}

export const product = {
    eyebrow: "Products",
    header: 'Your Source for Industrial Essentials',
    bodyText: "Nilex Industrial is your trusted source for high-quality industrial and safety supplies, offering more than just gloves, lighting, and protective gear. From personal protective equipment (PPE) and job site lighting to facility maintenance products, signage, spill control, and more, Nilex provides reliable solutions that help businesses maintain safe, efficient operations. Whether you're equipping a crew or stocking a facility, our team is here to help you find the right products for your needs. Below are three of our most popular product categories, trusted by customers across industries.",
    products: [
        {
            id: 1,
            icon: 'bulb',
            title: "Lighting",
            bodyText: "<p>Nilex Industrial provides durable lighting solutions built to perform in demanding work environments. Their lineup includes LED work lights, portable floodlights, and rechargeable lanterns ideal for job sites, warehouses, and emergency situations.</p> <p><em>If you need guidance on choosing the right lighting solution, we’re here to help.</em></p>",
            style: 'light'
        },
        {
            id: 2,
            icon: 'helmet',
            title: "Safety",
            bodyText: "<p>Nilex Industrial carries a comprehensive range of safety equipment to support workplace protection and compliance. Their offerings include high-visibility apparel, eye and ear protection, respiratory gear, and fall protection products.</p> <p><em>If you're outfitting a team or seeking specific PPE solutions, feel free to reach out—we’re ready to assist.</em></p>",
            style: 'primary'
        },
        {
            id: 3,
            icon: 'glove',
            title: "Gloves",
            bodyText: "<p>Nilex Industrial offers a wide range of gloves to protect hands across various work environments. Their selection includes disposable nitrile gloves, cut-resistant styles, coated work gloves, and options for heat or chemical resistance. </p> <p><em>If you’re looking for a specific glove or need help finding the right fit, we’re here to help—just reach out.</em></p>",
            style: 'dark'
        },
    ]
}


export const contact = {
    eyebrow: 'Contact Us',
    header: 'Need Industrial Gear? Let’s Talk.',
    bodyText: 'We’re here to help with all your industrial and safety supply needs! Whether you have questions about our products, need a custom solution, or want to place an order, our team is ready to assist you.',
    methods: [
        {
            id: 1,
            icon: {
                svg: "envelope",
                altText: 'White envelope icon'
            },
            iconHover: {
                svg: LightMail,
                altText: 'Light gray envelope icon'
            },
            title: 'Send an Email',
            bodyText: 'For inquiries, quotes, or expert advice on our industrial and safety supplies, feel free to email us at mark@nilexindustrial.com.',
            link: 'mailto:mark@nilexindustrial.com',
            row: '1 / 2',
            col: '1 / 1',
            marginLeft: '0px'
        },
        {
            id: 2,
            icon: {
                svg: "phone",
                altText: 'White phone icon'
            },
            iconHover: {
                svg: LightPhone,
                altText: 'Light gray phone icon'
            },
            title: 'Give Us a Call',
            bodyText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus vel consectetur aliquet non cras turpis. Dignissim aliquam feugiat elit ut. ',
            link: 'tel:2514598718',
            row: '2 / 3',
            col: '2 / 2',
            marginLeft: '0px'
        },
        // {
        //     id: 3,
        //     icon: {
        //         svg: OrangePen,
        //         altText: 'Orange pen with a square icon'
        //     },
        //     iconHover: {
        //         svg: LightPen,
        //         altText: 'Light gray pen with a square icon'
        //     },
        //     title: 'Fill Out a Form',
        //     bodyText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus vel consectetur aliquet non cras turpis. Dignissim aliquam feugiat elit ut. ',
        //     link: '',
        //     row: '3 / 4',
        //     col: '1 / 1',
        //     marginLeft: '0px'
        // },
    ]
}









export const hex = {
    width: "222px",
    height: "289px",
    mobileWidth: "167px",
    mobileHeight: "188px",
}

export const hexagons = {
    g1: {
        // mobile: {
        //     top: '',
        //     bottom: '',
        //     left: '',
        //     right: ''
        // },
        desktop: {
            // top: '-50px',
            bottom: '50px',
            // left: '',
            right: '-100px'
        } 
    }
}

