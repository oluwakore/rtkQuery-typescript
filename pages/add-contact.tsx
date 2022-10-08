import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
import { useAddContactMutation } from '../services/contactsApi'


const initialState = {
  name: "",
  email: "",
  contact: ""
}

function addContact() {
  const [formValue, setFormValue] = useState(initialState)



  const [addContact] = useAddContactMutation()

  const router = useRouter()

  const handleInputChange = (e: any) => {
    let {name, value} = e.target
    setFormValue({ ...formValue, [name]: value})
  }

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    if(!name && !email && !contact) {
      toast.error('Please enter values for each input fields!')
    } else {
        await addContact(formValue)
        router.push('/')
        toast.success('Successfully added new contact!')
    }
  }

 const {name, email, contact} = formValue

  return (
    <div>
      <div>Add Contact</div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter name..."
        value={name}
        onChange={handleInputChange}
        />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter email..."
        value={email}
        onChange={handleInputChange}
        />
        </div>

        <div>
        <label htmlFor="contact">Contact</label>
        <input
        type="text"
        id="contact"
        name="contact"
        placeholder="Enter contact details..."
        value={contact}
        onChange={handleInputChange}
        />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
    </div>
  )
}

export default addContact