// eslint-disable-next-line no-unused-vars
import React from "react";

const ShareFiles = () => {
  return (
    <div className="feature-block type-a">
      <div className="container flex">
        <div className="text-pane w-1/2">
          <h3 className="text-5xl font-bold text-white mb-4 mt-10">
            Share files and folders with anyone
          </h3>
          <p className="blurb text-white text-lg mb-6">
            Easily share your files and folders with friends and colleagues on
            SyncVault, share even to people without SyncVault accounts. And the
            good thing is that even when sharing, you are still in control of
            your data. You can give people read-only or full access to your
            folders, and can set a password or create expiring links.
          </p>
          <a
            className="text-button lg text-white underline"
            href="about"
            aria-label=""
          >
            Our Plans{" "}
            <span
              className="icon after arrow-right"
              role="img"
              aria-label="arrow"
            ></span>
          </a>
        </div>

        <div className="video-box w-1/2">
          <video className="video dark" autoPlay muted loop playsInline>
            <source
              src="https://mega.io/wp-content/uploads/2023/01/Home-files-sharing-1.webm"
              type="video/webm"
            />
            <source
              src="https://mega.io/wp-content/uploads/2023/01/Home-files-sharing-1.webm"
              type="video/quicktime"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ShareFiles;
