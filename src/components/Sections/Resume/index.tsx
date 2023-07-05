import {FC, memo, useContext, useEffect, useState} from 'react';

import {GlobalContext} from '../../../contexts/global_context';
import {SectionId} from '../../../data/data';
import calc_used_langs from '../../../pages/utils/calc_used_langs';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const globalCtx = useContext(GlobalContext);
  const [allLanguages, setAllLanguages] = useState<{[key: string]: number}>({});

  useEffect(() => {
    setAllLanguages(calc_used_langs(globalCtx?.repos!));
  }, []);

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Work">
          {globalCtx?.repos.map((item, index) => (
            <TimelineItem
              item={{
                title: item.name,
                date: item.created_at,
                location: '',
                content: (
                  <div>
                    <p>{item.description!}</p>
                    {Object.keys(item.languages).map(lang => (
                      <p>{lang}</p>
                    ))}
                  </div>
                ),
              }}
              key={`${item.name}-${index}`}
            />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SkillGroup
              skillGroup={{
                name: 'Used Languages',
                skills: Object.keys(allLanguages)
                  .filter(lang => lang !== '_total')
                  .map(lang => {
                    return {
                      name: lang,
                      level: (allLanguages[lang] / allLanguages['_total']) * 100,
                      max: 100,
                    };
                  }),
              }}
            />
            {/* ))} */}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
