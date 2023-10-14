const nameNEW: string = 'Anh Điệp'
const fullname: string = 'Anh điệp đẹp trai'
console.log(fullname)

type Handle = () => Promise<string>
const handleF = () => Promise.resolve(fullname + 'ahihi')

handleF().then(() => console.log('done'))
handleF().then(console.log)

// const person2: any = {}

const person: { name: string; age: number } = {
  name: 'Anh Điệp',
  age: 18
}
