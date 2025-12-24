import React from 'react';
import { Slide, CaseStudyCard } from '../components';
import { caseStudies } from '../lib/data';

export const CaseStudiesSlide: React.FC = () => {
  return (
    <Slide
      id="09"
      title="Success Stories"
      subtitle="Real results from organizations across sectors"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              industry={study.industry}
              type={study.type}
              challenge={study.challenge}
              solution={study.solution}
              results={study.results}
              quote={study.quote}
              role={study.role}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
};
