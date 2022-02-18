import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { Component, useState } from "react";
import { render } from "react-dom";
import AllCourses from './AllCourses';
import MyCourses from './MyCourses';
import Timetable from './Timetable';
import { getCourses } from "../../services/courseDetails";
import Calendar from "../calendar/Calendar";


const CourseMain = () => {

    const [allCourses, setallCourses] = useState(true);
    const [myCourses, setmyCourses] = useState(false);
    const [timetable, settimetable] = useState(false);
    const [showHead, setshowHead] = useState("All Courses");
    const [courses, setcourses] = useState([...getCourses()]);


    const onEnroll=(course)=>{

      console.log("Do somethinh111");
      console.log(courses);
      let coursescopy = [...courses];
      let unselectedCourse = coursescopy.filter(m => m._id !== course._id);
      let selectedCourse = coursescopy.filter(m => m._id === course._id);
      selectedCourse[0].enroll=true;
      const updatedCourse = [...unselectedCourse,...selectedCourse];
      console.log("updatedCourse",updatedCourse);

      setcourses(updatedCourse);
      console.log("updated",courses);
    }

    const onUnEnroll=(course)=>{

      console.log("Do");
      console.log(courses);
      let coursescopy = [...courses];
      let unselectedCourse = coursescopy.filter(m => m._id !== course._id);
      let selectedCourse = coursescopy.filter(m => m._id === course._id);
      selectedCourse[0].enroll=false;
      const updatedCourse = [...unselectedCourse,...selectedCourse];
      console.log("updatedCourse",updatedCourse);

      setcourses(updatedCourse);
    }

    const hideComponent = (name1)=>{
        switch (name1) {
          case "showHideDemo1":
            setallCourses(true);
            setmyCourses(false);
            settimetable(false);
            setshowHead("All Courses");
            break;
          case "showHideDemo2":
            setallCourses(false);
            setmyCourses(true);
            settimetable(false);
            setshowHead("My Courses");
            console.log(courses);
            break;
          case "showHideDemo3":
            setallCourses(false);
            setmyCourses(false);
            settimetable(true);
            setshowHead("Timetable");
            break;
          default:
            console.log("");
        }
      }

  return (
      <>
<Navbar bg="light" variant="light" fixed="top">
    <Container>
    <Navbar.Brand href="#home">{showHead}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" onClick={() => hideComponent("showHideDemo1")}>AllCourses</Nav.Link>
      <Nav.Link href="#features" onClick={() => hideComponent("showHideDemo2")}>MyCourses</Nav.Link>
      <Nav.Link href="#pricing" onClick={() =>hideComponent("showHideDemo3")}>Timetable</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <div>
        {allCourses && <AllCourses allcourses={courses} onEnroll={onEnroll}/>}
        {myCourses && <MyCourses allcourses={courses} onUnEnroll={onUnEnroll}/>}
        {timetable && <Calendar/>}
      </div>
      </>
    );
}

export default CourseMain