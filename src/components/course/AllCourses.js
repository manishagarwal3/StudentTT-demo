import React, { Component } from "react";
import {Link} from 'react-router-dom';

const AllCourses = ({allcourses, onEnroll}) => {

	const handleEnroll = (course) =>{
		onEnroll(course);
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
				{allcourses.map(course=>(course.enroll===false? 
					(<tr key={course._id}>
						<td>{course.name}</td>
						<td>{course.id}</td>
						<td>{course.teacher}</td>
						<td>{course.time}</td>
						<td><button onClick={()=>handleEnroll(course)} className="btn btn-sm">Enroll</button></td>
					</tr>): null
				))}
			</tbody>
		</table>
	  </>  )
}

export default AllCourses;