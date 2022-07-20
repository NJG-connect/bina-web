import { toast } from "react-toastify";

export function isText(name: string) {
  if (typeof name === "undefined") {
    return false;
  } else if (name.trim() !== "" && !name.match(/[0-9]/gm)) return true;
}

export function isTel(tel: string) {
  if (typeof tel !== "undefined") {
    return tel.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/gim);
  }
}

export function isPostal(postal: number) {
  if (String(postal).length === 5 && String(postal) != "00000") return true;
}

export function isEmail(email: string) {
  if (typeof email !== "undefined") {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  }
}

interface field {
  corporation?: string;
  name?: string;
  mail?: string;
  postal?: number;
  phone?: string;
  [key: string]: any;
}

interface vc {
  corporation?: (name: string) => void;
  name?: (name: string) => void;
  mail?: (mail: string) => void;
  postal?: (postal: number) => void;
  phone?: (phone: string) => void;
  [key: string]: any;
}

const valueWithCheck: vc = {
  corporation: isText,
  name: isText,
  mail: isEmail,
  postal: isPostal,
  phone: isTel,
};

export function verifForm(field: field) {
  let result: boolean = true;
  let error: string[] = [];

  Object.keys(field).forEach((elm: string) => {
    if (
      field.elm == "" || // !field.elm ??????
      !valueWithCheck[elm](field[elm])
    ) {
      result = false;
      error.push(elm);
    }
  });

  if (result) {
    return true;
  } else {
    return error;
  }
}

type position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export function generateToast(text: string, position: position = "top-right") {
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
