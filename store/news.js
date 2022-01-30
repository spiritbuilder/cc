import Toast from "react-native-toast-message"
import baseUrl from "../utils/helpers"

const handleException = (x,description) => {
    Toast.show({
        type: info,
        text1:description    
    })
   return  x
}

const model = {
    state: {
        allnews: [],
        currentpage: 0,
        pageNews: [],
        maxpages:0
    },
    reducers: {
        loadnews: (state, payload) => {
            return {
                
                allnews: payload,
                currentpage: 1,
                pageNews: payload.slice[0, 10],
                maxpages:Math.ceil(payload.length/10)
            }
        },
        nextpage:(state, payload)=>{
            return {
                ...state,
                currentpage: state.maxpages > state.currentpage ? state.currentpage
                    + 1 : handleException(state.currentpage,"this is the last page"),
                pageNews:state.allnews
            }
        }
    },
    effects:(dispatch)=>( {
        async fetchnews(dispatch) {
            
        }
    })
}

export default model