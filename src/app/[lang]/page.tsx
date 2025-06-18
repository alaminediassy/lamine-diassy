// app/[lang]/page.tsx
import { getDictionary } from './dictionaries'
import Hero from "@/components/Hero"

export default async function Home({
                                       params,
                                   }: {
    params: Promise<{ lang: 'en' | 'fr' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <main>
            <Hero dict={dict} />
        </main>
    )
}
