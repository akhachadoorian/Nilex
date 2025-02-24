
import WhiteLogo from "../WhiteLogo.svg"
import HeroBackground from "../images/HeroBg.png"
import HeroBackgroundMobile from "../images/HeroMobile.png"

import IndustrialPic from "../images/Industrial.png"
import LightbulbWhite from "../images/Lightbulb-White.svg"
import HelmetWhite from "../images/Helmet-White.svg"
import GloveWhite from "../images/Glove-White.svg"

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
    bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    media: IndustrialPic,
    mediaAltText: '',
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
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',

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

