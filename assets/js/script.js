const accounts01 = [['admin01','123'],['admin02','234'],['admin03','345']]
const accounts02 = {admin01:"123", admin02:"234", admin03:"345"}
let p1 = {name:"ahmad",age:30,state:"beirut"}
console.log(accounts01)
console.log(accounts02.keys)
console.log(accounts02.admin03)
let admin = prompt("enter username")
function main(){
       if(admin in accounts02){
        console.log(`welcome ${admin} you pass is: ${accounts02[admin]}`)
       }else{
        console.log('you are not registered')
       }

}
main()
