'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import { ModeToggle } from './mode-toggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-300',
                isScrolled ? 'bg-background/80 py-2 shadow-sm backdrop-blur-md' : 'bg-transparent py-4'
            )}>
            <div className='container mx-auto flex items-center justify-between px-4'>
                <Link href='/' className='flex items-center'>
                    <span className='text-accent text-2xl font-bold'>YohaTech</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className='hidden items-center space-x-8 md:flex'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className='text-foreground hover:text-accent transform transition-transform duration-200 hover:scale-110'>
                            {link.name}
                        </Link>
                    ))}
                    <Button className='bg-accent hover:bg-primary/90'>Get Started</Button>
                    <ModeToggle />
                </nav>

                {/* Mobile Navigation */}
                <div className='flex items-center md:hidden'>
                    <ModeToggle />
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant='ghost' size='icon' className='ml-2'>
                                <Menu className='h-6 w-6' />
                                <span className='sr-only'>Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                            <div className='flex h-full flex-col'>
                                <div className='flex items-center justify-between py-4'>
                                    <span className='text-primary text-2xl font-bold'>YohaTech</span>
                                    <Button variant='ghost' size='icon' onClick={() => setIsMobileMenuOpen(false)}>
                                        <X className='h-6 w-6' />
                                        <span className='sr-only'>Close menu</span>
                                    </Button>
                                </div>
                                <nav className='mt-8 flex flex-col space-y-6'>
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className='text-foreground hover:text-primary transform text-lg transition-transform duration-200 hover:scale-110'
                                            onClick={() => setIsMobileMenuOpen(false)}>
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Button className='bg-primary hover:bg-primary/90 mt-4 w-full'>Get Started</Button>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
