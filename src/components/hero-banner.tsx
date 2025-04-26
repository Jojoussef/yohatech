'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Home, BotIcon as Robot, Zap } from 'lucide-react';

const HeroBanner = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className='hero-gradient relative flex min-h-screen items-center'>
            <div className='bg-grid-white/[0.05] absolute inset-0 bg-[size:60px_60px] opacity-20' />
            <div className='relative z-10 container mx-auto px-4 py-32'>
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <h1 className='text-primary mb-4 text-4xl font-bold md:text-5xl lg:text-6xl'>
                            Turning Innovation into{' '}
                        </h1>
                        <h1 className='text-primary mb-6 text-4xl font-bold md:text-5xl lg:text-6xl'>
                            <span className='text-destructive relative'>
                                Smart Reality
                                <span className='bg-secondary absolute bottom-0 left-0 h-1 w-full'></span>
                            </span>
                        </h1>
                        <p className='text-primary/90 mb-8 max-w-xl text-xl'>
                            YohaTech is a pioneering Tunisian tech startup specializing in AI, robotics, custom
                            electronic boards, and smart homes (IoT).
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <Button
                                size='lg'
                                className='bg-primary hover:bg-secondary/90 hover:text-primary text-secondary'>
                                Explore Our Projects
                                <ChevronRight className='ml-2 h-4 w-4' />
                            </Button>
                            <Button
                                size='lg'
                                variant='outline'
                                className='hover:bg-secondary/10 text-primary border-white'>
                                Contact Us
                            </Button>
                        </div>

                        <div className='mt-12 flex flex-wrap gap-6'>
                            <div className='text-primary/90 flex items-center'>
                                <Cpu className='text-primary mr-2 h-5 w-5' />
                                <span>AI Solutions</span>
                            </div>
                            <div className='text-primary/90 flex items-center'>
                                <Robot className='text-primary mr-2 h-5 w-5' />
                                <span>Robotics</span>
                            </div>
                            <div className='text-primary/90 flex items-center'>
                                <Zap className='text-primary mr-2 h-5 w-5' />
                                <span>Electronics</span>
                            </div>
                            <div className='text-primary/90 flex items-center'>
                                <Home className='text-primary mr-2 h-5 w-5' />
                                <span>Smart Homes</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='relative hidden h-[400px] overflow-hidden rounded-lg shadow-2xl lg:block lg:h-[500px]'>
                        <div className='from-primary/20 to-secondary/20 absolute inset-0 z-10 rounded-lg bg-gradient-to-br' />
                        <div className="absolute inset-0 bg-[url('/images/hero-img.png')] bg-cover bg-center" />
                    </motion.div>
                </div>
            </div>

            <div className='absolute right-0 bottom-10 left-0 flex justify-center'>
                <Link href='#services' className='text-primary/80 hover:text-primary transition-colors'>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        className='flex flex-col items-center'>
                        <span className='mb-2'>Scroll Down</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path d='M12 5v14' />
                            <path d='m19 12-7 7-7-7' />
                        </svg>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;
