 function mul (a){

            return function  (b){

            return function (c){

                        return  a*b*c;

            }

                    
            }

}


var mul1 = mul;
console.log(mul1(2)(3)(4));
