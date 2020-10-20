class Person {
    constructor (firstName , lastName , age , date_of_birth , favorite_food , favorite_movie){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.date_of_birth = date_of_birth;
        this.favorite_food = ['food1','food2' ,'food3'];
        this.favorite_movie = ['movie1' , 'movie2' , 'movie3' , 'movie4' , 'movie5'];
    }

}
var Person1 = new Person ('Sara , Adas , 22 , 0796761541 , 6-10-98 , [Kabse , shawerma , mlokheye] , [intersteller , the greatest showman , iron man , five feet apart , the lion king]');
console.log(Person1);