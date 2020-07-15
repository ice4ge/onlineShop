export const filterBytypes = [
    {
            name: 'Gender',
            toggleTarget: 'women',
            subProperty: [
                {
                    text: 'Man',
                    target: 'gender',
                    filter: 'Արական',
                },{
                    text: 'Woman',
                    target: 'gender',
                    filter: 'Իգական',
                }
            ]
    },{
        name: 'Brand',
        toggleTarget: 'man',
        subProperty: [
            {
                text: 'Calvin Klein',
                target: 'brand',
                filter: 'Calvin Klein',
            },{
                text: 'Mexx',
                target: 'brand',
                filter: 'Mexx',
            },{
                text: 'Baldi',
                target: 'brand',
                filter: 'Baldi',
            },{
                text: 'Gucci',
                target: 'brand',
                filter: 'Gucci',
            }
        ]
    },{
        name: 'Category',
        toggleTarget: 'kids',
        subProperty: [
            {
                text: 'Clothes',
                target: 'հագուստ',
                filter: 'type',
            },{
                text: 'Shoes',
                target: 'կոշիկ',
                filter: 'type',
            },{
                text: 'Accessories',
                target: 'կոշիկ',
                filter: 'type',
            }
        ]
    },{
        name: 'type',
        toggleTarget: 'bags',
        subProperty: [
            {
                text: 'Top',
                target: 'գագաթ',
                filter: 'type'
            },{
                text: 'Bottom',
                target: 'հատակը',
                filter: 'type'
            },{
                text: 'Underwear',
                target: 'հատակը',
                filter: 'type'
            }
        ]
    },{
        name: 'Size',
        toggleTarget: 'eyewear',
        subProperty: [
            {
                text: 'XS',
                target: '40',
                filter: 'Size'
            },{
                text: 'S',
                target: '40',
                filter: 'Size'
            },{
                text: 'M',
                target: '40',
                filter: 'Size'
            },{
                text: 'L',
                target: '40',
                filter: 'Size'
            },{
                text: 'XL',
                target: '40',
                filter: 'Size'
            }
        ]
    }
];
