import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
            <h1 className='text-primary mb-4 text-6xl font-bold'>404</h1>
            <h2 className='mb-6 text-2xl font-semibold'>Page Not Found</h2>
            <p className='text-muted-foreground mb-8 max-w-md'>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link href='/'>
                <Button className='bg-primary hover:bg-primary/90'>Return to Home</Button>
            </Link>
        </div>
    );
}
