import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {toast} from 'react-toastify'
import { useContactQuery } from '../../services/contactsApi'
import { ParsedUrlQuery } from 'querystring'

function InfoPage() {

  const router = useRouter()

  let {id} = router.query

   const {data, error} = useContactQuery(id!)


   useEffect(() => {
    if(error) {
      toast.error('Something went wrong!')
      console.log(error)
    }
   }, [error])

  return (
    <div>
      <h2>User Contact Detail</h2>

      <p>ID: {id} </p>
      <p>Name: {data && data.name} </p>
      <p>Email: {data && data.email} </p>
      <p>Contact: {data && data.contact} </p>

      <Link href="/">
      <button>Go Back</button>
      </Link>
    </div>
  )
}

export default InfoPage