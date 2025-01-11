import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore"
import { db } from "./firebase"

let lastVisible = null


export const fetchTickets = async (pageSize) => {
  try {
    let q = query(collection(db, "tickets"), orderBy('createdAt', 'desc'), limit(pageSize));

    if (lastVisible) {
      q = query(q, startAfter(lastVisible))
    }

    const querySnapshot = await getDocs(q)
    lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
    
    const tickets = []
    querySnapshot.forEach((doc) => {
      tickets.push({ id: doc.id, ...doc.data() })
    })

    console.log(tickets)

    return tickets

  } catch(error) {
    console.error("Error fetching tickets", error)
    throw error;
  }
}