import React,{useState} from "react";
import { Page, PageProps } from "gatsby";
//@ts-ignore
import logo from "../images/logo.png";
//@ts-ignore
import favicon from "../images/favicon.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Helmet } from "react-helmet";
import Particles from "react-particles-js";
import CardItem from "../components/CardItem";

import first from "../images/1.png";
import second from "../images/2.png";
import third from "../images/3.png";
import forth from "../images/4.png";
import fifth from "../images/5.png";
import sixth from "../images/6.png";
import cv from "../content/cv.pdf"



// styles
// markup
const IndexPage = (props: PageProps) => {
  const [page,setPage] = useState(false);

  return (
    <main className="font-light h-full  text-fg-pf">
      <Helmet
        title="Aymen Hamza"
        defer={false}
        link={[{ rel: "icon", type: "image/png", href: favicon }]}
      />
    



      <Particles
        className="h-full fixed inset-0"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

     <div className="navbar mb-2 shadow-lg  text-neutral-content rounded-3xl z-10 absolute top-2 right-4 left-4 bg-bg-pf border-2 border-opacity-20 opacity-90">
  <div className="px-2 mx-2 navbar-start">
    <span className="text-lg font-bold">
            Aymen Hamza
          </span>
  </div> 
  <div className="hidden px-2 mx-2 navbar-center lg:flex">
    <div className="flex items-stretch">
      <a className="btn btn-ghost btn-sm rounded-btn" onClick={()=>setPage(false)}>
              Home
            </a> 
      <a className="btn btn-ghost btn-sm rounded-btn" onClick={()=>setPage(true)}>
              Portfolio
            </a> 
      <a href={cv} className="btn btn-ghost btn-sm rounded-btn">
              Resume
            </a> 
    </div>
  </div> 
  <div className="navbar-end">
<div className="dropdown dropdown-end">
  <button tabIndex="0" className="btn btn-square btn-ghost lg:hidden">
    <img src="https://img.icons8.com/material-rounded/24/ffffff/menu--v1.png"/>
    </button> 
  <ul tabindex="0" className="p-2 shadow menu dropdown-content  rounded-box w-52 bg-bg-pf border-2">
    <li>
      <a className="btn btn-ghost  btn-sm rounded-btn " onClick={()=>setPage(false)}>
              Home
            </a> 
    </li> 
    <li>
      <a className="btn btn-ghost btn-sm rounded-btn" onClick={()=>setPage(true)}>
              Portfolio
            </a> 
    </li> 
    <li>
        <a href={cv} className="btn btn-ghost btn-sm rounded-btn">
              Resume
            </a> 
    </li>
  </ul>
</div>

    
  </div>
</div>
   

      <div className="max-w-screen-xl mx-auto mt-32 pt-24 pb-0 px-8 absolute inset-0">
        
        {/* First Page */}
        {!page &&
          <div className="animate-fade-in-up">
        <img src={logo} height={126} width={400} alt="Logo" />
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
            such as <span className="text-cl-github">React Native </span> ,
            JetPack Compose...ect.
            <br />
            Also i do <span className="text-indigo-500">.Net/C#</span> desktop
            Apps development. <br />
            lately i'm doing{" "}
            <span className="text-yellow-300">JavaScript/TypeScript</span> React
            related projects using Gatsby SSG.
          </p>
          <div className="pt-5 flex space-x-5 flex-row">
            <a href="https://github.com/aimen08">
              <BsGithub className="hover:text-cl-github" size={40} />
            </a>
            <a href="https://www.linkedin.com/in/aimen-hamza/">
              <BsLinkedin className="hover:text-cl-linkedin" size={40} />
            </a>
          </div>
          <div className="pt-6">
            <a 
              href="mailto:aimen_hamza@hotmail.com"
              className="text-cl-contact text-2xl hover:text-cl-linkedin cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
        </div>}

        {/* Second Page  */}
       
         
        {/* <h1 className="text-center mt-36 text-4xl font-semibold">My Work</h1> */}
          {page &&
          
        <div className=" animate-fade-in-up  flex flex-wrap   justify-center	 mb-32">
          <CardItem
           
            img={first}
            tag={".Net/C#"}
            title={"Doctor Management System"}
            logo={
              "https://img.icons8.com/ios-filled/50/ffffff/c-sharp-logo.png"
            }
            disc={
              "Doctor office software ensuring Automated Appointment Booking,100% Quality Monitoring, and has Multi-Language Support."
            }
            tech={{
              item1: "Windows Presentation Foundation",
              item2: "MySQL",
              item3: "XAML (MVVM)",
            }}
          />

          <CardItem
          
            img={second}
            tag={".Net/C#"}
            title={"Queue Management System"}
            logo={
              "https://img.icons8.com/ios-filled/50/ffffff/c-sharp-logo.png"
            }
            disc={
              "Solution to manage patient reception, triage, queuing and interaction. Hassle-free installation and maintenance."
            }
            tech={{
              item1: "Windows Presentation Foundation",
              item2: "MySQL",
              item3: "XAML (MVVM)",
            }}
          />

          <CardItem
      
            img={third}
            tag={"Android/Java"}
            title={"Library Mobile App"}
            logo={
              "https://img.icons8.com/ios/50/ffffff/java-coffee-cup-logo--v1.png"
            }
            disc={
              "With this Mobile App you can check the availability of any book in my university (Tahri Mouhammed Bechar)."
            }
            tech={{
              item1: "Android Sdk",
              item2: "Firebase",
              item3: "XML (View system)",
            }}
          />
          <CardItem
    
            img={forth}
            tag={"Android/Java"}
            title={"Supermarket Mobile app"}
            logo={
              "https://img.icons8.com/ios/50/ffffff/java-coffee-cup-logo--v1.png"
            }
            disc={
              "This App provide users with a list of multiple supermarkets in my city and order them using GPS and distance. "
            }
            tech={{
              item1: "Android Sdk",
              item2: "Firebase",
              item3: "XML (View system)",
            }}
          />
          <CardItem

            img={fifth}
            tag={"React Native/JS"}
            title={"Delivery food Mobile App"}
            logo={"https://img.icons8.com/ios/50/ffffff/react-native--v1.png"}
            disc={
              "This is my first cross platform production level mobile app using React Native.the app is shop/delivry handeling customer orders and delivery workers ."
            }
            tech={{
              item1: "Expo",
              item2: "Firebase",
              item3: "Styled components",
            }}
          />


          <CardItem
  
            img={sixth}
            tag={"Android/Kotlin"}
            title={"Fashion Store Mobile App"}
            logo={"https://img.icons8.com/ios-filled/50/ffffff/kotlin.png"}
            disc={
              "This App is fashion mobile app using The reactive android Framework Jetpack Compose.the app uses multiple Jetpack Libraries and implements MVVM"
            }
            tech={{
              item1: "Jetpack Compose",
              item2: "Firebase",
              item3: "Composables",
            }}
          />
         </div>
        }




          {/* <p className="flex justify-center font-semibold">
          Made with &nbsp;
          <img src="https://img.icons8.com/material-outlined/24/ffffff/filled-like.png" alt="love" height={24} width={24}/>
          &nbsp;
           by &nbsp; <a className="hover:text-yellow-300" href="https://www.aymenhamza.com/">Aymen Hamza</a>
        </p>
        <div className="h-1"></div>  */}
      </div>
       
    
    </main>
  );
};

export default IndexPage;
