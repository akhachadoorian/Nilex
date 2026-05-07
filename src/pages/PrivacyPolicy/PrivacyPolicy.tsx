import React from "react";
import './PrivacyPolicy.scss';
import { useFadeIn } from "../../hooks/useFadeIn";
import CopyOnly from "../../components/CopyOnly/CopyOnly";
import content from './content';

import TextOnlyHero from "../../layout/TextOnlyHero/TextOnlyHero";
import SEO from "../../utils/SEO";
import { privacyPolicySEO } from "../../data/seoContent";

export default function PrivacyPolicy({}) {
    const googleAnaRef = useFadeIn<HTMLDivElement>();
    const rightsRef = useFadeIn<HTMLDivElement>();
    const questionsRef = useFadeIn<HTMLDivElement>();

    return (
        <>
            <SEO {...privacyPolicySEO} />

            <TextOnlyHero
                styleOptions={{
                    variation: "center",
                }}
                {...content.hero}
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
                    {...content.googleAnalytics}
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
                    {...content.rights}
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
                ref={questionsRef}
                id="privacy_questions"
                className="full-width privacy_questions-section"
                aria-label="Questions about Privacy"
            >
                <div className="section-inner">
                    <CopyOnly
                        styleOptions={{
                            headingSize: "h2",
                            variation: "center",
                        }}
                        {...content.questions}
                    />
                </div>
            </section>
        </>
    );
}
