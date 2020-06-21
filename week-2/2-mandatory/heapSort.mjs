
function sort(arr)
{
	if(arr.length<=0)
		return;

	return HeapSort(arr,(arr.length-1));;
}


function Build_Max_Heap(arr,len)
{
	if(len<=0)
		return;

	var k;
	if(len%2==0)         // We check if the  length of array is an even number .
		 k =(len/2) -1;  // If it the case then we set K to this value, otherwise another value 
		                    // after the value of k every element in the array is a leaf.
		                    // by leaf we mean to say that these elements will not become parents.
		                    // So no need to call Max_Heapify for these elements.
	else 
		 k=(len/2);

    for( let i=k ; i>=0 ; i-- )
    {
		Max_Heapify(arr,i,len); // we call this to put parents big than child.
    }
	return;
}



function Max_Heapify(arr,i,len)
{
	if(len<=0)
		return;

	if(len%2==0 && i>= (len/2) )   // after length/2 elements are leaf.
	    return;                          // so they do not possede any Left and Right elements to be tested . 
		

	if(len%2!=0 && i>= ((len/2) + 1 ))  
		return;

	var L= 2*i +1 ;     // This is the index of left child 
	var R= 2*i +2 ;     // This is the index of right child.
	var largest=i ;

	 if(L<=len && arr[L]>arr[i])    // Here we compare the left child with parent.
	 	largest =L;

	 if(R<=len && arr[R]>arr[largest])  // Here we compare the right child with the largest among left child and parent.
	 	largest =R;

	 if(largest!=i)  // if largest is still i , it means parent was largest amongst child so don't change anything.
	 {
	 	let temp;
	 	temp = arr[i];
	 	arr[i]=arr[largest];
	 	arr[largest]=temp;
	 }
	 else 
	 	return;

	 Max_Heapify(arr,largest,len); // since we changed the element at largest position, we will have to run max-heapify again for that element to see if it is a bigger than it's child.

	  return;

}




function HeapSort(arr,len)
{
	var size=len;
	if(len<=0)
		return;

	Build_Max_Heap(arr,len);

	for( let i=len ; i > 0 ; i-- )
	{
		let temp;
	 	temp = arr[i];
	 	arr[i]=arr[0];
	 	arr[0]=temp;
	 	len-=1;
	 	Max_Heapify(arr,0,len);
	}
return arr;
}

// var arra= [11,12,17,1,2,99,100,1002,45];
// var final=sort(arra);
// for(let i=0;i<final.length;i++)
// {
// 	console.log(final[i]);
// }



// export {sort,HeapSort, Max_Heapify,Build_Max_Heap};
export {sort};