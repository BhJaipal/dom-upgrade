// Prompt
/**
 * @param {any | null} optionalString
 * @return {Promise}
 */
export default function Prompt(optionalString="") {
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
