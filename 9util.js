const {readFileSync, writFileSync}=require('fs')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/subfolder/test.txt','utf8')

console.log(first,second)