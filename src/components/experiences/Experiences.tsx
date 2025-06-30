'use client'

import React from "react";
import { type Metadata } from 'next';
import { SimpleLayout } from "@/components/experiences/SimpleLayout";
import { Section } from "@/components/experiences/Section";
import {ExperienceProItems, FormationsItems} from "@/components/experiences/ExperiencesFormations";

function ExperiencesSection({
                                children,
                                ...props
                            }: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    );
}


export const metadata: Metadata = {
    title: 'Experiences',
    description: 'Aperçu de mes expériences et formations.'
};

interface ExperiencesProps {
    dict: never;
}

export default function Experiences({ dict }: ExperiencesProps) {
    return (
        <SimpleLayout
            title="Expériences et Formations"
            intro="Un aperçu de mon parcours en entreprise à travers mes stages et mon alternance dans le domaine du développement logiciel."
        >
            <div className="space-y-20">
                <ExperiencesSection title="Expériences Professionnelles">
                    <ExperienceProItems dict={dict} />
                </ExperiencesSection>
                <ExperiencesSection title="Mes Formations Universitaires">
                    <FormationsItems dict={dict} />
                </ExperiencesSection>
            </div>
        </SimpleLayout>
    );
}
