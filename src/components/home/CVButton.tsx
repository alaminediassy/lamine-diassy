'use client';

import { useState } from 'react';
import { Eye } from 'lucide-react';
import CVModal from '@/components/ui/CVModal';

interface CVButtonProps {
    lang: string;
    label: string;
    cvUrl: string;
}

export default function CVButton({ lang, label, cvUrl }: CVButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className='w-full mt-6 max-w-xl px-6 py-3 rounded-full border border-oranger text-oranger hover:bg-primary-900 transition-colors hover:border-oranger hover:cursor-pointer font-semibold flex items-center justify-center gap-2'
            >
                <Eye size={20} />
                {label}
            </button>

            <CVModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                cvUrl={cvUrl}
                lang={lang}
            />
        </>
    );
}
