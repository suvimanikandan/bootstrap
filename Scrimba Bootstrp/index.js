const Modal = document.getElementById('Modal')
const myInput = document.getElementById('myInput')

Modal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})