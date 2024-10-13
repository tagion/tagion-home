import React from "react";

import { ContributorsTypeName } from "../common/enums";

import TheisSimonsen from "../assets/images/contributors/Theis_Simonsen.png";
import KristianVestergaard from "../assets/images/contributors/Kristian_Vestergaard.png";
import CarstenRamussen from "../assets/images/contributors/Carsten_Ramussen.png";
/*
import JonasLodahl from "../assets/images/contributors/Jonas Lodahl.png";
import AlexBohdanov from "../assets/images/contributors/Alex_Bohdanov.png";
import MaximSpiridonov from "../assets/images/contributors/Maxim_Spiridonov.png";
import AntonLabenskiy from "../assets/images/contributors/Anton_Labenskiy.png";
import LeifRasmussen from "../assets/images/contributors/Leif Rasmussen.png";
import PhilipRying from "../assets/images/contributors/Philip-Rying.png";
import RostyslavSmikh from "../assets/images/contributors/Rostyslav_Smikh.png";
import YuryVuntesmery from "../assets/images/contributors/Yury-Vuntesmery.png";
import DaniilDavydov from "../assets/images/contributors/Daniil_Davydov.png";
import SteffenPetersen from "../assets/images/contributors/Steffen_Petersen.png";
import YuliaDrozdyk from "../assets/images/contributors/Yulia_Drozdyk.png";
import DanielleTichner from "../assets/images/contributors/Danielle Tichner.png";
import TimSimonsen from "../assets/images/contributors/Tim_Simonsen.png";
import DennisMeldhedegaardNielsen from "../assets/images/contributors/Dennis_Meldhedegaard_Nielsen.png";
*/
export const contributorsBlockData = [
  {
    portrait: TheisSimonsen,
    name: (
      <>
        Theis
        <br />
        Simonsen
      </>
    ),
    label: "Co-founder",
    type: ContributorsTypeName.CO_FOUNDERS,
    description:
      "IT Advisor for Ørsted Denmark, Senior Consultant KPMG, External Lecturer at Copenhagen Business School, MSc in IT from IT University Copenhagen.",
    linkedinLink: "https://www.linkedin.com/in/theis-simonsen-32035313/ ",
  },
  {
    portrait: KristianVestergaard,
    name: (
      <>
        Kristian <br />
        Vestergaard
      </>
    ),
    label: "Co-founder",
    type: ContributorsTypeName.CO_FOUNDERS,
    description:
      "Experienced Entreprise Architect with 20+ years experience leading digital strategy, driving innovation and integrating M&A targets. Former Director of Digital Architecture at GN Audio A/S.",
    linkedinLink: "https://www.linkedin.com/in/kbvestergaard/",
  },
  {
    portrait: CarstenRamussen,
    name: (
      <>
        Carsten <br />
        Rasmussen
      </>
    ),
    label: "Co-founder",
    type: ContributorsTypeName.CO_FOUNDERS,
    description:
      "Systems Engineer specialising in hardware cryptography and security. 20+ years of experience in systems engineering, programming and ASIC design. Co-founder/ CTO at Polaric Semiconductor.",
    linkedinLink:
      "https://www.linkedin.com/in/carsten-bleser-rasmussen-80699915/",
  }
  /*
  ,  
  {
    portrait: JonasLodahl,
    name: (
      <>
        Jonas
        <br />
        Lodahl
      </>
    ),
    label: "Economic contributor",
    type: ContributorsTypeName.ECONOMIC_CONTRIBUTORS,
    description:
      "Skilled professional with substantial experience and expertise in the domain of issuing tokenised securities at DigiShares. Hold deep knowledge of financial instruments and monetary systems",
    linkedinLink: "https://www.linkedin.com/in/jonaslodahl/",
  },  
  {
    portrait: LeifRasmussen,
    name: (
      <>
        Leif
        <br />
        Rasmussen
      </>
    ),
    label: "Governance contributor",
    type: ContributorsTypeName.GOVERNANCE_CONTRIBUTORS,
    description:
      "Associate Professor at Copenhagen Business School. His primary research areas include Complexity and Cooperative Innovation, Knowledge as a Commons, and Design of Inquiring Systems.",
    linkedinLink: "https://www.linkedin.com/in/leif-bloch-rasmussen-38663a4/",
  },
  {
    portrait: AlexBohdanov,
    name: (
      <>
        Alex
        <br />
        Bogdanov
      </>
    ),
    label: "Technology contributor",
    type: ContributorsTypeName.TECHNOLOGY_CONTRIBUTORS,
    description:
      "Core Developer. Enthusiastic software developer. Sets efficient work and team performance as the highest priority. Leads application team to deliver outstanding user-focused products.",
    linkedinLink: "https://www.linkedin.com/in/aleksandr-bohdanov/",
  },  
  {
    portrait: MaximSpiridonov,
    name: (
      <>
        Maksym
        <br />
        Spiridonov
      </>
    ),
    label: "Technology contributor",
    type: ContributorsTypeName.TECHNOLOGY_CONTRIBUTORS,
    description:
      "Mobile Developer. Flutter developer with flair for crypto. Code and finance specialist. Makes complicated things simple.",
    linkedinLink: "https://www.linkedin.com/in/m-spiridon/",
  },
  {
    portrait: AntonLabenskiy,
    name: (
      <>
        Anton
        <br />
        Labenskiy
      </>
    ),
    label: "Technology contributor",
    type: ContributorsTypeName.TECHNOLOGY_CONTRIBUTORS,
    description:
      "Mobile Lead Developer. 5 years of experience developing various mobile products.",
    linkedinLink: "https://www.linkedin.com/in/labenskiyantondev",
  },
  {
    portrait: PhilipRying,
    name: (
      <>
        Phillip
        <br />
        Rying
      </>
    ),
    label: "Technology contributor",
    type: ContributorsTypeName.TECHNOLOGY_CONTRIBUTORS,
    description:
      "Software Engineer and Core Developer. Specialises in elliptic curve cryptography. Loves maths and computer science.",
    linkedinLink: "https://www.linkedin.com/in/philip-rying/",
  },
  {
    portrait: RostyslavSmikh,
    name: (
      <>
        Rostyslav
        <br />
        Smikh
      </>
    ),
    label: "Technology contributor",
    type: ContributorsTypeName.TECHNOLOGY_CONTRIBUTORS,
    description:
      "MSc in Cybersecurity, Full stack developer, specialicing in multiple coding languages and systems. Former React developmener with technical versatility.",
    linkedinLink: "https://www.linkedin.com/in/rostik-smikh/",
  },
  {
    portrait: YuryVuntesmery,
    name: (
      <>
        Yuriy
        <br />
        Vountesmery
      </>
    ),
    label: "Technology contributor",
    type: ContributorsTypeName.TECHNOLOGY_CONTRIBUTORS,
    description:
      "PhD in Solidstate Electronics, Associate Professor at National Technical University of Ukraine, Chief Software Architect at Video Internet Technologies with experience as CTO in various tech companies.",
    linkedinLink: "https://www.linkedin.com/in/yvountesmery/",
  },
  {
    portrait: DaniilDavydov,
    name: (
      <>
        Daniil
        <br />
        Davydov
      </>
    ),
    label: "Technology contributor",
    type: ContributorsTypeName.TECHNOLOGY_CONTRIBUTORS,
    description:
      "QA Engineer. Started his career with the Tagion project. Main goal is to provide the best quality product.",
    linkedinLink: "https://www.linkedin.com/in/daniil-davydov-37a976239/",
  },
  {
    portrait: SteffenPetersen,
    name: (
      <>
        Steffen Nyholt
        <br />
        Petersen
      </>
    ),
    label: "Creative contributor",
    type: ContributorsTypeName.CREATIVE_CONTRIBUTORS,
    description:
      "Digital Director at Mindshare Denmark, Group M. Created award-winning strategies for SAS, Ford, Heineken and PepsiCo. MSc Economic Marketing from Copenhagen Business School",
    linkedinLink:
      "https://www.linkedin.com/in/steffen-nyholt-petersen-35852239/",
  },
  {
    portrait: YuliaDrozdyk,
    name: (
      <>
        Yulia
        <br />
        Drozdyk
      </>
    ),
    label: "Creative contributor",
    type: ContributorsTypeName.CREATIVE_CONTRIBUTORS,
    description:
      "Product and graphic designer responsible for the aesthetic rebranding of Tagion.",
    linkedinLink: "https://www.linkedin.com/in/yulia-drozdyk-33661716a/",
  },
  {
    portrait: DanielleTichner,
    name: (
      <>
        Danielle
        <br />
        Tichner
      </>
    ),
    label: "Advisor",
    type: ContributorsTypeName.ADVISORS,
    description:
      "CEO and Founder at W-Source. Venture Parntner at R3I Ventures. Specialist in strategy and investment management consulting.",
    linkedinLink: "https://www.linkedin.com/in/danielletichner/",
  },
  {
    portrait: DennisMeldhedegaardNielsen,
    name: (
      <>
        Dennis Meldhedegaard-
        <br />
        Nielsen
      </>
    ),
    label: "Advisor",
    type: ContributorsTypeName.ADVISORS,
    description:
      "Passionate entrepreneur with 20+ technology companies. Chairman of various European tech firms. 25 years consulting experience in strategy, corporate development, and technical solutions.",
    linkedinLink: "https://www.linkedin.com/in/denielsen/",
  },
  {
    portrait: TimSimonsen,
    name: (
      <>
        Tim
        <br />
        Simonsen
      </>
    ),
    label: "Ambassador",
    type: ContributorsTypeName.AMBASSADORS,
    description:
      "Investor Relations specialist. Experienced Chief Engineer with management, marine engineering, business strategy, and project planning skills.",
    linkedinLink: "https://www.linkedin.com/in/tim-simonsen-a16aa6139/",
  },
  */
];
