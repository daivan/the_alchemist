import Text from './Text';

export default function getRecipeTimerText(time) {
    let text = new Text(
        time,
        16,
        'Arial',
        '#1f2e38',
        32,
        32,
        'middle',
        'center'
    );
    return text;
}

