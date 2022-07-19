import { toast } from "react-toastify";

export function isText(name: string) {
  if (name.trim() !== "") return true;
}

export function isTel(tel: string) {
  return tel.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/gim);
}

export function isPostal(postal: number) {
  if (String(postal).length === 4 && String(postal) != "0000") return true;
}

export function isEmail(email: string) {
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

interface field {
  corporation?: string;
  name?: string;
  mail?: string;
  postal?: number;
  phone?: string;
  [key: string]: any;
}

const valueWithCheck = {
  corporation: isText,
  name: isText,
  mail: isEmail,
  postal: isPostal,
  phone: isTel,
};

// export function verifForm(field: field) {
//   Object.keys(field).forEach((elm: string) => {
//     valueWithCheck[elm](field[elm]);
//   });
// }

/*

Function with an object as parameter for only check field inside the object as parameter

I need to get all field and for each of them call the right function.
If this function return false => call toast for the error

How map field with right function ?

-> 

*/

type position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

function generateToast(text: string, position: position) {
  toast.error(text, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
