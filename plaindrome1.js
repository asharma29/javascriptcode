let str = () => {

    str = 'madam';

    let a = str;
        str = str.split('');
            // console.log(str); // giving an array 

        for (let i = 0; i<=str.length-1; i++){

            // console.log(a[i]);   giving m a d a m in column 



                    if (a[i]=== str){

                        console.log("p");
                    }

                    else {

                        console.log("np");
                    }
        }



}

str();