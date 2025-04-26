import ContactSection from '@/components/contact-section';
import HeroBanner from '@/components/hero-banner';
import ProjectsSection from '@/components/projects-section';
import ServicesSection from '@/components/services-section';
import TestimonialsSection from '@/components/testimonials-section';

export default function Home() {
    return (
        <div className='flex w-full flex-col'>
            <HeroBanner />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
}
