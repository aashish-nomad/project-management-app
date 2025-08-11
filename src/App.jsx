import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleProjectStateOnCreate() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleProjectOnSave(projectData) {

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projectData]
      }
    });
  }

  function handleProjectCreateCancle() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onProjectSave={handleProjectOnSave} onCancle={handleProjectCreateCancle}/>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onProjectCreate={handleProjectStateOnCreate} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onProjectCreate={handleProjectStateOnCreate} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
