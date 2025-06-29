// app/[lang]/page.tsx
import { getDictionary } from './dictionaries'
import Hero from '@/components/Hero'
import HeroBackground from "@/components/HeroBackground";
import RightSide from "@/components/RightSide";
import {VSocialMediaLink} from "@/components/SocialMediaLink";

export default async function Home({
                                       params,
                                   }: {
    params: Promise<{ lang: 'en' | 'fr' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <main>
            <section className="relative isolate rounded-b-3xl min-h-[760px] bg-[#0A192F]">
                <HeroBackground />
                <Hero dict={dict} />
                <RightSide/>
                <VSocialMediaLink/>
            </section>
        </main>
    )
}
