import { useState } from 'react'
import styles from './ContactForm.module.css'

function ContactForm() {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSucces] = useState(false)

  function hasErrors() {
    if (fullname.trim().length < 5) {
      setError('Name must be at least 5 characters')
      return true
    }
    const validEmail = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/
    )
    if (!validEmail.test(email.trim())) {
      setError('The email format is incorrect')
      return true
    }
    return false
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    setSucces(false)
    if (hasErrors()) return
    setSucces({ fullname, email })
    setFullName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor='fullname'>Name</label>
      <input
        type='text'
        name='fullname'
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
      />
      <button type='submit'>Send</button>
      {error && <p className={styles.error}>{error}</p>}
      {success && (
        <p className={styles.success}>
          Thank you! <span>{success.fullname}</span> We will send you a message soon
          {success.email}
        </p>
      )}
    </form>
  )
}
export default ContactForm
