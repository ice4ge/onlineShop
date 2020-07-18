export function sizeChart(genderi, categoryi, typei){

    if( categoryi == "Կոշիկ") 
    {
        if (genderi == "Տղամարդու"){
            return ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"]
        } else {
            return ["35", "36", "37", "38", "39", "40", "41"]
        }
    } 
    else 
    {

        if (typei == "Ջինս" || typei == "Տաբատներ" || typei == "Շորտեր") 
        {
            if (genderi == "Արական") {
                return ["28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44"]
            } else {
                return ["31","32","33", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54"]
            }
        } else if (typei == "Ներքնազգեստ") {
            return [String]()
        } else {
            return ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
        }
    }
}