import Text from './Text.js';

export function createRecipeText(text, x, y) {
    return new Text(
        text,
        7,
        'Old Standard TT',
        '#1f2e38',
        x,
        y,
        'start',
        'left'
    );
}
