// eslint-disable-next-line no-unused-vars
import React from "react";

const FeatureBlock = () => {
  return (
    <div className="feature-block type-a">
      <div className="container flex">
        <div className="video-box w-1/2">
          <video className="video dark" autoPlay muted loop playsInline>
            <source
              src="https://mega.io/wp-content/uploads/2023/01/Home-safebox-1.webm"
              type="video/webm"
            />
            <source
              src="https://mega.io/wp-content/uploads/2023/01/Home-safebox-1.webm"
              type="video/quicktime"
            />
          </video>
        </div>

        <div className="text-pane w-1/2">
          <h3 className="text-5xl font-bold text-white mb-4 mt-10">
            Be in control of your data
          </h3>
          <p className="blurb text-white text-lg mb-6">
            store and access data in a secure and private way. Via
            decentralization, which means that data is not in the control of
            governments and other centralized organizations. Also the use of
            encryption ensures the protection of your data, This means that your
            data is scrambled so that it cannot be read by anyone who does not
            have the encryption key, And lastly via transparency, you can see
            who is storing your data and where it is stored. If you are looking
            a for a more secure and private way to store your data, SyncVault is
            a great option.
          </p>
          <a
            className="text-button lg text-white underline"
            href="about"
            aria-label=""
          >
            Learn more{" "}
            <span
              className="icon after arrow-right"
              role="img"
              aria-label="arrow"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
