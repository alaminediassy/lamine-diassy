import {forwardRef, JSX} from 'react'
import clsx from 'clsx'

// Conteneur externe
export const ContainerOuter = forwardRef<HTMLDivElement, JSX.IntrinsicElements['div']>(
    function OuterContainer({ className, children, ...props }, ref) {
        return (
            <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
                <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
            </div>
        )
    }
)

// Conteneur interne
export const ContainerInner = forwardRef<HTMLDivElement, JSX.IntrinsicElements['div']>(
    function InnerContainer({ className, children, ...props }, ref) {
        return (
            <div
                ref={ref}
                className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
                {...props}
            >
                <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
            </div>
        )
    }
)

// Conteneur combiné (outer + inner)
export const Container = forwardRef<HTMLDivElement, JSX.IntrinsicElements['div']>(
    function Container({ children, ...props }, ref) {
        return (
            <ContainerOuter ref={ref} {...props}>
                <ContainerInner>{children}</ContainerInner>
            </ContainerOuter>
        )
    }
)
