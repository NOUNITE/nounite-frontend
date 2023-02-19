import React from "react";
import { facebook, twitter, linkedin } from "../../assets/index";

const SocialLinkBtn = () => {
  return (
    <div>
      <div className="flex gap-5 pt-3 lg:pt-0 md:pt-0">
        <div className="cursor-pointer">
          <a href="https://facebook.com/nouniteapp" target="_blank">
            <img src={facebook} />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://twitter.com/nouniteapp" target="_blank">
            <img src={twitter} />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://linkedin.com/company/nouniteapp" target="_blank">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinkBtn;
