const arr = [10,12,15,21];


for (let i = 0;i<arr.length-1;i++){



    setTimeout(()=>{

            console.log('index' + i + ',element' + arr[i]);


    },3000);
}