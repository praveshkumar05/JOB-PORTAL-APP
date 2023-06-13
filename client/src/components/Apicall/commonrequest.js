import axios from 'axios'
export const gotobackend = async (methods, url, header, data) => {

    console.log("come to backend");
    const config={
        method:methods,
        url,
        headers:header?header:{"Content-Type":"application/json"},
        data 
    }
    // return await  axios({config})
    // .then((data)=>{return data; })
    // .catch(err=>{return err;})

    return axios(config).then((data)=>{
        return data
    }).catch((error)=>{
        return error
    })       
}
