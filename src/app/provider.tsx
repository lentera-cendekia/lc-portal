interface ProviderProps {
    children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
    // If there is a need to provide a context, do it here
    // Just wrap the children with the context provider
    return <>{children}</>
}
