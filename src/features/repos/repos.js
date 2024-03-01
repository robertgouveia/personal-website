import {useDispatch, useSelector} from "react-redux";
import {clearFilter, filter, loadMore, selectReposToShow} from "./reposSlice";
import Repo from "../../components/repo";
import '../../modules/repos.modules.css';

const Repos = () => {
    const { isLoading, load, repos } = useSelector((state) => state.repos)
    const loadedRepos = useSelector(selectReposToShow)
    const filteredRepos = useSelector(state => state.repos.filtered);
    const dispatch = useDispatch()

    const onFilterHandler = (e) => {
        // if(load + 3 >= filteredRepos.length){
        //     e.target.setAttribute('disabled', true)
        //     dispatch(loadMore(filteredRepos.length))
        //     e.target.innerHTML = 'All Loaded'
        //     e.target.classList.add('complete')
        //     return
        // }
        // if(e.target.classList.contains('complete')){
        //     e.target.classList.remove('complete')
        // }
        dispatch(loadMore())
    }

    const OnFilter = (e) => {
        if(e.target.id){
            dispatch(filter(e.target.id))
            dispatch(loadMore(3))
        } else {
             dispatch(clearFilter())
        }
    }

    if(isLoading){
        return (
            <>
                TODO: Make animation
            </>
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
            {filteredRepos.length > 0 ? filteredRepos.slice(0, load).map((repo, index) =>
                (<Repo repo={repo} index={index} key={index}/>)
            ): loadedRepos.map((repo, index) =>
                (<Repo repo={repo} index={index} key={index}/>)
            )}
            <button onClick={onFilterHandler} className='load-button'>Load More</button>
        </div>
    )
}

export default Repos;
