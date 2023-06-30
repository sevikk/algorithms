// function reverse(str){
//     if (str.length < 2) {
//         return str
//     }
//     let halfIndex = Math.ceil(str.length / 2);
//     return reverse(str.substr(halfIndex)) + reverse(str.substr(0, halfIndex))    
// }

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'