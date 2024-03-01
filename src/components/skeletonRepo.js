const SkeletonRepo = () => {
    return (
        <div className='skeleton-card'>
            <div className='skeleton-row'>
                <div className='skeleton-text'></div>
                <div className='skeleton-circle-button'></div>
            </div>
            <div className='skeleton-row skeleton-no-padding skeleton-no-border'>
                <div className='skeleton-long-text'></div>
            </div>
            <div className='skeleton-row-start skeleton-no-padding skeleton-no-border'>
                <div className='skeleton-short-text'></div>
                <div className='skeleton-short-text'></div>
                <div className='skeleton-short-text'></div>
            </div>
            <div className='skeleton-short-text'></div>
        </div>
    );
}

export default SkeletonRepo;