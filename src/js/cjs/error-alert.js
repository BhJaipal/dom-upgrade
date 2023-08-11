let Document= require("document");
let document= Document.prototype;
//  Error Alert 
/**
 * @param {Error} error
 * @return {void}
 */
function ErrorAlert(error) {
  let overlay= document.createElement("div");
  overlay.id= "overlay";
  overlay.innerHTML= "";
  
  let errDiv= document.createElement("div");
  let okBtn= document.createElement("button");
  
  okBtn.textContent= "ok";
  okBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.removeChild(errDiv);
    document.body.style.overflow= "auto";
  });
  errDiv.classList.add("error-box");
  okBtn.classList.add("error-ok-button");
  
  document.body.style.overflow= "hidden";
  
  let errHead= document.createElement("h3");
  errHead.innerText= error.name;
  errHead.classList.add("error-head")
  
  let errMessage= document.createElement("p");
  errMessage.innerText= error.message;
  errMessage.classList.add("error-message");
  
  errDiv.appendChild(errHead);
  errDiv.appendChild(errMessage);
  errDiv.appendChild(okBtn);
  document.body.appendChild(overlay);
  document.body.appendChild(errDiv);
}

module.exports= ErrorAlert;
