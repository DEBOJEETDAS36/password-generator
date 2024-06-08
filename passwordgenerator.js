//Password Generator
class Password{
    constructor(){
        console.log("Welcome to Password Generator...")
        this.pass = ""
    }
    generate(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let nums = "0123456789"
        let spcl = "~!@#$%^&*(){}[]:;<>?/*"
        if(len<3){
            console.log("Your password should be atleast 3 characters long")
        }
        else{
            for(let i=0; i<len; i+=3){
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                this.pass += nums[Math.floor(Math.random()*nums.length)]
                this.pass += spcl[Math.floor(Math.random()*spcl.length)]
            }
            return this.pass
        }
    }
}
let p = new Password()
console.log(p.generate(6))