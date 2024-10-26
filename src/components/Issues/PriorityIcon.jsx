"use client";
import Image from 'next/image';

export default function PriorityIcon({ priority }) {
  // by deafault priority icon is lowest
  let iconSrc = '/images/lowest-priority-icon.svg'; 

  switch (priority) {
    case 'warning':
      iconSrc = '/images/warning-icon.svg';
      break;
    case 'high':
      iconSrc = '/images/high-priority-icon.svg';
      break;
    case 'medium':
      iconSrc = '/images/medium-priority-icon.svg';
      break;
    case 'low':
      iconSrc = '/images/low-priority-icon.svg';
      break;
    default:
      iconSrc = '/images/lowest-priority-icon.svg';
  }

  return <Image src={iconSrc} alt={`${priority} Priority`} width={16} height={16} />;
}
