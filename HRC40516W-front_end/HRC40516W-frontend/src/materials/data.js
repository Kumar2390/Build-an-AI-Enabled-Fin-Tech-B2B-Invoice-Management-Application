import axios from "axios";

export const getData=async () => {
    try{
        const data=await axios.get(
            "http://localhost:8080/backend/Fetchdata"
        );
        console.log(data.data);
        return data.data;
    } catch(e){
        console.log(e);
    }
}

export const searchData = async (data) => {
    try {
        const response = await axios.get(
            ""
        );
        console.log(data.data);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}

export const addData = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/backend/Adddata", data
        );
        console.log(data.data);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}

export const editData = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/backend/Editdata" ,data)
            .then(response => {
                alert("Edited")
            })
    } catch (e) {
        console.log(e);
    }
}

export const deleteData = async (sl_no) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/backend/Deletedata" ,sl_no
        );
    } catch (e) {
        console.log(e);
    }
}