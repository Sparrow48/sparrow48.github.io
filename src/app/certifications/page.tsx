import { Certificate } from '@/@types';
import CertificationCard from '@/components/CertificationCard';
import { certificates } from '@/store';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Certifications',
};

const Certificates = () => {
  const renderedCertificate = certificates.map(
    (certification: Certificate, index) => (
      <CertificationCard
        key={index}
        uniqId={index}
        id={index}
        certification={certification}
      />
    )
  );
  return (
    <>
      <section className="px-4 mb-10 mt-20 text-left">
        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left mb-12">
          Certification
        </h1>
        {/* Mooc course certificates */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2">
          {renderedCertificate}
        </div>
      </section>
    </>
  );
};

export default Certificates;
