import * as React from "react";
import { Page, PageProps } from "gatsby";
//@ts-ignore
import logo from "../images/logo.png";
//@ts-ignore
import favicon from "../images/favicon.png"
import {BsGithub,BsLinkedin} from "react-icons/bs"
import { Helmet } from "react-helmet"

// styles
// markup
const IndexPage = (props: PageProps) => {
  return (
    <main className="font-light h-screen bg-bg-pf text-fg-pf">
      <Helmet title="Aymen Hamza" defer={false}
       link={[
      { rel: 'icon', type: 'image/png', href:favicon }
  ]}
      />
      

      <div className="max-w-screen-md mx-auto my-0 pt-24 pb-0 px-8 ">
        <img src={logo} height={126} width={400}  alt="Logo" />
        <div className="pt-16 pb-4">
          <h1 className=" text-fg-pf text-4xl font-extrabold ">
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
            Also i do <span className="text-indigo-500">.Net/C#</span> desktop Apps development. <br />
            Latly am Doing <span className="text-yellow-300">JavaScript/TypeScript</span>  React related projects Using
            Gatsby SSG.
          </p>
          <div className="pt-5 flex space-x-5 flex-row">
          <a href="https://github.com/aimen08">
          <BsGithub  className="hover:text-cl-github" size={40}/>
          </a>
          <a href="https://www.linkedin.com/in/aimen-hamza/">
          <BsLinkedin className="hover:text-cl-linkedin" size={40}/>
          </a>
          </div>
          <div className="pt-6">
          <a href="mailto:aimen_hamza@hotmail.com" className="text-cl-contact text-2xl hover:text-cl-linkedin cursor-pointer">Contact Me</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
