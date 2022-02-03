import React, { createContext,useState } from 'react';
const initalState = [
    {
        name:"priya",
        age:"10"
    },{
        name:"shreya",
        age:"20"
    }
]
const StudentContext = createContext({
    studentsList:[],
    studentsCount:0, 
    addStudent: ()=>{}
})

export function StudentContextProvider(props) {
    const [studentsList, setStudentsList] = useState(initalState)
    const addStudent = (student)=>{
        setStudentsList([...studentsList, student])
    }
    const context = {
        studentsList:studentsList,
        studentsCount:studentsList.length,
        addStudent
    }
  return (
  <StudentContext.Provider value={context}>
  {props.children}
  </StudentContext.Provider>
  )
}

export default StudentContext;
