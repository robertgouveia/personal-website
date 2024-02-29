const Repo = ({repo}) => {
    const since_update = Math.floor(((new Date() - new Date(repo.updated_at)) / 3.6e+6) / 24)

    return (
        <div className='repo-card'>
            <section className='repo-card-upper'>
                <h1>{repo.name}</h1>
                <a href={repo.html_url}><i className="fa-brands fa-github"></i></a>
            </section>
            <section className='repo-card-lower'>
                <p className='description'>{repo.description}</p>
                <div className='repo-card-footer'>
                    <div className='tags-container'>
                        {repo.topics.map(topic => {
                            return (
                                <div className={`tag ${topic}`}>{topic}</div>
                            )
                        })}
                    </div>
                    <p className='timestamp'>updated: {since_update} {since_update > 1 ? 'days' : 'day'} ago</p>
                </div>
            </section>
        </div>
    )
}

export default Repo;