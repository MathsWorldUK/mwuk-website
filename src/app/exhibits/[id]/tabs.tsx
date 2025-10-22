'use client';

import {markdown} from '@/app/shared/utilities';
import {DatoExhibit} from '@/lib/interfaces';
import {useState} from 'react';
import styles from './tabs.module.css';
import S1Icon from '@/app/shared/icons/s1.svg';
import S2Icon from '@/app/shared/icons/s2.svg';
import S3Icon from '@/app/shared/icons/s3.svg';

function TabBody({exhibit, tab}: {exhibit: DatoExhibit, tab: number}) {
  switch (tab) {
    case 0:
      return (<div>
        <div className={styles.tasks + ' md'}>
          <div><S1Icon/> {exhibit.taskEasy}</div>
          <div><S2Icon/> {exhibit.taskIntermediate}</div>
          <div><S3Icon/> {exhibit.taskAdvanced}</div>
        </div>
        <div className={'md'} dangerouslySetInnerHTML={{__html: markdown(exhibit.description)}} />
      </div>)
    case 1:
      return <div className={'md'} dangerouslySetInnerHTML={{__html: markdown(exhibit.applications)}} />
    case 2:
      const html = markdown(exhibit.history + '\n\n' + exhibit.people);
      return <div className={'md'} dangerouslySetInnerHTML={{__html: html}} />
    case 3:
      return <div className={'md'} dangerouslySetInnerHTML={{__html: markdown(exhibit.mathsAtHome)}} />
  }
}

const tabs = ['Description', 'Applications', 'History', 'At Home']

export default function ExhibitTabs({exhibit}: {exhibit: DatoExhibit}) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div className={styles.tabBar}>
        {tabs.map((tab, i) =>
          <button key={i} className={activeTab === i ? styles.active : ''}
                  onClick={() => setActiveTab(i)}>{tab}</button>)}
      </div>
      <TabBody exhibit={exhibit} tab={activeTab}/>
    </div>
  );
}
