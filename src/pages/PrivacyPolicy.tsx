import React from "react";
import { heroContent } from "../data/text/landingpage";
import { useFadeIn } from "../hooks/useFadeIn";
import CopyOnly from "../components/CopyOnly/CopyOnly";
import {
    googleAnaContent,
    privacyHeroContent,
    privacyQuestionsContent,
    rightsContent,
} from "../data/text/privacyPage";
import TextOnlyHero from "../layout/TextOnlyHero/TextOnlyHero";

export default function PrivacyPolicy({}) {
    const googleAnaRef = useFadeIn<HTMLDivElement>();
    const rightsRef = useFadeIn<HTMLDivElement>();
    return (
        <>
            <TextOnlyHero
                styleOptions={{
                    variation: "center",
                }}
                eyebrow={privacyHeroContent.eyebrow}
                header={privacyHeroContent.header}
                body={privacyHeroContent.body}
                buttons={privacyHeroContent.buttons}
                // subnote={privacyHeroContent.subnote}
            />

            <section
                ref={googleAnaRef}
                className="base_section google_ana-section"
                id="google_ana"
                aria-label="Google Analytics"
            >
                <CopyOnly
                    styleOptions={{
                        headingSize: "h4",
                        variation: "center",
                    }}
                    header={googleAnaContent.title}
                    body={googleAnaContent.body}
                />
            </section>

            <section
                ref={rightsRef}
                className="base_section rights-section"
                id="rights"
                aria-label="Data Privacy Rights"
            >
                <CopyOnly
                    styleOptions={{
                        headingSize: "h4",
                        variation: "center",
                    }}
                    header={rightsContent.title}
                    body={rightsContent.body}
                />
            </section>

            {/* TODO: Contact Form Privacy 
            <section
                // ref={}
                className="base_section -section"
                id=""
                aria-label=""
            ></section> */}

            <section
                // ref={contactRef}
                id="privacy_questions"
                className="full-width privacy_questions-section"
                aria-label="Questions about Privacy"
            >
                <div className="section-inner">
                    <CopyOnly
                        // eyebrow={contactCopyOnlyContent.eyebrow}
                        header={privacyQuestionsContent.title}
                        body={privacyQuestionsContent.body}
                        buttons={privacyQuestionsContent.buttons}
                        styleOptions={{
                            headingSize: "h2",
                            variation: "center",
                        }}
                    />
                </div>
            </section>
        </>
    );
}
