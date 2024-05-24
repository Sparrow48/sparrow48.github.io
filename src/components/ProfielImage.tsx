'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ProfileImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  initialScale: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  width,
  height,
  initialScale,
}) => {
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const scaleImage = async () => {
      setLoaded(true);
      await controls.start({ scale: 1, transition: { duration: 1 } });
    };

    scaleImage();
  }, []);

  return (
    <motion.div
      className="flex justify-center"
      animate={controls}
      initial={{ scale: 0.25 }}
    >
      {loaded && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-md"
        />
      )}
    </motion.div>
  );
};

export default ProfileImage;
