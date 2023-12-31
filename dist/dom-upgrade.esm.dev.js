// Alert
/**
 * @param {any} msg
 * @return {void}
 */
function Alert(msg) {
  let overlay= document.createElement("div");
  overlay.id= "overlay";
  overlay.innerHTML= "";
  
  let alertDiv= document.createElement("div");
  let okBtn= document.createElement("button");
  
  okBtn.textContent= "ok";
  okBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.removeChild(alertDiv);
    document.body.style.overflow= "auto";
  });
  alertDiv.classList.add("alert-box");
  okBtn.classList.add("alert-ok-button");
  
  document.body.style.overflow= "hidden";
  
  let messageBox= document.createElement("p");
  messageBox.innerText= msg;
  messageBox.classList.add("alert-message");
  
  alertDiv.appendChild(messageBox);
  alertDiv.appendChild(okBtn);
  document.body.appendChild(overlay);
  document.body.appendChild(alertDiv);
}

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
// Warning Alert
/**
 * @param {any} warning
 * @return {void}
 */
function WarningAlert(warning) {
  let overlay= document.createElement("div");
  overlay.id= "overlay";
  overlay.innerHTML= "";
  
  let warnDiv= document.createElement("div");
  let okBtn= document.createElement("button");
  
  okBtn.textContent= "ok";
  okBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.removeChild(warnDiv);
    document.body.style.overflow= "auto";
  });
  warnDiv.classList.add("warn-box");
  okBtn.classList.add("warn-ok-button");
  
  document.body.style.overflow= "hidden";
  
  let warnHead= document.createElement("h3");
  warnHead.innerText= "Warning";
  warnHead.classList.add("error-head")
  
  let warnMessage= document.createElement("p");
  warnMessage.innerText= warning;
  warnMessage.classList.add("error-message");
  
  warnDiv.appendChild(warnHead);
  warnDiv.appendChild(warnMessage);
  warnDiv.appendChild(okBtn);
  document.body.appendChild(overlay);
  document.body.appendChild(warnDiv);
}
// Prompt
/**
 * @param {any | null} optionalString
 * @return {Promise}
 */
function Prompt(optionalString="") {
  return new Promise((resolve, reject) => {
  let promptDiv= document.createElement("div");
  let overlay= document.createElement("div");
  let okBtn= document.createElement("button");
  let cancelBtn= document.createElement("button");
  let container= document.createElement("div");
  let label= document.createElement("label");
  let input= document.createElement("input");

  document.body.style.overflow= "hidden";

  container.classList.add("container");
  promptDiv.classList.add("prompt-box");
  input.id= "prompt-input";
  label.htmlFor= "prompt-input";
  okBtn.classList.add("prompt-ok-button");
  okBtn.textContent= "";
  
  okBtn.addEventListener("click", () => {
    let val= document.querySelector("#prompt-input").value;
    document.body.removeChild(overlay);
    document.body.removeChild(promptDiv);
    document.body.style.overflow= "auto";
    resolve(val);
  });
  cancelBtn.classList.add("prompt-cancel-button");
  cancelBtn.textContent= "cancel";
  cancelBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.removeChild(promptDiv);
    document.body.style.overflow= "auto";
    resolve(null);
  });
  
  label.innerText= optionalString || "";
  
  overlay.id= "overlay";
  overlay.textContent= "ok";
  
  container.appendChild(label);
  container.appendChild(input);
  promptDiv.appendChild(container);
  promptDiv.appendChild(okBtn);
  promptDiv.appendChild(cancelBtn);
  document.body.appendChild(overlay);
  document.body.appendChild(promptDiv);
  });
}
export {
  Alert, 
  WarningAlert,
  ErrorAlert,
  Prompt
}