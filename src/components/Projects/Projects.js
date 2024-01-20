import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import em from "../../Assets/Projects/em.png";
import lm from "../../Assets/Projects/lm.png";
import todo from "../../Assets/Projects/todo.jpg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={em}
              isBlog={false}
              title="Employee management "
              description="Performs CRUD operations on employee entity "
              ghLink="https://github.com/ssinghal1/Employee_management_frontend"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="Users can easily create new tasks, adding details such as task name, due date, priority, and additional notes."
              ghLink="https://github.com/ssinghal1/todo"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lm}
              isBlog={false}
              title="library management"
              description="A comprehensive library management application to streamline cataloging, member management, and lending processes, ensuring efficient library operations."
              ghLink="https://github.com/ssinghal1/Libraryapp"
                           
            />
          </Col>

          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
