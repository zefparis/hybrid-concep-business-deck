import { useState, useEffect } from 'react';
import {
  CoverSlide,
  MissionSlide,
  ProblemSlide,
  CoreServicesSlide,
  InnovationSlide,
  CognitiveAuthSlide,
  ServicesGridSlide,
  BundlesSlide,
  CaseStudiesSlide,
  CompetitionSlide,
  PricingSlide,
  ImplementationSlide,
  CompanySlide,
  NextStepsSlide,
  ContactSlide,
} from './slides';
import { ProgressBar } from './components';

const slides = [
  { id: '01', component: CoverSlide },
  { id: '02', component: MissionSlide },
  { id: '03', component: ProblemSlide },
  { id: '04', component: CoreServicesSlide },
  { id: '05', component: InnovationSlide },
  { id: '06', component: CognitiveAuthSlide },
  { id: '07', component: ServicesGridSlide },
  { id: '08', component: BundlesSlide },
  { id: '09', component: CaseStudiesSlide },
  { id: '10', component: CompetitionSlide },
  { id: '11', component: PricingSlide },
  { id: '12', component: ImplementationSlide },
  { id: '13', component: CompanySlide },
  { id: '14', component: NextStepsSlide },
  { id: '15', component: ContactSlide },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length));
        const nextSlide = document.getElementById(`slide-${String(Math.min(currentSlide + 1, slides.length)).padStart(2, '0')}`);
        nextSlide?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
        const prevSlide = document.getElementById(`slide-${String(Math.max(currentSlide - 1, 1)).padStart(2, '0')}`);
        prevSlide?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      slides.forEach((slide, index) => {
        const element = document.getElementById(`slide-${slide.id}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSlide(index + 1);
          }
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide]);

  return (
    <div className="bg-neutral-black">
      {slides.map(({ id, component: SlideComponent }) => (
        <SlideComponent key={id} />
      ))}
      <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} />
    </div>
  );
}

export default App;
