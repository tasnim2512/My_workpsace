import Image from 'next/image';

export default function DynamicNote({ icon, label, message, linkText, url, onClose }) {
  return (
    <div className="p-2 rounded-lg text-sm relative transition-opacity duration-500 ease-in-out border border-gray-600 h-[99px]">
      <div className='flex items-center'>
        <Image src={icon} alt="Note Icon" width={10} height={10} />
        <span className="ml-2 font-medium text-xs">{label}</span>
      </div>
      <div className="w-full ml-5 pr-5 mr-2">
        <p className='text-[11px] text-gray-mw-200 leading-[12.1px] py-1'>{message}</p>
        <a href={url} className="text-blue-mw-100 text-xs">{linkText}</a>
      </div>
      <button onClick={onClose} className="absolute top-2 right-2 rounded-full p-1 hover:bg-gray-mw-300 duration-200">
        <Image src="/images/cancel-icon.svg" alt="cancel" width={9} height={9} />
      </button>
    </div>
  );
}
