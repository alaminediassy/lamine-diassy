'use client';

import clsx from 'clsx'
import Image from "next/image";
import alamine from "@/images/alamine.jpeg";
import Link from "next/link";
import {GitHubIcon, LinkedInIcon, XIcon, InstagramIcon} from "@/components/SocialIcons";
import {Container} from "@/components/Container";



interface AboutProps {
    dict: {
        about: {
            salutation: string;
            title: string;
            description: string;
            background: string;
            journey: string;
            full: string;
        };
        profile: {
            name: string;
        };
        follow: {
            x: string;
            instagram: string;
            github: string;
            linkedin: string;
        }
    };
}

function SocialLink({
                        className,
                        href,
                        children,
                        icon: Icon,
                    }: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-soft transition hover:text-oranger  dark:hover:text-oranger"
            >
                <Icon className="h-6 w-6 flex-none fill-soft transition group-hover:fill-oranger" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export default function About({ dict }: AboutProps) {

    return (
        <Container className="mt-16 my-20 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={alamine}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-soft">
                    <span className="text-xl">{ dict.about.salutation}</span>
                    <h1 className="text-3xl pt-6 font-bold tracking-tight sm:text-5xl">
                        { dict.profile.name}
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-textSlow/80">
                        {dict.about.full.split('\n\n').map((paragraph, index) => (
                            <p
                                key={index}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="#" icon={XIcon}>
                            { dict.follow.x }
                        </SocialLink>
                        <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                            { dict.follow.instagram }
                        </SocialLink>
                        <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                            { dict.follow.github }
                        </SocialLink>
                        <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                            { dict.follow.linkedin }
                        </SocialLink>
                        <SocialLink
                            href="mailto:diassy.alamine@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            diassy.alamine@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    );
}
