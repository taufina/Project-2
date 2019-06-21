/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*** 
   I added two global variables, one to store all the students in the list,
   and the other to store the number of students that should be on each page.
***/

const listItem =  document.querySelectorAll('.student-item');
const numberOfItems = 10;



/***
1. I created a showPage function to create pages.  I did so by hiding all the other students 
   except for the ones that I want to be shown on that page.
2. I created two variables to store the index numbers of the first student and the last student.
3. I used the for loop to loop through the list. 
   - The if statement is used to show that if the index number of the student is between the index 
     number of the first student and the last student, then to show it, otherwise hide it.
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
I created a appendPageLinks function to create buttons, that when clicked will show the appropriate page (or list of students).

1. I created my variables:
   - divElements to create and store a div.  
   - pageClass to select and store div with the class name page.  
   - ulElement to create and store ul.
   - numberOfPages to store number of pages I will need.  I did so by dividing the total number of students by the number I want to be shown on each page.  Then I rounded it up.
2. I added a class name 'pagination' to the div element that I just created.
3. Then I appended the div that I just created to the .page div.
4. I appended the ul that I just created to the div with class name 'pagination'.
5. I used a for loop.  
   a. Inside the for loop I created two variables.
      - I created a li tag and stored it inside the variable liElement.
      - I created an a tag, and stored it inside the variable aTag.
   b. Then I appended the liElement to the UlElement. 
   c. I appended the a tag inside the li tag.  
   d. I created an attribute inside the a tag, named "href", and i set the value equal to "#".
   e. I changed the inner html of the a tag to show the number of the page.  By doing this step, it now shows the number of the page on the button.
   f. Then I selected the first link, and set the class name to active, so that when the page is loaded, and the first page is shown, the page 1 button is highlighted.
   f. Then I added the functionalities of the buttons by adding an event listener.  So that when the button it clicked, it takes to the page.
      - Inside the event listener, i added the behavior 'click', so when I click, event happens.
      - I have added two variables.  I selected all the a tags, and stored it inside the variable page.  and I selected the text content of the button I am clicking, and storing it inside the variable button.
      - then I called the showPage function, so that when I click the button, the appropriate list item is shown.
      - I added a for loop to loop through the a tags, which are my buttons, and remove the class named "active".  So that all the other button except for the one that is clicked appreas unselected.
      - Outside the for loop and inside the event listener, I set the class name of the button I am clicking to 'active', so that that button is highlighted.
***/
const appendPageLinks = (listItem) => {
   let divElement = document.createElement('div');
   let pageClass = document.querySelector('.page');
   let ulElement = document.createElement('ul');
   let numberOfPages = Math.ceil(listItem.length/numberOfItems);
   
   divElement.className = 'pagination';
   pageClass.appendChild(divElement);
   divElement.appendChild(ulElement);

   for (let i = 1; i<=numberOfPages; i++){
      let liElement = document.createElement('li');
      let aTag = document.createElement('a');
      ulElement.appendChild(liElement);
      liElement.appendChild(aTag).setAttribute("href", '#');
      aTag.innerHTML = i;
      document.querySelector('.pagination a:first-child').className = "active";

      

      aTag.addEventListener('click',(event)=>{
         let page = document.querySelectorAll('li a');
         let button = event.target.textContent;
         showPage(listItem, button);

         for(i=0; i<page.length; i++){
            page[i].classList.remove("active");
         }
   
         event.target.className = "active";
      });

   }
}

/***
 I called the showPage function, so that when the page is loaded, it shows the first page.
 I called the appendPageLinks function so that it shows all the buttons.

***/

showPage(listItem, 1);
appendPageLinks(listItem);
