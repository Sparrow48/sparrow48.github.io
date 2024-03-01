import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin, BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import Profile from './../assets/Profile.jpg';
import { about } from '../store';
import Image from 'next/image';
import { About } from '@/@types';

export const metadata: Metadata = {
  title: 'Nasib',
};

export default function Home() {
  const { name, jobDescription, company, description, opening }: About = about;

  return (
    <div className="container mx-auto leading-7">
      <div className=" lg:px-4 lg:space-x-5 lg:mt-12 flex lg:flex-row flex-col-reverse dark:text-white lg:text-left">
        <div className="lg:pr-16 px-2 lg:px-0">
          <span className=" text-5xl font-medium">Hey there,</span>
          <p className="mt-6">
            I'm <span className=" font-semibold ">{name}</span>,{' '}
            {jobDescription}{' '}
            <a
              href={company.link}
              target="_blank"
              rel="noreferrer"
              className={
                'transition-colors hover:text-yellow-500 font-semibold'
              }
            >
              {company.name}
            </a>
          </p>
          <p className="mt-6">{description}</p>
          <p className="mt-6">{opening}</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center ">
            <Image
              src={Profile}
              alt="Profile"
              width={300}
              height={300}
              className=" rounded-md"
            />
          </div>
          <div className="mt-10 flex w-auto justify-center mb-10 lg:justify-start">
            <Link
              href={'https://github.com/Sparrow48'}
              className=" py-2 px-4 bg-gray-400 rounded-md text-2xl"
              target="_blank"
            >
              <BsGithub />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/nasib48/'}
              className=" ml-2 py-2 px-4 bg-gray-400 rounded-md text-2xl"
              target="_blank"
            >
              <BsLinkedin />
            </Link>
            <Link
              href={'mailto: abunasib.talks@gmail.com'}
              className=" ml-2 py-2 px-4 bg-gray-400 rounded-md text-2xl"
              target="_blank"
            >
              <SiGmail />
            </Link>
            <Link
              href={
                'https://drive.google.com/file/d/1hjJzyrRfCEVbgKJyGjYdfUsx797XflJs/view?usp=sharing'
              }
              className=" ml-2 py-2 px-4 bg-gray-400 rounded-md text-2xl"
              target="_blank"
            >
              <BsFillFileEarmarkPdfFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
