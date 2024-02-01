export const getSeventyCharanters = (content) => {
    const contentSplit = content.split('');
    const newContent = [];

    for(let i = 0; newContent.length < 70; i++) {
        newContent.push(contentSplit[i]);
    }

    return `${newContent.join('')}...`;
};