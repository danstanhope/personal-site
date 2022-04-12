export async function getPosts(uri) {
    let posts = await fetch('https://dev.to/api/articles/latest?username=danstanhope');

    const json = await posts.json();

    return json;
}