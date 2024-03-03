import {useDispatch, useSelector} from "react-redux";
import {clearFilter, filter, loadMore, loadRepos, selectReposToShow} from "./reposSlice";
import Repo from "../../components/repo";
import '../../modules/repos.modules.css';
import '../../modules/skeleton.modules.css';
import SkeletonRepos from "../../components/skeletonRepos";
import repo from "../../components/repo";

const Repos = () => {
    const { isLoading, repos, load } = useSelector((state) => state.repos)
    const loadedRepos = useSelector(selectReposToShow)
    const dispatch = useDispatch()

    const onClickHandler = (e) => {
        if(load + 3 > repos.length){
            if(!e.target.classList.contains('complete')){
                e.target.innerHTML = 'All Loaded'
                e.target.classList.add('complete')
                dispatch(loadMore(repos.length))
            }
        }
        else {
            console.log('hit incomplete')
            if(e.target.classList.contains('complete')){
                e.target.classList.remove('complete')
            }
            dispatch(loadMore())
        }
    }

    const OnFilter = async (e) => {
        await dispatch(loadRepos())
        if(e.target.id){
            dispatch(filter(e.target.id))
        }
    }

    if(isLoading){
        return (
            <SkeletonRepos/>
        )
    }

    return (
        <div className='repo-container'>
            <div className='filter-tags'>
                <div onClick={OnFilter} className={'tag javascript'} id='javascript'>javascript</div>
                <div onClick={OnFilter} className={'tag react'} id='react'>react</div>
                <div onClick={OnFilter} className={'tag portfolio'} id='portfolio'>portfolio</div>
                <div onClick={OnFilter} className={'tag'}>x</div>
            </div>
            {loadedRepos.map((repo, index) =>
                (<Repo repo={repo} index={index} key={index}/>)
            )}
            <button onClick={onClickHandler} className='load-button'>Load More</button>
        </div>
    )
}

export default Repos;
