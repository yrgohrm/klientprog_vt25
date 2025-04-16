import lodash from 'lodash';

for (let i = 2; i < 70000; i *= i) {
    console.log(lodash.padStart(String(i), 5))
}
