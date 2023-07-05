import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useContext} from 'react';

import {MapIcon} from '@heroicons/react/24/outline';
import {GlobalContext} from '../../contexts/global_context';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const globalCtx = useContext(GlobalContext);

  const aboutItems = [{label: 'Location', text: globalCtx?.gitUserMeta.location, Icon: MapIcon}];

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!globalCtx?.gitUserMeta.avatar_url})}>
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
            <Image
              alt="about-me-image"
              className="h-full w-full object-cover"
              src={globalCtx?.gitUserMeta.avatar_url!}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div
          className={classNames('col-span-1 flex flex-col gap-y-6', {
            'md:col-span-3': !!globalCtx?.gitUserMeta.avatar_url,
          })}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{globalCtx?.gitUserMeta.bio}</p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
