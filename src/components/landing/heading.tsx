import clsx from 'clsx'
import { type Heading } from '@/types/home'

export function Heading({
    id,
    title,
    description,
    direction = 'center',
}: Heading) {
    return (
        <div
            className={clsx(
                'flex flex-col justify-center gap-2 py-5',
                {
                    'items-start': direction === 'left',
                    'items-center': direction === 'center',
                    'items-end': direction === 'right',
                },
                '-scroll-m-96'
            )}
            id={id}
        >
            <span className='px-4 py-2 font-bold rounded-full bg-warning-20 text-warning-60'>
                {title}
            </span>
            <p className={`text-3xl font-medium md:text-${direction}`}>
                {description}
            </p>
        </div>
    )
}
