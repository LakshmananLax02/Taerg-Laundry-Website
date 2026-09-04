import HeroScrollSequence from '../Components/HeroScrollVideo';
import AboutUsContent from '../Components/AboutUsContent';

export const metadata = {
  title: 'About Taerg | Taerg Campus Laundry',
  description:
    'Discover how Taerg delivers dependable, fully managed campus laundry infrastructure for students, schools, colleges and universities.',
};

export default function AboutTaergPage() {
  return (
    <>
      <HeroScrollSequence />
      <AboutUsContent />
    </>
  );
}
