import {useSelector} from "react-redux";
import {allRepos} from "./reposSlice";
import Repo from "../../components/repo";

const Repos = () => {
    const { isLoading } = useSelector((state) => state.repos)
    const repos = useSelector(allRepos)

    if(isLoading){
        return(
            <>
                Loading...
            </>
        )
    }

    return (
        <div className='repo-container'>
            {repos.map((repo, index) =>
                (<Repo repo={repo} index={index} key={index}/>)
            )}
        </div>
    )
}

export default Repos;
