'use client';

import { useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';

import { Brain, Cpu, Home, BotIcon as Robot } from 'lucide-react';

const ServicesSection = () => {
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

    const services = [
        {
            icon: <Brain className='text-primary h-12 w-12' />,
            title: 'Artificial Intelligence',
            description:
                'Custom AI solutions for businesses, including machine learning models, computer vision systems, and natural language processing applications.'
        },
        {
            icon: <Robot className='text-primary h-12 w-12' />,
            title: 'Robotics',
            description:
                'Innovative robotic solutions for automation, customer service, agriculture, and more, with advanced sensing and autonomous capabilities.'
        },
        {
            icon: <Cpu className='text-primary h-12 w-12' />,
            title: 'Custom Electronics',
            description:
                'Bespoke electronic board design and manufacturing for specialized applications, IoT devices, and embedded systems.'
        },
        {
            icon: <Home className='text-primary h-12 w-12' />,
            title: 'Smart Home Solutions',
            description:
                'Integrated smart home systems that connect lighting, security, climate control, and entertainment for enhanced comfort and efficiency.'
        }
    ];

    return (
        <section id='services' className='bg-background py-20'>
            <div className='container mx-auto px-4'>
                <div className='reveal mb-16 text-center'>
                    <h2 className='text-destructive mb-4 text-3xl font-bold md:text-4xl'>Our Services</h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
                        We offer cutting-edge technological solutions across multiple domains, combining innovation with
                        practical implementation.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className='reveal border-none shadow-lg transition-all hover:shadow-xl'
                            style={{ transitionDelay: `${index * 100}ms` }}>
                            <CardContent className='pt-6'>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='bg-primary/10 mb-6 rounded-full p-4'>{service.icon}</div>
                                    <h3 className='mb-3 text-xl font-bold'>{service.title}</h3>
                                    <p className='text-muted-foreground'>{service.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
