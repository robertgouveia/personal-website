export default async function fetchRepos () {
    const token = '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';

    try {
        const response = await fetch('https://api.github.com/users/robertgouveia/repos', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(response.ok){
            return new Promise(resolve => {setTimeout(() => {
                resolve(response)
            }, [1000])});
        } else {
            console.log(response)
        }
    } catch (e){
        console.log(e)
    }
}