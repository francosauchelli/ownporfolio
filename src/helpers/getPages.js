export const getPages = async () => {

    const resp = await fetch( '/src/data/pagesOptions.json' );
    const { pages } = await resp.json();

    return pages;
};