import {
    HardHatIcon,
    InfoIcon,
    LightbulbIcon,
    QuestionIcon,
    Icon,
    HandIcon,
} from "@phosphor-icons/react";
import { NonEmptyArray } from "../../types/utility";
import "./ProductCards.scss";
import { ColorVariables } from "../../types/colors";
import Hex from "../Hex/Hex";
import { useFadeInChildren } from "../../hooks/useFadeIn";

export type ProductCardProps = {
    className?: string;
    theme?:
        | "gray"
        | "orange"
        | "dark-orange"
        | "bright-orange"
        | "dark-oxblood";
    icon?: "hardHat" | "lightbulb" | "hand";
    title: string;
    body: string;
    cta?: string;
    // TODO: add button?
};

// const IconMap: Record<string, Icon> = {
//     hardHat: HardHatIcon,
//     lightbulb: LightbulbIcon,
//     hand: HandIcon,
// };
type IconMapEntry = { icon: Icon; altText: string };

const IconMap: Record<string, IconMapEntry> = {
    hardHat: {
        icon: HardHatIcon,
        altText: "Hard Hat icon"
    },
    lightbulb: {
        icon: LightbulbIcon,
        altText: "Lightbulb icon"
    },
    hand: {
        icon: HandIcon,
        altText: "Hand icon"
    },
}

const ThemeMap: Record<string, Record<string, ColorVariables>> = {
    gray: {
        iconColor: "--stone-800",
        hexColor: "--stone-500",
    },
    orange: {
        iconColor: "--orange-850",
        hexColor: "--orange-700",
    },
    "dark-orange": {
        iconColor: "--orange-650",
        hexColor: "--orange-900",
    },
    "bright-orange": {
        iconColor: "--orange-850",
        hexColor: "--orange-600",
    },
    "dark-oxblood": {
        iconColor: "--oxblood-500",
        hexColor: "--oxblood-700",
    },
};

export function ProductCard({
    className,
    theme = "gray",
    icon = "lightbulb",
    title,
    body,
    cta,
}: ProductCardProps) {
    // Determine the Icon Component to be rendered
    const iconEntry = IconMap[icon] ?? IconMap["lightbulb"];
    const IconComponent = iconEntry.icon;
    const IconAltText = iconEntry.altText;

    // Determine the colors based on the theme
    const themeEntry = ThemeMap[theme] ?? ThemeMap["gray"];
    const IconColor = themeEntry.iconColor;
    const HexColor = themeEntry.hexColor;

    const HexSize = { 
        size: { minSize: 95, desiredSize: 100, maxSize: 105 }, 
        mobileSize: { minSize: 65, desiredSize: 70, maxSize: 75 }
    };

    return (
        <div className={`product_card product_card-${theme} ${className}`}>
            <div className="product_card-icon">
                <Hex
                    className={"pc-hex"}
                    color={HexColor}
                    size={HexSize}
                    type="solid"
                />
                <IconComponent
                    className="pc-icon"
                    color={`var(${IconColor})`}
                    size={"clamp(70px, 5.208vw, 80px)"}
                    alt={IconAltText  ?? "Icon"}
                />
            </div>

            <div className="product_card-text">
                <h4 className="heading-m pc-title">{title}</h4>
                <p className="pc-body body">{body}</p>
                {cta && <p className="pc-cta body-s">{cta}</p>}
            </div>
        </div>
    );
}

export type ProductCardsProps = {
    productCards: NonEmptyArray<ProductCardProps>;
    className?: string;
};

export default function ProductCards({
    className,
    productCards,
}: ProductCardsProps) {
    if (productCards === undefined || productCards?.length == 0) return;
    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", {
        stagger: 0.15,
        y: 24,
    });

    return (
        <div ref={ref} className={`product_cards ${className}`}>
            {productCards?.map((p, idx) => (
                <ProductCard
                    key={idx}
                    className="mwc-animate"
                    theme={p.theme}
                    icon={p.icon}
                    title={p.title}
                    body={p.body}
                    cta={p.cta ?? ""}
                />
            ))}
        </div>
    );
}
