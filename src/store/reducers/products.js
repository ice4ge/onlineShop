import { products } from './initial';
import * as actions from '../actions/actionNames';


export const ProductsService = (state = [], action) => {
    switch (action.type) {
        case actions.TOTAL_PRODUCTS:
            const dataList = action.payLoad;
            console.log('reducer',dataList)
            let datas = [];
            dataList.forEach(element => {
                const shopProducts = element.products;
                if (shopProducts) {
                    shopProducts.forEach(productItem => {

                            const Object = {
                                name: productItem.productName,
                                img: productItem.images,
                                price: productItem.productPrice,
                                description: productItem.description,
                                gender: productItem.gender,
                                brand: element.shopName,
                                category: productItem.category,
                                size: productItem.productSize,
                                color: productItem.color,
                                ar: productItem.ar,
                                sale: productItem.sale,
                                type: productItem.type
                            };
                            datas.push(Object);
                    })
                }
            });
            console.log('products',datas);


            return state = datas;
        default:
            return state;
    }
}



export const ProductPreview = (state = {}, action) => {
    switch (action.type) {
        case actions.PREVIEW_CHANGE:
            return products[2];
        case actions.PREVIEW_SET:
            return ({ ...action.payLoad })
        default:
            return state;
    }
}
