import * as SiIcons from 'react-icons/si'
import * as HiIcons from 'react-icons/hi'

export function IconResolver({ name, className }: { name: string; className?: string }) {
    const Icon = (SiIcons as Record<string, React.ComponentType<{ className?: string }>>)[name] ||
        (HiIcons as Record<string, React.ComponentType<{ className?: string }>>)[name] ||
        HiIcons.HiCode

    return <Icon className={className} />
}
