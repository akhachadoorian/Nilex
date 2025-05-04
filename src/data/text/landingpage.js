
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
            link: 'tel:2514589718',
            target: '',
        },
        {
            icon: {
                svg: WhiteEmail,
                altText: 'Email icon'
            },
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
    bodyText: "Nilex Industrial is your trusted source for high-quality industrial and safety supplies, offering more than just gloves, lighting, and protective gear. From personal protective equipment (PPE) and job site lighting to facility maintenance products, signage, spill control, and more, Nilex provides reliable solutions that help businesses maintain safe, efficient operations. Whether you're equipping a crew or stocking a facility, our team is here to help you find the right products for your needs.",
    products: [
        {
            id: 1,
            icon: {
                svg: LightbulbWhite,
                altText: "Icon of a lightbulb",
            },
            title: "Lighting",
            bodyText: "Nilex Industrial offers durable lighting solutions built for demanding environments, including LED work lights, portable floodlights, and rechargeable lanterns ideal for job sites, warehouses, and emergencies. Designed for efficiency and long-lasting use, these products ensure visibility and safety wherever work gets done—reach out if you need help choosing the right fit.",
        },
        {
            id: 2,
            icon: {
                svg: HelmetWhite,
                altText: "Icon of a hard hat",
            },
            title: "Safety",
            bodyText: "Nilex Industrial carries a comprehensive range of safety equipment to support workplace protection and compliance. Their offerings include high-visibility apparel, eye and ear protection, respiratory gear, and fall protection products. Each item is selected to meet the safety demands of industrial and commercial settings. If you're outfitting a team or seeking specific PPE solutions, feel free to reach out—we’re ready to assist."
        },
        {
            id: 3,
            icon: {
                svg: GloveWhite,
                altText: "Icon of a glove",
            },
            title: "Gloves",
            bodyText: "Nilex Industrial offers a wide range of gloves to protect hands across various work environments. Their selection includes disposable nitrile gloves, cut-resistant styles, coated work gloves, and options for heat or chemical resistance. Designed for use in construction, maintenance, food service, and general industry, these gloves deliver reliable protection and meet key safety standards. If you’re looking for a specific glove or need help finding the right fit, we’re here to help—just reach out."
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
                svg: WhiteEmail,
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
                svg: WhitePhone,
                altText: 'White phone icon'
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
            top: '-50px',
            // bottom: '0',
            // left: '',
            right: '0'
        } 
    }
}

