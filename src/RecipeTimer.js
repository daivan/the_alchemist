import CustomText from './CustomText';

export default function getRecipeTimerText(time) {
    let text = new CustomText(
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

