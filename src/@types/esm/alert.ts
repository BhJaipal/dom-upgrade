// Alert
/**
 * @param {any} msg
 * @return {void}
 */
export default function Alert(msg: any) {
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
