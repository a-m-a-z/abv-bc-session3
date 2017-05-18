module.exports=function findMissing(firstArray,secArray){

		for (let i=0;i<firstArray.length;i++){

			if (secArray.indexOf(firstArray[i])===-1){

				return firstArray[i];
			}

		}
		for (let j=0;j<secArray.length;j++){

			if (firstArray.indexOf(secArray[j])===-1){

				return secArray[j];
			}

		}
		return 0;
	}
