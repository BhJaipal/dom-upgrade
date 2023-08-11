// Warning Alert
/**
 * @param {any} warning
 * @return {void}
 */
export default function WarningAlert(warning) {
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
