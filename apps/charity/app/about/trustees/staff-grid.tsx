'use client';

import {useState} from 'react';
import Image from 'next/image';
import type {DatoTrustee} from '@repo/data/interfaces';
import styles from './staff.module.css';

interface StaffListProps {
  people: DatoTrustee[];
}

export default function StaffGrid({people}: StaffListProps) {
  const [selectedStaff, setSelectedStaff] = useState<DatoTrustee | null>(null);

  return (
    <>
      <div className={'row'}>
        {people.map((trustee) => (
          <button
            key={trustee.name}
            className={styles.card}
            onClick={() => setSelectedStaff(trustee)}
          >
            <Image
              src={trustee.picture.url}
              alt={trustee.picture.alt || trustee.name}
              width={100}
              height={100}
              className={styles.avatarImage}
            />
            <h3>{trustee.name}</h3>
            <p className={styles.role}>{trustee.role}</p>
          </button>
        ))}
      </div>

      {selectedStaff && (
        <div className={styles.modal} onClick={() => setselectedStaff(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setselectedStaff(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalAvatar}>
                {selectedStaff.picture ? (
                  <Image
                    src={selectedStaff.picture.url}
                    alt={selectedStaff.picture.alt || selectedStaff.name}
                    width={120}
                    height={120}
                    className={styles.avatarImage}
                  />
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    {selectedStaff.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h2>{selectedStaff.name}</h2>
                <p className={styles.role}>{selectedStaff.role}</p>
              </div>
            </div>
            <div
              className={styles.modalBio}
              dangerouslySetInnerHTML={{__html: selectedStaff.bio}}
            />
          </div>
        </div>
      )}
    </>
  );
}
