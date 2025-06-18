import { useEffect, useState } from 'react'

/**
 * Hook pour afficher une seule chaîne de caractères
 * avec un effet de frappe progressif (machine à écrire).
 *
 * @param text Texte unique à animer
 * @param speed Vitesse de frappe (ms par caractère)
 * @param loop Si true, relance l'effet en boucle
 * @returns Texte affiché progressivement
 */
export function useTypewriter(text: string, speed = 100, loop = true): string {
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < text.length) {
            // Ajoute un caractère à chaque intervalle
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index))
                setIndex((prev) => prev + 1)
            }, speed)

            return () => clearTimeout(timeout)
        } else if (loop) {
            // Redémarre l'animation après une pause
            const pause = setTimeout(() => {
                setDisplayedText('')
                setIndex(0)
            }, 1500)

            return () => clearTimeout(pause)
        }
    }, [index, text, speed, loop])

    return displayedText
}

/**
 * Hook pour animer plusieurs chaînes de caractères en boucle
 * avec effet de frappe et suppression (comme un carousel de texte).
 *
 * @param texts Tableau de textes à afficher
 * @param typingSpeed Vitesse de frappe (ms par caractère)
 * @param pauseDuration Pause entre deux textes (en ms)
 * @returns Texte en cours d'animation
 */
export function useMultipleTypewriter(
    texts: string[],
    typingSpeed = 100,
    pauseDuration = 2000
) {
    const [displayedText, setDisplayedText] = useState('') // Texte animé à l'écran
    const [textIndex, setTextIndex] = useState(0) // Index du texte actuel
    const [charIndex, setCharIndex] = useState(0) // Index du caractère actuel
    const [isDeleting, setIsDeleting] = useState(false) // Indique si on efface ou écrit

    useEffect(() => {
        const currentText = texts[textIndex]
        let timeout: NodeJS.Timeout

        if (!isDeleting && charIndex < currentText.length) {
            // Écriture progressive
            timeout = setTimeout(() => {
                setDisplayedText(currentText.slice(0, charIndex + 1))
                setCharIndex(charIndex + 1)
            }, typingSpeed)
        } else if (isDeleting && charIndex > 0) {
            // Suppression progressive
            timeout = setTimeout(() => {
                setDisplayedText(currentText.slice(0, charIndex - 1))
                setCharIndex(charIndex - 1)
            }, typingSpeed / 2)
        } else {
            // Pause avant de changer d’état (écriture ↔ suppression)
            timeout = setTimeout(() => {
                if (!isDeleting) {
                    setIsDeleting(true)
                } else {
                    setIsDeleting(false)
                    setTextIndex((textIndex + 1) % texts.length) // Passe au texte suivant
                }
            }, pauseDuration)
        }

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseDuration])

    return displayedText
}
