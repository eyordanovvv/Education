function solve(day, age1){

    let price = 0;
    let age = Number(age1);
    let isError = false;
    switch(day){
        case `Weekday`: 
        if(age >=0  && age <= 18){
            price = 12
        }else if(18 < age && age <= 64){
            price = 18;
        }else if(64 < age && age <= 122){
            price = 12;
        }
        else{
            console.log('Error!');
            isError = true;

        }
        break;
        case `Weekend`:
            if(age >=0  && age <= 18){
                price = 15
            }else if(18 < age && age <= 64){
                price = 20;
            }else if(64 < age && age <= 122){
                price = 15;
            }else{
                console.log('Error!');
                isError = true;

            }
            break;
        case `Holiday`:
            if(age >=0  && age <= 18){
                price = 5
            }else if(18 < age && age <= 64){
                price = 12;
            }else if(64 < age && age <= 122){
                price = 10;
            }else{
                console.log('Error!');
                isError = true;
            }
            break;
    }
if(!isError)     console.log(`${price}$`);

}
solve('Weekday', `-12`)