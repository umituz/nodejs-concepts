// NESNELER İÇİN
// const objectValues = {
//     key1:'value1',
//     key3:'value3',
// };
//
// const { key1, key2, key3, key4 = 'value4' } = objectValues;
// key2:'value2',
//
// console.log(`${key1} ${key2} ${key3} ${key4}`);
// DİZİLER İÇİN
// const arrayValues = [1,2,3,4,5,6,7,8,9];
//
// const [ anything1, anything2, anything3] = arrayValues;
// console.log(`${anything1} ${anything2} ${anything3}`);

const newObject = {
    names:{
        name:'Ümit UZ'
    },
    phones:{
        phone:'05427840151'
    }
};
const { names:{ name }, phones:{ phone:telephoneWhatEverIWantToSayICan } } = newObject;
console.log(`${name} : ${telephoneWhatEverIWantToSayICan}`);