const contact = (name, phone, email, message) => {
    return `El usuario ${name} ha enviado un nuevo mensaje de contacto. Telefono: ${phone}, email: ${email}, message: ${message}`
  }
  
  const confirmation = name => {
    return `Saludos ${name}, te enviamos el siguiente correo para confirmar la recepción de tu mensaje de contacto. El equipo de DevMentes está revisandolo y serás contactado en breve!`
  }
  
  module.exports = {
    contact,
    confirmation
  }
  