import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function TestBloc1() {
    return (
        <div className="md:grid md:grid-cols-3 md:items-baseline">
            <div className="md:col-span-3 group relative flex flex-col items-start w-full">
                <div className="flex items-center text-sm text-soft-light order-first relative z-10">
                    <FaMapMarkerAlt className="mr-1 h-3 w-3 text-soft-light" />
                    France
                </div>

                <div className="relative z-10 flex flex-col space-y-1 my-2 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center text-sm text-soft-light">
                            <span className="mr-2 flex items-center">
                                <span className="h-4 w-0.5 rounded-full bg-soft-light"></span>
                            </span>
                            MYTHEC
                        </div>

                        <p className="text-sm font-medium text-oranger">
                            Février 2024 - Février 2026
                        </p>
                    </div>
                </div>

                <div className="text-base font-semibold tracking-tight text-soft">
                    <div
                        className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-marine-card opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl">
                    </div>
                    <h2 className="relative z-10">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span>Crafting a design system for a multiplanetary future</span>
                    </h2>
                </div>

                <p className="relative z-10 mt-2 text-sm text-soft-light">
                    Most companies try to stay ahead of the curve when it comes to visual
                    design, but for Planetaria we needed to create a brand that would still
                    inspire us 100 years from now when humanity has spread across our entire
                    solar system.
                </p>
            </div>
        </div>
    );
}
