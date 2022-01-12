var c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&'
const t = ['1', '2'][Math.floor(Math.random()*2)]
var s = [[], [], [], [], [], [], [], [], [], []]
var sf = ''
var k = ''
var uniques = []

// 1 = pie
//    - Generates a string with a key split apart and hidden in random spots
// 2 = hide-n-seek
//    - Generates a string with a key randomly placed on it

if(t == '1'){
    for(let i=0; i<c.length; i++){
        y = Math.random() > 0.5 ? true : false

        if(y){
            uniques.push(c[i])
            k += c[i]
            c = c.replace(c[i], '')
        }
    }

    for(let i=0; i<10; i++){
        for(let j=0; j<100; j++){
            has = Math.random() > 0.5 ? true : false
            if(has && uniques.length > 0){
                let n = 0
                s[i] += uniques[n]
                uniques.splice(n, 1)
            } else{
                s[i] += c[Math.floor(Math.random()*c.length)]
            }
        }
    }
}

else if(t == '2'){
    for(let i=0; i<c.length; i++){
        y = Math.random() > 0.5 ? true : false

        if(y){
            uniques.push(c[i])
            k += c[i]
            c = c.replace(c[i], '')
        }
    }

    for(let i=0; i<10; i++){
        hasL = Math.random() > 0.5 ? true : false

        if(hasL){
            for(let j=0; j<100; j++){
                has = Math.random() > 0.8 ? true : false
                if(has && uniques.length > 0){
                    console.log(i, j)
                    s[i] += uniques.join('')
                    j += uniques.length-1
                    uniques = []
                } else{
                    s[i] += c[Math.floor(Math.random()*c.length)]
                }
            }
        } else{
            for(let j=0; j<100; j++){
                s[i] += c[Math.floor(Math.random()*c.length)]
            }
        }
    }
}

sf = s.join('')

console.log(s)
console.log(uniques)
console.log(k)


