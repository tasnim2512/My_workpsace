"use client";
import Image from 'next/image';

export default function StatusIcon({ status }) {
   // by deafault status icon is open
  let iconSrc = '/images/open.svg'; 

  if (status === 'open') {
    iconSrc = '/images/open-icon.svg';
  }

  return <Image src={iconSrc} alt={`${status} Status`} width={12.25} height={12.25} />;
}
