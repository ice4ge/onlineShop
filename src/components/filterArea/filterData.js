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
                filter: 'MEXX',
            },{
                text: 'Baldi',
                target: 'brand',
                filter: 'Baldi',
            },{
                text: 'Gucci',
                target: 'brand',
                filter: 'Gucci',
            },{
                text: 'Puma',
                target: 'brand',
                filter: 'Puma',
            }
        ]
    },{
        name: 'Category',
        toggleTarget: 'kids',
        subProperty: [
            {
                text: 'Clothes',
                target: 'category',
                filter: ["Կոստյումներ", "Շապիկներ", "Շապիկներ : Պոլոներ", "Տաբատներ", "Շորտեր", "Ջինս", "Հուդիներ և Սվիտրներ", "Բաճկոններ", "Լողազգեստեր", "Սպորտային Հագուստ", "Գուլպա"],
            },{
                text: 'Shoes',
                target: 'category',
                filter:  ["Ամառային դասական", "Սանդալ", "Ամառային սպորտային", "Դասական կոշիկ​", "Չարոխ", "Սպորտային", "Կիսաճտքավոր դասական", "Կիսաճտքավոր սպորտային", "Ուգգի"],
            },{
                text: 'Accessories',
                target: 'category',
                filter: ["Ժամացույցներ","Արևային ակնոց","Պայուսակներ","Գլխարկներ","Գոտիներ","Զարդեր"],
            }
        ]
    },{
        name: 'type',
        toggleTarget: 'bags',
        subProperty: [
            {
                text: 'Top',
                target: 'type',
                filter: 'Ջինս'
            },{
                text: 'Bottom',
                target: 'type',
                filter: 'Տաբատներ'
            },{
                text: 'Underwear',
                target: 'type',
                filter: 'Ներքնազգեստ'
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
