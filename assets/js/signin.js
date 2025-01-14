const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInWithGoogleButton = document.getElementById('signInWithGoogle');

const auth = firebase.auth();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(googleProvider)
  .then(() => {
    console.log("already login");
  })
  .catch(error =>{
    console.log(error);
  })
};


signInWithGoogleButton.addEventListener('click', signInWithGoogle);

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function redirectToPage() {
  window.location.href = "\\My Dashboard _ Courses\\home.html"; // replace with the URL of the page you want to redirect to
}