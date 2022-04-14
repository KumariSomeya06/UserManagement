var addUserButton = document.getElementById('addUserButton')
var addUserFormContainer = document.getElementById('employee-form')
var addUserForm = document.getElementById('addUserForm')

var showUserButton = document.getElementById('showUserButton')
var showUserFormContainer = document.getElementById('employee-details')
var showUserForm = document.getElementById('showUserForm')

addUserButton.addEventListener('click', (e) => {
    console.log("Button Clicked");
    addUserFormContainer.innerHTML = `
<form autocomplete="off" id="addUserForm">
<hr>
                    <div>
                        <label>Full Name*</label><label class="validation-error hide" id="fullNameValidationError">This
                            field is required.</label>
                        <input id="inp1" type="text" name="fullName" />
                    </div>
                    <div>
                        <label>Email Id</label>
                        <input id="inp2" type="text" name="email" />
                        
                    </div>
                    <div>
                        <label>Phone</label>
                        <input id="inp3" type="text" name="salary" />
                       
                    </div>
                    <div class="addUserSubmitBtn">
                        <button type="button">Submit</button>
                        
                    </div>
                </form>
</hr>
`

})

showUserButton.addEventListener('click', async (e) => {
    console.log("Button Clicked");
    const ul = document.getElementById('authors');
    const list = document.createDocumentFragment();
    const url = 'http://localhost:3000/management/getusers';

    try {
        var userResponse = await fetch(url);
        var data = await userResponse.json()
        console.log(data);
        if (userResponse.status === 200) {
            data["data"].map(user=>{
                showUserFormContainer.innerHTML=`<p>${user["name"]}</p><p>${user["email"]}</p><p>${user["phone"]}</p>`
                // showUserFormContainer.innerHTML=`${user["email"]}`
                // showUserFormContainer.innerHTML=`${user["phone"]}`
            })
            console.log(data);
            document.querySelector("#app").insertAdjacentHTML("'afterbegin",data)
        }

    } catch (error) {
        console.log(error);
    }

    
   
})



