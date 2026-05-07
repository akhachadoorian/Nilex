import { ThreeButtonsArray } from "../../types/buttons";
import { contactItems } from "../contactItems";

export const privacyHeroContent = {
    eyebrow: "Privacy Policy",
    header: 'Privacy Policy',
    body: "<p>Nilex Industrial and Safety Supplies is a woman-owned, family-run business based in Mobile, AL. This page explains what data we collect and how we use it. <span class='subnote'>Last Updated: May 2026</span><p>",
    // subnote: 'Last Updated: May 2026',
    buttons: [
        {
            btnText: "Return to the Homepage",
            link: "/",
            target: "_self",
        },
        
    ] satisfies ThreeButtonsArray,
}


export const googleAnaContent = {
    title: "Google Analytics",
    body: "<p>We use Google Analytics to understand how visitors find and use our website — things like pages visited and general traffic regions. This data is anonymous and can't be used to identify you personally. Google Analytics uses cookies to collect this information. You can opt out at any time using the <a href='https://tools.google.com/dlpage/gaoptout' target='_blank'>Google Analytics Opt-out Browser Add-on</a></p>",
};

export const rightsContent = {
    title: "Your Rights",
    body: "<p>You can request deletion of any personal information you've submitted at any time. Just email us at <a href='mailto:mark@nilexindustrial.com'>mark@nilexindustrial.com</a> and we'll take care of it.<p>",
};

export const privacyQuestionsContent = {
    title: "Questions?",
    body: "Reach out directly at mark@nilexindustrial.com or (251) 458-9718.",
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
};

export const contactFormContent = {
    title: "Contact Form",
    body: "When you fill out our contact form, we collect your name, email address, and message. That information is sent directly to our team by email so we can respond to your inquiry. We don't store it in a database or add you to any mailing list.",
};
