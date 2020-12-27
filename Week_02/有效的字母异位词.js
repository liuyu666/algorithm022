var isAnagram = function(s, t) {
    // if(s.length !== t.length) return false

    // s = s.split('')
    // t = t.split('')
    // let map = {}
    // for(let i = 0; i<s.length; i++) {
    //     console.log(s[i], t[i],map[s[i]],map[t[i]]);
    //     map[s[i]] !== undefined? map[s[i]]++: map[s[i]] = 1
    //     map[t[i]] !== undefined? map[t[i]]--: map[t[i]] = -1
    // }
    // console.log(map);
    // return Object.values(map).every(v=>!v)
    return s.length == t.length
    &&
    s.split('').reduce((p, v, i) => {
        p[s[i].charCodeAt() - 97] ++
        p[t[i].charCodeAt() - 97] --
        return p
    },Array(26).fill(0))
    .every(v => !v)
};

console.log(isAnagram("anagram", "nagaram"))