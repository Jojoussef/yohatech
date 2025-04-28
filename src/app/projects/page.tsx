import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProjectsPage() {
    return (
        <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
            <h1 className='text-destructive mb-4 text-center text-4xl font-bold'>Our Projects</h1>
            <p className='text-muted-foreground mx-auto mb-12 max-w-3xl text-center text-xl'>
                Explore our innovative solutions across AI, robotics, custom electronics, and smart home technologies.
            </p>

            <Tabs defaultValue='all' className='mb-12 w-full'>
                <div className='mb-8 flex justify-center'>
                    <TabsList>
                        <TabsTrigger value='all'>All Projects</TabsTrigger>
                        <TabsTrigger value='ai'>AI Systems</TabsTrigger>
                        <TabsTrigger value='robotics'>Robotics</TabsTrigger>
                        <TabsTrigger value='electronics'>Electronics</TabsTrigger>
                        <TabsTrigger value='smarthome'>Smart Home</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value='all' className='space-y-8'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {/* AI Project */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='AI Vision System'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>AI Vision System</CardTitle>
                                    <Badge className='bg-primary'>AI</Badge>
                                </div>
                                <CardDescription>
                                    Advanced computer vision system for manufacturing quality control
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our AI-powered vision system helps manufacturing plants detect defects with 99.7%
                                    accuracy, reducing waste and improving product quality.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Robotics Project */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Interactive Robot'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>TechBot Assistant</CardTitle>
                                    <Badge className='bg-secondary text-white'>Robotics</Badge>
                                </div>
                                <CardDescription>Interactive robot for customer service and assistance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    TechBot provides interactive customer assistance in retail environments, with
                                    natural language processing and autonomous navigation capabilities.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Electronics Project */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Custom PCB'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>SmartBoard Micro</CardTitle>
                                    <Badge>Electronics</Badge>
                                </div>
                                <CardDescription>Custom electronic board for IoT applications</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our energy-efficient microcontroller board features integrated sensors and wireless
                                    connectivity for a wide range of IoT applications.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Smart Home Project */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Smart Home System'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>HomeConnect Hub</CardTitle>
                                    <Badge variant='outline'>Smart Home</Badge>
                                </div>
                                <CardDescription>Integrated smart home control system</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our comprehensive smart home solution integrates lighting, climate, security, and
                                    entertainment systems into a single, user-friendly interface.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* AI Project 2 */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Predictive Maintenance System'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>PredictMaint AI</CardTitle>
                                    <Badge className='bg-primary'>AI</Badge>
                                </div>
                                <CardDescription>
                                    Predictive maintenance system for industrial equipment
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our AI-driven predictive maintenance solution analyzes equipment data to forecast
                                    failures before they occur, reducing downtime by up to 78%.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Robotics Project 2 */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Agricultural Robot'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>AgriBot</CardTitle>
                                    <Badge className='bg-secondary text-white'>Robotics</Badge>
                                </div>
                                <CardDescription>Autonomous agricultural robot for precision farming</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    AgriBot autonomously monitors crop health, applies targeted treatments, and harvests
                                    produce, increasing yields while reducing resource usage.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value='ai' className='space-y-8'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {/* AI Projects Only */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='AI Vision System'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>AI Vision System</CardTitle>
                                    <Badge className='bg-primary'>AI</Badge>
                                </div>
                                <CardDescription>
                                    Advanced computer vision system for manufacturing quality control
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our AI-powered vision system helps manufacturing plants detect defects with 99.7%
                                    accuracy, reducing waste and improving product quality.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Predictive Maintenance System'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>PredictMaint AI</CardTitle>
                                    <Badge className='bg-primary'>AI</Badge>
                                </div>
                                <CardDescription>
                                    Predictive maintenance system for industrial equipment
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our AI-driven predictive maintenance solution analyzes equipment data to forecast
                                    failures before they occur, reducing downtime by up to 78%.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>

                {/* Similar TabsContent for other categories */}
                <TabsContent value='robotics' className='space-y-8'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {/* Robotics Projects */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Interactive Robot'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>TechBot Assistant</CardTitle>
                                    <Badge className='bg-secondary text-white'>Robotics</Badge>
                                </div>
                                <CardDescription>Interactive robot for customer service and assistance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    TechBot provides interactive customer assistance in retail environments, with
                                    natural language processing and autonomous navigation capabilities.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Agricultural Robot'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>AgriBot</CardTitle>
                                    <Badge className='bg-secondary text-white'>Robotics</Badge>
                                </div>
                                <CardDescription>Autonomous agricultural robot for precision farming</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    AgriBot autonomously monitors crop health, applies targeted treatments, and harvests
                                    produce, increasing yields while reducing resource usage.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value='electronics' className='space-y-8'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {/* Electronics Projects */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Custom PCB'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>SmartBoard Micro</CardTitle>
                                    <Badge>Electronics</Badge>
                                </div>
                                <CardDescription>Custom electronic board for IoT applications</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our energy-efficient microcontroller board features integrated sensors and wireless
                                    connectivity for a wide range of IoT applications.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value='smarthome' className='space-y-8'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {/* Smart Home Projects */}
                        <Card className='overflow-hidden transition-all hover:shadow-lg'>
                            <div className='relative h-48 w-full'>
                                <Image
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Smart Home System'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <CardTitle>HomeConnect Hub</CardTitle>
                                    <Badge variant='outline'>Smart Home</Badge>
                                </div>
                                <CardDescription>Integrated smart home control system</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground'>
                                    Our comprehensive smart home solution integrates lighting, climate, security, and
                                    entertainment systems into a single, user-friendly interface.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant='outline' className='w-full'>
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>

            <div className='mt-16 text-center'>
                <h2 className='text-primary mb-4 text-2xl font-bold'>Have a Project in Mind?</h2>
                <p className='text-muted-foreground mx-auto mb-8 max-w-2xl text-lg'>
                    We're always excited to take on new challenges and create innovative solutions. Let's discuss how we
                    can turn your ideas into reality.
                </p>
                <Button size='lg' className='bg-primary hover:bg-primary/90'>
                    Contact Us Today
                </Button>
            </div>
        </div>
    );
}
