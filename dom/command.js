document.getElementById('firstHeading').innerHTML="<h1>Mudasir</h1>"

document.getElementById('title')

document.getElementById('title').id

document.getElementById('title').class

document.getElementById('title').setAttribute('class','class')

document.getElementById('title').setAttribute('class','class heading')

// get all object including div,paragraph in title element which we use const 

const title=document.getElementById('title')

when u store in title in varable then u change css 

title.style.padding='15px'

title.style.borderRadius='15px'

you can get content only of title 

title.textContent // shows all elements weather hidden or not 

title.innerHTML //show u the innerhtml and which html and  css code

title.innerText //show text which are visble

/*innerHTML: When you use the innerHTML property, it reads both the HTML markup and the text content of the element. 
This means when you use it to set the content of elements, you can include HTML tags, 
and the browser will render them correctly.

innerText:
This property focuses on the rendered text content.
 When you use innerText to read the content of an element, 
 it returns the text as it appears on screen. It ignores HTML tags. 
And it also does not include text that is hidden with CSS styles.

textContent:
The textContent property also ignores all HTML tags and returns only the text. 
Whiles innerText reads text as it is rendered on screen, textContent reads text as it is in the markup. 
It also returns all text, whether it's rendered on screen or not.

*/
Query selector:

1. document.getElementById
2. document.getElementsByClassName
3. document.getElementsByName

4. document.querySelector('h1') //get element using query selector
5. document.querySelector('#title') //using id to select 
6. document.querySelector('.heading') //select using heading
7. document.querySelector('input[type="password"]') u can use other property of css to get what u want

8. document.querySelector('p:first-child') select paragraph and ist ChannelSplitterNode


<ul>
<li>one </li>
<li>two </li>
<li>three</li>
<li>four</li>
</ul>

const name= document.querySelector('ul')// select ul put in variable
//now put in another varaible here

const name2=name.querySelector('li')

name2.style.background='black' //change color of one to black

name2.innerText="six"

// now query selector all u will get node list in return ui must use [0] select

1. Nodelist u will get 

2. No map function wil get to get map function u need to convert into array to use it 

3. Convert into array to use other functions of array

const name=document.querySelectorAll('li') same at top 
output node list all 
NodeList(4) [li, li, li, li]
 
to selevct paticular likee 1,0r 2 or 3 or 4

name[2].style.backgroundColor="red" //changes the color of six


using for each loop to change all li colors 

name.forEach(function (li) {
    li.style.backgroundColor="green"
})

for nodelist u need other functions of array u need to convert nodelist to array

// now will talk about document.getElementbyClassid()

here we will get html collection not array not nodelist important

1.  You will get html collection
2. You will not use foreach loop 

3.If you have to use loop then u have to convert it into array

4. Array.from(your hrtml collectio) --> THsi will convert your html collection to array 


const array=document.getElementsByClassName('list-item') here store in variable("array") html collection 

Array.from(array) //now converted to array using this 

now put coverted array to new variable

const covertedarray=Array.from(array)

covertedarray.forEach(function(li){  //now we change the color of li to blue
    li.style.color="blue"
    })


    //
    const name1=document.querySelectorAll('table')

    name1.forEach(function (table) {
        table.style.color='red';
            table.style.padding='15px';
            table.backgroundColor='green';
            table.innerText='Mudasir'
        })

        