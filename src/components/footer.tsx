import { content } from '@/constant/content'
import { Facebook, Instagram, MessageCircleMore, Twitter } from 'lucide-react'
import React from 'react'
import { Brand } from './brand'

function Footer() {
    return (
        <footer className='bg-gray-50 text-gray-800 p-10 mt-24'>
            <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div>
                        <h2 className='text-2xl font-bold text-gray-900'>
                            <span className='flex gap-2 text-black'>
                                <Brand />
                                {content.footer.overview.title}
                            </span>
                        </h2>
                        <p className='mt-4 text-sm text-gray-600'>
                            {content.footer.overview.description}
                        </p>
                    </div>

                    <div>
                        <h4 className='font-semibold text-lg text-gray-900 mb-4'>
                            Mata Pelajaran
                        </h4>
                        <ul className='space-y-2 text-sm text-gray-600'>
                            <li>Matematika Dasar</li>
                            <li>Fisika Dasar</li>
                            <li>Bahasa Inggris Dasar</li>
                            <li>Dasar Pemrograman</li>
                            <li>Bahasa Indonesia Dasar</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-lg text-gray-900 mb-4'>
                            Navigasi
                        </h4>
                        <ul className='space-y-2 text-sm text-gray-600'>
                            <li>Pelajaran</li>
                            <li>Forum</li>
                            <li>Kelas</li>
                            <li>Enrollment</li>
                            <li>Reviews</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-lg text-gray-900 mb-4'>
                            {content.footer.contact.title}
                        </h4>
                        <p className='text-sm text-gray-600'>
                            <strong>Hubungi Kami:</strong> <br />
                            {content.footer.contact.phone}
                        </p>
                        <p className='text-sm text-gray-600 mt-4'>
                            <strong>Email Kami Pada:</strong> <br />
                            {content.footer.contact.email}
                        </p>
                        <p className='text-sm text-gray-600 mt-4'>
                            <strong>Alamat Kami:</strong> <br />
                            {content.footer.contact.address}
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center md:flex-row md:justify-between mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-600'>
                    <p>© 2025 Lentera Cendekia, All Right Reserved.</p>
                    <div className='flex justify-center space-x-4 mt-4 text-neutral-base'>
                        <a
                            href='#'
                            className='hover:text-warning-60'
                        >
                            <Facebook />
                        </a>
                        <a
                            href='#'
                            className='hover:text-warning-60'
                        >
                            <Instagram />
                        </a>
                        <a
                            href='#'
                            className='hover:text-warning-60'
                        >
                            <Twitter />
                        </a>
                        <a
                            href='#'
                            className='hover:text-warning-60'
                        >
                            <MessageCircleMore />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
