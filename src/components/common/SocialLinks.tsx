import { Twitter } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-matrix-purple hover:text-matrix-purple-light transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        aria-label="Twitter/X"
      >
        <Twitter size={20} className="md:w-6 md:h-6" />
        <span className="font-semibold text-sm md:text-base hidden sm:inline">SOCIAL LINKS</span>
      </a>
    </div>
  );
};

export default SocialLinks;
