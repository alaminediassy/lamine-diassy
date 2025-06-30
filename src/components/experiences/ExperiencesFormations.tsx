import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export interface Experience {
    country: string;
    company: string;
    period: string;
    jobTitle: string;
    description: string;
    technologies: string[];
}

interface ExperiencesProProps {
    dict: {
        experiencesPro: Experience[];
    };
}

export interface Formations {
    university: string;
    period: string;
    levelTitle: string;
}

interface FormationsProps {
    dict: {
        educations: Formations[];
    };
}

export function ExperienceProItems({ dict }: ExperiencesProProps) {
    return (
        <div className="space-y-10">
            {dict?.experiencesPro?.length > 0 ? (
                dict.experiencesPro.map((exp, index) => (
                    <div key={index} className="md:grid md:grid-cols-3 md:items-baseline">
                        <div className="md:col-span-3 group relative flex flex-col items-start w-full">

                            {/* Location */}
                            <div className="flex items-center text-sm text-soft-light order-first relative z-10">
                                <FaMapMarkerAlt className="mr-1 h-3 w-3 text-soft-light" />
                                {exp.country}
                            </div>

                            {/* Company & Period */}
                            <div className="relative z-10 flex flex-col space-y-1 my-2 w-full">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center text-sm text-soft-light">
                    <span className="mr-2 flex items-center">
                      <span className="h-4 w-0.5 rounded-full bg-soft-light"></span>
                    </span>
                                        {exp.company}
                                    </div>

                                    <p className="text-sm font-medium text-blue-400">
                                        {exp.period}
                                    </p>
                                </div>
                            </div>

                            {/* Job Title */}
                            <div className="text-base font-semibold tracking-tight text-soft w-full">
                                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-marine-card opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                                <h2 className="relative z-10">
                                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                    <span>{exp.jobTitle}</span>
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="relative z-10 mt-2 text-sm text-soft-light">
                                {exp.description}
                            </p>

                            {/* Technologies badges */}
                            <div className="relative z-10 flex flex-wrap gap-2 text-sm mt-2">
                                {exp.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="items-center rounded-lg bg-pink-400/10 px-2 py-1 text-blue-400 ring-1 ring-blue-400/20 ring-inset"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <p className="text-sm text-soft-light">Aucune expérience trouvée.</p>
            )}
        </div>
    );
}


export function FormationsItems({ dict }: FormationsProps) {
    return (
        <div className="space-y-10">
            {dict?.educations?.length > 0 ? (
                dict.educations.map((form, index) => (
                    <div key={index} className="md:grid md:grid-cols-3 md:items-baseline">
                        <div className="md:col-span-3 group relative flex flex-col items-start w-full">
                            <div className="relative z-10 flex flex-col space-y-1 my-2 w-full">
                                <div className="flex items-center text-sm text-soft-light uppercase">
                                    {form.university}
                                </div>
                            </div>

                            <div className="relative z-10 space-y-1 my-2">
                                <p className="text-sm font-medium text-soft-light">
                                    {form.period}
                                </p>
                            </div>

                            {/* Job Title */}
                            <div className="text-base font-semibold tracking-tight text-soft w-full">
                                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-marine-card opacity-0 transition  sm:-inset-x-6 sm:rounded-2xl"></div>
                                <h2 className="relative z-10">
                                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                    <span>{form.levelTitle}</span>
                                </h2>
                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <p className="text-sm text-soft-light">Aucune Formation trouvée.</p>
            )}
        </div>
    );
}