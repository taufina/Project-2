/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const listItem =  document.querySelectorAll('.student-item');
const numberOfItems = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (listItem, page) => {
   let startIndex = (page*numberOfItems)-numberOfItems;
   let endIndex = page*numberOfItems;

   for (let i=0; i<listItem.length; i++){

      if (i>=startIndex && i<endIndex){
         listItem[i].style.display = 'block';
      } else {
         listItem[i].style.display = 'none';
      }

   }

}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


const appendPageLinks = (listItem) => {
   let divElement = document.createElement('div');
   let pageClass = document.querySelector('.page');
   let ulElement = document.createElement('ul');
    
   //divElement.setAttribute('class', 'pagination');
   divElement.className = 'pagination';
   pageClass.appendChild(divElement);
   divElement.appendChild(ulElement);
   let numberOfPages = Math.ceil(listItem.length/numberOfItems);

   for (let i = 1; i<=numberOfPages; i++){
      let liElement = document.createElement('li');
      let aTag = document.createElement('a');
      ulElement.appendChild(liElement);
      liElement.appendChild(aTag).setAttribute("href", '#');
      aTag.innerHTML = i;

      aTag.addEventListener('click',(event)=>{
         let page = document.querySelectorAll('li a');
         let button = event.target.textContent;
         showPage(listItem, button);

         event.target.className = "active";

         for(i=0, i<)
      })

      

   }


  

   // Next up we call the slice function of our Array and tell it where to start slicing from and where to 
   // end. The result will be an Array with just the elements that we're currently looking for. The 
   // algorithm is pretty self-explanatory. You start at the current page, minus one, plus the page 
   // offset. And the end is just that start number plus the offset again. The 2 new functions at the
   //  bottom drawList and check will render the sublist and then update the pager buttons respectively.



   //let ulElement = document.getElementsByClassName('pagination');
   //ulElement.createElement('ul');
   // A nested UL element containing one LI element for every ten students in the list.
   //document.createElement('ul');

   //let numberOfPages = Math.Ceiling(listItem.length/10);
   //for (i=0, i<numberOfPages.length)

}



showPage(listItem, 1);
appendPageLinks(listItem);




// Remember to delete the comments that came with this file, and replace them with your own code comments.