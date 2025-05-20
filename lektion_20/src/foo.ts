

export function getCount(substr: string, str: string) {	
  let position = 0
  let count = 0
  while ((position = str.indexOf(substr, position)) >= 0) {
    count++
    position++
  }

  return count
}


let apa: boolean = false;
let bar: unknown = false;

// bar.indexOf("apapa");


function minmax(nums: number[]): [number, number] {
  if (nums.length < 1) {
    throw new Error("can't be empty")
  }

  let min = nums[0]
  let max = nums[0]
 
  for (const num of nums) {
    min = Math.min(min, num)
    max = Math.max(max, num)
  }

  return [min, max]
}

// const res = minmax([1, 2, 3, 4])
// console.log(res)
// console.log(res[2]);


// räknar hur många av talet "num" det finns i "numbers"
// returnerar antalet
//

function countSame(target: number, numbers: number[]): number {
    let count = 0;

    for (const num of numbers) {
        if (num === target) {
            count++;
        }
    }

    return count;
}


console.log(countSame(5, [1,5,5,2,3,4,5]));



let person: { name: string, age: number, married: boolean } =
    { name: "Bosse Bredsladd", age: 54, married: "true" };

let persons: { name: string, age: number, married?: boolean }[] =
    [
        { name: "Bosse Bredsladd", age: 54, married: true },
        { name: "Nisse Hult", age: 63 } 
    ];





function print(num: number | number[]) {
  if (Array.isArray(num)) {
    console.log(num.join(", "))
  }
  else {
    console.log(num)
  }
}

const baz = document.getElementById("apa");
if (baz != null) {
    baz
}

type WebServiceReply = { apa: number, bepa: string }

async function sdssddss() {
    const res = await fetch('https://......');
    const data = await res.json() as WebServiceReply;

    if (data != null 
        && typeof data === "object" 
        && 'apa' in data 
        && typeof data.apa === "number" ) {
        data.apa
    }

}