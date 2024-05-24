import { Certificate } from '@/@types';
import Image from 'next/image';
import udemy from './../assets/udemy.png';

interface CertificationCardProps {
  certification: Certificate;
  id: number;
  uniqId: number;
}

const CertificationCard = ({
  certification,
  id,
  uniqId,
}: CertificationCardProps) => {
  const { title, issuer, issuerImage, issueDate, certLink } = certification;
  return (
    <>
      <div
        key={uniqId}
        className="transition ease-in-out delay-150 bg-white border border-gray-200 rounded-lg shadow sm:max-w-sm lg:max-w-md dark:bg-neutral-800 dark:border-gray-700 hover:shadow-xl hover:shadow-slate-400  hover:border-dashed hover:dark:bg-neutral-900 hover:bg-slate-100 hover:dark:shadow-slate-500"
      >
        <div className="p-4">
          <div className="flex items-center">
            <div className="p-1 mr-4 text-white bg-white rounded-md dark:bg-white h-18 w-18">
              <Image
                src={udemy}
                alt=""
                className="max-h-xs max-w-xs"
                width={75}
                height={75}
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {issuer}
              </p>
              <p className="font-semibold text-gray-700 dark:text-white">
                {title}
              </p>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Issued {issueDate}
              </p>
              <a href={certLink} target="_blank" rel="noreferrer">
                <button className="mt-2 font-semibold dark:text-white rounded-md border border-slate-500 p-2 hover:dark:border-white hover:border-black">
                  View Certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificationCard;
