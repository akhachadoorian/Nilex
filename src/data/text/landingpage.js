
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

import WhitePhone from "../images/WhitePhone.svg"

export const navigation = {
    logo: Logo,
    links: [
        {
            name: 'About',
            id: 'About'
        },
        // {
        //     name: 'Products',
        //     id: 'Products'
        // },
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
            text: '(251) 458-9718',
            link: '',
            target: '',
        },
        // {
        //     icon: {
        //         svg: WhitePhone,
        //         altText: 'Phone icon'
        //     },
        //     text: '',
        //     link: '',
            // target: '',
        // },
        // {
        //     icon: {
        //         svg: WhitePhone,
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
    header: "About Nilex",
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
    header: 'Products',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    products: [
        {
            id: 1,
            icon: {
                svg: LightbulbWhite,
                altText: "Icon of a lightbulb",
            },
            title: "Lighting",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        },
        {
            id: 2,
            icon: {
                svg: HelmetWhite,
                altText: "Icon of a hard hat",
            },
            title: "Safety",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        },
        {
            id: 3,
            icon: {
                svg: GloveWhite,
                altText: "Icon of a glove",
            },
            title: "Gloves",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        },
    ]
}


export const contact = {
    header: 'Contact Us',
    bodyText: 'We’re here to help with all your industrial and safety supply needs! Whether you have questions about our products, need a custom solution, or want to place an order, our team is ready to assist you.',
    methods: [
        {
            id: 1,
            icon: {
                svg: OrangeMail,
                altText: 'Orange envelope icon'
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
                svg: OrangePhone,
                altText: 'Orange phone icon'
            },
            iconHover: {
                svg: LightPhone,
                altText: 'Light gray phone icon'
            },
            title: 'Give Us a Call',
            bodyText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus vel consectetur aliquet non cras turpis. Dignissim aliquam feugiat elit ut. ',
            link: 'tel:2514558595',
            row: '2 / 3',
            col: '2 / 2',
            marginLeft: '0px'
        },
        {
            id: 3,
            icon: {
                svg: OrangePen,
                altText: 'Orange pen with a square icon'
            },
            iconHover: {
                svg: LightPen,
                altText: 'Light gray pen with a square icon'
            },
            title: 'Fill Out a Form',
            bodyText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus vel consectetur aliquet non cras turpis. Dignissim aliquam feugiat elit ut. ',
            link: '',
            row: '3 / 4',
            col: '1 / 1',
            marginLeft: '0px'
        },
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
            top: '-50px',
            // bottom: '0',
            // left: '',
            right: '0'
        } 
    }
}

