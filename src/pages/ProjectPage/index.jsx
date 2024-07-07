import React, { useEffect }  from "react";

import { Button,  Img, Input, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component15 from "newComponents/Component15";

const ProjectPage = ({projects}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getProject = (id) => {
    for(let i = 0; i < projects.length; i++) {
      if(parseInt(projects[i].id, 10) === parseInt(id, 10)) {
        return projects[i]
      }
    }
  }

  const id = localStorage.getItem('projectId')?? 1;
  const project = getProject(id);

  return (
    <>
      <div className="bg-deep_orange-50 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <LandingPageHeader/>
            <Component15 project={project} />
          </div>
        </div>
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default ProjectPage;
