import { ProductCardProps } from "../../components/ProductCards/ProductCards";
import { ThreeButtonsArray, TwoButtonsArray } from "../../types/buttons";
import { NonEmptyArray } from "../../types/utility";
import { contactItems } from "../../data/contactItems";

const hero = {
    eyebrow: "Small Business, Big Safety",
    header: "Nilex",
    subtitle: "Industrial & Safety Supplies",
    body: "As a family-run business, we take pride in keeping your workplace safe with reliable, high-quality safety and industrial supplies.",
    btns: [] satisfies TwoButtonsArray,
};

const about = {
    copyOnly: {
        eyebrow: "About Nilex",
        header: "Trusted Safety and Industrial Solutions Since 2012",
        bodyText:
            "<p>Founded in 2012, Nilex Industrial and Safety Supplies is a proud woman-owned small business committed to providing top-quality industrial and safety products. As a family-run company, we prioritize reliability, exceptional service, and workplace safety, ensuring businesses have the essential supplies they need to protect their workforce.</p><p>At the heart of our company is Mark Khachadoorian, Owner and Vice-President of Sales, who leads our team with expertise and dedication to customer satisfaction.</p>",
        img: {
            src: "/assets/ValuesGraphicLong.svg",
            alt: "Graphic that displays Nilex's values: Family Driven Values, Community & Small Business Commitment, and Building Lasting Partnerships.",
        },
    },
    values: {
        image1: {
            src: "/assets/FamilyValues.svg",
            alt: "'Built on a foundation of Family-Driven Values, we believe in treating our customers, employees, and partners with trust, respect, and integrity.",
        },
        image2: {
            src: "/assets/SmallBusinessValues.svg",
            alt: "We are deeply committed to supporting our local communities and fellow small businesses, fostering growth and collaboration in the industries we serve.",
        },
        image3: {
            src: "/assets/PartnerValues.svg",
            alt: "At Nilex, building lasting partnerships is at the core of what we do. We go beyond transactions to cultivate strong, long-term relationships with our customers, offering personalized service, and unwavering reliability.",
        },
    },
};

const products = {
    copyOnly: {
        eyebrow: "Products",
        header: "Your Source for Industrial Essentials",
        body: "Nilex Industrial is your trusted source for high-quality industrial and safety supplies, offering more than just gloves, lighting, and protective gear. From personal protective equipment (PPE) and job site lighting to facility maintenance products, signage, spill control, and more, Nilex provides reliable solutions that help businesses maintain safe, efficient operations. Whether you're equipping a crew or stocking a facility, our team is here to help you find the right products for your needs. Below are three of our most popular product categories, trusted by customers across industries.",
    },
    productCards: {
        productCards: [
            {
                theme: "gray",
                icon: "lightbulb",
                title: "Lighting",
                body: "Nilex Industrial provides durable lighting solutions built to perform in demanding work environments. Their lineup includes LED work lights, portable floodlights, and rechargeable lanterns ideal for job sites, warehouses, and emergency situations.",
                cta: "If you're outfitting a team or seeking specific PPE solutions, feel free to reach out—we're ready to assist.",
            },
            {
                theme: "dark-oxblood",
                icon: "hardHat",
                title: "Safety",
                body: "Nilex Industrial carries a comprehensive range of safety equipment to support workplace protection and compliance. Their offerings include high-visibility apparel, eye and ear protection, respiratory gear, and fall protection products.",
                cta: "If you're outfitting a team or seeking specific PPE solutions, feel free to reach out—we're ready to assist.",
            },
            {
                theme: "orange",
                icon: "hand",
                title: "Gloves",
                body: "Nilex Industrial offers a wide range of gloves to protect hands across various work environments. Their selection includes disposable nitrile gloves, cut-resistant styles, coated work gloves, and options for heat or chemical resistance.",
                cta: "If you're looking for a specific glove or need help finding the right fit, we're here to help—just reach out.",
            },
        ] as NonEmptyArray<ProductCardProps>,
    },
};

const contact = {
    copyOnly: {
        eyebrow: "Contact Us",
        header: "Need Industrial Gear? Let's Talk.",
        body: "We're here to help with all your industrial and safety supply needs! Whether you have questions about our products, need a custom solution, or want to place an order, our team is ready to assist you.",
        buttons: [
            {
                btnText: contactItems[0].cta,
                link: contactItems[0].link,
                target: "_blank",
            },
            {
                btnText: contactItems[1].cta,
                link: contactItems[1].link,
                target: "_blank",
            },
        ] satisfies ThreeButtonsArray,
    },
};



//  const contactCardsContent = [
//     {
//         title: "Give Us a Call",
//         body: "Prefer to speak directly? Call us at (251) 458-9718. We're happy to talk through your needs and find the right solution.",
//         link: contactItems[0],
//     },
//     {
//         title: "Send an Email",
//         body: "For inquiries, quotes, or expert advice on our industrial and safety supplies, feel free to email us at mark@nilexindustrial.com.",
//         link: contactItems[1],
//     },
// ];

const homeContent = {
    hero: hero,
    about: about,
    products: products,
    contact: contact
};

export default homeContent;
