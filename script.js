const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    const firstName = form['firstName'].value
    const lastName = form['lastName'].value
    const emailAddress = form['emailAddress'].value
    const password = form['password'].value

    if(firstName === '') {
        addErrorTo('firstName', 'First Name cannot be empty')
    } else {
        removeErrorFrom('firstName')
    }
    
    if(lastName === '') {
        addErrorTo('lastName', 'Last Name cannot be empty')
    } else {
        removeErrorFrom('lastName')
    }
    
    if(emailAddress === '') {
        addErrorTo('emailAddress', 'Email Address cannot be empty')
    } else if(!isValid(emailAddress)) {
        addErrorTo('emailAddress', 'Email Address is not valid')
    } else {
        removeErrorFrom('emailAddress')
    }
    
    if(password === '') {
        addErrorTo('password', 'Password cannot be empty')
    } else {
        removeErrorFrom('password')
    }
    
})

function addErrorTo(field, message) {
    const small = form[field].parentNode.querySelector('small')
    form[field].parentNode.classList.add('error')
    small.innerText = message
    small.style.display = 'block'
}

function removeErrorFrom(field) {
    const small = form[field].parentNode.querySelector('small')
    form[field].parentNode.classList.remove('error')
    small.style.display = 'none'
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}