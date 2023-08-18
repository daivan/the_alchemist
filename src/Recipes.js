import Recipe from "./Recipe"
export default function getRecipes() {
    return [
        new Recipe(
            "Albion wartbane elixir",
            45,
            ['Vinegar', 'Tansy', 'Woodruff'],
            [
                'Heat kettle \nnot too hot',
                'After 5 seconds \nadd vinegar',
                'After 15 more seconds \nadd tansy',
                'After 10 more seconds \nadd woodruff',
                'Stir clockwise for \n15 seconds',
            ],
            {
                5: { type: 'ingredient', name: 'Vinegar', heat: 1 },
                20: { type: 'ingredient', name: 'Tansy', heat: 1 },
                30: { type: 'ingredient', name: 'Woodruff', heat: 1 },
                30: { type: 'stir', direction: 'clockwise', duration: 15, heat: 1 }
            }
        ),
        new Recipe(
            "Tadpole tranquil tonic",
            60,
            ['Chamomile', 'Catnip', 'Alcohol'],
            [
                'Heat kettle \nto boiling',
                'After 15 seconds \nadd chamomile',
                'After 15 more seconds \nadd catnip',
                'Lower heat to \nstop boiling',
                'Stir clockwise and \nstir until done',
                'After 15 more seconds \nadd alcohol'
            ],
            {
                15: { type: 'ingredient', name: 'Chamomile', heat: 2 },
                30: { type: 'ingredient', name: 'Catnip', heat: 2 },
                30: { type: 'stir', direction: 'clockwise', duration: 30, heat: 1 },
                45: { type: 'heat', level: 2 },
                45: { type: 'ingredient', name: 'Alcohol', heat: 1 }
            }
        )
    ];
}
