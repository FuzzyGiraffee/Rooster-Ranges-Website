import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Donate', href: '/Donate', current: false },
  { name: 'TOS', href: '/TOS', current: false },
  { name: 'Positions', href: '/Positions', current: false },
  { name: 'Statistics', href: '/Statistics', current: false },
  { name: 'Moderation Logs', href: '/Moderation', current: false },
  { name: 'Contact Us', href: '/Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const [currentPath, setCurrentPath] = useState(''); // Start emtpy state
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {

        if (typeof window !== 'undefined') { // Check if we are on the client-side
            setCurrentPath(window.location.pathname); // Set the current path from the window location
        }
        setLoading(false); // Mark as loaded

    }, []);

    const updatedNavigation = navigation.map((item) => ({
    ...item,
    current:!loading && item.href === currentPath, // Apply current only if not loading
    }));

  return (

      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    src="../public/favicon.ico" //May remove due to blinking. May be caused by hosting locally
                    className="size-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {updatedNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          
        </Disclosure>
      </div>
  )
}