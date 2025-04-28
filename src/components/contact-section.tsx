'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';

// Changed to import from sonner
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.'
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.'
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.'
    })
});

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log(values);
            // Changed to sonner toast format
            toast.success('Message sent!', {
                description: "We'll get back to you as soon as possible."
            });
            form.reset();
            setIsSubmitting(false);
        }, 1500);
    }

    return (
        <section id='contact' className='bg-muted/30 py-20'>
            {/* Rest of the component remains the same */}
            <div className='container mx-auto px-4'>
                <div className='reveal mb-16 text-center'>
                    <h2 className='text-destructive mb-4 text-3xl font-bold md:text-4xl'>Contact Us</h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
                        Have a question or want to discuss a project? Get in touch with our team.
                    </p>
                </div>

                <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-2'>
                    <div className='reveal'>
                        <div className='bg-card rounded-lg p-8 shadow-lg'>
                            <h3 className='mb-6 text-2xl font-bold'>Send Us a Message</h3>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                                    <FormField
                                        control={form.control}
                                        name='name'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Your name' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Your email' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='message'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder='Your message'
                                                        className='min-h-[120px]'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type='submit'
                                        className='bg-primary hover:bg-primary/90 w-full'
                                        disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <span className='flex items-center'>
                                                <svg
                                                    className='mr-3 -ml-1 h-5 w-5 animate-spin text-white'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'>
                                                    <circle
                                                        className='opacity-25'
                                                        cx='12'
                                                        cy='12'
                                                        r='10'
                                                        stroke='currentColor'
                                                        strokeWidth='4'></circle>
                                                    <path
                                                        className='opacity-75'
                                                        fill='currentColor'
                                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className='flex items-center'>
                                                Send Message
                                                <Send className='ml-2 h-4 w-4' />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>

                    <div className='reveal'>
                        <div className='bg-card h-full rounded-lg p-8 shadow-lg'>
                            <h3 className='mb-6 text-2xl font-bold'>Contact Information</h3>

                            <div className='space-y-6'>
                                <div className='flex items-start'>
                                    <div className='bg-primary/10 mr-4 rounded-full p-3'>
                                        <MapPin className='text-primary h-6 w-6' />
                                    </div>
                                    <div>
                                        <h4 className='mb-1 text-lg font-bold'>Our Location</h4>
                                        <p className='text-muted-foreground'>Monastir, Tunisia</p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='bg-primary/10 mr-4 rounded-full p-3'>
                                        <Mail className='text-primary h-6 w-6' />
                                    </div>
                                    <div>
                                        <h4 className='mb-1 text-lg font-bold'>Email Us</h4>
                                        <p className='text-muted-foreground'>contact.yohatech@gmail.com</p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='bg-primary/10 mr-4 rounded-full p-3'>
                                        <Phone className='text-primary h-6 w-6' />
                                    </div>
                                    <div>
                                        <h4 className='mb-1 text-lg font-bold'>Call Us</h4>
                                        <p className='text-muted-foreground'>+216 96 822 290</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-10'>
                                <h4 className='mb-4 text-lg font-bold'>Business Hours</h4>
                                <ul className='text-muted-foreground space-y-2'>
                                    <li className='flex justify-between'>
                                        <span>Monday - Friday:</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className='flex justify-between'>
                                        <span>Saturday:</span>
                                        <span>10:00 AM - 2:00 PM</span>
                                    </li>
                                    <li className='flex justify-between'>
                                        <span>Sunday:</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
