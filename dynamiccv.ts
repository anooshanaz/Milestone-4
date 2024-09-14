
const form=document.getElementById('resumeform') as HTMLFormElement
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement

//hundle form submission
form.addEventListener('submit',(event: Event)=>{
    event.preventDefault()//prevent page reload
    //collect input values
    const profilepicfile =document.getElementById('profilepic') as HTMLInputElement
    const firstname=(document.getElementById('firstname') as HTMLInputElement).value
    const lastname=(document.getElementById('lastname') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const address=(document.getElementById('address') as HTMLInputElement).value
    const number=(document.getElementById('number') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    //
    const resumeHTML= `
        <h2>Editable Resume</h2>
        <h3>Personal information</h3>
        <p><b>First Name:</b><span contenteditale="true">${firstname}</span></P>
        <p><b>Last Name:</b><span contenteditale="true">${lastname}</span></p>
        <p><b>Email:</b><span contenteditale="true">${email}</span></p>
        <p><b>Address:</b><span contenteditale="true">${address}</span></p>
        <p><b>Number:</b><span contenteditale="true">${number}</span></p>
        <h3>Education</h3>
        <p contenteditale="true">${education}</p>
        <h3>Skills</h3>
        <p contenteditale="true">${skills}</p>
        <h3>Experience</h3>
        <p contenteditale="true">${experience}</p>
        `
        //
    if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumeHTML
    }else{
        console.error('The resume display element are missing')
    }

})





    

    

        



