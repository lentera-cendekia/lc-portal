'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useMemo } from 'react'

interface NavLinkProps {
    href?: string
    isActive?: boolean
    callback?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
    children: React.ReactNode
}

export default function NavLink({
    href,
    isActive = false,
    callback,
    children,
}: NavLinkProps) {
    const className = useMemo(
        () =>
            clsx(
                'flex items-center py-2 text-sm font-medium transition-all duration-100',
                isActive &&
                    'text-warning-60 bg-warning-20 border-t-4 border-warning-40', // condition when active for mobile
                isActive &&
                    'lg:text-neutral-base lg:bg-transparent lg:border-t-0 lg:border-b-2 lg:border-warning-40', // condition when active for desktop
                'hover:border-b-2 hover:border-warning-40 hover:text-neutral-40' // hover effect
            ),
        [isActive]
    )

    return (
        <Link
            className={className}
            href={href ? href : ''}
            onClick={callback && callback}
            prefetch={false}
        >
            {children}
        </Link>
    )
}
