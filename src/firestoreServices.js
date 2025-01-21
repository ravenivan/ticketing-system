import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore"
import { db } from "./firebase"


export const fetchTickets = async () => {
  try {
    let q = query(collection(db, "tickets"), orderBy('createdAt', 'desc'));

    const querySnapshot = await getDocs(q)

    let ticketsGroup = []    
    const tickets = []

    querySnapshot.forEach((doc) => {
      ticketsGroup.push({ id: doc.id, ...doc.data() })

      if (ticketsGroup.length === 3) {
        tickets.push(ticketsGroup)
        ticketsGroup = []
      }
    })

    if (ticketsGroup.length > 0) {
      console.log(ticketsGroup)
      tickets.push(ticketsGroup)
    }

    console.log(tickets)

    return tickets

  } catch(error) {
    console.error("Error fetching tickets", error)
    throw error;
  }
}


// export const fetchTickets = async (pageSize) => {
//   try {
//     let q = query(collection(db, "tickets"), orderBy('createdAt', 'desc'), limit(pageSize));

//     if (lastVisible) {
//       q = query(q, startAfter(lastVisible))
//     }

//     const querySnapshot = await getDocs(q)
//     lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
    
//     const tickets = []
//     querySnapshot.forEach((doc) => {
//       tickets.push({ id: doc.id, ...doc.data() })
//     })

//     console.log(tickets)

//     return tickets

//   } catch(error) {
//     console.error("Error fetching tickets", error)
//     throw error;
//   }
// }

// export const resetPagnitionState = () => {
//   lastVisible = null
// }