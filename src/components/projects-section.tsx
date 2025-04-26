'use client';

import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
    useEffect(() => {
        const revealElements = () => {
            const reveals = document.querySelectorAll('.reveal');

            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', revealElements);
        revealElements(); // Initial check

        return () => {
            window.removeEventListener('scroll', revealElements);
        };
    }, []);

    const featuredProjects = [
        {
            title: 'AI Vision System',
            category: 'Artificial Intelligence',
            description: 'Advanced computer vision system for manufacturing quality control with 99.7% accuracy.',
            image: '/images/ai-vision.png',
            badge: 'AI'
        },
        {
            title: 'TechBot Assistant',
            category: 'Robotics',
            description: 'Interactive robot for customer service with natural language processing capabilities.',
            image: '/images/tech-bot.png',
            badge: 'Robotics'
        },
        {
            title: 'SmartBoard Micro',
            category: 'Electronics',
            description: 'Energy-efficient microcontroller board with integrated sensors for IoT applications.',
            image: '/images/smart-board.png',
            badge: 'Electronics'
        },
        {
            title: 'HomeConnect Hub',
            category: 'Smart Home',
            description: 'Integrated smart home control system for lighting, climate, security, and entertainment.',
            image: '/images/home-connect.png',
            badge: 'IoT'
        }
    ];

    return (
        <section className='bg-muted/30 py-20'>
            <div className='container mx-auto px-4'>
                <div className='reveal mb-16 text-center'>
                    <h2 className='text-destructive mb-4 text-3xl font-bold md:text-4xl'>Our Projects</h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
                        Explore our innovative solutions across AI, robotics, custom electronics, and smart home
                        technologies.
                    </p>
                </div>

                <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {featuredProjects.map((project, index) => (
                        <Card
                            key={index}
                            className='reveal overflow-hidden border-none shadow-lg transition-all hover:shadow-xl'
                            style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <div className='relative h-64 md:h-auto'>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className='object-cover'
                                        onError={(e) => {
                                            console.error('Image loading error:', e);
                                        }}
                                    />
                                </div>
                                <CardContent className='flex flex-col justify-center p-6'>
                                    <div className='mb-2'>
                                        <Badge
                                            variant='outline'
                                            className='bg-primary/10 text-primary border-primary/20'>
                                            {project.badge}
                                        </Badge>
                                    </div>
                                    <h3 className='mb-2 text-xl font-bold'>{project.title}</h3>
                                    <p className='text-muted-foreground mb-4'>{project.description}</p>
                                    <Button
                                        variant='ghost'
                                        className='hover:text-primary w-fit p-0 hover:bg-transparent'>
                                        Learn more <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className='reveal text-center'>
                    <Link href='/projects'>
                        <Button size='lg' className='bg-primary hover:bg-primary/90'>
                            View All Projects
                            <ArrowRight className='ml-2 h-4 w-4' />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
