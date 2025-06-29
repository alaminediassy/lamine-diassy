'use client'

import { type Metadata } from 'next'


import React from "react";
import {Card} from "@/components/experiences/Card";
import {SimpleLayout} from "@/components/experiences/SimpleLayout";
import {Section} from "@/components/experiences/Section";
import TestBloc from "@/components/experiences/test";
import TestBloc1 from "@/components/experiences/test1";


function ExperiencesSection({
                             children,
                             ...props
                         }: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    )
}

function ExperiencesPro({
                        title,
                        description,
                        period,
                        company,
                        href,
                    }: {
    title: string
    description: string
    period: string
    company: string
    href: string
}) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Period decorate>{period}</Card.Period>
            <Card.Description>{description}</Card.Description>
            <Card.Company>{company}</Card.Company>
        </Card>
    )
}

export const metadata: Metadata = {
    title: 'Experiences',
    description:
        'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Experiences() {
    return (
        <SimpleLayout
            title="Expériences et Formations"
            intro="Un aperçu de mon parcours en entreprise à travers mes stages et mon alternance dans le domaine du développement logiciel."
        >
            <div className="space-y-20">
                <ExperiencesSection title="Expériences Professionnelles">
                    <ExperiencesPro
                        href="#"
                        title="Alternance en Développement M365 et Power Platform"
                        description="Développement de WebParts modernes conçues from scratch avec React et PowerShell. Intégration de solutions métiers basées sur Microsoft 365, en tirant parti de SharePoint, Power Apps, Power Automate, Power BI et Power Pages afin d’automatiser les processus et valoriser les données."
                        period="Février 2024 - Aujourd'hui"
                        company="Visitez"
                    />
                    <TestBloc
                        title="Alternance en Développement M365"
                        description="Développement de WebParts modernes conçues from scratch avec React et PowerShell."
                        period="2023 - 2025"
                        company="Nema Studio"
                    />
                    <TestBloc1/>
                    <ExperiencesPro
                        href="#"
                        title="Stage en Développement web"
                        description="En tant que développeur junior chez MYTHEC, je conçois des WebParts modernes développées from scratch avec React et PowerShell. J’intègre également des solutions métier basées sur Microsoft 365, en exploitant SharePoint, Power Apps, Power Automate, Power BI et Power Pages pour automatiser les processus et valoriser les données."
                        period="Août 2023 - Décembre 2023"
                        company="Visitez"
                    />
                    <ExperiencesPro
                        href="#"
                        title="Alternance en Développement M365 et Power Platform"
                        description="En tant que développeur junior chez MYTHEC, je conçois des WebParts modernes développées from scratch avec React et PowerShell. J’intègre également des solutions métier basées sur Microsoft 365, en exploitant SharePoint, Power Apps, Power Automate, Power BI et Power Pages pour automatiser les processus et valoriser les données."
                        period="Février 2024 - Aujourd'hui"
                        company="MYTHEC"
                    />
                </ExperiencesSection>
                <ExperiencesSection title="Formations Académiques">
                    <ExperiencesPro
                        href="#"
                        title="Using design as a competitive advantage"
                        description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
                        period="Encoding Design, July 2022"
                        company="Listen to podcast"
                    />
                    <ExperiencesPro
                        href="#"
                        title="Bootstrapping an aerospace company to $17M ARR"
                        description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
                        period="The Escape Velocity Show, March 2022"
                        company="Listen to podcast"
                    />
                    <ExperiencesPro
                        href="#"
                        title="Programming your company operating system"
                        description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
                        period="How They Work Radio, September 2021"
                        company="Listen to podcast"
                    />
                </ExperiencesSection>
            </div>
        </SimpleLayout>
    )
}
