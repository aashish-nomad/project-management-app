import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleProjectStateOnCreate() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleProjectOnSelect(selectedProjectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: selectedProjectId
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

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id != prevState.selectedProjectId)
      }
    });
  }

  function handleAddTask(taskText) {

    setProjectState(prevState => {
      const taskId = crypto.randomUUID();
      const newTask = {
        taskId,
        text: taskText,
        projectId: prevState.selectedProjectId
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId != id)
      }
    });
  }

  const selectedProject = projectState.projects.find(project => project.id == projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onTaskAdd={handleAddTask} onTaskDelete={handleDeleteTask} tasks={projectState.tasks} selectedProjectId={projectState.selectedProjectId} />;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onProjectSave={handleProjectOnSave} onCancle={handleProjectCreateCancle} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onProjectCreate={handleProjectStateOnCreate} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onProjectCreate={handleProjectStateOnCreate} projects={projectState.projects} onProjectSelect={handleProjectOnSelect} selectedProjectId={projectState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
