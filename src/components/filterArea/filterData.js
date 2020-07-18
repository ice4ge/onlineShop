export const filterBytypes = [
    {
        name: 'Gender',
        toggleTarget: 'women',
        subProperty: [
            {
                text: 'Man',
                target: 'gender',
                filter: 'Արական',
                select: false,
            }, {
                text: 'Woman',
                target: 'gender',
                filter: 'Իգական',
                select: false,
            }
        ]
    }, {
        name: 'Brand',
        toggleTarget: 'man',
        subProperty: [
            {
                text: 'Calvin Klein',
                target: 'brand',
                filter: 'Calvin Klein',
                select: false,
            }, {
                text: 'Mexx',
                target: 'brand',
                filter: 'MEXX',
                select: false,
            }, {
                text: 'Baldi',
                target: 'brand',
                filter: 'Baldi',
                select: false,
            }, {
                text: 'Gucci',
                target: 'brand',
                filter: 'Gucci',
                select: false,
            }, {
                text: 'Puma',
                target: 'brand',
                filter: 'Puma',
                select: false,
            }
        ]
    }, {
        name: 'Category',
        toggleTarget: 'kids',
        subProperty: [
            {
                text: 'Clothes',
                target: 'category',
                filter: 'Հագուստ',
                select: false,
            }, {
                text: 'Shoes',
                target: 'category',
                filter: 'Կոշիկ',
                select: false,
            }, {
                text: 'Accessories',
                target: 'category',
                filter: 'Աքսեսուարներ',
                select: false,
            }
        ]
    }
];

export const typeSubClothingFilters = [
    {
        target: 'type',
        text: 'costume',
        type: 'Կոստյումներ',
        select: false,
    }, {
        target: 'type',
        text: 'Cover',
        type: 'Շապիկներ',
        select: false,
    }, {
        target: 'type',
        text: 'Pants',
        type: 'Շորտեր',
        select: false,
    }, {
        target: 'type',
        text: 'Shorts',
        type: 'Շապիկներ : Պոլոներ',
        select: false,
    }, {
        target: 'type',
        text: 'Jeans',
        type: 'Ջինս',
        select: false,
    }, {
        target: 'type',
        text: 'Hoodies and sweaters',
        type: 'Հուդիներ և Սվիտրներ',
        select: false,
    }, {
        target: 'type',
        text: 'Jackets',
        type: 'Բաճկոններ',
        select: false,
    }, {
        target: 'type',
        text: 'Swimwear',
        type: 'Լողազգեստեր',
        select: false,
    }, {
        target: 'type',
        text: 'Sports clothing',
        type: 'Սպորտային Հագուստ',
        select: false,
    }
];

export const typeSubShoesFilters = [
    {
        target: 'type',
        text: 'Summer classic',
        type: 'Ամառային դասական',
        select: false,
    }, {
        target: 'type',
        text: 'Sandal',
        type: 'Սանդալ',
        select: false,
    }, {
        target: 'type',
        text: 'Summer sport',
        type: 'Ամառային սպորտային',
        select: false,
    }, {
        target: 'type',
        text: 'Classic shoes',
        type: 'Դասական կոշիկ​',
        select: false,
    }, {
        target: 'type',
        text: 'Mocasine',
        type: 'Չարոխ',
        select: false,
    }, {
        target: 'type',
        text: 'Sport',
        type: 'Սպորտային',
        select: false,
    }, {
        target: 'type',
        text: 'Semi-spotted classic',
        type: 'Կիսաճտքավոր դասական',
        select: false,
    }, {
        target: 'type',
        text: 'Semi-spotted sport',
        type: 'Կիսաճտքավոր սպորտային',
        select: false,
    }, {
        target: 'type',
        text: 'Uggi',
        type: 'Ուգգի',
        select: false,
    }
];

export const typeSubAccessoryFilters = [
    {
        target: 'type',
        text: 'Watches',
        type: 'Ժամացույցներ',
        select: false,
    }, {
        target: 'type',
        text: 'Sunglasses',
        type: 'Արևային ակնոց',
        select: false,
    }, {
        target: 'type',
        text: 'Bags',
        type: 'Պայուսակներ',
        select: false,
    }, {
        target: 'type',
        text: 'Hats',
        type: 'Գլխարկներ',
        select: false,
    }, {
        target: 'type',
        text: 'Belts',
        type: 'Գոտիներ',
        select: false,
    }, {
        target: 'type',
        text: 'Jewelry',
        type: 'Զարդեր',
        select: false,
    }
]

export const manShoes = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];
export const womanShoes = ["35", "36", "37", "38", "39", "40", "41"];
export const manTrousers = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];
export const womanTrousers = ["31", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54"];
export const extraTypesSize = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];



