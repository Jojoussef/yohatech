'use client';

import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

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

    if (!isMounted) {
        return null;
    }

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CTO, TechForward',
            content:
                "YohaTech's AI vision system has transformed our manufacturing process. The accuracy and reliability of their solution exceeded our expectations and has significantly reduced our quality control costs.",
            avatar: '/placeholder.svg?height=100&width=100'
        },
        {
            name: 'Mohammed Al-Farsi',
            role: 'Operations Director, Smart Living',
            content:
                'The smart home solution provided by YohaTech has been a game-changer for our residential projects. Their system is intuitive, reliable, and the customer support is exceptional.',
            avatar: '/placeholder.svg?height=100&width=100'
        },
        {
            name: 'Leila Ben Salah',
            role: 'CEO, AgriTech Tunisia',
            content:
                'We partnered with YohaTech to develop a custom robotics solution for our agricultural operations. Their innovative approach and technical expertise delivered a system that has increased our productivity by 35%.',
            avatar: '/placeholder.svg?height=100&width=100'
        },
        {
            name: 'David Chen',
            role: 'Product Manager, Global Electronics',
            content:
                "The custom electronic boards developed by YohaTech for our IoT devices are exceptional in terms of energy efficiency and performance. Their team's attention to detail and commitment to quality is impressive.",
            avatar: '/placeholder.svg?height=100&width=100'
        }
    ];

    return (
        <section className='bg-background py-20'>
            <div className='container mx-auto px-4'>
                <div className='reveal mb-16 text-center'>
                    <h2 className='text-destructive mb-4 text-3xl font-bold md:text-4xl'>What Our Clients Say</h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
                        Hear from businesses and organizations that have transformed their operations with our
                        innovative technological solutions.
                    </p>
                </div>

                <div className='reveal'>
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true
                        }}
                        className='w-full'>
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className='pl-4 md:basis-1/2 lg:basis-1/3'>
                                    <Card className='h-full border-none shadow-lg'>
                                        <CardContent className='flex h-full flex-col p-6'>
                                            <Quote className='text-primary/40 mb-4 h-8 w-8' />
                                            <p className='text-muted-foreground mb-6 flex-grow'>
                                                "{testimonial.content}"
                                            </p>
                                            <div className='flex items-center'>
                                                <Avatar className='mr-4 h-12 w-12'>
                                                    <AvatarImage
                                                        src={testimonial.avatar || '/placeholder.svg'}
                                                        alt={testimonial.name}
                                                    />
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h4 className='font-bold'>{testimonial.name}</h4>
                                                    <p className='text-muted-foreground text-sm'>{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className='mt-8 flex justify-center'>
                            <CarouselPrevious className='relative mr-2 translate-x-0 translate-y-0' />
                            <CarouselNext className='relative ml-2 translate-x-0 translate-y-0' />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
