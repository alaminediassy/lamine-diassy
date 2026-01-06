// src/components/parcours/Timeline.tsx
import { Dictionary } from '@/types/content'

export function Timeline({ dict }: { dict: Dictionary }) {
    const experiences = dict.experiencesPro
    const educations = dict.educations

    return (
        <div className="space-y-20">
            <section>
                <h2 className="text-xl font-bold text-soft mb-8 border-b border-white/10 pb-2">
                    Expériences Professionnelles
                </h2>
                <div className="relative space-y-8 border-l border-white/10 pl-6 ml-4">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-[31px] mt-1.5 h-4 w-4 rounded-full border-2 border-oranger bg-[#0A192F]" />
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <h3 className="text-lg font-bold text-soft">{exp.jobTitle}</h3>
                                <span className="text-sm text-blue-400 font-medium">{exp.period}</span>
                            </div>
                            <p className="text-oranger text-sm font-semibold uppercase">{exp.company} • {exp.country}</p>
                            <p className="mt-2 text-soft-light text-sm">{exp.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {exp.technologies.map((tech: string) => (
                                    <span key={tech} className="bg-white/5 px-2 py-1 rounded text-xs text-soft-light ring-1 ring-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-soft mb-8 border-b border-white/10 pb-2">
                    Formations Universitaires
                </h2>
                <div className="relative space-y-8 border-l border-white/10 pl-6 ml-4">
                    {educations.map((edu, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-[31px] mt-1.5 h-4 w-4 rounded-full border-2 border-blue-400 bg-[#0A192F]" />
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <h3 className="text-lg font-bold text-soft">{edu.levelTitle}</h3>
                                <span className="text-sm text-soft-light font-medium">{edu.period}</span>
                            </div>
                            <p className="text-soft-light text-sm italic">{edu.university}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
