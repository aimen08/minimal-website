import * as React from "react";
import { Page, PageProps } from "gatsby";
import logo from "../images/logo.png";

// styles
// markup
const IndexPage = (props: PageProps) => {
  return (
    <main className="font-inter font-light h-screen bg-bg-pf text-fg-pf">
      <title>Aymen Hamza</title>

      <div className="max-w-screen-md mx-auto my-0 pt-24 pb-0 px-8 ">
        <img src={logo} height={126} width={400}  alt="Logo" />
        <div className="pt-16 pb-4">
          <h1 className="font-extrabold text-fg-pf text-4xl">
            I’m Aymen Hamza,a Software engineer .
          </h1>
          <p className="pt-9 text-2xl">
            Currently I am the Co-founder of software company{" "}
            <span className="text-cl-contact hover:text-cl-linkedin">
              ElFather
            </span>
            .
          </p>

          <p className="pt-9 text-2xl">
            I work mainly on mobile app developemnt using different technologies
            such as <span className="text-cl-github">React Native </span> , JetPack Compose...ect.
            <br />
            Also i do <span className="text-indigo-500">.Net/C#</span> desktop Apps develpment. <br />
            Latly am Doing <span className="text-yellow-300">JavaScript/TypeScript</span>  React related projects Using
            Gatsby SSG.
          </p>
          <div className="pt-11">
          <a href="mailto:aimen_hamza@hotmail.com" className="text-cl-contact text-2xl hover:text-cl-linkedin cursor-pointer">Contact Me</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
