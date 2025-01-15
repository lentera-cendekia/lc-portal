export interface Heading {
    id?: string
    title: string
    description: string
    direction?: 'left' | 'center' | 'right'
}

export interface UniqueSellingPoint {
    id: string
    title: string
    description: string
    image: string
    reverse?: boolean
}

export interface Program {
    name: string
    short_description: string
    image: string
}

export interface Facility {
    icon: React.ReactNode
    title: string
    description: string
}

export interface Teacher {
    image: string
    name: string
    role: string
    graduatedAt: string
}

export interface Testimony {
    testimony: string
    profileImage: string
    name: string
    acceptedIn: string
}
