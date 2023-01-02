import "./index.scss";

const showToast = (type, message) => {
  const toast = document.createElement("div");
  const root = document.getElementById("root");
  toast.className = `toast ${type}`;
  toast.innerHTML = message;
  root.appendChild(toast);

  setTimeout(() => {
    if (toast) root.removeChild(toast);
  }, 6000);
};

class Toast {
  static success = (message) => {
    showToast("success", message);
  };

  static warning = (message) => {
    showToast("warning", message);
  };

  static error = (message) => {
    showToast("error", message);
  };

  static info = (message) => {
    showToast("info", message);
  };
}

export default Toast;
