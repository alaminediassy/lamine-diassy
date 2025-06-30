// app/[lang]/about/page.tsx
import { getDictionary } from '@/app/[lang]/dictionaries'
import About from '@/components/About'
import Experiences from "@/components/experiences/Experiences";

export default async function AboutPage({
                                            params,
                                        }: {
    params: Promise<{ lang: 'fr' | 'en' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <>
            <About dict={dict} />
            <Experiences dict={dict}/>
        </>
    )
}
