const defaultUploadBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-button");
const img = document.querySelector("img");
const filename = document.querySelector(".file-name");
const CancelBtn = document.querySelector("#cancel-button");
const wrapper = document.querySelector(".wrapper");
let regExp = /[0-9a-zA-Z\^\+\&\@\{\}\[\]\,\_\$\.\*\%\#\!\-\(\)\=\~\-]+$/;

function defaultBtnActive() {
  defaultUploadBtn.click();
}
customBtn.addEventListener("click", defaultBtnActive);

defaultUploadBtn.addEventListener("change", (e) => {
  const file = e.target.files[0];
  // arrow function wont work with  const file=this.files[0]
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
      wrapper.classList.add("active");
    };
    CancelBtn.addEventListener("click", () => {
      img.src = "";
      wrapper.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  //if(this.value)
  if (e.target.value) {
    let valueStore = e.target.value.match(regExp);
    console.log(valueStore);
    filename.innerText = valueStore;
  }
});