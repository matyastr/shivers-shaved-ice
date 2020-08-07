// Source: https://gist.github.com/codeguy/6684588
const createSlug = (str) => {
    let slug = str.replace(/^\s+|\s+$/g, ''); // trim
    slug = slug.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    let to = "aaaaeeeeiiiioooouuuunc------";
    for (let i=0, l=from.length ; i<l ; i++) {
        slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    slug = slug.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return slug;
}

export default createSlug;
