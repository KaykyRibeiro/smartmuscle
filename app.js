const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Parabéns, compra realizada com sucesso. Acesse seus cursos/plalinhas na suas compras na area de navegação', 'success')
  })
}

const alertTriggerNot = document.getElementById('notAlertBtn')
if (alertTriggerNot) {
  alertTriggerNot.addEventListener('click', () => {
    appendAlert('Você não tem dinheiro para realizar esta compra', 'danger')
  })
}

const alertTriggerCasal = document.getElementById('liveAlertBtnCasal')
if (alertTriggerCasal) {
  alertTriggerCasal.addEventListener('click', () => {
    appendAlert('Parabéns, compra realizada com sucesso. Acesse seus cursos/plalinhas na suas compras na area de navegação', 'success')
  })
}