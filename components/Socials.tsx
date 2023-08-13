import IconTwitter from '@/public/icon-twitter.svg';
import IconInstagram from '@/public/icon-instagram.svg';
import IconDiscord from '@/public/icon-discord.svg';

interface ISocials {
  className?: string;
}

const Socials = ({ className }: ISocials) => (
  <div className={`flex justify-center xl:justify-start ${className}`}>
    <div className="mx-2.5 xl:ml-0">
      <a
        className="link-social"
        href="#"
      >
        <IconTwitter />
      </a>
    </div>
    <div className="mx-2.5">
      <a
        className="link-social"
        href="#"
      >
        <IconInstagram />
      </a>
    </div>
    <div className="mx-2.5">
      <a
        className="link-social"
        href="#"
      >
        <IconDiscord />
      </a>
    </div>
  </div>
);

export default Socials;