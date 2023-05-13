// eslint-disable-next-line no-unused-vars
import React from "react";

const FeatureBlock = () => {
  return (
    <div className="feature-block type-a">
      <div className="container flex">
        <div className="text-pane w-1/2">
          <h3 className="text-5xl font-bold text-white mb-4 mt-10">
            Be in control of your data</h3>
          <p className="blurb text-white text-lg mb-6">
            Whether it&#8217;s giving people limited or full access to files you share with them or preventing new group chat members from reading old messages, your data is in your hands. That&#8217;s our number one promise to you.
          </p>
          <a
            className="text-button lg text-white underline"
            href="about"
            aria-label=""
          >
            Learn more <span className="icon after arrow-right" role="img" aria-label="arrow"></span>
          </a>
        </div>
        <div className="video-box">
          <video className="video dark" autoPlay muted loop playsInline>
            <source src="https://mega.io/wp-content/uploads/2023/01/Home-safebox-1.webm" type="video/webm" />
            <source src="https://mega.io/wp-content/uploads/2023/01/Home-safebox-1.webm" type="video/quicktime" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
