import axios from 'axios'
const baseUrl = "http://localhost:5000"

const getAllTask = (setTask) => {
    axios
    .get(baseUrl)
    .then(({data}) => { 
        setTask(data)
    })
}

const addTask = (title,description, setTitle,setDescription, setTask) => {
    axios
    .post(`${baseUrl}/save` , {title,description})
    .then((data)=> {
        console.log(data);
        setTitle("")
        setDescription("")
        getAllTask(setTask)
    })
}


export {getAllTask , addTask}