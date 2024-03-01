import SkeletonRepo from "./skeletonRepo";

const SkeletonRepos = () => {
    return (
        <div className='skeleton-repo-container'>
            <SkeletonRepo />
            <SkeletonRepo />
            <SkeletonRepo />
            <div className='skeleton-button'></div>
        </div>
    );
}

export default SkeletonRepos;