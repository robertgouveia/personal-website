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