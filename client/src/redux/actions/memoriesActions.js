
import * as api from "../../apis/index"
export const getMemories = () => {
  return async (dispatch) => {
    try {
      const data = await api.getMemories();
      console.log("data from action", data);
      dispatch({
        type: "MEMORIES_FETCH_SUCCESS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createMemory = (MemoryData) => {
    return async (dispatch) => {
      try {
        const data= await api.createMemories(MemoryData);
        console.log("data from action", data);
        dispatch({
          type: "MEMORY_ADD_SUCCESS",
          payload: data
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export const editmemory = (MemoryData,currentId) => {
    return async (dispatch) => {
      try {
        const data = await api.editMemories(MemoryData,currentId);
        dispatch({
          type: "MEMORY_Edited_SUCCESS",
          payload: {
              ...MemoryData,
                _id:currentId
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  
    export const deleteMemory = (currentId) => {
        console.log("currentId delete meory action run",currentId);
    return async (dispatch) => {
      try {
        const data = await api.deleteMemory(currentId);
        dispatch({
          type: "MEMORY_DELETE_SUCCESS",
          payload: {
              _id:currentId
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
    