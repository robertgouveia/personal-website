export default async function fetchRepos () {
    const token = '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';

    try {
        const response = await fetch('https://api.github.com/users/robertgouveia/repos')
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