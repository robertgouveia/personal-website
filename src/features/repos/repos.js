import {useDispatch, useSelector} from "react-redux";
import {filter, loadMore, selectReposToShow, resetRepos} from "./reposSlice";
import Repo from "../../components/repo";
import '../../modules/repos.modules.css';
import '../../modules/skeleton.modules.css';
import SkeletonRepos from "../../components/skeletonRepos";

const Repos = () => {
    const { isLoading, repos, load } = useSelector((state) => state.repos)
    const loadedRepos = useSelector(selectReposToShow)
    const dispatch = useDispatch()
    const loadButton = document.querySelector('.load-button');

    const onClickHandler = (e) => {
        if(load + 3 > repos.length){
            if(!e.target.classList.contains('complete')){
                e.target.innerHTML = 'All Loaded'
                e.target.classList.add('complete')
                dispatch(loadMore(repos.length))
            }
        }
        else {
            if(e.target.classList.contains('complete')){
                e.target.classList.remove('complete')
                e.target.innerHTML = 'Load More'
            }
            dispatch(loadMore())
        }
    }

    const OnFilter = async (e) => {
        await dispatch(resetRepos())
        if(e.target.id) {
            dispatch(filter(e.target.id))
        }
        if(loadButton.classList.contains('complete')){
            loadButton.classList.remove('complete')
            loadButton.innerHTML = 'Load More'
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
