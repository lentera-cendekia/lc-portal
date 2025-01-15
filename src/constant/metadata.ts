import { type Metadata } from 'next'

interface CustomMetadata {
    [key: string]: Metadata
}

const BASE_URL: string = process.env.BASE_URL || 'https://lenteracendekia.com'

export const metadata: CustomMetadata = {
    main: {
        title: 'Lentera Cendekia',
        description:
            'Lentera cendekia merupakan sebuah lembaga pendidikan yang berfokus pada pengembangan potensi siswa melalui pembelajaran yang menyenangkan dan bermakna.',
        applicationName: 'Lentera Cendekia',
        authors: [
            {
                name: 'Lentera Cendekia',
                url: BASE_URL,
            },
            {
                name: 'LBB Lentera Cendekia',
                url: BASE_URL,
            },
        ],
        manifest: `${BASE_URL}/manifest.json`,
        category: 'education',
        classification: 'education',
        keywords: [
            'lentera cendekia',
            'lentera',
            'cendekia',
            'lentera cendekia',
            'lentera cendekia surabaya',
            'belajar',
            'bimbingan',
            'lembaga',
            'asik',
            'menarik',
            'seru',
            'pendidikan',
            'les',
            'les privat',
            'les privat surabaya',
            'les privat indonesia',
            'les privat matematika',
            'les privat bahasa inggris',
            'les privat fisika',
            'les privat kimia',
            'les privat biologi',
            'les privat sains',
            'les online',
            'les online surabaya',
            'les online indonesia',
            'les online matematika',
            'les online bahasa inggris',
            'les online fisika',
            'les online kimia',
            'les online biologi',
            'les online sains',
            'les daring',
            'les daring surabaya',
            'les daring indonesia',
            'les daring matematika',
            'les daring bahasa inggris',
            'les daring fisika',
            'les daring kimia',
            'les daring biologi',
            'les daring sains',
            'fasilitas',
            'kegiatan',
            'kursus',
            'kursus privat',
        ],
        alternates: {
            canonical: BASE_URL,
            languages: {
                id: BASE_URL,
            },
        },
        bookmarks: BASE_URL,
        publisher: 'Lentera Cendekia',
        creator: 'Lentera Cendekia',
        robots: 'index, follow',
        archives: 'none',
        generator: 'Next.js',
        formatDetection: {
            telephone: true,
        },
        other: {
            'msapplication-TileColor': '#ffffff',
            'msapplication-TileImage': '/mstile-144x144.png',
            'theme-color': '#ffffff',
        },
        referrer: 'origin',
        abstract: 'Lentera Cendekia',
        openGraph: {
            title: 'Lentera Cendekia',
            description:
                'Lentera cendekia merupakan sebuah lembaga pendidikan yang berfokus pada pengembangan potensi siswa melalui pembelajaran yang menyenangkan dan bermakna.',
            type: 'website',
            url: BASE_URL,
            siteName: 'Lentera Cendekia',
            locale: 'id_ID',
            images: [
                {
                    url: `${BASE_URL}/images/logo.png`,
                    width: 1200,
                    height: 630,
                    alt: 'Lentera Cendekia',
                },
            ],
        },
    },
}
