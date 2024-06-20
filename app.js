const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} d-flex align-items-center" role="alert">`,
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
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Parabéns, compra realizada com sucesso. Acesse seus cursos/plalinhas na suas compras na area de navegação', 'success')
  })
}