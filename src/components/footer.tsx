import Link from 'next/link';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-muted/30 pt-16 pb-8'>
            <div className='container mx-auto px-4'>
                <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <h3 className='text-accent mb-4 text-2xl font-bold'>YohaTech</h3>
                        <p className='text-muted-foreground mb-4'>
                            Turning Innovation into Smart Reality. We specialize in AI, robotics, custom electronic
                            boards, and smart homes.
                        </p>
                        <div className='flex space-x-4'>
                            <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Facebook size={20} />
                                <span className='sr-only'>Facebook</span>
                            </Link>
                            <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Twitter size={20} />
                                <span className='sr-only'>Twitter</span>
                            </Link>
                            <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Instagram size={20} />
                                <span className='sr-only'>Instagram</span>
                            </Link>
                            <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Linkedin size={20} />
                                <span className='sr-only'>LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className='mb-4 text-lg font-bold'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/' className='text-muted-foreground hover:text-primary transition-colors'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/projects'
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/about'
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/#contact'
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='mb-4 text-lg font-bold'>Services</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                    AI Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                    Robotics
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                    Custom Electronics
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                    Smart Home Solutions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='mb-4 text-lg font-bold'>Contact Us</h3>
                        <ul className='space-y-4'>
                            <li className='flex items-start'>
                                <MapPin className='text-primary mr-2 h-5 w-5 shrink-0' />
                                <span className='text-muted-foreground'>Monastir, Tunisia</span>
                            </li>
                            <li className='flex items-center'>
                                <Phone className='text-primary mr-2 h-5 w-5 shrink-0' />
                                <span className='text-muted-foreground'>+216 96 822 290</span>
                            </li>
                            <li className='flex items-center'>
                                <Mail className='text-primary mr-2 h-5 w-5 shrink-0' />
                                <span className='text-muted-foreground'>contact.yohatech@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-border border-t pt-8'>
                    <div className='flex flex-col items-center justify-between md:flex-row'>
                        <p className='text-muted-foreground mb-4 text-sm md:mb-0'>
                            &copy; {new Date().getFullYear()} YohaTech. All rights reserved.
                        </p>
                        <div className='flex space-x-6'>
                            <Link
                                href='#'
                                className='text-muted-foreground hover:text-primary text-sm transition-colors'>
                                Privacy Policy
                            </Link>
                            <Link
                                href='#'
                                className='text-muted-foreground hover:text-primary text-sm transition-colors'>
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
