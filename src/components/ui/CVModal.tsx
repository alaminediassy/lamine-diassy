'use client';

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
    cvUrl: string;
    lang: string;
}

export default function CVModal({ isOpen, onClose, cvUrl, lang }: CVModalProps) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={onClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-primary-950/80 backdrop-blur-sm" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95 translate-y-4"
                            enterTo="opacity-100 scale-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100 translate-y-0"
                            leaveTo="opacity-0 scale-95 translate-y-4"
                        >
                            <DialogPanel className="w-full max-w-5xl transform overflow-hidden rounded-3xl bg-marine-card border border-white/10 p-0 text-left align-middle shadow-2xl transition-all h-[85vh] flex flex-col">
                                <div className="flex items-center justify-between p-6 border-b border-white/5">
                                    <DialogTitle as="h3" className="text-xl font-bold text-soft">
                                        {lang === 'fr' ? 'Prévisualisation du CV' : 'CV Preview'}
                                    </DialogTitle>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={cvUrl}
                                            download="CV MAMADOU EN.pdf"
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-oranger/10 text-oranger border border-oranger/20 hover:bg-oranger hover:text-white transition-all text-sm font-semibold"
                                        >
                                            <Download size={18} />
                                            <span className="hidden sm:inline">
                                                {lang === 'fr' ? 'Télécharger' : 'Download'}
                                            </span>
                                        </a>
                                        <button
                                            onClick={onClose}
                                            className="p-2 rounded-full hover:bg-white/5 text-soft transition-colors"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white/5 relative overflow-hidden">
                                    <iframe
                                        src={`${cvUrl}#toolbar=0`}
                                        className="w-full h-full border-none"
                                        title="CV Preview"
                                    />
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
