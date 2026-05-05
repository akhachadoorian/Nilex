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
    icon?: "hard-hat" | "lightbulb" | "hand";
    title: string;
    body: string;
    cta?: string;
    // TODO: add button?
};

const IconMap: Record<string, Icon> = {
    "hard-hat": HardHatIcon,
    lightbulb: LightbulbIcon,
    hand: HandIcon,
};

const IconThemeMap: Record<string, ColorVariables> = {
    gray: "--stone-800",
    orange: "--orange-850",
    "dark-orange": "--orange-650",
    "bright-orange": "--orange-850",
    "dark-oxblood": "--oxblood-500",
};

const HexThemeMap: Record<string, ColorVariables> = {
    gray: "--stone-500",
    orange: "--orange-700",
    "dark-orange": "--orange-900",
    "bright-orange": "--orange-600",
    "dark-oxblood": "--oxblood-700",
};

export function ProductCard({
    className,
    theme = "gray",
    icon = "lightbulb",
    title,
    body,
    cta,
}: ProductCardProps) {
    const IconComponent = IconMap[icon];
    const IconColor = IconThemeMap[theme];
    const HexColor = HexThemeMap[theme];

    const HexSize = { size: { minSize: 95, desiredSize: 100, maxSize: 105 } };

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
    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", { stagger: 0.15, y: 24 });

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
