// src/components/ui/Prose.tsx
import clsx from 'clsx'

export function Prose({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={clsx(className, 'prose dark:prose-invert text-soft-light max-w-none')}>
            {children}
        </div>
    )
}
