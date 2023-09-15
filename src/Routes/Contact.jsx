//import React from 'react'
//import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

//const Contact = () => {
 // return (
   // <div>
     // <h2>Want to know more?</h2>
     // <p>Send us your questions and we will contact you</p>
     // <Form/>
   // </div>
 // )
//}

//export default Contact

import ContactForm from '../components/ContactForm'
import './Contact.module.css'

function Contact() {
  return (
    <main>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <section>
        <ContactForm />
      </section>
    </main>
  )
}
export default Contact