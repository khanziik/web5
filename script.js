// ttask 1
const userProfile = {
    name: "student",
    birthYear: 2008,
    isDeveloper: false,
    hobbies: ["drawing", "music"]
};


// task 2 calculations
function displayProfile() {
    const currentYear =  new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const hobbiesCount = userProfile.hobbies.length;

    document.getElementById("profileInfo").textContent =
        "Name: " + userProfile.name +
        ",   Birth year: " + userProfile.birthYear +
        ",   Is developer: " + userProfile.isDeveloper;
    document.getElementById("ageInfo").textContent =
        "Age: " + age;

    document.getElementById("hobbiesInfo").textContent =
        "Hobbies count: " + hobbiesCount;

    console.log("User profile:", userProfile);
    console.log("Age:", age);
    console.log("Hobbies count:", hobbiesCount);
}

displayProfile();


// task 3 and task 4
const profileForm  =  document.getElementById("profileForm");
profileForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username =  document.getElementById("username").value;
    const birthYear = Number(document.getElementById("birthYear").value);

    userProfile.name =  username;
    userProfile.birthYear = birthYear;

    displayProfile();
    document.getElementById("profileInfo").style.fontWeight  = "bold";
});


//task 5 creating and removing 
const hobbiesList  = document.getElementById("hobbiesList");

userProfile.hobbies.forEach(function(hobby) {
    const li =  document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});


//add item button
document.getElementById("addButton").addEventListener("click", function() {
    const hobby = document.getElementById("newHobby").value;

    if (hobby.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = hobby.trim();

        hobbiesList.appendChild(li);
        userProfile.hobbies.push(hobby.trim());

        displayProfile();

        document.getElementById("newHobby").value = "";
    }
});

//remove item
document.getElementById("removeButton").addEventListener("click", function() {
    if  (hobbiesList.lastElementChild) {
         hobbiesList.removeChild(hobbiesList.lastElementChild);
        userProfile.hobbies.pop();

        displayProfile();
    }
});
