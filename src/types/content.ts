// src/types/content.ts

export type Category = 'technical' | 'human';

export interface SkillIndexItem {
    slug: string;
    title: string;
    category: Category;
    icon: string;
}

export interface SkillProof {
    anecdote: string;
    results: string;
    addedValue: string;
}

export interface SkillDetail extends SkillIndexItem {
    definition: string;
    masteryLevel: string;      // EIL: Auto-évaluation explicite
    priorityInProfile: string; // EIL: Place/priorité dans le profil d'expert
    learningPace: string;      // EIL: Vitesse d'acquisition
    proofs: SkillProof[];
    tips: string;              // EIL: Recul personnel / conseils
    selfCritique: string;
    evolution: string;
    relatedRealisations: string[]; // Slugs
}

export interface RealisationIndexItem {
    slug: string;
    title: string;
    thumbnail: string;
    shortDescription: string;
}

export interface RealisationContext {
    goals: string;
    stakes: string;          // EIL: Enjeux explicites
    risks: string;
}

export interface RealisationResults {
    personal: string;        // EIL: Résultats pour moi
    project: string;         // EIL: Résultats pour l'entreprise/projet
}

export interface RealisationDetail extends RealisationIndexItem {
    presentation: string;
    context: RealisationContext;
    steps: string[];           // EIL: Ce que J'AI fait concrètement
    actors: string[];          // EIL: Interactions
    results: RealisationResults;
    nextSteps: string;         // EIL: Lendemains (immédiat, distance, aujourd'hui)
    criticalPerspective: string;
    relatedSkills: string[];   // Slugs
}

export interface Dictionary {
    about: {
        salutation: string;
        title: string;
        intro: string;
        description: string;
        background: string;
        journey: string;
        full: string;
    };
    profile: {
        name: string;
        position: string;
        grade: string;
        description: string;
    };
    navbar: {
        home: string;
        realisations: string;
        presentation: string;
        skills: string;
        contact: string;
        parcours: string;
    };
    home: {
        title: string;
        description: string;
        specialties: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
    };
    skills: {
        title: string;
        index: SkillIndexItem[];
        items: Record<string, SkillDetail>;
    };
    realisations: {
        title: string;
        index: RealisationIndexItem[];
        items: Record<string, RealisationDetail>;
    };
    // Keeping these for now to avoid breaking existing code during migration
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    experiencesPro: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    educations: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    follow: any;
    copyright: {
        desc: string;
        year: number;
    };
}
