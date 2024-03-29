const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const { contact, confirmation } = require('./template');

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.post('/contact', async (request, response) => {
    const body = request.body

    const name = body.name
    const phone = body.phone
    const email = body.email
    const message = body.message

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contacto@email.com',
        pass: '0000000'
      }
    })

    const forUsMailOption = {
      from: 'contacto@email.com',
      to: 'contacto@email.com',
      subject: 'Nuevo mensaje de contacto',
      text: contact(name, phone, email, message)
    }
    await transport.sendEmail(forUsMailOption).catch(error => {
      response.status(400).json({ error: error })
    })

    const confirmationOptions = {
      from: 'contacto@email.com',
      to: email,
      subject: 'Hemos recibido tu mensaje',
      text: confirmation(name)
    }

    await transport.sendEmail(confirmationOptions)

    response.status(200).json({ message: 'Correcto' })
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
