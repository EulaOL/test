var button = document.getElementsByClassName('c_button')[0],
content = document.getElementsByTagName('p')[0],//顯示器内容
count = 0,
bOneDec = false;
button.onclick = function(e){
	var target = e.target;
	if(target.nodeName.toLowerCase()==='button'){
		var btType = target.innerText;
		if(content.innerText =='Math Error' && btType !='AC'){
			return;
		}
		if(btType =='AC'){/*清零*/
			bOneDec = false;
			content.innerText = '';
			count = 0;
		}
		else if(btType =='CE'){/*刪除最後一位值*/
			if(content.innerText != ''){
				if(content.innerText.length === 1){
					content.innerText = '0';
				}
				else{
					content.innerText = content.innerText.slice(0,-1);
					}
				count--;
				}
			}
		else if(btType == '='){
			var text = content.innerText;
			if(!text){
				return;
			 }
			else{
				text = text.replace(/x/g,"*");//將"x"轉換為"*"
				var result;
				try{
					result = eval(text)+"";/*計算結果轉換為字符串*/
					if(result.search(/\./)>0){/*判斷結果中是否有小數點*/
						bOneDec = true;/*初始化小數點判斷boolean變量*/
						if(result.split('.')[1].length>5){
							result = (+result).toFixed(5);/*保留5位小數*/
							}
						}
					content.innerText = result;/*顯示結果*/
					count = result.length;/*修改計數器的值*/
				}
				catch(e){
					content.innerText = 'Math Error';
					}
				}
			}
	    else{
			if(isNaN(+btType) && btType != '.'){
				bOneDec = false;
			}
			if(btType == '.'){
				if(bOneDec){
					return;
				}
				bOneDec = true;
				}
				if(content.innerText == '0' &&(!isNaN(+btType) || btType == '(' || btType == ')')){
					content.innerText = '';
					}
					content.innerText += btType;
					if(count ++ > 40){
						alert('輸入的字符過多');
						}
					}
	}
}