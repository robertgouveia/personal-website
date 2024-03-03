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