import IconPhone from '@/public/icon-phone.svg';
import IconEmail from '@/public/icon-email.svg';
import IconLocation from '@/public/icon-location.svg';

interface IContacts {
  className?: string;
}

const Contacts = ({ className }: IContacts) => (
  <div className={`text-xs xl:text-base text-center md:text-left text-white ${className}`}>
    <div className="md:flex md:items-center md:mb-5">
      <div className="mb-2.5 md:mb-0 md:mr-6">
        <IconPhone className="inline-block text-white w-6 h-6" />
      </div>
      <div className="mb-4 md:mb-0">
        +1012 3456 789
      </div>
    </div>
    <div className="md:flex md:items-center md:mb-5">
      <div className="mb-2.5 md:mb-0 md:mr-6">
        <IconEmail className="inline-block text-white w-6 h-6" />
      </div>
      <div className="mb-4 md:mb-0">
        demo@gmail.com
      </div>
    </div>
    <div className="md:flex md:items-center md:mb-5">
      <div className="mb-2.5 md:mb-0 md:mr-6">
        <IconLocation className="inline-block text-white w-6 h-6" />
      </div>
      <div className="mb-4 md:mb-0">
        132 Dartmouth Street Boston,<br/>
        Massachusetts 02156 United States
      </div>
    </div>
  </div>
);

export default Contacts;