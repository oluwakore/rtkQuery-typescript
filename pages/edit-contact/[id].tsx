import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux'
import { useAddContactMutation, useContactQuery, useUpdateContactMutation } from '../../services/contactsApi'


const initialState = {
  name: "",
  email: "",
  contact: ""
}

function addEdit() {
  const [formValue, setFormValue] = useState(initialState)

  const router = useRouter()


  const {id} = useSelector((state) => ({...state.identifier}))
  
  


  // const {id} = router.query
  



  const {data, error} = useContactQuery(id!)

  // console.log(data)

  // const [addContact] = useAddContactMutation()

  const [updateContact] = useUpdateContactMutation()

  useEffect(() => {
    if(error && id) {
      toast.error('Something went wrong!')
      
    }
   }, [error])


  useEffect(() => {
      if (data) {
        setFormValue({ ...data })
      } else {
        setFormValue({ ...initialState })
      }
  }, [])

  const handleInputChange = (e: any) => {
    let {name, value} = e.target
    setFormValue({ ...formValue, [name]: value})
  }

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    
        await updateContact(formValue)
        router.push('/')
        toast.success('Successfully updated contact!')
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
        <input type="submit" value="Update" />
      </form>
    </div>
    </div>
  )
}

export default addEdit