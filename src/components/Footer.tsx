import Link from 'next/link';

const Footer = () => {
  return (
    <div className=" border-t-2 mt-12">
      <div className="flex flex-col lg:flex-row lg:px-4 justify-center items-center pt-3 lg:justify-between pb-2">
        <div>
          <p>
            Design has been adopted from{' '}
            <a
              className=" font-medium hover:text-yellow-400"
              href={'https://github.com/caffeines'}
              target="_blank"
            >
              Caffeines
            </a>
          </p>
        </div>
        <div className="flex gap-4 ">
          <Link
            className=" hover:text-yellow-400"
            href={'https://github.com/Sparrow48'}
            target="_blank"
          >
            Github
          </Link>
          <Link
            className=" hover:text-yellow-400"
            href={'https://www.linkedin.com/in/nasib48/'}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className=" hover:text-yellow-400"
            href={
              'https://drive.google.com/file/d/1NuqrAcH9noaDWXTLmeasFcKYAi53Lw_K/view?usp=sharing'
            }
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
