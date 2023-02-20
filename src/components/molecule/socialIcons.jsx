import { facebook, twitter, linkedin } from "../../assets/index";

export default function SocialIcons() {
  return (
    <div className=" flex  items-center gap-5 pt-3 lg:pt-0 md:pt-0">
      <div className="cursor-pointer border border-textHover border-solid rounded-[100%] py-3 px-4">
        <a href="https://facebook.com/nouniteapp" target="_blank">
          <img src={facebook} />
        </a>
      </div>
      <div className="cursor-pointer border border-textHover border-solid rounded-[100%] py-3 px-3">
        <a href="https://twitter.com/nouniteapp" target="_blank">
          <img src={twitter} />
        </a>
      </div>
      <div className="cursor-pointer border border-textHover border-solid rounded-[100%] py-3 px-3">
        <a href="https://linkedin.com/company/nouniteapp" target="_blank">
          <img src={linkedin} />
        </a>
      </div>
    </div>
  );
}
