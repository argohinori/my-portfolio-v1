// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiGitlabLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.instagram.com/argohinori/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/argo.hinori/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={"https://github.com/argohinori"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://gitlab.com/tetukohanurogo"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGitlabLine />
      </Link>
    </div>
  );
};

export default Socials;
