import React, { useContext, useEffect, useState } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';
import { use } from 'react';
import { AppContext } from '../AppContext';

export default function TicketScreen() {

  const { user } = useContext(AppContext)

  const [formData, setFormData] = useState({
    mainCategory: 'Default',
    affected: 'Default',
    privilege: 'Default',
    roomNumber: '',
    numbersAffected: '',
    dateNoticed: '',
    description: '',
    email: user?.email,
    status: "New",
    createdAt: serverTimestamp()
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  useEffect(() => {
    console.log(formData.dateNoticed)
  }, [formData.dateNoticed])

  async function createTicket() {

    console.log('asd')

    if (formData.mainCategory === 'Default' || formData.affected === 'Default' || formData.privilege === 'Default' || formData.roomNumber === '' || formData.numbersAffected === '' || formData.dateNoticed === '' || formData.description === '') {
      toast.error('Error creating ticket (fill out all fields)');
      console.log("asd")
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "tickets"), formData);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Ticket created successfully");
      setFormData({
        mainCategory: 'Default',
        affected: 'Default',
        privilege: 'Default',
        roomNumber: '',
        numbersAffected: '',
        dateNoticed: '',
        description: '',
        email: user?.email,
        status: "New",
        createdAt: serverTimestamp()
      })
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error creating ticket", e);
    }
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="newTicket-screen">
      <Toaster />
      <h1 className="newTicket__title">New Ticket</h1>

      <div className="newTicket-card">

        <div className="newTicket-heading">
          <h2 className="newTicket-heading__title">Create Quick Ticket</h2>
          <h4 className="newTicket-heading__subtitle">Write and address new queries and issues</h4>
        </div>

        <div className="newTicket-inputs">
          <div className="newTicket-input">
            <h5 className="newTicket-input-title">Main Category</h5>
            <select required value={formData.mainCategory} className="newTicket-select"
              onChange={(e) => handleChange('mainCategory', e.target.value)}
            >
              <option value="Default" disabled>Choose</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Smartboard">Smartboard</option>
              <option value="Wires">Wires</option>
              <option value="Keyboad/Mouse">Keyboard/Mouse</option>
              <option value="Internet">Internet Connection</option>
              <option value="OS">Operating System</option>
              <option value="Printer">Printer</option>
              <option value="Copier">Copier</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="newTicket-input">
            <h5 className="newTicket-input-title">Affected</h5>
            <select required value={formData.affected} className="newTicket-select"
              onChange={(e) => handleChange('affected', e.target.value)}
            >
              <option value="Default" disabled>Choose</option>
              <option value="Whole">Whole Classroom</option>
              <option value="Station">Teacher Station</option>
              <option value="Laptop">Teacher Laptop</option>
              <option value="Less">Three or less than student computers</option>
              <option value="Over">More than three student computers</option>
              <option value="Other">Other piece of equipment</option>
            </select>
          </div>

          <div className="newTicket-input">
            <h5 className="newTicket-input-title">Do you need admin privileges to fix?</h5>
            <select required value={formData.privilege} className="newTicket-select"
              onChange={(e) => handleChange('privilege', e.target.value)}
            >
              <option value="Default" disabled>Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unsure">Not Sure</option>
            </select>
          </div>

          <div className="newTicket-input">
            <h5 className="newTicket-input-title">Room Number</h5>
            <input
              placeholder='Enter room number'
              type="text"
              className="newTicket-input-field"
              value={formData.roomNumber}
              onChange={(e) => handleChange('roomNumber', e.target.value)}
            />
          </div>

          <div className="newTicket-input">
            <h5 className="newTicket-input-title">Computer Station Numbers Affected</h5>
            <input
              placeholder='Enter numbers affected (N/A if none)'
              type="text"
              className="newTicket-input-field"
              value={formData.numbersAffected}
              onChange={(e) => handleChange('numbersAffected', e.target.value)}
            />
          </div>

          <div className="newTicket-input">
            <h5 className="newTicket-input-title">Date you first noticed the issue</h5>
            <input
              placeholder='MM - DD - YY'
              type="date"
              className="newTicket-input-field"
              value={formData.dateNoticed}
              onChange={(e) => handleChange('dateNoticed', e.target.value)}
            />
          </div>
        </div>

        <div className="newTicket-description">
          <h5 className="newTicket-description-title">Ticket Body</h5>
          <textarea
            placeholder="Describe the issue and what you've tried" name="body"
            className="newTicket-description-field"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
          ></textarea>
        </div>

        <button className="newTicket-submit" onClick={() => createTicket()}>
          Send Ticket
        </button>
      </div>
    </div>
  )
}
