import Link from 'next/link'
import React from "react";

export function SocialLink({
                               icon: Icon,
                               ...props
                           }: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-soft transition  group-hover:fill-oranger" />
        </Link>
)
}