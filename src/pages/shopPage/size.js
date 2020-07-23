export function sizeChart(genderi, categoryi, typei){

    if( categoryi == "Կոշիկ") 
    {
        if (genderi == "Տղամարդու"){
            return [ 
                {size: "36", select: false}, 
                {size: "37", select: false}, 
                {size: "38", select: false}, 
                {size: "39", select: false}, 
                {size: "40", select: false}, 
                {size: "41", select: false}, 
                {size: "42", select: false}, 
                {size: "43", select: false}, 
                {size: "44", select: false}, 
                {size: "45", select: false},
                {size: "46", select: false},
            ]
        } else {
            return [
                {size: "35", select: false}, 
                {size: "36", select: false}, 
                {size: "37", select: false}, 
                {size: "38", select: false}, 
                {size: "39", select: false}, 
                {size: "40", select: false}, 
                {size: "41", select: false},
            ]
        }
    } 
    else 
    {

        if (typei == "Ջինս" || typei == "Տաբատներ" || typei == "Շորտեր") 
        {
            if (genderi == "Արական") {
                return [
                    {size: "28", select: false},
                    {size: "29", select: false},
                    {size: "30", select: false},
                    {size: "31", select: false},
                    {size: "32", select: false},
                    {size: "33", select: false},
                    {size: "34", select: false},
                    {size: "35", select: false},
                    {size: "36", select: false},
                    {size: "37", select: false},
                    {size: "38", select: false},
                    {size: "39", select: false},
                    {size: "40", select: false},
                    {size: "41", select: false},
                    {size: "42", select: false},
                    {size: "43", select: false},
                    {size: "44", select: false},
                ]
            } else {
                return [
                    {size: "31", select: false},
                    {size: "32", select: false},
                    {size: "33", select: false}, 
                    {size: "34", select: false}, 
                    {size: "35", select: false},
                    {size: "36", select: false},
                    {size: "37", select: false},  
                    {size: "38", select: false},
                    {size: "39", select: false},
                    {size: "40", select: false},  
                    {size: "41", select: false}, 
                    {size: "42", select: false},  
                    {size: "43", select: false}, 
                    {size: "44", select: false},  
                    {size: "45", select: false}, 
                    {size: "46", select: false},   
                    {size: "47", select: false},
                    {size: "48", select: false},  
                    {size: "49", select: false}, 
                    {size: "50", select: false},   
                    {size: "51", select: false},
                    {size: "52", select: false},   
                    {size: "53", select: false},
                    {size: "54", select: false},
                ]
            }
        } else if (typei == "Ներքնազգեստ") {
            return [String]()
        } else {
            return [
                {size: "XS", select: false},
                {size: "S", select: false },
                {size: "M", select: false },
                {size: "L", select: false },
                {size: "XL", select: false },
                {size: "XXL", select: false },
                {size: "XXXL", select: false},
            ];
        }
    }
}