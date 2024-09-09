function removeHoverEffect(elements) {
    elements.forEach((el) => el.classList.remove('hover'));
}

function findNextSiblings(parent, count) {
    const siblings = [parent];

    // -1 because we add hover on parent too
    for (let i = 0; i < count - 1; i++) {
        siblings.push(siblings.at(-1).nextSibling);
    }

    return siblings;
}

function getCoordinate(element) {
    return +element.classList[0].split('-')[1];
}

export { removeHoverEffect, findNextSiblings, getCoordinate };
