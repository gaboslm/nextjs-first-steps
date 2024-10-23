'use client'
import Link from 'next/link';
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation';

interface Props {
	path: string;
	text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
	const pathname = usePathname()
	const isActive = pathname === path 
	const isActiveStyle = isActive ? style['active-link'] : ''

	return (
		<Link
			className={ `${ style.link } ${isActiveStyle}` }
			href={ path }
		>
			{ text }
		</Link>
	)
}
