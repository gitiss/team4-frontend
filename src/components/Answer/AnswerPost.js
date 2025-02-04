import {useState, Fragment} from 'react'
import MDEditor from '@uiw/react-md-editor';
import {useSelector} from 'react-redux' 
import axios from 'axios'
import {useHistory} from 'react-router-dom'


//get id of question
const AnswerPost = (id) => {   
    const history = useHistory();
    const isLoggedin = useSelector(state => state.isLoggedReducer.loggedin)
    const token = useSelector(state => state.isLoggedReducer.token)
    const [Content, setContent] = useState("")
    const instance = axios.create({
        baseURL: 'https://www.wafflow.com/api/',
        headers: { 'Accept' : "application/json",'Authorization' : isLoggedin? `Token ${token}`:''},
      });
    const postAns = (content) => {
        console.log(Content);
        if (Content.length > 10) {
            instance.post(`/answer/question/${id.id}/`, {content:Content})
                .then(res => {
                    setContent("")
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
            setContent("")
        }
        else {
            alert("answer too short!")
        }
    }

    return(
        <Fragment>
            <div className="ans-content-box">
                <MDEditor
                    value={Content}
                    onChange={e => setContent(e)}/>
                {/* <MDEditor.Markdown source={Content} /> */}
            </div>
            <div className="ans-post-btn-box">
                <button className="ans-post-btn" onClick={e => {postAns(Content)}}>Post Your Answer</button>
            </div>
        </Fragment>
    )
}

export default AnswerPost