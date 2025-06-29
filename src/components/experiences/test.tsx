import React from "react";

export default function TestBloc({
                                     title,
                                     description,
                                     period,
                                     company,
                                 }: {
    title: string
    description: string
    period: string
    company: string
}) {
    return (
        <div className="group relative flex flex-col items-start hover:bg-marine-card p-6 rounded-2xl">
            <div className="flex items-center text-sm font-medium text-oranger uppercase">
                {company}
            </div>
            <div className="text-base font-semibold tracking-tight text-soft">
                <h2>{title}</h2>
            </div>
            <div className="relative  mb-3 flex items-center text-sm text-soft-light">
                <span className=" absolute inset-y-0 left-0 flex items-center">
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
                </span>
                <span className="pl-3">{period}</span>
            </div>
            <div className="relative z-10 mt-2 text-sm text-soft-light">
                {description}
            </div>
        </div>
    )
}