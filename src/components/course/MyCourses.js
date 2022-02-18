import React, { Component } from "react";
import { getCourses } from "../../services/courseDetails";


const MyCourses=({allcourses, onUnEnroll}) => {

	const handleEnroll = (course) =>{
		onUnEnroll(course);
	};

	return (
		<>
		<table className="table">
			<thead>
				<tr>
					<th>Course Name</th>
					<th>Course Id</th>
					<th>Teacher</th>
					<th>Time</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{allcourses.map(course=>(course.enroll ===true? 
					(<tr key={course._id}>
						<td>{course.name}</td>
						<td>{course.id}</td>
						<td>{course.teacher}</td>
						<td>{course.time}</td>
						<td><button onClick={()=>handleEnroll(course)} className="btn btn-sm">Unenroll</button></td>
					</tr>): null
				))}
			</tbody>
		</table>
	  </>);
}

export default MyCourses;