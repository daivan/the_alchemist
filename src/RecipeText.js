import CustomText from './CustomText.js';

export function createRecipeText(text, x, y) {
    return new CustomText(
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
