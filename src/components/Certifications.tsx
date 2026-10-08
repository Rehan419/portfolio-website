import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { CertificateCard } from './CertificateCard';
import { certificates } from '../data/certificates';

export const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 4);

  return (
    <section id="certifications" className="pt-12 scroll-mt-20">
      <SectionHeader
        icon={Award}
        title="Certifications"
        badge={certificates.length}
        actionText={showAll ? "Show Less" : "View All"}
        onActionClick={() => setShowAll(!showAll)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedCertificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
};
