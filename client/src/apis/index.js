import axios from 'axios';

export const getMemories = async () => {
let result = await axios.get('http://localhost:3001/api/v1/memories');

return result.data.memories;
}

export const createMemories = async (postData) => {
    console.log("postData",postData);
    let {data} = await axios.post('http://localhost:3001/api/v1/memories', postData);
    
    return data;
    }

    export const editMemories = async (postData,CurrentId) => {
        const newmemo={
            ...postData,
            id:CurrentId
        }
        let result = await axios.put(`http://localhost:3001/api/v1/memories`, newmemo);
        
        return result.data.memories;
        }

        export const deleteMemory = async (CurrentId) => {
           console.log("currentId delete meory api run",CurrentId);
            let result = await axios.delete(`http://localhost:3001/api/v1/memories?id=${CurrentId}`);
            
            return result.data.memories;
            }
    

        