'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import NavLink from '@/components/navigation/link'
import { NAVIGATION_ITEMS } from '@/constant/navigations/home'
import { Brand } from '../brand'

interface SectionRefs {
    [key: string]: HTMLElement | null
}

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<string>('')
    const [isSheetOpen, setSheetOpen] = useState<boolean>(false)

    const handleScrollIntoView = useCallback((id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    }, [])

    const sectionRefs = useRef<SectionRefs>(
        NAVIGATION_ITEMS.reduce((item, navItem) => {
            item[navItem.id] = null
            return item
        }, {} as SectionRefs)
    )

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.6,
            }
        )

        NAVIGATION_ITEMS.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) {
                observer.observe(element)
                sectionRefs.current[item.id] = element
            }
        })

        const currentSectionRefs = sectionRefs.current

        return () => {
            NAVIGATION_ITEMS.forEach((item) => {
                const element = currentSectionRefs[item.id]
                if (element) {
                    observer.unobserve(element)
                }
            })
        }
    }, [])

    return (
        <div className='fixed top-0 z-50 w-[100vw] px-4 py-2 bg-white drop-shadow-md dark:bg-gray-800'>
            <div className='flex items-center justify-between'>
                <Link
                    href='#'
                    className='flex items-center gap-2'
                >
                    <Brand />
                    <span className='text-md font-semibold'>
                        Lentera Cendekia
                    </span>
                </Link>
                <div className='hidden lg:flex lg:gap-6'>
                    {NAVIGATION_ITEMS.map((item) => (
                        <NavLink
                            key={item.id}
                            isActive={activeLink === item.id}
                            callback={(e) => {
                                e.preventDefault()
                                setActiveLink(item.id)
                                handleScrollIntoView(item.id)
                            }}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <Button className='bg-warning-base text-neutral-base font-semibold hover:bg-warning-60'>
                        Daftar Sekarang
                    </Button>
                </div>
                <Sheet
                    open={isSheetOpen}
                    onOpenChange={setSheetOpen}
                >
                    <SheetTrigger asChild>
                        <Button
                            variant='outline'
                            size='icon'
                            className='lg:hidden'
                        >
                            <Menu className='w-6 h-6' />
                            <span className='sr-only'>
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='right'>
                        <SheetTitle className='hidden' />
                        <div className='grid py-4'>
                            {NAVIGATION_ITEMS.map((item) => (
                                <div
                                    key={item.id}
                                    // isActive={activeLink === item.id}
                                    className='text-lg font-semibold text-neutral-base hover:text-warning-base cursor-pointer'
                                    onClick={() => {
                                        setActiveLink(item.id)
                                        handleScrollIntoView(item.id)
                                        setSheetOpen(false)
                                    }}
                                >
                                    {item.label}
                                </div>
                            ))}
                            <Button className='mt-4'>Daftar Sekarang</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
