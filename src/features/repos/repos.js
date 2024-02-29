import {useSelector} from "react-redux";
import {allRepos} from "./reposSlice";
import Repo from "../../components/repo";
import '../../modules/repos.modules.css';
import {useState} from "react";

const Repos = () => {
    const { isLoading } = useSelector((state) => state.repos)
    const repos = useSelector(allRepos)
    const [load, setLoad] = useState(3);

    const onClickHandler = (e) => {
        if(load + 3 > repos.length){
            e.target.setAttribute('disabled', true)
            setLoad(repos.length)
            e.target.innerHTML = 'All Loaded'
            e.target.classList.add('complete')
            return
        }
        if(e.target.hasAttribute('disabled')){
            e.target.removeAttribute('default')
        }
        if(e.target.classList.contains('complete')){
            e.target.classList.remove('complete')
        }
        setLoad(load + 3)
    }

    if(isLoading){
        return(
            <>
                Loading...
            </>
        )
    }

    return (
        <div className='repo-container'>
            {repos.slice(0, load).map((repo, index) =>
                (<Repo repo={repo} index={index} key={index}/>)
            )}
            <button onClick={onClickHandler} className='load-button'>Load More</button>
        </div>
    )
}

export default Repos;
