const form = document.getElementById("form")

const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")

const teamName = document.getElementById("name")
const teamPass = document.getElementById("password")
const nameError = document.getElementById("nameError")

const modulesError = document.getElementById("modulesError")
const notes = document.getElementById("notes")
const ambassador = document.getElementById("ambassador")

const next = document.getElementById("nextBtn")
const prev = document.getElementById("prevBtn")

let data = {
    register: 'query',
    name: '',
    password: '',
    bar: '',
    note: '',
    modules: [],
    members: [
        {
            name: '', email: '', phone: '', institute: ''
        },
        {
            name: '', email: '', phone: '', institute: ''
        },
        {
            name: '', email: '', phone: '', institute: ''
        },
        {
            name: '', email: '', phone: '', institute: ''
        }
    ]
}

let errors = {name: '', modules: '', participant: ''}
let modulesNo = 0

const validateName = () => {
    if (teamName.value === '' || teamName.value === null) {
        nameError.innerText = 'Name is required'
        errors.name = 'Name is required'
    }
    else if (teamName.value.length < 4 || teamName.value.length > 16) {
        nameError.innerText = 'Team Name must contain atleast 4 characters and must be less than 16 characters'
        errors.name = 'Team Name must contain atleast 4 characters and must be less than 16 characters'
    }
    else if (teamPass.value === '' || teamPass.value === null) {
        nameError.innerText = 'Password is required'
        errors.name = 'Password is required'
    }
    else if (teamPass.value.length < 4 || teamPass.value.length > 10) {
        nameError.innerText = 'Password must have atleast 4 characters and must be smaller than 10 characters'
        errors.name = 'Password must have atleast 4 characters and must be smaller than 10 characters'
    }
    else {
        data.name = teamName.value 
        data.password = teamPass.value
        nameError.innerText = ''
        errors.name = ''
    }
}

let selected = 0
const moduleLimit = () => {
    let allModules = document.querySelectorAll('.module')

    for (let count = 0; count < allModules.length; count++) {
        if (allModules[count].checked == true) {
            selected += 1
        }
    }

    if (selected > 5) {
        modulesError.innerText = 'You must select no more than 5 modules'
        return false
    }
    else {
        modulesError.innerText = ''
        errors.modules = ''
    }
}

const handleNext = () => {
    // Team Name
    if (teamName.value === '' || teamName.value === null) {
        nameError.innerText = 'Name is required'
        errors.name = 'Name is required'
    }
    else if (teamPass.value === '' || teamPass.value === null) {
        nameError.innerText = 'Password is required'
        errors.name = 'Password is required'
    }
    
    // Note
    data.note = notes.value
    
    // Brand Ambassador
    data.bar = ambassador.value   
    
    if (errors.name === '' && errors.modules === '') {
        // Modules
        for (let i = 0; i < 9; i++) {
            if (document.getElementById(i).checked) {
                data.modules.push(i)
            }
        }

        section1.style.display = 'none'
        section2.style.display = 'block'
        document.getElementById('prev').style.display = 'block'
        document.getElementById('next').style.display = 'none'
        document.getElementById('submit').style.display = 'block'
        console.log(data)
    }
}

const handlePrev = () => {
    section1.style.display = 'block'
    section2.style.display = 'none'
    document.getElementById('prev').style.display = 'none'
    document.getElementById('next').style.display = 'block'
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    for (let i = 1; i < 5; i++) {
        const name = document.getElementById(`name${i}`)
        const email = document.getElementById(`email${i}`)
        const phone = document.getElementById(`phone${i}`)
        const institute = document.getElementById(`institute${i}`)
        const error = document.getElementById(`error${i}`)
        
// VERIFICATION OF PARTICIPANT DETAILS
    //     if (name.value === '' || name.value === null) {
    //         error.innerText = 'This field is compulsory'
    //         errors.participant = 'This field is compulsory'
    //     }
    //     else if (email.value === '' || email.value === null) {
    //         error.innerText = 'This field is compulsory'
    //         errors.participant = 'This field is compulsory'
    //     }
    //     else if (phone.value === '' || phone.value === null) {
    //         error.innerText = 'This field is compulsory'
    //         errors.participant = 'This field is compulsory'
    //     }
    //     // else if (phone.value.length != 11) {
    //     //     error.innerText = 'Phone number must contain 11 digits in the format: 03xxxxxxxxx'
    //     //     errors.participant = 'Phone number must contain 11 digits in the format: 03xxxxxxxxx'
    //     // }
    //     else if (institute.value === '' || institute.value === null) {
    //         error.innerText = 'This field is compulsory'
    //         errors.participant = 'This field is compulsory'
    //     }
    //     else {
            data.members[i-1].name = document.getElementById(`name${i}`).value
            data.members[i-1].email = email.value
            data.members[i-1].phone = phone.value
            data.members[i-1].institute = institute.value
            error.innerText = ''
            errors.participant = ''
    //     }
    }



    // Submission    
    if (errors.name === '' && errors.modules === '' && errors.participant === '') {
        // let options = {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // }
        // fetch('http://epsilon.move.pk/query.php', options)
        // .then((response) => response.json())
        // .then((json) => console.log(json))
        console.log(data)
    }
    else {
        console.log(errors)
    }
})
