import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

import { Award, Gauge, Leaf, Lightbulb } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
                <h1 className='text-destructive mb-8 text-center text-4xl font-bold'>About YohaTech</h1>

                <div className='reveal mb-12'>
                    <p className='text-muted-foreground mb-6 text-lg'>
                        YohaTech is a pioneering Tunisian tech startup at the forefront of technological innovation. We
                        specialize in developing cutting-edge solutions in AI, robotics, custom electronic boards, and
                        smart home systems that transform how people interact with technology.
                    </p>

                    <p className='text-muted-foreground mb-6 text-lg'>
                        Founded by a team of passionate engineers and tech enthusiasts, YohaTech is driven by a
                        commitment to excellence and a vision to make advanced technology accessible and beneficial for
                        businesses and individuals alike.
                    </p>
                </div>

                <div className='reveal mb-16 grid grid-cols-1 gap-8 md:grid-cols-2'>
                    <div className='relative h-64 overflow-hidden rounded-lg md:h-full'>
                        <Image src='/images/yoha-team.png' alt='YohaTech team' fill className='object-cover' />
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h2 className='text-primary mb-4 text-2xl font-bold'>Our Mission</h2>
                        <p className='text-muted-foreground'>
                            At YohaTech, our mission is to turn innovative ideas into smart reality. We strive to
                            develop technological solutions that are not only cutting-edge but also sustainable,
                            energy-efficient, and tailored to meet the specific needs of our clients.
                        </p>
                    </div>
                </div>

                <h2 className='text-destructive reveal mb-8 text-center text-3xl font-bold'>Our Core Values</h2>

                <div className='reveal mb-16 grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <Card className='border-l-primary border-l-4'>
                        <CardContent className='pt-6'>
                            <div className='mb-4 flex items-start'>
                                <div className='bg-primary/10 mr-4 rounded-full p-2'>
                                    <Lightbulb className='text-primary h-6 w-6' />
                                </div>
                                <div>
                                    <h3 className='mb-2 text-lg font-bold'>Innovation</h3>
                                    <p className='text-muted-foreground'>
                                        We constantly push the boundaries of what's possible, embracing new ideas and
                                        technologies.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='border-l-primary border-l-4'>
                        <CardContent className='pt-6'>
                            <div className='mb-4 flex items-start'>
                                <div className='bg-primary/10 mr-4 rounded-full p-2'>
                                    <Gauge className='text-primary h-6 w-6' />
                                </div>
                                <div>
                                    <h3 className='mb-2 text-lg font-bold'>Performance</h3>
                                    <p className='text-muted-foreground'>
                                        We are committed to delivering high-performance solutions that exceed
                                        expectations.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='border-l-primary border-l-4'>
                        <CardContent className='pt-6'>
                            <div className='mb-4 flex items-start'>
                                <div className='bg-primary/10 mr-4 rounded-full p-2'>
                                    <Leaf className='text-secondary h-6 w-6' />
                                </div>
                                <div>
                                    <h3 className='mb-2 text-lg font-bold'>Sustainability</h3>
                                    <p className='text-muted-foreground'>
                                        We design our solutions with environmental responsibility in mind, minimizing
                                        ecological impact.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='border-l-primary border-l-4'>
                        <CardContent className='pt-6'>
                            <div className='mb-4 flex items-start'>
                                <div className='bg-primary/10 mr-4 rounded-full p-2'>
                                    <Award className='text-primary h-6 w-6' />
                                </div>
                                <div>
                                    <h3 className='mb-2 text-lg font-bold'>Excellence</h3>
                                    <p className='text-muted-foreground'>
                                        We strive for excellence in everything we do, from design to implementation to
                                        customer service.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className='reveal mb-16'>
                    <h2 className='text-destructive mb-8 text-center text-3xl font-bold'>Our Team</h2>
                    <p className='text-muted-foreground mb-6 text-center text-lg'>
                        YohaTech is powered by a diverse team of talented engineers, designers, and tech enthusiasts who
                        share a passion for innovation and excellence.
                    </p>

                    <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        <div className='flex flex-col items-center'>
                            <div className='relative mb-4 h-32 w-32 overflow-hidden rounded-full'>
                                <Image
                                    src='/images/yosri-ben-fraj.png'
                                    alt='Team member'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <h3 className='text-lg font-bold'>Yosri Ben Fraj</h3>
                            <p className='text-muted-foreground'>Founder & CEO</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='relative mb-4 h-32 w-32 overflow-hidden rounded-full'>
                                <Image
                                    src='/images/khadhraoui-mondher.png'
                                    alt='Team member'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <h3 className='text-lg font-bold'>Khadhraoui Mondher</h3>
                            <p className='text-muted-foreground'>CTO</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='relative mb-4 h-32 w-32 overflow-hidden rounded-full'>
                                <Image
                                    src='/images/ahmed-ben-hamouda.png'
                                    alt='Team member'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <h3 className='text-lg font-bold'>Ahmed Ben Hamouda</h3>
                            <p className='text-muted-foreground'>Lead Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
