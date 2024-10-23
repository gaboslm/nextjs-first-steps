import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '@/components'
import Link from 'next/link'
import React from 'react'

const navItems = [
	{ 
		name: 'Contact', 
		path: '/contact'
	},
	{ 
		name: 'Pricing', 
		path: '/pricing'
	},
	{ 
		name: 'About', 
		path: '/about'
	}
]

export const Navbar = () => {
	return (
		<nav className='flex gap-x-2.5 bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
			<Link href='/' className='flex items-center gap-x-1'>
				<HomeIcon />
				<span>Home</span>
			</Link>

			<div className="flex flex-1"></div>
			{ 
				navItems.map((item) => (
					<ActiveLink 
					key={ item.path }
					path={ item.path }
					text={ item.name }
					/>)
				)
			}
		</nav>
	)
}
